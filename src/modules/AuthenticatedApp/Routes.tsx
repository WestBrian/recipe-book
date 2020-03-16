import { Router } from '@reach/router'
import CreateRecipe from 'modules/CreateRecipe'
import React, { FC } from 'react'
import RecipeDetails from 'modules/RecipeDetails'
import RecipeViewer from 'modules/RecipeViewer'

const Routes: FC = () => {
  return (
    <Router>
      <RecipeViewer path={'/'} />
      <RecipeDetails path={'/recipes/:id'} />
      <CreateRecipe path={'/create'} />
    </Router>
  )
}

export default Routes
