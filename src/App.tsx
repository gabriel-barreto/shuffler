import * as S from './App.styled'
import { standardTheme } from './theme'

export function App() {
  return (
    <S.App className={standardTheme}>
      <S.Message>Hello world!</S.Message>
    </S.App>
  )
}
