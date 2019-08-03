import React, { FC } from 'react'
import { Box, CircularProgress } from '@material-ui/core'

const FullPageLoad: FC = () => {
  return (
    <Box
      width={'100%'}
      height={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <CircularProgress size={60} />
    </Box>
  )
}

export default FullPageLoad
