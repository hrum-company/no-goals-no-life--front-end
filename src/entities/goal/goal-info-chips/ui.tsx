import { Chip, Grid } from '@mui/joy'
import { memo } from 'react'

import { ourMoment } from 'shared/helpers'

import { GoalInfoChipsProps } from './types'

export const GoalInfoChips = memo(function GoalInfoChips({ goal }: GoalInfoChipsProps) {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
    >
      <Grid>
        <Chip
          variant="outlined"
          color="neutral"
          sx={{ borderRadius: '10px' }}
        >
          {`Номер цели: ${goal.order}`}
        </Chip>
      </Grid>

      <Grid>
        <Chip
          variant="outlined"
          color={goal.completed ? 'success' : 'primary'}
          sx={{ borderRadius: '10px' }}
        >
          {`Состояние: ${goal.completed ? 'Выполнено' : 'В процессе'}`}
        </Chip>
      </Grid>

      <Grid>
        <Chip
          variant="outlined"
          color="warning"
          sx={{ borderRadius: '10px' }}
        >
          {`Дата создания: ${ourMoment(goal.createdAt).format('DD.MM.YYYY')}`}
        </Chip>
      </Grid>

      {!goal.completed && (
        <Grid>
          <Chip
            variant="outlined"
            color="success"
            sx={{ borderRadius: '10px' }}
          >
            {`Дата завершения: ${ourMoment(goal.completedAt).format('DD.MM.YYYY')}`}
          </Chip>
        </Grid>
      )}
    </Grid>
  )
})
