import { memo } from 'react'

import { Stack } from 'shared/ui'

import { CreateGoalFormTemplateProps } from './types'

export const CreateGoalFormTemplate = memo(function CreateGoalFormTemplate({
  children,
}: CreateGoalFormTemplateProps) {
  return <Stack spacing={2}>{children}</Stack>
})
