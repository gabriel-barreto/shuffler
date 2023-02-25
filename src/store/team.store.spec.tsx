import { act, renderHook } from '@testing-library/react'
import { Provider } from 'jotai'
import { getTeams, useTeams } from './team.store'

vi.mock('@/config', () => ({
  storage: { key: vi.fn(() => 'base-storage-key') }
}))

function wrapper({ children }: { children: JSX.Element }) {
  return <Provider>{children}</Provider>
}

function setup() {
  return renderHook(useTeams, { wrapper })
}

describe('Teams Store', () => {
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

  describe('useTeams', () => {
    it('reads the initial value from localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue('["lorem", "ipsum"]')
      const { result } = setup()
      expect(result.current.teams).not.toEqual([])
      expect(mockLocalStorage.getItem).toHaveBeenCalledTimes(1)
    })

    it('parses the localStorage value into objects', () => {
      mockLocalStorage.getItem.mockReturnValue('{"foo": "bar"}')
      const { result } = setup()
      expect(result.current.teams).toEqual({ foo: 'bar' })
    })

    it('returns an empty array as initial value if localStorage is empty', () => {
      mockLocalStorage.getItem.mockReturnValue(null)
      const { result } = setup()
      expect(result.current.teams).toEqual([])
    })

    it('updates the localStorage after update the state', async () => {
      const { result } = setup()
      const updated = [{ name: 'Morguerço', cast: ['AC'] }]
      await act(async () => {
        result.current.setTeams(updated)
      })
      expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(1)
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'base-storage-key',
        JSON.stringify(updated)
      )
    })
  })

  describe('getTeams', () => {
    it('returns an empty array when the localStore is empty', () => {
      const result = getTeams()
      expect(result).toEqual([])
    })

    it('returns the stored teams when the localStorage is filled', () => {
      const expected = [{ name: 'Morguerço', cast: ['AC'] }]
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(expected))
      const result = getTeams()
      expect(result).toEqual(expected)
    })

    it('returns an empty array if fails to parse localStorage value', () => {
      mockLocalStorage.getItem.mockReturnValue(null)
      const result = getTeams()
      expect(result).toEqual([])
    })
  })
})
