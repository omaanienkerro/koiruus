import React from 'react';
import {render} from 'react-dom';
import {Home} from './components/Home';

import {BrowserRouter,Route,Switch } from 'react-router-dom'

import Sijainti from "./components/Sijainti";
import Error from './components/Error';

import {OmatTiedot} from "./components/omattiedot";
import VaraaHuolto2 from "./components/varaahuolto";
import VaraaHuolto from "./components/xyz";
import {Historia} from "./components/historia";
import Kirjaudu from "./components/Kirjaudu";


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
          <Route path={"/varaahuolto2"} component={VaraaHuolto2}/>
          <Route path={"/historia"} component={Historia}/>
          <Route path={"/kirjaudu"} component={Kirjaudu}/>

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
