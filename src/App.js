import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';


import Homepage from './pages/homepage/homepage.component';

const HatsPage =()=> (
  <div>
      <h1>HATS</h1>
  </div>
)

function App() {
  return (
    
    <div>
        <Switch>
          <Route exact path ='/' component={Homepage} />
          <Route path ='/hats' component={HatsPage} />
        </Switch>
    </div>
    
  );
}

export default App;
