import { makeCast } from '@/mocks'
import faker from 'faker'
import { castValidator } from './cast.validator'

describe('Cast Validator', () => {
  it('throws when members length are smaller than 11', () => {
    const { raw } = makeCast({
      length: faker.datatype.number({ min: 1, max: 11 }),
      hasHeader: true
    })
    expect(() => castValidator.parse(raw)).toThrow()
  })

  it('returns the parsed cast otherwise', () => {
    const { raw, data } = makeCast({ length: 13 })
    const members = castValidator.parse(raw)
    expect(members).toEqual(data)
  })

  it('removes the empty slots from the array', () => {
    const { raw } = makeCast({ length: 12 })
    const members = castValidator.parse(`${raw}\n13 -`)
    expect(members).toHaveLength(12)
  })
})
