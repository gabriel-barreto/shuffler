import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form } from './form.component'

function setup({ onSubmit = vi.fn() } = {}) {
  return render(<Form onSubmit={onSubmit} />)
}

describe('<Form />', () => {
  it.only('displays an error if the validation fails', async () => {
    const { debug } = setup()
    const castInputEl = screen.getByRole('textbox')
    await userEvent.type(castInputEl, '1 - ')
    const submitButtonEl = screen.getByRole('button')
    await userEvent.click(submitButtonEl)
    debug()
  })

  it.todo('emits the handled cast')
})
