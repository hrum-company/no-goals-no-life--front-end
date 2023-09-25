import { Option, Select } from '@mui/joy'
import { memo } from 'react'

import { GoalMarkIdFormItemProps } from './types'

export const GoalMarkIdFormItem = memo(function GoalMarkIdFormItem({
  items,
  loading,
  value,
  onChange,
}: GoalMarkIdFormItemProps) {
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
      onChange={(_, newValue) => onChange(newValue === 0 ? null : newValue)}
      disabled={loading}
    >
      <Option
        value={0}
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
