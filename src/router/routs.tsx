import { RouteObject } from 'react-router-dom'
import HomePage from 'src/pages/Home'
import SearchPage from 'src/pages/Search'
import NotFound from 'src/pages/NotFound'

const router: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default router
