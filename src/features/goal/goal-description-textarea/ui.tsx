import { memo } from 'react'

import { Textarea } from 'shared/ui'

import { GoalDescriptionTextareaProps } from './types'

export const GoalDescriptionTextarea = memo(function GoalDescriptionTextarea({
  value = '',
  onChange = () => null,

  readOnly = false,
}: GoalDescriptionTextareaProps) {
  return (
    <Textarea
      value={value}
      placeholder="Описание"
      onChange={onChange}
      size="large"
      minRows={3}
      maxRows={3}
      readOnly={readOnly}
    />
  )
})
