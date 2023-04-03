import { Teams } from '@/components'
import { CleanFabButton } from '@/components/clean-fab-button/clean-fab-button.component'
import { useTeams } from '@/store'

export function TeamsPage() {
  const { teams } = useTeams()

  return (
    <>
      <Teams teams={teams} />
      <CleanFabButton />
    </>
  )
}
