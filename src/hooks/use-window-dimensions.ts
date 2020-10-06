import { useState, useEffect } from "react"

const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

export const useWindowDimensions = (): { width: number, height: number } => {
  const [dimensions, setDimensions] = useState(getWindowDimensions())

  const handleResize = () => {
    setDimensions(getWindowDimensions())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimensions
}