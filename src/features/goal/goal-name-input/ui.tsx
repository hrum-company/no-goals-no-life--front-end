import { Input } from '@mui/joy'
import { ChangeEvent, memo, useCallback } from 'react'

import classes from './styles.module.scss'
import { GoalNameInputProps } from './types'

export const GoalNameInput = memo(function GoalNameInput({
  value = '',
  onChange = () => null,

  disabled = false,
  readOnly = false,
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
      className={classes.root}
      value={value}
      onChange={handleChanged}
      fullWidth
      variant="soft"
      size="lg"
      color="neutral"
      disabled={disabled}
      readOnly={readOnly}
      placeholder="Название"
      sx={{ borderRadius: 12, fontWeight: 500 }}
    />
  )
})
