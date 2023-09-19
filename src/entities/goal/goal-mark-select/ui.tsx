import {
  AbcSharp,
  ChildCare,
  ElderlyWoman,
  Female,
  Male,
  SelfImprovement,
  SportsKabaddi,
  SportsMartialArts,
  Star,
} from '@mui/icons-material'
import { ListItemDecorator, Option, Select, SelectOption } from '@mui/joy'
import { memo } from 'react'

import { Icon } from './components/icon'

const options = [
  { value: '1', label: 'Цель жизни', icon: Star },
  { value: '2', label: 'Воля воина', icon: SportsMartialArts },
  { value: '3', label: 'Ради мамы', icon: ElderlyWoman },
  { value: '4', label: 'Во имя отца', icon: SportsKabaddi },
  { value: '5', label: 'Egoisto', icon: SelfImprovement },
  { value: '6', label: 'Ты бы не вывез', icon: ChildCare },
  { value: '7', label: 'Мужское', icon: Male },
  { value: '8', label: 'Женское', icon: Female },
]

export const GoalMarkSelect = memo(function GoalMarkSelect() {
  const renderValue = (option: SelectOption<string> | null) => {
    if (!option) {
      return null
    }

    return (
      <>
        <ListItemDecorator>
          <Icon icon={options.find((o) => o.value === option.value)?.icon || AbcSharp} />
        </ListItemDecorator>
        {option.label}
      </>
    )
  }

  return (
    <Select
      placeholder="Метка"
      variant="outlined"
      size="lg"
      slotProps={{
        listbox: {
          sx: {
            '--ListItemDecorator-size': '44px',
          },
        },
      }}
      sx={{
        borderRadius: 12,
        fontWeight: 500,
        '--ListItemDecorator-size': '44px',
      }}
      renderValue={renderValue}
    >
      {options.map((option) => (
        <Option
          key={option.value}
          value={option.value}
          label={option.label}
        >
          <ListItemDecorator>
            <Icon icon={option.icon} />
          </ListItemDecorator>

          {option.label}
        </Option>
      ))}
    </Select>
  )
})
