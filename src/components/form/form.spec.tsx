import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import { Form } from './form.component'

const errMsg = 'Você vai precisar encontrar mais craques!'

const cast = Array.from({ length: 12 }, () => faker.name.firstName())
const rawCast = cast.map((member, index) => `${index} - ${member}`).join('\n')

function setup({ onSubmit = vi.fn() } = {}) {
  return render(<Form onSubmit={onSubmit} />)
}

describe('<Form />', () => {
  it('displays an error if the validation fails', async () => {
    setup()
    const castInputEl = screen.getByRole('textbox')
    await userEvent.type(castInputEl, '1 - ')
    const submitButtonEl = screen.getByRole('button')
    await userEvent.click(submitButtonEl)
    const errorMessageEl = screen.getByText(errMsg)
    expect(errorMessageEl).toBeVisible()
  })

  it('emits the handled cast', async () => {
    const onSubmit = vi.fn()
    setup({ onSubmit })
    const castInputEl = screen.getByRole('textbox')
    await userEvent.type(castInputEl, rawCast)
    const submitButtonEl = screen.getByRole('button')
    await userEvent.click(submitButtonEl)
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith(cast)
  })

  it("removes the header from cast if it's present", async () => {
    const header = 'Lorem Ipsum - 25/01'
    const onSubmit = vi.fn()
    setup({ onSubmit })
    const castInputEl = screen.getByRole('textbox')
    await userEvent.type(castInputEl, `${header}\n${rawCast}`)
    const submitButtonEl = screen.getByRole('button')
    await userEvent.click(submitButtonEl)
    const [[cast]] = onSubmit.mock.calls
    expect(cast).not.toContain(header)
  })
})
