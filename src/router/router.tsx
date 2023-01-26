import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import { routes } from './routes'

const location = new ReactLocation()

function mapPageToRoutes() {
  return routes.map(({ path, component }) => ({
    path,
    element: component()
  }))
}

export function AppRouter() {
  return (
    <Router location={location} routes={mapPageToRoutes()}>
      <Outlet />
    </Router>
  )
}
