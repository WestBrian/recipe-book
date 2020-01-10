import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import React, { FC, useState } from 'react'

const Transition = React.forwardRef<unknown, TransitionProps>(
  function Transition(props, ref) {
    return <Slide direction={'up'} ref={ref} {...props} />
  }
)

interface AddModalProps {
  open: boolean
  createAutomatically(value: string): void
  createManually(): void
  cancel(): void
}

const AddModal: FC<AddModalProps> = ({
  open,
  createAutomatically,
  createManually,
  cancel,
}) => {
  const [value, setValue] = useState('')

  return (
    <Dialog open={open} onClose={cancel} TransitionComponent={Transition}>
      <DialogTitle>Add a new recipe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can automatically import a recipe from various sites or create
          your own.
        </DialogContentText>
        <TextField
          label={'Recipe url'}
          value={value}
          placeholder={'Enter in the full url of the recipe...'}
          onChange={e => setValue(e.target.value)}
          fullWidth
        />
        <DialogActions>
          <Button variant={'text'} onClick={createManually}>
            Create manually
          </Button>
          <Button
            variant={'contained'}
            color={'primary'}
            onClick={() => createAutomatically(value)}
          >
            Add recipe
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default AddModal
