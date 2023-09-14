export interface BookFormModalProps {
  open: boolean
  onClose: () => void

  title: string
  children: React.ReactNode
  buttonSlot: React.ReactNode
}
