import { useState, useCallback } from 'react'

export default function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue)
  const inputHandler = useCallback((value: any) => {
    setValue(value)
  }, [])
  return [value, inputHandler, setValue]
}
