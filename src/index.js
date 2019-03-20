import React from 'react';
import {render} from 'react-dom';
import {Home} from './components/Home';

import {BrowserRouter,Route,Switch } from 'react-router-dom'

import {Sijainti} from "./components/Sijainti";
import Error from './components/Error';

import {OmatTiedot} from "./components/omattiedot";
import {VaraaHuolto} from "./components/varaahuolto";
import {Historia} from "./components/historia";


class App extends React.Component{
render() {
    return(
  <BrowserRouter>
      <div>

      <Switch>
          <Route path={"/"} component={Home} exact/>
          <Route path={"/sijainti"} component={Sijainti}/>
          <Route path={"/omattiedot"} component={OmatTiedot}/>
          <Route path={"/varaahuolto"} component={VaraaHuolto}/>
          <Route path={"/historia"} component={Historia}/>

          <Route component={Error}/>
      </Switch>
      </div>
  </BrowserRouter>

    );
}
}

// ========================================

render(
    <App/>,
    document.getElementById('app')
);
