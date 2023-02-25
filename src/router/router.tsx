import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { preloadGuard } from './guards'
import { routes } from './routes'

function mapPagesToRoutes() {
  return routes.map(({ Component, path }) => ({
    element: <Component />,
    path
  }))
}

const router = createBrowserRouter([...mapPagesToRoutes(), preloadGuard])

export function AppRouter() {
  return <RouterProvider router={router} />
}
