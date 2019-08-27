import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { Link } from '@reach/router'
import { Recipe } from 'providers/RecipeProvider/types'
import { Timer } from '@material-ui/icons'
import { secondsToHms } from 'utils/formatters'
import React, { FC } from 'react'
import capitalize from 'lodash/capitalize'

const useStyles = makeStyles(theme =>
  createStyles({
    card: {},
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    icon: {
      color: theme.palette.text.secondary,
    },
    link: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  })
)

interface RecipeCardProps {
  recipe: Recipe
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Link to={`/recipes/${recipe.id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia image={recipe.pictureUrl} className={classes.media} />
          <CardContent>
            <Typography variant={'body1'} component={'h2'} gutterBottom>
              {recipe.title}
            </Typography>
            <Grid container spacing={2} alignItems={'center'}>
              <Grid item>
                <Typography variant={'caption'}>
                  {recipe.protein ? capitalize(recipe.protein) : 'No protein'}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={1} alignItems={'center'}>
                  <Grid item>
                    <Timer fontSize={'small'} color={'secondary'} />
                  </Grid>
                  <Grid item>
                    <Typography variant={'caption'}>
                      {secondsToHms(recipe.meta.totalTime)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default RecipeCard
