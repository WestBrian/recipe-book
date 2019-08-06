import { Box, CssBaseline } from '@material-ui/core'
import { useAuth } from 'providers/AuthProvider'
import AuthenticatedApp from 'modules/AuthenticatedApp'
import Header from 'modules/Header'
import React from 'react'
import UnauthenticatedApp from 'modules/UnauthenticatedApp'

const App: React.FC = () => {
  const { user } = useAuth()

  return (
    <>
      <CssBaseline />
      <Header />
      <Box paddingTop={'64px'} component={'main'}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Box>
    </>
  )
}

export default App
