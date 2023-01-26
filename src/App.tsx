import { useRef } from 'react'
import * as S from './App.styled'
import { Form, Teams } from './components'
import { shuffleTeams } from './service'
import { useTeams } from './store'
import { globalStyle } from './styles'
import { standardTheme } from './theme'

export function App() {
  const scrollableContainer = useRef<HTMLElement>(null)
  const { setTeams, teams } = useTeams()
  globalStyle()

  function scrollDown() {
    if (scrollableContainer.current === null) return
    const [{ height }] = scrollableContainer.current.getClientRects()
    setTimeout(() => {
      scrollableContainer.current?.scrollTo({ behavior: 'smooth', top: height })
    }, 100)
  }

  function onSubmit(cast: string[]) {
    const teams = shuffleTeams(cast)
    setTeams(teams)
    scrollDown()
  }

  return (
    <S.App className={standardTheme} ref={scrollableContainer}>
      <S.Wrapper>
        <Form onSubmit={onSubmit} />
        <S.Spacer />
        <Teams teams={teams} />
      </S.Wrapper>
    </S.App>
  )
}
