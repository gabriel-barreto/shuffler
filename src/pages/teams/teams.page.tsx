import { Teams } from '@/components'
import { useTeams } from '@/store'

export function TeamsPage() {
  const { teams } = useTeams()

  return <Teams teams={teams} />
}
