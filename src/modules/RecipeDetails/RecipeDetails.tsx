import { Column, Container, Row } from 'components/Layout'
import {
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import { useRecipes } from 'providers/RecipeProvider'
import IngredientCard from 'components/IngredientCard'
import React, { FC, useState } from 'react'
import RecipeMeta from 'components/RecipeMeta'

const RecipeDetails: FC<RouteComponentProps<{ id: string }>> = ({ id }) => {
  const { recipes } = useRecipes()
  const [tab, setTab] = useState<number>(1)
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
              <Column xs={6} sm>
                <RecipeMeta
                  label={'yields'}
                  value={`${recipe.meta.yield} servings`}
                />
              </Column>
              <Column xs={6} sm>
                <RecipeMeta label={'prep'} value={recipe.meta.prepTime} parse />
              </Column>
              <Column xs={6} sm>
                <RecipeMeta label={'cook'} value={recipe.meta.cookTime} parse />
              </Column>
              <Column xs={6} sm>
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
            {/* <Row>
              <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)}>
                <Tab label={'Ingredient'} />
                <Tab label={'Directions'} />
              </Tabs>
            </Row> */}
            <Row>
              <Paper>
                <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)}>
                  <Tab label={'Ingredient'} />
                  <Tab label={'Directions'} />
                </Tabs>
                {tab === 0 && (
                  <List>
                    {recipe.ingredients.map((ingredient, i) => (
                      <IngredientCard
                        key={`ingredient-${i}`}
                        ingredient={ingredient}
                      />
                    ))}
                  </List>
                )}
                {tab === 1 && (
                  <List>
                    {recipe.directions.map((direction, i) => (
                      <ListItem key={`direction-${i}`} divider>
                        <Grid container alignItems={'center'}>
                          <Grid item xs={1}>
                            <Typography variant={'button'} color={'primary'}>
                              {i + 1}
                            </Typography>
                          </Grid>
                          <Grid item xs={11}>
                            <Typography variant={'body1'}>
                              {direction}
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Paper>
            </Row>
          </Container>
        </Column>
        <Column>
          <img src={recipe.pictureUrl} alt={recipe.title} width={'100%'} />
        </Column>
      </Row>
    </Container>
  )
}

export default RecipeDetails
