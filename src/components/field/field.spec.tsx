import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Field } from './field.component'

function setup({
  error = '',
  label = 'Any label',
  name = 'any-name',
  onChange = vi.fn()
} = {}) {
  return render(
    <Field error={error} label={label} name={name} onChange={onChange} />
  )
}

describe('<Field />', () => {
  it('renders the label', () => {
    const label = 'cast'
    setup({ label })
    const labelEl = screen.getByText(label)
    expect(labelEl).toBeVisible()
  })

  it('renders the input with correct name', () => {
    const name = 'cast-input'
    setup({ name })
    const inputEl = screen.getByRole('textbox')
    expect(inputEl).toHaveAttribute('name', name)
  })

  it('calls onChange with change event', async () => {
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

  it("renders the error when it's defined", () => {
    const error = 'Any error message'
    setup({ error })
    const errorMessageEl = screen.getByText(error)
    expect(errorMessageEl).toBeVisible()
  })
})
