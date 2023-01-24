import faker from 'faker'

export function makeCast({ hasHeader = false, length = 12 } = {}) {
  const header = `${faker.lorem.words()} - 25/01`
  const data = Array.from({ length }, (_, i) =>
    [i.toString().padStart(2, '0'), faker.name.firstName()].join(' - ')
  )
  const raw = data.join('\n')
  if (hasHeader) return { data, raw: `${header}\n${raw}` }
  return { data, raw }
}
