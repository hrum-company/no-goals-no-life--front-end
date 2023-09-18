import { Checkbox, Stack, Typography } from '@mui/joy'
import { memo, useCallback } from 'react'

import { BookHiddenFormItemProps } from './types'

export const BookHiddenFormItem = memo(function BookHiddenFormItem({
  value,
  onChange,
}: BookHiddenFormItemProps) {
  // Handlers
  const handleClick = useCallback(() => {
    onChange(!value)
  }, [onChange, value])

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ position: 'relative' }}
    >
      <Stack>
        <Typography level="title-sm">Скрыть цели</Typography>
        <Typography level="body-xs">
          Друзья не смогут посмотреть ваши цели, но будут видеть прогресс вашей книги
        </Typography>
      </Stack>
      <Checkbox
        checked={value}
        onChange={handleClick}
        overlay
      />
    </Stack>
  )
})
