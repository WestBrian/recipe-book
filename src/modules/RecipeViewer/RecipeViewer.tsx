import { Grid, Typography } from '@material-ui/core'
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
        {recipes.length === 0 && (
          <Typography variant={'h6'}>No recipes added yet.</Typography>
        )}
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
