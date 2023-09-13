import { FormControl, FormHelperText, FormLabel, Textarea, Typography } from '@mui/joy'
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
        onChange={handleChanged}
        size="lg"
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
