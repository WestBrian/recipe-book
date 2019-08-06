import { Grid } from '@material-ui/core'
import React, { FC } from 'react'

const Container: FC = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  )
}

export default Container
