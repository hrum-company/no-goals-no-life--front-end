import { FormControl, FormLabel, Input } from '@mui/joy'
import { ChangeEvent, memo, useCallback } from 'react'

import { BookNameFormItemProps } from './types'

export const BookNameFormItem = memo(function BookNameFormItem({
  value,
  onChange,
}: BookNameFormItemProps) {
  // Handlers
  const handleChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <FormControl>
      <FormLabel>Название</FormLabel>
      <Input
        placeholder="Введите название"
        value={value}
        onChange={handleChanged}
      />
    </FormControl>
  )
})
