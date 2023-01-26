import * as S from './App.styled'
import { AppRouter } from './router'
import { globalStyle } from './styles'
import { standardTheme } from './theme'

export function App() {
  globalStyle()

  return (
    <S.App className={standardTheme}>
      <AppRouter />
    </S.App>
  )
}
