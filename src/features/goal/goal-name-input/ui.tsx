import { FormControl, FormHelperText, FormLabel, Input, Typography } from '@mui/joy'
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
    <FormControl className={classes.form}>
      <FormLabel>
        <Typography
          level="body-lg"
          color="primary"
        >
          Название
        </Typography>
      </FormLabel>
      <Input
        value={value}
        placeholder="Название"
        onChange={handleChanged}
        fullWidth
        variant="soft"
        size="lg"
        color="neutral"
        disabled={disabled}
        readOnly={readOnly}
      />
      {withHelperText && (
        <FormHelperText>
          <Typography
            level="body-sm"
            color="danger"
          >
            * В будущем название не изменить.
          </Typography>
        </FormHelperText>
      )}
    </FormControl>
  )
})
