import { Box, Grid, Paper, Typography } from '@material-ui/core'
import { Column, Container, Row } from 'components/Layout'
import { RouteComponentProps } from '@reach/router'
import { useRecipes } from 'providers/RecipeProvider'
import React, { FC } from 'react'

const RecipeDetails: FC<RouteComponentProps<{ id: string }>> = ({ id }) => {
  const { recipes } = useRecipes()
  const recipe = recipes.find(r => r.id === id)

  if (!recipe) {
    return null
  }

  return (
    <Container>
      <Row>
        <Typography variant={'h3'}>{recipe.title}</Typography>
      </Row>
      <Row>
        <Column xs>
          <Container>
            <Row>
              <Typography variant={'body1'} color={'textSecondary'}>
                {recipe.description}
              </Typography>
            </Row>
            <Row>{recipe.meta.cookTime}</Row>
          </Container>
        </Column>
        <Column xs>
          <img src={recipe.pictureUrl} alt={recipe.title} />
        </Column>
      </Row>
    </Container>
  )
}

export default RecipeDetails
