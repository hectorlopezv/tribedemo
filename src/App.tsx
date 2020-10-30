import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grupo from './assets/pictures/Grupo.jpg';
import Gallery from './components/Gallery';
import About from './components/About';
import AppDemo from './components/AppDemo';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/app">
            <AppDemo/>
        </Route>

        <Route path="/">
            <Navbar />
            <Home grupo={Grupo}/>
            <Gallery/>
            <About/>
        </Route>
      </Switch>

  </Router>


  );
}

export default App;
