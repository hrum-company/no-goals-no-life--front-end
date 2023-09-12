import { Input } from '@mui/joy'
import { ChangeEvent, memo, useCallback } from 'react'

import { InputProps, InputSize, InputVariant } from './types'

type JoyInputVariant = 'outlined' | 'plain' | 'soft' | 'solid'
type JoyInputSize = 'sm' | 'md' | 'lg'

const variantMap: Record<InputVariant, JoyInputVariant> = {
  primary: 'outlined',
  secondary: 'plain',
}

const sizeMap: Record<InputSize, JoyInputSize> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
}

export const JoyInput = memo(function JoyInput({
  value = '',
  placeholder = '',

  startDecorator,
  endDecorator,

  variant = 'primary',
  size = 'medium',
  color = 'neutral',

  disabled = false,
  readOnly = false,
  error = false,
  fullWidth = false,

  onChange = () => null,
}: InputProps) {
  // Handler
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value)
    },
    [onChange]
  )

  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      variant={variantMap[variant]}
      size={sizeMap[size]}
      color={color}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      readOnly={readOnly}
    />
  )
})
