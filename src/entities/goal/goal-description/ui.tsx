import { Typography } from '@mui/joy'
import { memo } from 'react'

import { Cloud } from 'shared/ui/cloud'

import { GoalDescriptionProps } from './types'

export const GoalDescription = memo(function GoalDescription({
  description,
}: GoalDescriptionProps) {
  return (
    <Cloud>
      <Typography level="title-lg">Описание</Typography>
      <Typography level="body-md">{description}</Typography>
    </Cloud>
  )
})
