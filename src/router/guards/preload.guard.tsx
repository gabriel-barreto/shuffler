import { paths } from '@/router/routes'
import { getCast, getTeams } from '@/store'
import { Navigate, useLoaderData } from 'react-router-dom'

interface LoaderData {
  teams: any[]
  cast: string[]
}

function Guard() {
  const { teams, cast } = useLoaderData() as LoaderData
  if (teams.length > 0) return <Navigate to={paths.teams} />
  if (cast.length >= 12) return <Navigate to={paths.cast} />
  return <Navigate to={paths.cast} />
}

export const preloadGuard = {
  loader: () => {
    return { teams: getTeams(), cast: getCast() }
  },
  element: <Guard />,
  path: '/'
}
