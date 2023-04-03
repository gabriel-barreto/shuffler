import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PlayerToggler } from './player-toggler.component'

function setup({
  isEnabled = false,
  player = 'Any player',
  onToggle = vi.fn()
} = {}) {
  return render(
    <PlayerToggler isEnabled={isEnabled} player={player} onToggle={onToggle} />
  )
}

describe('<PlayerToggler />', () => {
  it('renders the player name', () => {
    const player = 'Ana'
    setup({ player })
    const playerNameEl = screen.getByText(player)
    expect(playerNameEl).toBeInTheDocument()
  })

  it('calls the onToggle with the update state and the player name onClick', async () => {
    const onToggle = vi.fn()
    const player = 'Ana'
    const isEnabled = true
    setup({ isEnabled, player, onToggle })
    const toggler = screen.getByRole('button')
    await userEvent.click(toggler)
    expect(onToggle).toHaveBeenCalledWith(player, !isEnabled)
  })
})
