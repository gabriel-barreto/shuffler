import { render, screen } from '@testing-library/react'
import faker from 'faker'
import { Team, Teams } from './teams.component'

function setup({ teams = [] as Team[] } = {}) {
  return render(<Teams teams={teams} />)
}

describe('<Teams />', () => {
  it('renders an list-item for each chunk', () => {
    const length = 3
    const teams = Array.from({ length }, () => ({
      name: faker.lorem.word(),
      cast: [faker.lorem.word()]
    }))
    setup({ teams })
    const [chunkListEl] = screen.getAllByRole('list')
    expect(chunkListEl.childNodes).toHaveLength(length)
  })

  it('renders the teams title', () => {
    const teams = Array.from({ length: 3 }, () => ({
      name: faker.datatype.uuid(),
      cast: [faker.lorem.word()]
    }))
    setup({ teams })
    teams.forEach(({ name }) => {
      const teamNameEl = screen.getByText(name)
      expect(teamNameEl).toBeVisible()
    })
  })
})
