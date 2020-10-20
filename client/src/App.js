import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Trade from './pages/Trade';
import Seminars from './pages/Seminars';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="main">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/trade"><Trade /></Route>
          <Route exact path="/seminars"><Seminars /></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
