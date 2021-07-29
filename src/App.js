import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from "react";
import Header from './Components/Header'
import ContactPageComponent from './Components/ContactPageComponent';
import HomePageComponent from './Components/HomePageComponent';
import ResumePageComponent from './Components/ResumePageComponent';
import TechKnowledgePageComponent from './Components/TechKnowledgePageComponent';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageComponent}></Route>
        <Route path="/Resume" component={ResumePageComponent}></Route>
        <Route path="/Contact" component={ContactPageComponent}></Route>
        <Route path="/TechKnowledge" component={TechKnowledgePageComponent}></Route>
      </Switch>

    </BrowserRouter>

  );
}

export default App;
