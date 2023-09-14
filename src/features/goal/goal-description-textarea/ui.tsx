import { Create, Info } from '@mui/icons-material'
import { Textarea } from '@mui/joy'
import { ChangeEvent, memo, useCallback } from 'react'

import classes from './styles.module.scss'
import { GoalDescriptionTextareaProps } from './types'

export const GoalDescriptionTextarea = memo(function GoalDescriptionTextarea({
  value = '',
  onChange = () => null,

  readOnly = false,
  withHelperText = false,
}: GoalDescriptionTextareaProps) {
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
      variant="outlined"
      color="neutral"
      size="lg"
      minRows={3}
      readOnly={readOnly}
      startDecorator={<Create color="primary" />}
      sx={{ borderRadius: 12, fontWeight: 500 }}
    />
  )
})
