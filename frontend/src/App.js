import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import HomeHost from './Pages/HomeHost';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import InsertItem from './Pages/InsertItem';
import SearchResults from './Pages/SearchResults';
import SearchItemDetails from './Pages/SearchItemDetails';
import ShowBooks from './Components/ShowBooks';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <div className="Home">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/become_host" component={HomeHost} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          {/* <Route path="/dashboard/:id" component={ItemDetails}/> */}
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/InsertItem" component={InsertItem} />
          <Route path="/SearchResults" exact component={SearchResults} />
          <Route path="/SearchResults/:id" component={SearchItemDetails} />
          <Route path="/ShowBooks" component={ShowBooks} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
