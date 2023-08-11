import { RouteObject } from 'react-router-dom'
import SearchPage from 'src/pages/Search'
import NotFound from 'src/pages/NotFound'

const router: RouteObject[] = [
   {
    path: '/',
    element: <SearchPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default router
