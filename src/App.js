import Header from "./Components/Header/Header";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Admin from "./Components/Admin/Admin";
import AddProduct from "./Components/AddProduct/AddProduct";
import Login from "./Components/Login/Login";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import CheckOut from "./Components/CheckOut/CheckOut";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import Orders from "./Components/Orders/Orders";

 export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
       <Header></Header>
       <Switch>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/deals">
          <Home/>
          </Route>
          <PrivetRoute path="/orders">
          <Orders/>
          </PrivetRoute>
          <PrivetRoute path="/admin">
          <Admin/>
          </PrivetRoute>
          <PrivetRoute path="/checkOut/:Id">
          <CheckOut/>
          </PrivetRoute>
          <Route path="/addProduct">
          <AddProduct/>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
       </Router>
    </UserContext.Provider>
  );
}

export default App;
