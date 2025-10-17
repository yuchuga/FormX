import { useState } from 'react'
import { Snackbar, Alert, Stack, Button } from '@mui/material'

const Notification = () => {

  const [open, setOpen] = useState(false)

  const anchor = { vertical: 'bottom', horizontal: 'right' }

  const handleClick = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };
  
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant='outlined' onClick={handleClick}>
        Open error snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={5000} anchorOrigin={anchor} onClose={handleClose}>
        <Alert severity='error' variant='filled' onClose={handleClose} sx={{ width: '100%' }}>
          This is a error message!
        </Alert>
      </Snackbar>
    </Stack>
  )
}

export default Notification