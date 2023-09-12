import { Textarea } from '@mui/joy'
import { ChangeEvent, memo, useCallback } from 'react'

import styles from './styles.module.scss'
import { TextareaProps, TextareaSize } from './types'

type JoyTextareaSize = 'sm' | 'md' | 'lg'

const sizeMap: Record<TextareaSize, JoyTextareaSize> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
}

export const JoyTextarea = memo(function JoyTextarea({
  placeholder = '',

  startDecorator,
  endDecorator,

  size = 'medium',
  color = 'neutral',

  minRows = 1,
  maxRows = 10,

  disabled = false,
  readOnly = false,

  value = '',
  onChange = () => null,
}: TextareaProps) {
  // Handler
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.target.value)
    },
    [onChange]
  )

  return (
    <Textarea
      className={styles.textarea}
      placeholder={placeholder}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      variant="outlined"
      size={sizeMap[size]}
      color={color}
      minRows={minRows}
      maxRows={maxRows}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
    />
  )
})
