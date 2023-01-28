import * as S from './App.styled'
import { AppRouter } from './router'
import { globalStyle } from './styles'
import { standardTheme } from './theme'

export function App() {
  globalStyle()

  return (
    <S.App className={standardTheme}>
      <S.Container>
        <AppRouter />
      </S.Container>
    </S.App>
  )
}
