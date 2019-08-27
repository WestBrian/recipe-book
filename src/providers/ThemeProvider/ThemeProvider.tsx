import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core'
import React, { FC } from 'react'

const theme = responsiveFontSizes(createMuiTheme())

const ThemeProvider: FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
