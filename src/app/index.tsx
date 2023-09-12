import { RouterProvider } from 'atomic-router-react'

import { Pages } from 'pages'

import { router } from 'shared/routing'

export const App = () => {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  )
}
