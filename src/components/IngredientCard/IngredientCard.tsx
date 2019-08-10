import { Box, Typography, createStyles, makeStyles } from '@material-ui/core'
import { Column, Container, Row } from 'components/Layout'
import { Ingredient } from 'providers/RecipeProvider/types'
import React, { FC } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    measurement: {
      backgroundColor: theme.palette.secondary.main,
      color: '#ffffff',
    },
  })
)

interface IngredientProps {
  ingredient: Ingredient
}

const IngredientCard: FC<IngredientProps> = ({ ingredient }) => {
  const classes = useStyles()

  return (
    <Box padding={1}>
      <Container>
        <Row>
          <Column className={classes.measurement}>
            <Typography variant={'button'} color={'inherit'}>
              <strong>
                {ingredient.measurement ? ingredient.measurement : '?'}
              </strong>
            </Typography>
          </Column>
          <Column xs>
            <Typography variant={'button'}>{ingredient.name}</Typography>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default IngredientCard
