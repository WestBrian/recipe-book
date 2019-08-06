import { AuthProvider } from './AuthProvider'
import { RecipeProvider } from './RecipeProvider'
import React, { FC } from 'react'

const Providers: FC = ({ children }) => {
  return (
    <AuthProvider>
      <RecipeProvider>{children}</RecipeProvider>
    </AuthProvider>
  )
}

export default Providers
