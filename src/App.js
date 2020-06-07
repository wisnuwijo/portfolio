import React from 'react';
import Navigation from './components/navigation/navigation';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skill from './components/skill/skill';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          {/* when you using switch only one route loaded, order matter */}
          <Route path="/" exact component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skill} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
