import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#272727',
      dark: '#000000',
      light: '#4f4f4f',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ff652f',
      dark: '#c53200',
      light: '#ff975d',
      contrastText: '#000000'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#4f4f4f',
    },
  },
});

export default theme;