import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
import ShowBooksHostDetails from "./Pages/ShowBooksHostDetails";
import ShowBooks from './Components/ShowBooks';
import ShowBooksHost from './Components/ShowBooksHost';
import BooksInCorso from './Components/BooksInCorso';
import BooksAttive from "./Components/BooksAttive"
import MyAnnunci from './Pages/MyAnnunci';
import WithAuth from './Utils/WithAuth';
import AttiveDetails from './Pages/AttiveDetails';
import BooksInSospeso from './Components/BooksInSospeso';
import InSospesoDetails from "./Pages/InSospesoDetails";
import BooksConcluse from './Components/BooksConcluse';
import Payment from './Pages/Payment';

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
          <Route path="/PortaleHost" component={PortaleHost} /> 
          <Route path="/MyAnnunci" component={MyAnnunci} />
          <Route path="/ShowBooks" component={ShowBooks} />
          <Route path="/ShowBooksHost" exact component={ShowBooksHost} />
          <Route path="/ShowBooksHost/:id" component={ShowBooksHostDetails} />
          <Route path="/BooksInCorso" exact component={BooksInCorso} />
          <Route path="/BooksInCorso/:id" component={InCorsoDetails} />
          <Route path="/BooksAttive" exact component={BooksAttive} />
          <Route path="/BooksAttive/:id" component={AttiveDetails} />
          <Route path="/BooksInSospeso" exact component={BooksInSospeso} />
          <Route path="/BooksInSospeso/:id" component={InSospesoDetails} />
          <Route path="/BooksConcluse" exact component={BooksConcluse} />
          <Route path="/BooksConcluse/:id" component={ShowBooksHostDetails} />
          <Route path="/Payment" component={Payment} />
          <Footer /> 
        </div>
      </Switch>
    </Router>
  );
}

export default App;
