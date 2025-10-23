"use client"

import { useEffect, useState } from "react"

export function useIsMac(defaultValue = false) {
  const [isMac, setIsMac] = useState(defaultValue)

  useEffect(() => {
    if (typeof window === "undefined") return
    setIsMac(/mac/i.test(window.navigator.platform))
  }, [])

  return isMac
}
