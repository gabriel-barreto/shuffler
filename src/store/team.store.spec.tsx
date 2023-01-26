import { act, renderHook } from '@testing-library/react'
import { Provider } from 'jotai'
import { useTeams } from './team.store'

vi.mock('@/config', () => ({
  storage: { key: vi.fn(() => 'base-storage-key') }
}))

function wrapper({ children }: { children: JSX.Element }) {
  return <Provider>{children}</Provider>
}

function setup() {
  return renderHook(useTeams, { wrapper })
}

describe('useTeams', () => {
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

  it('reads the initial value from localStorage', () => {
    mockLocalStorage.getItem.mockReturnValue('["lorem", "ipsum"]')
    const { result } = setup()
    expect(result.current.teams).not.toEqual([])
    expect(mockLocalStorage.getItem).toHaveBeenCalledTimes(1)
  })

  it('pares the localStorage value into objects', () => {
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
