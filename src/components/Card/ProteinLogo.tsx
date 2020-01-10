import { Avatar, createStyles, makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Protein } from 'providers/RecipeProvider/helpers'
import {
  faBreadSlice,
  faDrumstickBite,
} from '@fortawesome/free-solid-svg-icons'
import React, { FC } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.secondary.light,
    },
  })
)

interface ProteinLogoProps {
  protein?: Protein
}

const ProteinLogo: FC<ProteinLogoProps> = ({ protein }) => {
  const classes = useStyles()

  let icon = faBreadSlice

  switch (protein) {
    case 'chicken':
      icon = faDrumstickBite
      break
    default:
      icon = faBreadSlice
      break
  }

  return (
    <Avatar className={classes.avatar}>
      <FontAwesomeIcon icon={icon} />
    </Avatar>
  )
}

export default ProteinLogo
