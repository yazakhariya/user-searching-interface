import { GlobalStyle } from 'src/theme/GlobalStyles/global.style'
import router from './routs'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const RoutesProvider = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
    </>
  )
}

export default RoutesProvider
