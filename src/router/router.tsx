import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function mapPageToRoutes() {
  return routes.map(({ Component, path }) => ({
    element: <Component />,
    path
  }))
}

const router = createBrowserRouter(mapPageToRoutes())

export function AppRouter() {
  return <RouterProvider router={router} />
}
