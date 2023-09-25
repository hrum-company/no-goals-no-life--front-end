import { Input } from '@mui/joy'
import { ChangeEvent, memo, useCallback } from 'react'

import { GoalNameFormItemProps } from './types'

export const GoalNameFormItem = memo(function GoalNameFormItem({
  value = '',
  onChange = () => null,

  disabled = false,
  readOnly = false,
}: GoalNameFormItemProps) {
  // Handlers
  const handleChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <Input
      value={value}
      onChange={handleChanged}
      fullWidth
      variant="soft"
      size="lg"
      color="neutral"
      placeholder="Название"
      disabled={disabled}
      readOnly={readOnly}
      sx={{ borderRadius: 12, fontWeight: 500 }}
    />
  )
})
