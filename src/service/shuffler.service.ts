function rand(max: number) {
  return Math.floor(Math.random() * max)
}

export function shuffle(items: string[], chunkSize = 6) {
  const length = Math.ceil(items.length / chunkSize)
  const source = [...items]
  const chunks = Array.from({ length }, () => {
    if (source.length <= chunkSize) return source
    const chunk = Array.from({ length: chunkSize }, () => {
      const randIndex = rand(source.length - 1)
      const [member] = source.splice(randIndex, 1)
      return member
    })
    return chunk
  })
  return chunks
}
