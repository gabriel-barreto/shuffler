import { CastPage, RegisterPage, TeamsPage } from '@/pages'

export const paths = {
  cast: '/elenco',
  register: '/chamada',
  teams: '/times'
}

export const routes = [
  { Component: CastPage, path: paths.cast },
  { Component: TeamsPage, path: paths.teams },
  { Component: RegisterPage, path: paths.register }
]
