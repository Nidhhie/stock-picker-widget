import { useState, useEffect, useCallback, useRef } from 'react'
import { getStocksBySymbol } from '../api'
import useDebounce from './../hooks/useDebounce'
import { cacheSearchResults, getSearchResultsFromCache } from './../utils/cacheHandler'
import { addToPathStack } from './../utils/navigation'
import { useConfigContext } from './../context/configContext'

const useSearch = () => {
  const [query, setQuery] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestionsList, setSuggestionsList] = useState([])

  const deferredQuery = useDebounce(query, 200)
  const latestTimestamp = useRef(0)
  const { widgetId, setSymbol } = useConfigContext()

  const fetchSuggestions = useCallback(async () => {
    try {
      latestTimestamp.current = new Date().getTime()
      const { bestMatches, timestamp } = await getStocksBySymbol(deferredQuery, latestTimestamp.current)

      if (bestMatches?.length) {
        cacheSearchResults(
          deferredQuery,
          bestMatches.map((match: any) => {
            return {
              '1. symbol': match['1. symbol'],
              '2. name': match['2. name'],
            }
          })
        )
        if (timestamp === latestTimestamp.current) setSuggestionsList(bestMatches)
      } else {
        setError('No matches found')
      }
    } catch (err) {
      console.log(err)
      setError(err?.message || JSON.stringify(err))
    } finally {
      setLoading(false)
    }
  }, [deferredQuery])

  useEffect(() => {
    if (deferredQuery) {
      setShowSuggestions(true)
      setLoading(true)
      setError('')
      const cachedSuggestions = getSearchResultsFromCache(deferredQuery)
      if (cachedSuggestions) {
        setSuggestionsList(cachedSuggestions)
        setLoading(false)
      } else {
        fetchSuggestions()
      }
    }
  }, [fetchSuggestions, deferredQuery])

  const handleChange = (e: any) => {
    setQuery(e.target.value)
  }

  const handleSearch = (symbol: string) => {
    // addToPathStack(widgetId, 'IBM')
    // addToPathStack(widgetId, 'TCS')
    addToPathStack(widgetId, symbol)
    setQuery('')
    setShowSuggestions(false)
    setSymbol(symbol)
  }

  useEffect(() => {
    document.addEventListener('click', (e: any) => {
      const searchContainer = document.getElementsByClassName('search-container')
      if (showSuggestions && searchContainer.length && !searchContainer[0]?.contains(e.target)) {
        setShowSuggestions(false)
      }
    })

    return () => {
      document.removeEventListener('click', () => false)
    }
  }, [showSuggestions])

  return {
    query,
    handleChange,
    handleSearch,
    showSuggestions,
    suggestionsList,
    loading,
    error,
  }
}

export default useSearch
