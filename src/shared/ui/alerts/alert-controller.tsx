import { Alert, Button, Stack } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$alert, IAlert } from 'shared/alerts'

export const AlertController = memo(function AlertController() {
  // Effector
  const [alerts, closed] = useUnit([$$alert.$items, $$alert.closed])

  const renderAlert = (alert: IAlert) => {
    if (alert.data.type === 'success') {
      return (
        <Alert
          key={alert.id}
          variant="soft"
          color="success"
          endDecorator={
            <Button
              size="sm"
              variant="solid"
              color="success"
              onClick={() => closed(alert.id)}
            >
              Close
            </Button>
          }
        >
          {alert.data.message}
        </Alert>
      )
    }

    return null
  }

  return <Stack spacing={1}>{alerts.map(renderAlert)}</Stack>
})
