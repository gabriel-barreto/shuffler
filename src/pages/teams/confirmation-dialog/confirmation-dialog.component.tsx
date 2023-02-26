import * as S from './confirmation-dialog.styled'

export interface ConfirmationDialogProps {
  onConfirm: () => void
}

export function ConfirmationDialog({ onConfirm }: ConfirmationDialogProps) {
  return (
    <S.ConfirmationDialog>
      <S.Description>
        Você está prestes a <S.Strong>apagar os times</S.Strong>, tem certeza
        que deseja continuar?
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
