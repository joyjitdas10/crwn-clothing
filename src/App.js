import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';


import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';

const HatsPage =()=> (
  <div>
      <h1>HATS</h1>
  </div>
)

function App() {
  return (
    
    <div>
        <Header/>
        <Switch>
          <Route exact path ='/' component={Homepage} />
          <Route path ='/shop' component={ShopPage} />
        </Switch>
    </div>
    
  );
}

export default App;
