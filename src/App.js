import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Details from './Component/Details/Details';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import CreatForm from './Component/Login/CreatForm';
import Booking from './Component/Booking/Booking';
import PrivateRoute from './Component/Login/PrivateRoute';
 

export const UserContext = createContext();

function App() { 

  const [loggedInUser ,setLoggedInUser] = useState({});

  return (
       <div >
       <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
       <Router>
       <Header/>
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
           <Route exact path="/home">
             <Home />
           </Route>
           <Route exact path="/creat">
           <CreatForm />
           </Route>
           <Route exact path="/home/details">
           <Details />
           </Route>
           <Route exact path="/login">
           <Login />
          </Route>
          <PrivateRoute exact path="/booking">
            <Booking/>
          </PrivateRoute>
          </Switch>
       </Router>
       </UserContext.Provider>
       </div>
  ); 
}

export default App;
