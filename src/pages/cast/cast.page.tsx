import { Form } from '@/components'
import { paths } from '@/router'
import { useCast } from '@/store'
import { useNavigate } from 'react-router-dom'

export function CastPage() {
  const { setCast } = useCast()
  const navigate = useNavigate()

  function onSubmit(cast: string[]) {
    setCast(cast)
    navigate(paths.register)
  }

  return <Form onSubmit={onSubmit} />
}
