import { useState } from 'react'
import { UseCounterProps } from './Usecounter.types'

/**
 * Custom hook that manages a counter state and provides functions to increment and decrement the count.
 */
export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return { count, increment, decrement }
}
