import {
  AppBar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { useAuth } from 'providers/AuthProvider'
import { useMenuState } from 'providers/MenuProvider'
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
  const { setOpen } = useMenuState()

  return (
    <AppBar position={'fixed'} color={'primary'} className={classes.root}>
      <Toolbar>
        <Grid container alignItems={'center'} justify={'space-between'}>
          <Grid item>
            <Grid container spacing={2} alignItems={'center'}>
              {user && (
                <Hidden mdUp>
                  <Grid item xs={3}>
                    <IconButton color={'inherit'} onClick={() => setOpen(true)}>
                      <Menu />
                    </IconButton>
                  </Grid>
                </Hidden>
              )}
              <Grid item xs>
                <Typography
                  variant={'h6'}
                  color={'inherit'}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Recipe Book
                </Typography>
              </Grid>
            </Grid>
          </Grid>
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
