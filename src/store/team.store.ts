import { storage as config } from '@/config'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

interface Team {
  name: string
  cast: string[]
}

const atomTeams = atomWithStorage<Team[]>(config.key('teams'), [])

export function useTeams() {
  const [teams, setTeams] = useAtom(atomTeams)
  return { teams, setTeams }
}
