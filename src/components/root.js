import React from 'react';
import Drawer from './drawer'
import {Header} from './Header'
export class Root extends React.Component{
    render(){
        return(
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                <Drawer/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      {this.props.children}
                  </div>
              </div>
          </div>
        );
    }
}