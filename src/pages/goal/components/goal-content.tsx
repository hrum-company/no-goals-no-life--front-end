import { BakeryDining } from '@mui/icons-material'
import { AspectRatio, Card, CardContent, CardOverflow, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import { GoalInfoChips } from 'entities/goal'

import { GoalContentProps } from '../types'

export const GoalContent = memo(function GoalContent({ goal }: GoalContentProps) {
  return (
    <Card
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        border: 0,
        borderRadius: 0,
        '--icon-size': '100px',
      }}
    >
      <CardOverflow
        variant="solid"
        color="primary"
      >
        <AspectRatio
          variant="outlined"
          color="primary"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
          <div>
            <BakeryDining
              color="primary"
              sx={{ fontSize: '4rem' }}
            />
          </div>
        </AspectRatio>
      </CardOverflow>

      <Typography
        level="title-lg"
        sx={{ mt: 'calc(var(--icon-size) / 2)' }}
      >
        🎊 {goal.name} 🎊
      </Typography>

      <CardContent>
        <Stack spacing={1}>
          <Typography>{goal.description}</Typography>
          <GoalInfoChips goal={goal} />
        </Stack>
      </CardContent>
    </Card>
  )
})
