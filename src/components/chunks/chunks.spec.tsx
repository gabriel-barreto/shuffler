import { render, screen } from '@testing-library/react'
import faker from 'faker'
import { Chunks } from './chunks.component'

function setup({ chunks = [] as string[][] } = {}) {
  return render(<Chunks chunks={chunks} />)
}

describe('<Chunks />', () => {
  it('renders an list-item for each chunk', () => {
    const length = 3
    const chunks = Array.from({ length }, () => [faker.lorem.word()])
    setup({ chunks })
    const [chunkListEl] = screen.getAllByRole('list')
    expect(chunkListEl.childNodes).toHaveLength(length)
  })
})
