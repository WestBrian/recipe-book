import { Router } from '@reach/router'
import React, { FC } from 'react'
import RecipeDetails from 'modules/RecipeDetails'
import RecipeViewer from 'modules/RecipeViewer'

const Routes: FC = () => {
  return (
    <Router>
      <RecipeViewer path={'/'} />
      <RecipeDetails path={'/recipes/:id'} />
    </Router>
  )
}

export default Routes
