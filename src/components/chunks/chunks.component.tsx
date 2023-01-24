import { Chunk } from '@/components/chunk'
import * as S from './chunks.styled'

export interface ChunksProps {
  chunks: string[][]
}

export function Chunks({ chunks }: ChunksProps) {
  return (
    <S.Chunks>
      {chunks.map(chunk => (
        <S.ChunkContainer key={chunk[0]}>
          <Chunk items={chunk} />
        </S.ChunkContainer>
      ))}
    </S.Chunks>
  )
}
