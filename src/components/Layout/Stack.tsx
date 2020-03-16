import { Grid, GridProps } from '@material-ui/core'
import React, { FC } from 'react'

const Stack: FC<GridProps> = ({ children, ...gridProps }) => {
  const c = React.Children.toArray(children)
  return (
    <Grid {...gridProps} container direction={'column'}>
      {React.Children.map(c, child => (
        <Grid item>{child}</Grid>
      ))}
    </Grid>
  )
}

export default Stack
