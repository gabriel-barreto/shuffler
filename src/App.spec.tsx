import { render, screen } from '@testing-library/react'
import { App } from './App'

function setup() {
  return render(<App />)
}

describe('<App />', () => {
  it('renders correctly', () => {
    setup()
    const messageEl = screen.getByText('Hello world!')
    expect(messageEl).toBeInTheDocument()
  })
})
