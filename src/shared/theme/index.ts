import { extendTheme } from '@mui/joy'

declare module '@mui/joy/Avatar' {
  interface AvatarPropsSizeOverrides {
    xl: true
    xxl: true
  }
}

export const theme = extendTheme({
  components: {
    JoyAvatar: {
      styleOverrides: {
        root: ({ ownerState, theme: innerTheme }) => ({
          ...(ownerState.size === 'xl' && {
            width: '4rem',
            height: '4rem',
            fontFamily: innerTheme.vars.fontFamily.body,
            fontSize: 'calc(4rem * 0.350)',
            fontWeight: 600,
          }),
          ...(ownerState.size === 'xxl' && {
            width: '5rem',
            height: '5rem',
            fontFamily: innerTheme.vars.fontFamily.body,
            fontSize: 'calc(5rem * 0.325)',
            fontWeight: 600,
          }),
        }),
      },
    },
  },
})
