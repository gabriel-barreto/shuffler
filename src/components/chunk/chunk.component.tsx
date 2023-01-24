import * as S from './chunk.styled'

export interface ChunkProps {
  items: string[]
}

export function Chunk({ items }: ChunkProps) {
  return (
    <S.Chunk>
      <S.Members>
        {items.map((name, index) => (
          <S.Member key={name}>
            <S.MemberNumber>{index + 1}</S.MemberNumber>
            <S.MemberName>{name}</S.MemberName>
          </S.Member>
        ))}
      </S.Members>
    </S.Chunk>
  )
}
