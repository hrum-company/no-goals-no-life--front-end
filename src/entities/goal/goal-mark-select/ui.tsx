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
      variant="outlined"
      size="lg"
      sx={{
        borderRadius: 12,
        fontWeight: 500,
      }}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      disabled={loading}
    >
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
