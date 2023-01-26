import { CastPage, TeamsPage } from '@/pages'

export const paths = {
  cast: '/elenco',
  teams: '/times'
}

export const routes = [
  { path: paths.cast, component: CastPage },
  { path: paths.teams, component: TeamsPage }
]
