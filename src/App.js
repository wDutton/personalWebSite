import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from "react";
import Header from './Components/Header'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import AboutMeCard from './Components/AboutMe';
import HomePageComponent from './Components/HomePageComponent';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6d6d6d', //424242
      light: '#6d6d6d',
      dark: '#1b1b1b',
      contrastTest: '#ffffff'
    },
    secondary: {
      main: '#60ad5e', //2e7d32
      light: '#60ad5e',
      dark: '#005005',
      contrastTest: 'ffffff'
    }
  }
})


function App() {
  return (
      <ThemeProvider theme={theme}> 
        <BrowserRouter>   
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePageComponent}></Route>
          <Route path="/AboutMe" component={AboutMeCard}></Route>
        </Switch>       
          
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
