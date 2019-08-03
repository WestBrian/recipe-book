import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core'
import { useAuth } from 'providers/AuthProvider'

const Header: FC = () => {
  const { user, loginWithGoogle, logout } = useAuth()

  return (
    <AppBar position={'static'} color={'primary'}>
      <Toolbar>
        <Grid container alignItems={'center'} justify={'space-between'}>
          <Typography variant={'h6'} color={'inherit'}>
            Recipe Book
          </Typography>
          {user ? (
            <Button color={'inherit'} onClick={logout}>
              Sign Out
            </Button>
          ) : (
            <Button color={'inherit'} onClick={loginWithGoogle}>
              Sign In
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
