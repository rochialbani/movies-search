import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError("You can't search an empty movie")
      return
    }
    if (search.length < 3) {
      setError('The search needs to have at leats 3 characters')
      return
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}
