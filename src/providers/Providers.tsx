import { AuthProvider } from './AuthProvider'
import { MenuProvider } from './MenuProvider'
import { RecipeProvider } from './RecipeProvider'
import React, { FC } from 'react'

const Providers: FC = ({ children }) => {
  return (
    <AuthProvider>
      <RecipeProvider>
        <MenuProvider>{children}</MenuProvider>
      </RecipeProvider>
    </AuthProvider>
  )
}

export default Providers
