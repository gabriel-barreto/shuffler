import { render, screen } from '@testing-library/react'
import { Cast } from './cast.component'

function setup({ members = [] as string[] } = {}) {
  return render(<Cast members={members} />)
}

describe('<Cast />', () => {
  it('renders all members', () => {
    const members = ['AC', 'ACC']
    setup({ members })
    members.forEach(member => {
      const memberNameEl = screen.getByText(member)
      expect(memberNameEl).toBeVisible()
    })
  })

  it('renders cardinality of the chunk members', () => {
    const members = ['AC', 'ACC']
    setup({ members })
    members.forEach((_, index) => {
      const memberIndexEl = screen.getByText(index + 1)
      expect(memberIndexEl).toBeVisible()
    })
  })
})
