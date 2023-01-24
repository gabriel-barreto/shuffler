import { render, screen } from '@testing-library/react'
import { Chunk } from './chunk.component'

function setup({ members = [] as string[] } = {}) {
  return render(<Chunk members={members} />)
}

describe('<Chunk />', () => {
  it('renders all members', () => {
    const members = ['AC', 'ACC']
    setup({ members })
    members.forEach(member => {
      const memberNameEl = screen.getByText(member)
      expect(memberNameEl).toBeVisible()
    })
  })

  it('renders cardinality of the chunk items', () => {
    const members = ['AC', 'ACC']
    setup({ members })
    members.forEach((_, index) => {
      const memberIndexEl = screen.getByText(index + 1)
      expect(memberIndexEl).toBeVisible()
    })
  })
})
