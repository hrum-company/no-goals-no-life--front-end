import { Option, Select } from '@mui/joy'
import { memo } from 'react'

import { GoalMarkSelectProps } from './types'

export const GoalMarkSelect = memo(function GoalMarkSelect({
  items,
  loading,
  value,
  setValue,
}: GoalMarkSelectProps) {
  return (
    <Select
      placeholder="Метка"
      variant="soft"
      size="lg"
      color="neutral"
      sx={{
        borderRadius: 12,
        fontWeight: 500,
      }}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      disabled={loading}
    >
      <Option
        value={null}
        label="Без метки"
      >
        Без метки
      </Option>
      {items.map((option) => (
        <Option
          key={option.id}
          value={option.id}
          label={option.icon + ' ' + option.title}
        >
          {option.icon + ' ' + option.title}
        </Option>
      ))}
    </Select>
  )
})
