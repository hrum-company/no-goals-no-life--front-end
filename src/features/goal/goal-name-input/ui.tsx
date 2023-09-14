import { Create, Info } from '@mui/icons-material'
import { Input } from '@mui/joy'
import { ChangeEvent, memo, useCallback } from 'react'

import classes from './styles.module.scss'
import { GoalNameInputProps } from './types'

export const GoalNameInput = memo(function GoalNameInput({
  value = '',
  onChange = () => null,

  disabled = false,
  readOnly = false,
  withHelperText = false,
}: GoalNameInputProps) {
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
      variant="outlined"
      size="lg"
      color="neutral"
      disabled={disabled}
      readOnly={readOnly}
      placeholder="Моя цель"
      startDecorator={<Create color="primary" />}
      sx={{ borderRadius: 12, fontWeight: 500 }}
    />
  )
})
