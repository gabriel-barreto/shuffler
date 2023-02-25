import { getName, getNames } from './team.service'

describe('Team Service', () => {
  describe('getName', () => {
    it('names the idx 0 as "Colete"', () => {
      const name = getName(0)
      expect(name).toEqual('Colete')
    })

    it('names the idx 1 as "Sem Colete"', () => {
      const name = getName(1)
      expect(name).toEqual('Sem Colete')
    })

    it('names the idx 2 as "Próximo"', () => {
      const name = getName(2)
      expect(name).toEqual('Próximo')
    })

    it('names all the next idxs as "[idx - 1]. Próximo"', () => {
      const name = getName(7)
      expect(name).toEqual('6. Próximo')
    })
  })

  describe('getNames', () => {
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
