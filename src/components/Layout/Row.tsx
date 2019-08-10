import { Grid } from '@material-ui/core'
import { GridProps } from '@material-ui/core/Grid'
import Container from './Container'
import React, { FC } from 'react'

const Row: FC<GridProps> = ({ children, ...gridProps }) => {
  const length = React.Children.count(children)

  return (
    <Grid item xs={12} {...gridProps}>
      {length > 1 ? <Container>{children}</Container> : children}
    </Grid>
  )
}

export default Row
