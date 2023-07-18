import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../Home'
import { Ctx } from '../../context/configContext'

describe('Home screen', () => {
  test('render without exploding', () => {
    render(
      <Ctx.Provider value={{ widgetId: 'widget-1', symbol: '' }}>
        <Home />
      </Ctx.Provider>
    )
    expect(screen.getByTestId('stock-finder')).toBeInTheDocument()
  })

  test('renders search details when symbol is present', () => {
    render(
      <Ctx.Provider value={{ widgetId: 'widget-1', symbol: 'IBM' }}>
        <Home />
      </Ctx.Provider>
    )
    expect(screen.getByTestId('stock-details')).toBeInTheDocument()
  })

  test('dark mode style applies', () => {
    render(
      <Ctx.Provider value={{ widgetId: 'widget-1', mode: 'dark' }}>
        <Home />
      </Ctx.Provider>
    )
    expect(screen.getByTestId('home')).toHaveClass('dark:bg-slate-700')
  })
})
