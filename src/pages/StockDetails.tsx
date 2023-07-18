import React, { useState, useEffect, useCallback } from 'react'
import { getStockDetails } from '../api'
import StockSearch from './../components/StockSearch'
import StockIntraDayChart from './../components/StockIntraDayChart'
import Error from './../components/Error'
import NavigationHandlers from './../components/NavigationHandlers'
import DetailsCard, { Stock } from './../components/DetailsCard'
import RefreshInput from './../components/RefreshInput'
import { useConfigContext } from '../context/configContext'
import Loader from '../components/Loader'

const StockDetails = () => {
  const [data, setData] = useState<Stock | null>(null)
  const [error, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  const { symbol } = useConfigContext()

  const getStockDetailsFromSymbol = useCallback(async () => {
    try {
      if (symbol) {
        setLoading(true)
        const data = await getStockDetails(symbol)
        setErr('')
        setData(data)
      }
    } catch (err) {
      setErr(err.message)
    } finally {
      setLoading(false)
    }
  }, [symbol])

  useEffect(() => {
    getStockDetailsFromSymbol()
  }, [getStockDetailsFromSymbol])

  return (
    <div className="lg:w-3/4 md:w-5/6 sm:w-full max-w-full" data-testid="stock-details">
      <StockSearch />
      <div className="flex items-center justify-between min-[300px]:max-sm:flex-col">
        <NavigationHandlers />
        <RefreshInput onRefreshCb={getStockDetailsFromSymbol} />
      </div>
      <div className="text-xl font-bold p-3">Search Result for "{symbol}" </div>
      <div className="m-3 bg-gray-100 rounded-xl">
        {loading ? (
          <Loader height={'70vh'} />
        ) : error ? (
          <Error message={error} />
        ) : (
          data && (
            <div>
              <DetailsCard stock={data} />
              <StockIntraDayChart symbol={symbol} />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default StockDetails
