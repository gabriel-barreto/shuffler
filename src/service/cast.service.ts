import { shuffle } from './shuffler.service'
import { getNames } from './team.service'

export function shuffleTeams(cast: string[], chunkSize = 6) {
  const teams = shuffle(cast, chunkSize)
  const names = getNames(teams.length)
  return teams.map((team, index) => ({
    cast: team,
    name: names[index]
  }))
}
