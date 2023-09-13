import { Card } from '@mui/joy'
import classNames from 'classnames'
import { memo } from 'react'

import classes from './styles.module.scss'
import { CardProps, CardVariant } from './types'

type JoyCardVariant = 'outlined' | 'plain' | 'soft' | 'solid'

const variantMap: Record<CardVariant, JoyCardVariant> = {
  primary: 'solid',
  secondary: 'outlined',
  plain: 'plain',
}

export const JoyCard = memo(function JoyCard({
  className = '',
  children,

  fullWidth = false,
  invertedColors = false,

  color = 'primary',
  variant = 'primary',
}: CardProps) {
  const CardClassName = classNames(className, classes.root, {
    [classes.fullWidth]: fullWidth,
  })

  return (
    <Card
      className={CardClassName}
      variant={variantMap[variant]}
      color={color}
      sx={{
        '--Card-padding': '8px 16px',
      }}
      invertedColors={invertedColors}
    >
      {children}
    </Card>
  )
})
