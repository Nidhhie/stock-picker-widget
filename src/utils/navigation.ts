const getPathStack = (widgetId: string) => {
  let pathStack = sessionStorage.getItem(`${widgetId}-pathStack`) || '[]'
  return JSON.parse(pathStack)
}

const getCurrentPathIdx = (widgetId: string) => {
  let currentPath = sessionStorage.getItem(`${widgetId}-currentPath`)
  return currentPath !== null ? Number(JSON.parse(currentPath)) : null
}

export const getStackAtCurrentIdx = (widgetId: string) => {
  const idx = getCurrentPathIdx(widgetId)
  const ps = getPathStack(widgetId)
  return ps[idx!]
}

export const canMoveFwd = (widgetId: string) => {
  const idx = getCurrentPathIdx(widgetId)
  const ps = getPathStack(widgetId)
  return idx !== null ? idx < ps.length - 1 : false
}

export const getNextRoute = (widgetId: string) => {
  return getStackAtCurrentIdx(widgetId)
}

export const canMoveBack = (widgetId: string) => {
  const idx = getCurrentPathIdx(widgetId)
  return idx !== null ? idx > 0 : false
}

export const getPrevRoute = (widgetId: string) => {
  return getStackAtCurrentIdx(widgetId)
}

export const addToPathStack = (widgetId: string, path: string) => {
  let ps = getPathStack(widgetId)
  let idx = getCurrentPathIdx(widgetId)
  idx = idx !== null ? idx : -1
  ps.splice(idx + 1, 0, path)

  sessionStorage.setItem(`${widgetId}-pathStack`, JSON.stringify(ps))
  sessionStorage.setItem(`${widgetId}-currentPath`, JSON.stringify(idx + 1))
}

export const decrementCurrentPathIdx = (widgetId: string) => {
  let idx = getCurrentPathIdx(widgetId)
  if (idx !== null && idx > 0) {
    sessionStorage.setItem(`${widgetId}-currentPath`, JSON.stringify(idx - 1))
  }
}

export const incrementCurrentPathIdx = (widgetId: string) => {
  let idx = getCurrentPathIdx(widgetId)
  if (idx !== null && idx < getPathStack(widgetId).length - 1) {
    sessionStorage.setItem(`${widgetId}-currentPath`, JSON.stringify(idx + 1))
  }
}

export const resetNav = (widgetId: string) => {
  sessionStorage.removeItem(`${widgetId}-currentPath`)

  sessionStorage.removeItem(`${widgetId}-pathStack`)
}
