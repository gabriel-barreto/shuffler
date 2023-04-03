import { storage as config } from '@/config'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const atomCast = atomWithStorage<string[]>(config.key('cast'), [])

export function useCast() {
  const [cast, setCast] = useAtom(atomCast)
  return { cast, setCast }
}

export function getCast(): string[] {
  try {
    const raw = localStorage.getItem(config.key('cast'))
    if (raw === null) return []
    return JSON.parse(raw)
  } catch {
    return []
  }
}
