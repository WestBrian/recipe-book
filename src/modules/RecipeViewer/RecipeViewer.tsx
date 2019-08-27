import { Grid } from '@material-ui/core'
import { RecipeCard } from 'components/Card'
import { RouteComponentProps } from '@reach/router'
import { useRecipes } from 'providers/RecipeProvider'
import AddRecipeButton from 'components/AddRecipeButton'
import React, { FC } from 'react'

const RecipeViewer: FC<RouteComponentProps> = () => {
  const { recipes, addRecipe } = useRecipes()

  return (
    <>
      <Grid container spacing={2}>
        {recipes.map((recipe, i) => (
          <Grid item key={`recipe-card-${i}`} xs={12} sm={6} md={4}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
      <AddRecipeButton onSubmit={addRecipe} />
    </>
  )
}

export default RecipeViewer
