import React, { FC } from 'react'
import { AuthProvider } from './AuthProvider'

const Providers: FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default Providers
