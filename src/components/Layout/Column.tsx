import { Grid } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'
import React, { FC } from 'react'

const Column: FC<GridProps> = ({ children, ...gridProps }) => {
  return (
    <Grid item {...gridProps}>
      {children}
    </Grid>
  )
}

export default Column
