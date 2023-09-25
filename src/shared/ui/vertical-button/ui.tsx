import { Button, Stack, Typography } from '@mui/joy'
import { SxProps } from '@mui/joy/styles/types'
import { memo, useMemo } from 'react'

import { VerticalButtonProps } from './types'

export const VerticalButton = memo(function VerticalButton({
  variant = 'solid',
  fullWidth,
  icon,
  title,
  onClick,
}: VerticalButtonProps) {
  // Memo
  const buttonSx: SxProps = useMemo(() => {
    if (!fullWidth) {
      return {
        p: 1.5,
        borderRadius: 12,
      }
    }

    return {
      p: 0,
      pt: 1.5,
      pb: 1.5,
      borderRadius: 12,
    }
  }, [fullWidth])

  const typographySx: SxProps = useMemo(() => ({ color: 'inherit', fontSize: 'inherit' }), [])

  return (
    <Button
      variant={variant}
      size="sm"
      sx={buttonSx}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      <Stack
        spacing={0.5}
        alignItems="center"
      >
        {icon}
        <Typography sx={typographySx}>{title}</Typography>
      </Stack>
    </Button>
  )
})
