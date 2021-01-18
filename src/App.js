import React, { Component } from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Router from './Layout/Router';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'lato',
    ].join(','),
  }
})

export default class App extends Component {

  render() {

    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    )
  }
}
