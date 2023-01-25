import { castValidator } from '@/validators'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import { Mock } from 'vitest'
import { ZodError, ZodIssue } from 'zod'
import { Form } from './form.component'

vi.mock('@/validators', () => ({
  castValidator: { parse: vi.fn() }
}))

function setup({ onSubmit = vi.fn() } = {}) {
  return render(<Form onSubmit={onSubmit} />)
}

describe('<Form />', () => {
  const mockCastValidator = castValidator as unknown as { parse: Mock }

  it('renders with the submit button disabled initially', () => {
    setup()
    const submitButtonEl = screen.getByRole('button')
    expect(submitButtonEl).toBeDisabled()
  })

  it('enables the submit button after input something', async () => {
    setup()
    const castInputEl = screen.getByRole('textbox')
    await userEvent.type(castInputEl, 'any thing')
    const submitButtonEl = screen.getByRole('button')
    expect(submitButtonEl).toBeEnabled()
  })

  it('consumes the castValidator with the user input', async () => {
    const userInput = faker.lorem.words()
    setup()
    const castInputEl = screen.getByRole('textbox')
    await userEvent.type(castInputEl, userInput)
    const submitButtonEl = screen.getByRole('button')
    await userEvent.click(submitButtonEl)
    expect(castValidator.parse).toHaveBeenCalledTimes(1)
    expect(castValidator.parse).toHaveBeenCalledWith(userInput)
  })

  it('displays an error if the validation fails', async () => {
    const message = 'Any validation message'
    mockCastValidator.parse.mockImplementation(() => {
      const issue: ZodIssue = { message } as any
      throw new ZodError([issue])
    })
    setup()
    const castInputEl = screen.getByRole('textbox')
    await userEvent.type(castInputEl, '1 - ')
    const submitButtonEl = screen.getByRole('button')
    await userEvent.click(submitButtonEl)
    const errorMessageEl = screen.getByText(message)
    expect(errorMessageEl).toBeVisible()
  })

  it('emits the parsed by castValidator cast', async () => {
    const parsedCast = ['A', 'C']
    mockCastValidator.parse.mockReturnValue(parsedCast)
    const onSubmit = vi.fn()
    setup({ onSubmit })
    const castInputEl = screen.getByRole('textbox')
    await userEvent.type(castInputEl, 'AC')
    const submitButtonEl = screen.getByRole('button')
    await userEvent.click(submitButtonEl)
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith(parsedCast)
  })
})
