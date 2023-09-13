import { FormControl, FormHelperText, FormLabel } from '@mui/joy'
import { memo } from 'react'

import { Textarea, Typography } from 'shared/ui'

import classes from './styles.module.scss'
import { GoalDescriptionTextareaProps } from './types'

export const GoalDescriptionTextarea = memo(function GoalDescriptionTextarea({
  value = '',
  onChange = () => null,

  readOnly = false,
  withHelperText = false,
}: GoalDescriptionTextareaProps) {
  return (
    <FormControl className={classes.form}>
      <FormLabel>
        <Typography
          level="body-lg"
          color="primary"
        >
          Описание
        </Typography>
      </FormLabel>
      <Textarea
        value={value}
        placeholder="Описание"
        onChange={onChange}
        size="large"
        minRows={3}
        maxRows={3}
        readOnly={readOnly}
      />

      {withHelperText && (
        <FormHelperText>
          <Typography
            level="body-sm"
            color="primary"
          >
            Опишите свою цель для себя, не сдерживайтесь.
          </Typography>
        </FormHelperText>
      )}
    </FormControl>
  )
})
