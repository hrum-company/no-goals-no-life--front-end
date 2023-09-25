import { Textarea } from '@mui/joy'
import { ChangeEvent, memo, useCallback } from 'react'

import { GoalDescriptionFormItemProps } from './types'

export const GoalDescriptionFormItem = memo(function GoalDescriptionFormItem({
  value = '',
  onChange = () => null,

  readOnly = false,
}: GoalDescriptionFormItemProps) {
  // Handlers
  const handleChanged = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <Textarea
      value={value}
      placeholder="Описание"
      onChange={handleChanged}
      variant="soft"
      color="neutral"
      size="lg"
      minRows={3}
      readOnly={readOnly}
      sx={{ borderRadius: 12, fontWeight: 500 }}
    />
  )
})
