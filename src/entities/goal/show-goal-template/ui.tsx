import { memo } from 'react'

import { Card } from 'shared/ui'

import { ShowGoalTemplateProps } from './types'

export const ShowGoalTemplate = memo(function ShowGoalTemplate({
  children,
}: ShowGoalTemplateProps) {
  return (
    <Card variant="secondary" color="neutral">
      {children}
    </Card>
  )
})
