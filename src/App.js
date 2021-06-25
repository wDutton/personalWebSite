import Header from './Components/Header'
import { createMuiTheme, ThemeProvider, Container } from '@material-ui/core'
import HomePageGrid from './Components/HomePageGrid';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#424242',
      light: '#6d6d6d',
      dark: '#1b1b1b',
      contrastTest: '#ffffff'
    },
    secondary: {
      main: '#2e7d32',
      light: '#60ad5e',
      dark: '#005005',
      contrastTest: 'ffffff'
    }
  }
})


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header/>
        <Container>
          <HomePageGrid/>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
