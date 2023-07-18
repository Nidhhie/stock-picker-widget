import React, { createContext, useContext, useState } from 'react'

export const Ctx = createContext<{
  widgetId: string
  symbol: string
  setSymbol?: any
  mode: 'light' | 'dark'
  setMode?: any
}>({ widgetId: '', symbol: '', mode: 'light' })

export const ConfigContext = ({ children, widgetId }: { children: React.ReactNode; widgetId: string }) => {
  const [symbol, setSymbol] = useState('')
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  return <Ctx.Provider value={{ widgetId, symbol, setSymbol, mode, setMode }}>{children}</Ctx.Provider>
}

export const useConfigContext = () => {
  return useContext(Ctx)
}
