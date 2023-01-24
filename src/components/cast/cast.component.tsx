import * as S from './cast.styled'

export interface CastProps {
  members: string[]
}

export function Cast({ members }: CastProps) {
  return (
    <S.Cast>
      <S.Members>
        {members.map((name, index) => (
          <S.Member key={name}>
            <S.MemberNumber>{index + 1}</S.MemberNumber>
            <S.MemberName>{name}</S.MemberName>
          </S.Member>
        ))}
      </S.Members>
    </S.Cast>
  )
}
