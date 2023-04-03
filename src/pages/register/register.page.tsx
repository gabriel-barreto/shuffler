import { Button, CleanFabButton, PlayerToggler } from '@/components'
import { paths } from '@/router'
import { shuffleTeams } from '@/service'
import { useCast, useTeams } from '@/store'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './register.styled'

export function RegisterPage() {
  const { cast: rawCast } = useCast()
  const navigate = useNavigate()
  const [cast, setCast] = useState(
    rawCast.map(player => ({ player, isEnabled: true }))
  )

  const { setTeams } = useTeams()

  function onContinueHandler() {
    const registeredPlayers = cast
      .filter(({ isEnabled }) => isEnabled)
      .map(({ player }) => player)
    const teams = shuffleTeams(registeredPlayers)
    setTeams(teams)
    navigate(paths.teams)
  }

  function onToggleHandler(player: string, isEnabled: boolean) {
    setCast(prev => {
      const updated = [...prev]
      const idx = updated.findIndex(e => e.player === player)
      updated[idx] = { player, isEnabled }
      return updated
    })
  }

  const hasSufficientPlayers = useMemo(
    () => cast.filter(({ isEnabled }) => isEnabled).length >= 12,
    [cast]
  )

  return (
    <>
      <CleanFabButton />
      <S.PlayerTogglersContainer>
        {cast.map(({ player, isEnabled }) => (
          <PlayerToggler
            isEnabled={isEnabled}
            key={player}
            onToggle={onToggleHandler}
            player={player}
          />
        ))}
      </S.PlayerTogglersContainer>
      <Button
        disabled={!hasSufficientPlayers}
        label="Continuar"
        onClick={onContinueHandler}
        type="button"
      />
      {!hasSufficientPlayers && <p>Você precisa de pelo menos 12 craques!</p>}
    </>
  )
}
