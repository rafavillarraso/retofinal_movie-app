
import React from 'react';
import {Switch, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import 'bulma/css/bulma.css'
import {Detail} from "./pages/Detail";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";

class App extends React.Component{


  render() {

      return (
        <div className="App">
          <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/detail/:id' component={Detail}/>
              <Route component={NotFound}/>
          </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
