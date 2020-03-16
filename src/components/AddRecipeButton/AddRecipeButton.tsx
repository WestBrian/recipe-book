import { Add } from '@material-ui/icons'
import { Fab, createStyles, makeStyles } from '@material-ui/core'
import { navigate } from '@reach/router'
import AddModal from './AddModal'
import React, { FC, useState } from 'react'

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
  const [open, setOpen] = useState(false)

  const handleCreateAutomatically = (value: string) => {
    setOpen(false)
    onSubmit(value)
  }

  const handleCreateManually = () => {
    setOpen(false)
    navigate('/create')
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
      <AddModal
        open={open}
        createAutomatically={handleCreateAutomatically}
        createManually={handleCreateManually}
        cancel={() => setOpen(false)}
      />
    </>
  )
}

export default AddRecipeButton
