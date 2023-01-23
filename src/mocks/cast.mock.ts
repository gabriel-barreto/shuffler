import faker from 'faker'

export function makeCast({ hasHeader = false, length = 12 } = {}) {
  const header = `${faker.lorem.words()} - 25/01`
  const data = Array.from({ length }, faker.name.firstName)
  const raw = data.map((e, i) => `${i + 1} - ${e}`).join('\n')
  if (hasHeader) return { data, raw: `${header}\n${raw}` }
  return { data, raw }
}
