import { Cast } from '@/components/cast'
import * as S from './teams.styled'

export interface Team {
  cast: string[]
  name: string
}
export interface TeamsProps {
  teams: Team[]
}

export function Teams({ teams }: TeamsProps) {
  return (
    <S.Teams>
      {teams.map(({ cast, name }) => (
        <S.Team key={name}>
          <S.TeamName>{name}</S.TeamName>
          <Cast members={cast} />
        </S.Team>
      ))}
    </S.Teams>
  )
}
