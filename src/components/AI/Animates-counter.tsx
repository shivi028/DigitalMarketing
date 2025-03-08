"use client"

import { useEffect, useState } from "react"
import { animate } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  isInView: boolean
}

export function AnimatedCounter({ from, to, duration = 2, delay = 0, isInView }: AnimatedCounterProps) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const controls = animate(from, to, {
          duration: duration,
          onUpdate: (value) => {
            setCount(Math.round(value))
          },
        })

        return () => {
          controls.stop()
          clearTimeout(timeout)
        }
      }, delay * 1000)
    }
  }, [from, to, duration, delay, isInView])

  return <>{count}</>
}

