import { useRef, useState } from 'react'
import * as S from './App.styled'
import { Chunks, Form } from './components'
import { shuffle } from './service'
import { globalStyle } from './styles'
import { standardTheme } from './theme'

export function App() {
  const scrollableContainer = useRef<HTMLElement>(null)
  const [chunks, setChunks] = useState<string[][]>([])
  globalStyle()

  function scrollDown() {
    if (scrollableContainer.current === null) return
    const [{ height }] = scrollableContainer.current.getClientRects()
    setTimeout(() => {
      scrollableContainer.current?.scrollTo({ behavior: 'smooth', top: height })
    }, 100)
  }

  function onSubmit(cast: string[]) {
    const chunks = shuffle(cast)
    setChunks(chunks)
    scrollDown()
  }

  return (
    <S.App className={standardTheme} ref={scrollableContainer}>
      <Form onSubmit={onSubmit} />
      <S.Spacer />
      <Chunks chunks={chunks} />
    </S.App>
  )
}
