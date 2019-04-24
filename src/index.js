import React from 'react';
import {render} from 'react-dom';
import {Home} from './components/Home';

import {BrowserRouter,Route,Switch, Redirect } from 'react-router-dom'

import Sijainti from "./components/Sijainti";
import Error from './components/Error';

import {OmatTiedot} from "./components/omattiedot";
import VaraaHuolto2 from "./components/varaahuolto";
import VaraaHuolto from "./components/xyz";
import {Historia} from "./components/historia";
import Kirjaudu from "./components/Kirjaudu";
import Rekkaus from "./components/rekkaus";
import Logg from "./components/kirjaudu2";
import axios from "axios";
import { PrivateRoute } from './components/priva';
import { createHashHistory } from 'history'
import { connect } from 'react-redux';






class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            token: '',
            user: {},
        };
    }


    callbakki = (data) => {
        console.log("XX");
        console.log(data);
        this.setState({tokeni: data});
    };

    callbakki2 = (data) => {
        console.log("XX");
        console.log(data);
        alert("Login Successful!");
        const { name, id, email, auth_token } = data;
        let userData = {
            name,
            id,
            email,
            auth_token,
            timestamp: new Date().toString()
        };
        let appState = {
            isLoggedIn: true,
            user: userData
        };

        console.log(email);
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
        });


    };

    componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            console.log(AppState);
            this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
    }
    render() {

    return(
  <BrowserRouter>
      <div>

      <Switch>
          <Route path={"/"} render={props => <Kirjaudu palautaprops={this.callbakki2}/>} exact/>
          <PrivateRoute path={"/etusivu"} component={(props) => <Home state={this.state}/>} exact/>
          <PrivateRoute path={"/sijainti"} component={Sijainti}/>
          <PrivateRoute path={"/omattiedot"} component={OmatTiedot}/>
          <PrivateRoute path={"/varaahuolto"} component={VaraaHuolto}/>
          <PrivateRoute path={"/varaahuolto2"} component={VaraaHuolto2}/>
          <PrivateRoute path={"/historia"} component={Historia}/>
          <Route path={"/kirjaudu"} render={props => <Kirjaudu palautaprops={this.callbakki2}/>} />
          <Route path={"/rekkaus"} render={props => <Rekkaus palautaprops={this.callbakki2}/>} />
          <Route
              path="/login"
              render={props => <Logg {...props} loginUser={this.handlekirjaudu} />}
          />

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
