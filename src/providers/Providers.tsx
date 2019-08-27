import { AuthProvider } from './AuthProvider'
import { MenuProvider } from './MenuProvider'
import { RecipeProvider } from './RecipeProvider'
import { ThemeProvider } from './ThemeProvider'
import React, { FC } from 'react'

const Providers: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RecipeProvider>
          <MenuProvider>{children}</MenuProvider>
        </RecipeProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default Providers
