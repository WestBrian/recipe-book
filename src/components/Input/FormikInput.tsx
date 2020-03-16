import { Field, FieldProps } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'
import React, { FC } from 'react'

interface FormikInputProps {
  name: string
}

const FormikInput: FC<FormikInputProps & TextFieldProps> = ({
  name,
  ...textFieldProps
}) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => <TextField {...textFieldProps} {...field} />}
    </Field>
  )
}

export default FormikInput
