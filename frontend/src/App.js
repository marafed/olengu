import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import HomeHost from './Pages/HomeHost';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Logout from './Pages/Logout';
import Dashboard from './Pages/Dashboard';
import InsertItem from './Pages/InsertItem';
import PortaleHost from './Pages/PortaleHost';
import SearchResults from './Pages/SearchResults';
import SearchItemDetails from './Pages/SearchItemDetails';
import InCorsoDetails from './Pages/InCorsoDetails';
import ShowBooksHostDetails from "./Pages/ShowBooksHostDetails";
import ShowBooks from './Pages/ShowBooks';
import ShowBooksHost from './Pages/ShowBooksHost';
import BooksInCorso from './Components/BooksInCorso';
import BooksAttive from "./Components/BooksAttive"
import MyAnnunci from './Pages/MyAnnunci';
import AttiveDetails from './Pages/AttiveDetails';
import BooksInSospeso from './Components/BooksInSospeso';
import InSospesoDetails from "./Pages/InSospesoDetails";
import BooksConcluse from './Components/BooksConcluse';
import Payment from './Pages/Payment';
import CheckOut from './Pages/CheckOut';
import CheckIn from './Pages/CheckIn';

function App() {
  return(
    <Router>
      <Switch>
        <div className="Home">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/become_host" component={HomeHost} />
          <Route path="/login" component={Login} />
          <Route path="/legister" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/InsertItem" component={InsertItem} />
          <Route path="/SearchResults" exact component={SearchResults} />
          <Route path="/SearchResults/:id_ann" component={SearchItemDetails} />
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
          <Route path="/CheckOut" component={CheckOut} />
          <Route path="/CheckIn" component={CheckIn} />
          <Footer /> 
        </div>
      </Switch>
    </Router>
  );
}

export default App;
