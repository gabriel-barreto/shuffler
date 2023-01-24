import { render, screen } from '@testing-library/react'
import { Chunk } from './chunk.component'

function setup({ items = [] as string[] } = {}) {
  return render(<Chunk items={items} />)
}

describe('<Chunk />', () => {
  it('renders all items', () => {
    const items = ['AC', 'ACC']
    setup({ items })
    items.forEach(member => {
      const memberNameEl = screen.getByText(member)
      expect(memberNameEl).toBeVisible()
    })
  })

  it('renders cardinality of the chunk items', () => {
    const items = ['AC', 'ACC']
    setup({ items })
    items.forEach((_, index) => {
      const memberIndexEl = screen.getByText(index + 1)
      expect(memberIndexEl).toBeVisible()
    })
  })
})
