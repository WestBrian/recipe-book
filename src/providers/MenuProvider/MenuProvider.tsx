import React, { FC, createContext, useContext, useState } from 'react'

const MenuContext = createContext<{
  open: boolean
  setOpen(bool: boolean): void
}>({
  open: false,
  setOpen: () => {},
})

const MenuProvider: FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuState = () => useContext(MenuContext)

export default MenuProvider
