import {
  Grid,
  ListItem,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { Ingredient } from 'providers/RecipeProvider/types'
import React, { FC } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    measurement: {
      color: theme.palette.secondary.main,
    },
  })
)

interface IngredientProps {
  ingredient: Ingredient
}

const IngredientCard: FC<IngredientProps> = ({ ingredient }) => {
  const classes = useStyles()
  const { measurement, name } = ingredient

  return (
    <ListItem divider>
      <Grid container>
        <Grid item xs={2} sm={1}>
          <Typography variant={'button'} className={classes.measurement}>
            {measurement}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant={'body1'}>{name}</Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default IngredientCard
