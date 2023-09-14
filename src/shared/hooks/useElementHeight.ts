import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'

interface UseElementConfig {
  initialHeightValue?: number
  observeChange?: boolean
  setter?: (value: number) => void
}

export const useElementHeight = <RefType extends HTMLElement>(
  config: UseElementConfig = { initialHeightValue: 0, observeChange: false }
): [RefObject<RefType>, number] => {
  const { initialHeightValue = 0, observeChange = false, setter = () => null } = config

  // Ref
  const elementRef = useRef<RefType>(null)

  // State
  const [height, setHeight] = useState<number>(initialHeightValue)

  // Effects
  useLayoutEffect(() => {
    if (!elementRef.current) {
      return undefined
    }

    setter(elementRef.current.clientHeight)
    setHeight(elementRef.current.clientHeight)
  }, [])

  //? Скорее всего можно лучше
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!observeChange) {
      return undefined
    }

    if (!elementRef.current) {
      return undefined
    }

    if (height !== elementRef.current.clientHeight) {
      setter(elementRef.current.clientHeight)
      setHeight(elementRef.current.clientHeight)
    }
  })

  return [elementRef, height]
}
