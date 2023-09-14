import { CssVarsProvider } from '@mui/joy'
import { RouterProvider } from 'atomic-router-react'

import { Pages } from 'pages'

import { router } from 'shared/routing'
import { theme } from 'shared/theme'

export const App = () => {
  return (
    <CssVarsProvider theme={theme}>
      <RouterProvider router={router}>
        <Pages />
      </RouterProvider>
    </CssVarsProvider>
  )
}
