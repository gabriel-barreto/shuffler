import * as S from './chunk.styled'

export interface ChunkProps {
  members: string[]
}

export function Chunk({ members }: ChunkProps) {
  return (
    <S.Chunk>
      <S.Members>
        {members.map((name, index) => (
          <S.Member key={name}>
            <S.MemberNumber>{index + 1}</S.MemberNumber>
            <S.MemberName>{name}</S.MemberName>
          </S.Member>
        ))}
      </S.Members>
    </S.Chunk>
  )
}
