import { FormLabel, Grid, TextField } from '@material-ui/core'
import { Recipe } from 'providers/RecipeProvider/types'
import { Stack } from 'components/Layout'
import { useFormikContext } from 'formik'
import React, { ChangeEvent, FC } from 'react'
import get from 'lodash/get'

interface FormikTimeInputProps {
  name: string
  label?: string
}

const FormikTimeInput: FC<FormikTimeInputProps> = ({ name, label }) => {
  const { values, setFieldValue } = useFormikContext<Recipe>()
  const value = get(values, name)
  const hours = Math.floor(value / 3600)
  const minutes = Math.floor((value % 3600) / 60)

  function setHours(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    const hourSeconds = Number(value) * 3600
    const minuteSeconds = minutes * 60
    setFieldValue(name, hourSeconds + minuteSeconds)
  }

  function setMinutes(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target
    const hourSeconds = hours * 3600
    const minuteSeconds = Number(value) * 60
    setFieldValue(name, hourSeconds + minuteSeconds)
  }

  return (
    <Stack spacing={2}>
      {label && (
        <FormLabel>
          {label} {value}
        </FormLabel>
      )}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label={'Hours'}
            variant={'filled'}
            type={'number'}
            value={hours || ''}
            onChange={setHours}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={'Minutes'}
            variant={'filled'}
            type={'number'}
            value={minutes || ''}
            onChange={setMinutes}
          />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default FormikTimeInput
