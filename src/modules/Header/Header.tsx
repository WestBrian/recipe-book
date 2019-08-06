import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { useAuth } from 'providers/AuthProvider'
import React, { FC } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
)

const Header: FC = () => {
  const classes = useStyles()
  const { user, loginWithGoogle, logout } = useAuth()

  return (
    <AppBar position={'fixed'} color={'primary'} className={classes.root}>
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
