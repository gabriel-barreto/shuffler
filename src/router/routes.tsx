import { CastPage, TeamsPage } from '@/pages'

export const paths = {
  cast: '/elenco',
  teams: '/times'
}

export const routes = [
  { Component: CastPage, path: paths.cast },
  { Component: TeamsPage, path: paths.teams }
]
