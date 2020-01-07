import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import { Recipe } from 'providers/RecipeProvider/types'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import { secondsToHms } from 'utils/formatters'
import ProteinLogo from './ProteinLogo'
import React, { FC } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    content: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.common.white,
    },
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
    divider: {
      backgroundColor: theme.palette.common.white,
      marginBottom: theme.spacing(1),
    },
    metaText: {
      opacity: 0.9,
      marginLeft: theme.spacing(1),
      fontSize: 11,
    },
  })
)

interface RecipeCardProps {
  recipe: Recipe
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const classes = useStyles()

  return (
    <Card>
      <Link to={`/recipes/${recipe.id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia image={recipe.pictureUrl} className={classes.media} />
          <CardContent className={classes.content}>
            <Grid container alignItems={'center'}>
              <Grid item xs={2}>
                <ProteinLogo protein={recipe.protein} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant={'body2'} color={'inherit'}>
                  Dinner
                </Typography>
                <Typography variant={'body1'} color={'inherit'} gutterBottom>
                  {recipe.title}
                </Typography>
                <Divider className={classes.divider} />
                <Grid container spacing={2} alignItems={'center'}>
                  <Grid item>
                    <FontAwesomeIcon icon={faClock} />
                    <Typography
                      component={'span'}
                      variant={'body2'}
                      color={'inherit'}
                      className={classes.metaText}
                    >
                      {secondsToHms(recipe.meta.totalTime)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FontAwesomeIcon icon={faUser} />
                    <Typography
                      component={'span'}
                      variant={'body2'}
                      color={'inherit'}
                      className={classes.metaText}
                    >
                      {recipe.meta.yield}
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
