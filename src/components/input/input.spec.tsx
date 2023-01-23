import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './input.component'

function setup({ fieldName = 'any-field-name' } = {}) {
  return render(<Input fieldName={fieldName} />)
}

describe('<Input />', () => {
  it('renders the input with correct name', () => {
    const fieldName = 'test'
    setup({ fieldName })
    const inputEl = screen.getByRole('textbox')
    expect(inputEl).toHaveAttribute('id', fieldName)
    expect(inputEl).toHaveAttribute('name', fieldName)
  })

  it('starts the rows count at 1', () => {
    setup()
    const inputEl = screen.getByRole('textbox')
    expect(inputEl).toHaveAttribute('rows', '1')
  })

  it('updates the rows count after input', async () => {
    setup()
    const inputEl = screen.getByRole('textbox')
    await userEvent.type(inputEl, 'Lorem\nIpsum\nDolor')
    expect(inputEl).toHaveAttribute('rows', '3')
  })
})
