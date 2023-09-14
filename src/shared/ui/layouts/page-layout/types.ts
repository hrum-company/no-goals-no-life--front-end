export interface PageLayoutHeaderProps {
  className?: string
  children: React.ReactNode
  noWrapperHeight?: boolean
}

export interface PageLayoutContentProps {
  className?: string
  children: React.ReactNode
}

export interface PageLayoutFooterProps {
  className?: string
  children: React.ReactNode
}

export interface PageLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
}
