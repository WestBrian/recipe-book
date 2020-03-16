import { Recipe } from 'providers/RecipeProvider/types'
import { RecipeForm } from 'components/Form'
import { RouteComponentProps } from '@reach/router'
import { Stack } from 'components/Layout'
import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import get from 'lodash/get'

const CreateRecipe: FC<RouteComponentProps> = ({ location }) => {
  const recipe: Recipe | undefined = get(location, 'state.recipe')

  return (
    <Stack spacing={2}>
      <Typography variant={'h4'}>Add New Recipe</Typography>
      <RecipeForm initialValues={recipe} />
    </Stack>
  )
}

export default CreateRecipe
