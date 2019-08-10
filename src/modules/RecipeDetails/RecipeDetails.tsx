import { Column, Container, Row } from 'components/Layout'
import { Divider, Paper, Typography } from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import { useRecipes } from 'providers/RecipeProvider'
import IngredientCard from 'components/IngredientCard'
import React, { FC } from 'react'
import RecipeMeta from 'components/RecipeMeta'

const RecipeDetails: FC<RouteComponentProps<{ id: string }>> = ({ id }) => {
  const { recipes } = useRecipes()
  const recipe = recipes.find(r => r.id === id)

  if (!recipe) {
    return null
  }

  return (
    <Container>
      <Row>
        <Column xs>
          <Container>
            <Row>
              <Typography variant={'h5'}>{recipe.title}</Typography>
            </Row>
            <Row>
              <Column>
                <RecipeMeta
                  label={'yields'}
                  value={`${recipe.meta.yield} servings`}
                />
              </Column>
              <Column>
                <RecipeMeta label={'prep'} value={recipe.meta.prepTime} parse />
              </Column>
              <Column>
                <RecipeMeta label={'cook'} value={recipe.meta.cookTime} parse />
              </Column>
              <Column>
                <RecipeMeta
                  label={'total'}
                  value={recipe.meta.totalTime}
                  parse
                />
              </Column>
            </Row>
            <Row>
              <Typography variant={'body1'} color={'textSecondary'}>
                {recipe.description}
              </Typography>
            </Row>
            <Row>
              <Divider />
            </Row>
            <Row>
              <Paper>
                {recipe.ingredients.map((ingredient, i) => (
                  <Row key={`ingredient-${i}`}>
                    <IngredientCard ingredient={ingredient} />
                  </Row>
                ))}
              </Paper>
            </Row>
          </Container>
        </Column>
        <Column>
          <img src={recipe.pictureUrl} alt={recipe.title} />
        </Column>
      </Row>
    </Container>
  )
}

export default RecipeDetails
