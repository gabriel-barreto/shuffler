import { faker } from '@faker-js/faker'
import $faker from 'faker'
import { Mock } from 'vitest'
import { getName, getNames } from './team.service'

vi.mock('@faker-js/faker', () => ({
  faker: { helpers: { arrayElement: vi.fn() } }
}))

const mockFaker = faker as unknown as { helpers: { arrayElement: Mock } }

describe('Team Service', () => {
  describe('getName', () => {
    it('invokes the API to get the data', () => {
      getName()
      expect(mockFaker.helpers.arrayElement).toHaveBeenCalledTimes(1)
    })

    it('returns the result response', () => {
      const animal = 'Cat'
      mockFaker.helpers.arrayElement.mockReturnValue(animal)
      const response = getName()
      expect(response).toEqual(animal)
    })
  })

  describe('getNames', () => {
    beforeAll(() => {
      mockFaker.helpers.arrayElement.mockImplementation(() =>
        $faker.lorem.word()
      )
    })

    it('returns a list of names with defined length', () => {
      const length = 2
      const result = getNames(length)
      expect(result).toHaveLength(length)
    })

    it('does NOT return repeated names', () => {
      const length = 2
      const result = getNames(length)
      const uniqueValues = new Set(result)
      expect(uniqueValues.size).toEqual(result.length)
    })
  })
})
