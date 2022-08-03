import React from 'react';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Cart from './component/cart/Cart';
import {BrowserRouter,Route, Link,Switch} from "react-router-dom"
import Demo from './component/Demo';
import Naavubartem from './component/Naavubartem';
import  LoginContextProvider from "./context/contextProvider.js"
import DertailView from './component/ItemDetails/DertailView.js';
import DialogLogin from './component/Header/DialogLogin';

const App = () => {
  return <>
  <LoginContextProvider>
  <BrowserRouter>
    <Header/>
     <Switch>
     <Route exact path="/" component={Home}  />
     <Route exact path="/cart" component={Cart}/>
     <Route exact path="/product/:id" component={DertailView}/>
 
    </Switch>
 
  </BrowserRouter>
</LoginContextProvider>
  </>
};

export default App;
