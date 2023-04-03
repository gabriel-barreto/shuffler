import * as S from './player-toggler.styled'

export interface PlayerTogglerProps {
  isEnabled: boolean
  player: string
  onToggle: (player: string, currentState: boolean) => void
}

export function PlayerToggler({
  isEnabled,
  player,
  onToggle
}: PlayerTogglerProps) {
  function onToggleHandler() {
    onToggle(player, !isEnabled)
  }

  return (
    <S.PlayerToggler onClick={onToggleHandler}>
      <S.Toggler isEnabled={isEnabled} />
      <S.Label>{player}</S.Label>
    </S.PlayerToggler>
  )
}
