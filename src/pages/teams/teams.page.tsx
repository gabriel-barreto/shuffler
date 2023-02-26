import trashIcon from '@/assets/trash.svg'
import { Teams } from '@/components'
import { paths } from '@/router'
import { useTeams } from '@/store'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'
import { ConfirmationDialog } from './confirmation-dialog'
import { Fab } from './fab'

export function TeamsPage() {
  const { teams, setTeams } = useTeams()
  const navigate = useNavigate()

  function cleanTeams() {
    setTeams([])
    navigate(paths.cast)
  }

  function onCleanTeamsClickHandler() {
    toast.custom(() => <ConfirmationDialog onConfirm={cleanTeams} />)
  }

  return (
    <>
      <Teams teams={teams} />
      <Fab
        action={{
          icon: <img alt="Lixeira" title="Limpar times" src={trashIcon} />,
          label: 'Limpar times',
          onClick: onCleanTeamsClickHandler
        }}
      />
      <Toaster closeButton />
    </>
  )
}
