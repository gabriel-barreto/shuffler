import * as S from './App.styled'
import { Form } from './components'
import { globalStyle } from './styles'
import { standardTheme } from './theme'

export function App() {
  globalStyle()
  return (
    <S.App className={standardTheme}>
      <Form
        name="cast-shuffle"
        field={{ name: 'cast', label: 'Qual vai ser o elenco?' }}
      />
    </S.App>
  )
}
