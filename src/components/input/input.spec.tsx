import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './input.component'

function setup({
  error = false,
  fieldName = 'any-field-name',
  onChange = vi.fn()
} = {}) {
  return render(
    <Input error={error} fieldName={fieldName} onChange={onChange} />
  )
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

  it('calls onChange after type', async () => {
    const onChange = vi.fn()
    setup({ onChange })
    const inputEl = screen.getByRole('textbox')
    await userEvent.type(inputEl, 'a')
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'a' })
      })
    )
  })
})
