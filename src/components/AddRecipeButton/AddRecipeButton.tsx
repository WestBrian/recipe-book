import { Add } from '@material-ui/icons'
import {
  Box,
  Button,
  Fab,
  Grid,
  Modal,
  TextField,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import React, { FC, FormEvent, useState } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
    },
  })
)

interface AddRecipeButtonProps {
  onSubmit(url: string): void
}

const AddRecipeButton: FC<AddRecipeButtonProps> = ({ onSubmit }) => {
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(value)
    setOpen(false)
  }

  return (
    <>
      <Fab
        color={'primary'}
        onClick={() => setOpen(true)}
        className={classes.fab}
      >
        <Add />
      </Fab>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={classes.modal}
      >
        <Box className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant={'h6'} color={'inherit'}>
                  ADD A RECIPE
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant={'outlined'}
                  label={'Url'}
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder={'Paste in a recipe url...'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justify={'flex-end'}>
                  <Grid item>
                    <Button
                      variant={'contained'}
                      color={'primary'}
                      type={'submit'}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default AddRecipeButton
