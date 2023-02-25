export function getName(idx: number) {
  const names = ['Colete', 'Sem Colete']
  if (idx > 2) return `${idx - 1}. Próximo`
  if (idx > 1) return 'Próximo'
  return names[idx]
}

export function getNames(count: number) {
  const names = new Set<string>()
  while (names.size < count) names.add(getName(names.size))
  return Array.from(names)
}
