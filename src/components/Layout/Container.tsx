import { Grid } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'
import React, { FC } from 'react'

const Container: FC<GridProps> = ({ children, ...gridProps }) => {
  return (
    <Grid container spacing={2} {...gridProps}>
      {children}
    </Grid>
  )
}

export default Container
