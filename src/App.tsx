import * as S from './App.styled'
import { Button, Input, Label } from './components'
import { globalStyle } from './styles'
import { standardTheme } from './theme'

export function App() {
  globalStyle()
  return (
    <S.App className={standardTheme}>
      <Label content="Poe o elenco aqui:" fieldName="cast" />
      <Input fieldName="cast" />
      <Button label="Sortear" onClick={() => {}} />
    </S.App>
  )
}
