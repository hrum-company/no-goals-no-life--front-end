import { MobileUpdateConfigData } from '@vkontakte/vk-bridge'
import classNames from 'classnames'
import { useUnit } from 'effector-react'
import { CSSProperties, memo } from 'react'

import { $vkParentConfigData } from 'shared/vk-bridge'

import classes from './styles.module.scss'
import { HeaderProps } from './types'

export const Header = memo(function Header({ children, className = '', noBorder }: HeaderProps) {
  // Effector
  const vkParentConfigData = useUnit($vkParentConfigData)

  const paddingTop: number = vkParentConfigData
    ? (vkParentConfigData as MobileUpdateConfigData).insets?.top || 0
    : 0

  const style = {
    paddingTop,
  } as CSSProperties

  const HeaderClassName = classNames(classes.root, { [classes.noBorder]: noBorder }, className)

  return (
    <header
      style={style}
      className={HeaderClassName}
    >
      {children}
    </header>
  )
})
