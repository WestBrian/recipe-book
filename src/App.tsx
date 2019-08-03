import React from 'react'
import Header from 'modules/Header'
import { CssBaseline, Box } from '@material-ui/core'
import AuthenticatedApp from 'modules/AuthenticatedApp'
import UnauthenticatedApp from 'modules/UnauthenticatedApp'
import { useAuth } from 'providers/AuthProvider'

const App: React.FC = () => {
  const { user } = useAuth()

  return (
    <>
      <CssBaseline />
      <Header />
      <Box padding={2}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Box>
    </>
  )
}

export default App
