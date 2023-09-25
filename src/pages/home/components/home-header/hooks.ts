import { useEffect, useState } from 'react'

export const useScrollOnTop = (initialValue: boolean = true) => {
  const [isOnTop, setIsOnTop] = useState<boolean>(initialValue)

  useEffect(() => {
    const handleWindowScrolled = () => {
      setIsOnTop(window.scrollY === 0)
    }

    window.addEventListener('scroll', handleWindowScrolled)

    return () => {
      window.removeEventListener('scroll', handleWindowScrolled)
    }
  }, [])

  return isOnTop
}
