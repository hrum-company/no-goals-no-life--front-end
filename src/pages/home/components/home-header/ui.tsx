import { Typography } from '@mui/joy'
import classNames from 'classnames'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$book } from 'entities/book'

import { Header, HeaderAvatar, HeaderContent, HeaderLeft } from 'shared/ui'

import { useScrollOnTop } from './hooks'
import classes from './styles.module.scss'

export const HomeHeader = memo(function HomeHeader() {
  // Effector
  const [book] = useUnit([$$book.$item])

  // Hooks
  const scrollOnTop = useScrollOnTop()

  // Variables
  const isReverse = !scrollOnTop || !book
  const HeaderClassName = classNames(classes.root, {
    [classes.reversed]: isReverse,
  })
  const textColor = isReverse ? 'primary.solidBg' : 'common.white'

  return (
    <Header
      className={HeaderClassName}
      noBorder={scrollOnTop}
    >
      <HeaderLeft>
        <HeaderAvatar />
      </HeaderLeft>
      <HeaderContent className={classes.content}>
        <Typography
          level="h4"
          textColor={textColor}
          sx={{ transition: 'color 0.5s ease-in' }}
        >
          Главная
        </Typography>
      </HeaderContent>
    </Header>
  )
})
