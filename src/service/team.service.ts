import { faker } from '@faker-js/faker'
import animals from './ptBR-animals.json'

export function getName() {
  return faker.helpers.arrayElement(animals)
}

export function getNames(count: number) {
  const names = new Set<string>()
  while (names.size < count) names.add(getName())
  return Array.from(names)
}
