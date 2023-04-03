import trashIcon from '@/assets/trash.svg'
import { paths } from '@/router'
import { useCast, useTeams } from '@/store'
import { useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import * as S from './clean-fab-button.styled'

export interface CleanFabButtonProps {
  onClean: () => void
}

interface ConfirmationDialogProps {
  onConfirm: () => void
}

function ConfirmationDialog({ onConfirm }: ConfirmationDialogProps) {
  return (
    <S.ConfirmationDialog>
      <S.Description>
        Você está prestes a <S.Strong>apagar os times e os jogadores</S.Strong>,
        tem certeza que deseja continuar?
      </S.Description>
      <S.Warning>Atenção, essa ação não poderá ser desfeita!</S.Warning>
      <S.Buttons>
        <S.ConfirmButton
          aria-label="Continuar"
          onClick={onConfirm}
          type="button"
        >
          Continuar
        </S.ConfirmButton>
      </S.Buttons>
    </S.ConfirmationDialog>
  )
}

export function CleanFabButton() {
  const { setCast } = useCast()
  const { setTeams } = useTeams()
  const navigate = useNavigate()

  function cleanStores() {
    setTeams([])
    setCast([])
    navigate(paths.cast)
  }

  function onClickHandler() {
    toast.custom(() => <ConfirmationDialog onConfirm={cleanStores} />)
  }

  return (
    <>
      <S.FabContainer>
        <S.FabButton aria-label="Limpar" onClick={onClickHandler} type="button">
          <img alt="Lixeira" src={trashIcon} />
        </S.FabButton>
      </S.FabContainer>
      <Toaster closeButton />
    </>
  )
}
