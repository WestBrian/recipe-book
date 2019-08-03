const KEY = 'authSession'

export const hasPreviousSession = () => {
  return !!localStorage.getItem(KEY)
}

export const setSession = () => {
  localStorage.setItem(KEY, 'true')
}

export const removeSession = () => {
  localStorage.removeItem(KEY)
}
