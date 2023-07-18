import React, { useEffect } from 'react'
import { useConfigContext } from '../context/configContext'
import { resetNav } from '../utils/navigation'
import StockSearch from './../components/StockSearch'
import StockDetails from './StockDetails'
import DarkModeToggleBtn from './../components/DarkModeToggleBtn'

const Header = () => {
  return (
    <>
      <h1 className="text-3xl  text-center mx-8 mt-16 font-bold dark:text-white text-purple-800"> Stock Finder </h1>

      <h1 className="text-xs  text-center dark:text-white text-slate-600"> Find stock by symbol</h1>
    </>
  )
}

const Home = () => {
  const { symbol, widgetId, mode, setMode } = useConfigContext()

  useEffect(() => {
    if (!symbol) resetNav(widgetId)
  }, [widgetId, symbol])

  return (
    <main className={`${mode === 'dark' ? 'dark' : ''} h-full`}>
      <div
        data-testid="home"
        className={`flex flex-col bg-gray-100 dark:bg-slate-700 min-h-full items-center lg:items-center dark:text-white`}>
        <DarkModeToggleBtn mode={mode} setMode={setMode} />
        {symbol ? (
          <StockDetails />
        ) : (
          <div className="lg:w-3/4 md:w-5/6 sm:w-full" data-testid="stock-finder">
            <Header />
            <StockSearch />
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
