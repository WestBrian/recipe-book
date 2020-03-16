import { Field, FieldProps } from 'formik'
import { TextField } from '@material-ui/core'
import InputMask from 'react-input-mask'
import React, { FC, InputHTMLAttributes } from 'react'

interface FormikTimeMaskProps {
  name: string
  label: string
}

const FormikTimeMask: FC<FormikTimeMaskProps> = ({ name, label }) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <InputMask mask={'99:99'} maskChar={''} {...field}>
          {({
            color,
            size,
            ...inputProps
          }: InputHTMLAttributes<HTMLInputElement>) => (
            <TextField variant={'filled'} label={label} {...inputProps} />
          )}
        </InputMask>
      )}
    </Field>
  )
}

export default FormikTimeMask
