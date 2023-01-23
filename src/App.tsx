import * as S from './App.styled'
import { Form } from './components'
import { globalStyle } from './styles'
import { standardTheme } from './theme'

export function App() {
  globalStyle()
  return (
    <S.App className={standardTheme}>
      <Form onSubmit={console.log} />
    </S.App>
  )
}
