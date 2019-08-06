import { createStyles, makeStyles } from '@material-ui/core'
import React, { FC } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  })
)

const ToolbarSpacer: FC = () => {
  const classes = useStyles()

  return <div className={classes.toolbar} />
}

export default ToolbarSpacer
