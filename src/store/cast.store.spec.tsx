import { act, renderHook } from '@testing-library/react'
import { Provider } from 'jotai'
import { getCast, useCast } from './cast.store'

vi.mock('@/config', () => ({
  storage: { key: vi.fn(() => 'base-storage-key') }
}))

function wrapper({ children }: { children: JSX.Element }) {
  return <Provider>{children}</Provider>
}

function setup() {
  return renderHook(useCast, { wrapper })
}

describe('Cast Store', () => {
  const mockLocalStorage = {
    getItem: vi.fn<[], string | null>(() => '[]'),
    setItem: vi.fn()
  }

  beforeAll(() => {
    Object.defineProperty(global, 'localStorage', { value: mockLocalStorage })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('useCast', () => {
    it('reads the initial value from localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue('["lorem", "ipsum"]')
      const { result } = setup()
      expect(result.current.cast).not.toEqual([])
      expect(mockLocalStorage.getItem).toHaveBeenCalledTimes(1)
    })

    it('parses the localStorage value into objects', () => {
      mockLocalStorage.getItem.mockReturnValue('["Foo", "Bar"]')
      const { result } = setup()
      expect(result.current.cast).toEqual(['Foo', 'Bar'])
    })

    it('returns an empty array as initial value if localStorage is empty', () => {
      mockLocalStorage.getItem.mockReturnValue('not a JSON')
      const { result } = setup()
      expect(result.current.cast).toEqual([])
    })

    it('updates the localStorage after update the state', async () => {
      const { result } = setup()
      const updated = ['Ana', 'Claudia']
      await act(async () => {
        result.current.setCast(updated)
      })
      expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(1)
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'base-storage-key',
        JSON.stringify(updated)
      )
    })
  })

  describe('getCast', () => {
    it('returns an empty array when the localStore is empty', () => {
      const result = getCast()
      expect(result).toEqual([])
    })

    it('returns the stored teams when the localStorage is filled', () => {
      const expected = ['Foo', 'Bar']
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(expected))
      const result = getCast()
      expect(result).toEqual(expected)
    })

    it('returns an empty array if fails to parse localStorage value', () => {
      mockLocalStorage.getItem.mockReturnValue(null)
      const result = getCast()
      expect(result).toEqual([])
    })
  })
})
