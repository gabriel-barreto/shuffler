import { Form } from '@/components'
import { paths } from '@/router'
import { shuffleTeams } from '@/service'
import { useTeams } from '@/store'
import { useNavigate } from 'react-router-dom'

export function CastPage() {
  const { setTeams } = useTeams()
  const navigate = useNavigate()

  function onSubmit(cast: string[]) {
    const teams = shuffleTeams(cast)
    setTeams(teams)
    navigate(paths.teams)
  }

  return <Form onSubmit={onSubmit} />
}
