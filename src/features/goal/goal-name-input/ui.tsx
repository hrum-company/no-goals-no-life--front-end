import { FormControl, FormHelperText, FormLabel } from '@mui/joy'
import { memo } from 'react'

import { Input, Typography } from 'shared/ui'

import classes from './styles.module.scss'
import { GoalNameInputProps } from './types'

export const GoalNameInput = memo(function GoalNameInput({
  value = '',
  onChange = () => null,

  disabled = false,
  readOnly = false,
  withHelperText = false,
}: GoalNameInputProps) {
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
        onChange={onChange}
        fullWidth
        variant="primary"
        size="large"
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
