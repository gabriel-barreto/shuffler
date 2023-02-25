import { paths } from '@/router/routes'
import { getTeams } from '@/store'
import { Navigate, useLoaderData } from 'react-router-dom'

function Guard() {
  const teams = useLoaderData() as any[]
  if (teams.length > 0) return <Navigate to={paths.teams} />
  return <Navigate to={paths.cast} />
}

export const preloadGuard = {
  loader: getTeams,
  element: <Guard />,
  path: '/'
}
