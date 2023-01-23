import { makeCast } from '@/mocks'
import { shuffle } from './shuffler.service'

describe('Shuffle Service', () => {
  it('splits the array into small chunks', () => {
    const { data } = makeCast({ length: 15 })
    const chunkSize = 5
    const chunks = shuffle(data, chunkSize)
    chunks.forEach(chunk => {
      expect(chunk).toHaveLength(chunkSize)
    })
  })

  it('returns the remaining items if the chunk size is too big', () => {
    const { data } = makeCast({ length: 13 })
    const [_a, _b, remainingChunk] = shuffle(data)
    expect(remainingChunk).toHaveLength(1)
  })
})
