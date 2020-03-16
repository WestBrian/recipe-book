import { Box, Grid, Paper, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { FormikInput, FormikTimeMask } from 'components/Input'
import { Recipe } from 'providers/RecipeProvider/types'
import { Stack } from 'components/Layout'
import React, { FC } from 'react'

const blankRecipe: Recipe = {
  id: '',
  title: '',
  description: '',
  pictureUrl: '',
  ingredients: [],
  directions: [],
  meta: {
    yield: 0,
    prepTime: 0,
    cookTime: 0,
    totalTime: 0,
  },
  protein: 'beef',
}

interface RecipeFormProps {
  initialValues?: Recipe
}

const RecipeForm: FC<RecipeFormProps> = ({ initialValues }) => {
  return (
    <Formik
      initialValues={{ ...blankRecipe, ...initialValues }}
      onSubmit={() => {}}
    >
      {() => (
        <Form>
          <Box maxWidth={600}>
            <Stack spacing={4}>
              <Paper>
                <Box padding={4}>
                  <Stack spacing={2}>
                    <Typography variant={'h6'}>Basic Information</Typography>
                    <Grid container>
                      <Grid item xs={12}>
                        <FormikInput
                          name={'title'}
                          label={'Title'}
                          variant={'filled'}
                        />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12}>
                        <FormikInput
                          name={'description'}
                          label={'Description'}
                          variant={'filled'}
                          multiline
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>
              </Paper>
              <Paper>
                <Box padding={4}>
                  <Stack spacing={2}>
                    <Typography variant={'h6'}>Meta Information</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <FormikInput
                          name={'meta.yield'}
                          label={'Yields'}
                          variant={'filled'}
                          type={'number'}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormikTimeMask
                          name={'meta.prepTime'}
                          label={'Prep Time'}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormikInput
                          name={'meta.cookTime'}
                          label={'Cook Time'}
                          variant={'filled'}
                          type={'number'}
                        />
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>
              </Paper>
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default RecipeForm
