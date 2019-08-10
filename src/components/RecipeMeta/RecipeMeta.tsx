import { Typography, createStyles, makeStyles } from '@material-ui/core'
import { secondsToHms } from 'utils/formatters'
import React, { FC } from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      whiteSpace: 'nowrap',
    },
  })
)

interface RecipeMetaProps {
  label: string
  value: string | number
  parse?: boolean
}

const RecipeMeta: FC<RecipeMetaProps> = ({ label, value, parse = false }) => {
  const classes = useStyles()

  return (
    <Typography variant={'body2'} className={classes.root}>
      {label}: <strong>{parse ? secondsToHms(value) : value}</strong>
    </Typography>
  )
}

export default RecipeMeta
