import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import HomeHost from './Pages/HomeHost';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import DashboardHost from './Pages/DashboardHost';
import InsertItem from './Pages/InsertItem';
import PortaleHost from './Pages/PortaleHost';
import SearchResults from './Pages/SearchResults';
import SearchItemDetails from './Pages/SearchItemDetails';
import InCorsoDetails from './Pages/InCorsoDetails';
import ShowBooks from './Components/ShowBooks';
import ShowBooksHost from './Components/ShowBooksHost';
import BooksInCorso from './Components/BooksInCorso';
import MyAnnunci from './Pages/MyAnnunci';
import WithAuth from './Utils/WithAuth';
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
          <Route path="/dashboard" exact component={WithAuth(Dashboard)} />
          <Route path="/DashboardHost" exact component={WithAuth(DashboardHost)} />
          <Route path="/InsertItem" component={InsertItem} />
          <Route path="/SearchResults" exact component={SearchResults} />
          <Route path="/SearchResults/:id" component={SearchItemDetails} />
          <Route path="/ShowBooks" component={ShowBooks} />
          <Route path="/ShowBooksHost" exact component={ShowBooksHost} />
          <Route path="/ShowBooksHost/:id" component={InCorsoDetails} />
          <Route path="/PortaleHost" component={PortaleHost} /> 
          <Route path="/MyAnnunci" component={MyAnnunci} />
          <Route path="/BooksInCorso" component={BooksInCorso} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
