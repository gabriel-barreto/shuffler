import * as S from './fab.styled'

export interface FabProps {
  action: {
    icon: JSX.Element
    label: string
    onClick: () => void
  }
}

export function Fab({ action }: FabProps) {
  return (
    <S.Container>
      <S.Button
        aria-label={action.label}
        onClick={action.onClick}
        type="button"
      >
        {action.icon}
      </S.Button>
    </S.Container>
  )
}
