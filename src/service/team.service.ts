import { faker } from '@faker-js/faker/locale/pt_BR'

export function getName() {
  return faker.animal.type()
}

export function getNames(count: number) {
  const names = new Set<string>()
  while (names.size < count) names.add(getName())
  return Array.from(names)
}
