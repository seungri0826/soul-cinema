import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import
import ScrollToTop from './components/ScrollToTop';
import InsertMovie from './pages/InsertMovie';
import InsertTheater from './pages/InsertTheater';
import InsertPrice from './pages/InsertPrice';
import ResMovie from './pages/ResMovie';
import PayMovie from './pages/PayMovie';
import Snack from './pages/Snack';
import MovieGridList from './pages/MovieGridList';
import MovieDetail from './pages/MovieDetail';
import NavBar from './commons/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';


class App extends Component {
  render() {
    return(
      <div>
        <NavBar/>
        <div style={{ paddingTop: '67px' }}></div>
        
        <BrowserRouter>
        <ScrollToTop>
          <Route path="/" exact component={MovieGridList} />
          <Route path="/InsertMovie" exact component={InsertMovie} />
          <Route path="/InsertTheater" exact component={InsertTheater} />
          <Route path="/InsertPrice" exact component={InsertPrice} />
          <Route path="/ResMovie" exact component={ResMovie} />
          <Route path="/PayMovie/:price" exact component={PayMovie} />
          <Route path="/Snack" exact component={Snack} />
          <Route path="/MovieGridList" exact component={MovieGridList} />
          <Route path="/Movie/:movieId" exact component={MovieDetail} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Signup" exact component={Signup} />
          </ScrollToTop>
        </BrowserRouter> 
      </div>
    )
  }
}

export default App;