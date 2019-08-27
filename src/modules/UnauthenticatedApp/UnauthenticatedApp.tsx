import {
  Box,
  Link,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import React, { FC } from 'react'
import backgroundImage from 'assets/landing-bg.jpg'

const useStyles = makeStyles(theme =>
  createStyles({
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFFFFF',
      height: '85vh',
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    secondaryText: {
      opacity: 0.75,
    },
    footer: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
      textAlign: 'center',
    },
  })
)

const UnauthenticatedApp: FC = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.content}>
        <Typography variant={'h3'} color={'inherit'} gutterBottom>
          Recipe Book
        </Typography>
        <Typography
          variant={'h5'}
          color={'inherit'}
          className={classes.secondaryText}
        >
          Add and store all of your recipes from various sites
        </Typography>
      </Box>
      <Box className={classes.footer}>
        <Typography
          variant={'body2'}
          color={'inherit'}
          className={classes.secondaryText}
        >
          Made by Brian West |{' '}
          <Link
            href={'https://github.com/WestBrian/recipe-book'}
            color={'inherit'}
            target={'_blank'}
            rel={'noopener'}
          >
            Source
          </Link>
        </Typography>
      </Box>
    </>
  )
}

export default UnauthenticatedApp
