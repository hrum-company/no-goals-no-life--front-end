import { memo } from 'react'

import { Input } from 'shared/ui'

import { GoalNameInputProps } from './types'

export const GoalNameInput = memo(function GoalNameInput({
  value = '',
  onChange = () => null,

  disabled = false,
  readOnly = false,
}: GoalNameInputProps) {
  return (
    <Input
      value={value}
      placeholder="Название"
      onChange={onChange}
      fullWidth
      variant="primary"
      size="large"
      color="neutral"
      disabled={disabled}
      readOnly={readOnly}
    />
  )
})
