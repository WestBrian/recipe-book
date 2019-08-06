import { Box, CircularProgress } from '@material-ui/core'
import React, { FC } from 'react'

const FullPageLoad: FC = () => {
  return (
    <Box
      width={'100%'}
      height={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      component={'main'}
    >
      <CircularProgress size={60} />
    </Box>
  )
}

export default FullPageLoad
