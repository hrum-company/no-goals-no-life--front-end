import { Tab, TabList, Tabs, tabClasses } from '@mui/joy'
import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { $currentNav, NavName, navs } from './model'

export const Navigation = memo(function Navigation() {
  const currentNav = useUnit($currentNav)

  return (
    <Tabs
      size="md"
      aria-label="Bottom Navigation"
      value={currentNav}
      onChange={(_, value) => navs[value as NavName].open({})}
      sx={{ borderRadius: 'xl', p: 1, backgroundColor: 'transparent', alignItems: 'center' }}
    >
      <TabList
        variant="solid"
        disableUnderline
        sx={{
          borderRadius: 'xl',
          p: 0.5,
          bgcolor: 'background.level1',
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: 'sm',
            bgcolor: 'background.surface',
          },
        }}
      >
        {Object.keys(navs).map((nav) => {
          const IconComponent = navs[nav as NavName].icon
          return (
            <Tab
              key={nav}
              value={nav}
              disableIndicator
              orientation="vertical"
              color="primary"
            >
              <IconComponent size="lg" />
            </Tab>
          )
        })}
      </TabList>
    </Tabs>
  )
})
