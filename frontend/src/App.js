import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import HomeHost from './Pages/HomeHost';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <div className="Home">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/become_host" component={HomeHost} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
