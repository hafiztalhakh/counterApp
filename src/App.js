import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Counter from './Components/Counter';

class App extends Component {

  darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  render() {

    return (
      <ThemeProvider theme={this.darkTheme}>
        <CssBaseline />
        <Counter />
      </ThemeProvider>
    )
  }
}

export default App;

