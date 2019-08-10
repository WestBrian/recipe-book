import { Box, createStyles, makeStyles } from '@material-ui/core'
import DashboardDrawer from 'components/DashboardDrawer'
import React, { FC } from 'react'
import Routes from './Routes'

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      flexGrow: 1,
    },
  })
)

const AuthenticatedApp: FC = () => {
  const classes = useStyles()

  return (
    <Box display={'flex'}>
      <nav>
        <DashboardDrawer />
      </nav>
      <Box padding={2} className={classes.main}>
        <Routes />
      </Box>
    </Box>
  )
}

export default AuthenticatedApp
