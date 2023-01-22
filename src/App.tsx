import * as S from './App.styled'
import { globalStyle } from './styles'
import { standardTheme } from './theme'

export function App() {
  globalStyle()
  return <S.App className={standardTheme} />
}
