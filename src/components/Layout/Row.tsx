import { Grid } from '@material-ui/core'
import Container from './Container'
import React, { FC } from 'react'

const Row: FC = ({ children }) => {
  const length = React.Children.count(children)

  return (
    <Grid item xs={12}>
      {length > 1 ? <Container>{children}</Container> : children}
    </Grid>
  )
}

export default Row
