import { ReactNode, createContext, memo, useMemo, useState } from 'react'

interface PageLayoutSizes {
  headerHeight: number
  footerHeight: number

  setHeaderHeight: (value: number) => void
  setFooterHeight: (value: number) => void
}

const initialValues: PageLayoutSizes = {
  headerHeight: 0,
  footerHeight: 0,
  setHeaderHeight: () => null,
  setFooterHeight: () => null,
}

export const PageLayoutSizesContext = createContext<PageLayoutSizes>(initialValues)

export const PageLayoutSizesProvider = memo(function PageLayoutSizesProvider({
  children,
}: {
  children: ReactNode
}) {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)

  const value = useMemo(
    () => ({
      headerHeight,
      footerHeight,
      setHeaderHeight,
      setFooterHeight,
    }),
    [footerHeight, headerHeight]
  )

  return <PageLayoutSizesContext.Provider value={value}>{children}</PageLayoutSizesContext.Provider>
})
