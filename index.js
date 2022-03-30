import { useEffect } from 'react';

export const useF = (...props) => {
  const func = props.pop()
  useEffect(() => { func() }, props)
}
export const useE = (...props) => useEffect(props.pop(), props)
