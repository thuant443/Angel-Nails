import React , {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import about from './component/about';
import appointment from './component/appointment';
import contact from './component/contact'
import notfound from './component/not-found'
import NavBar from './component/navBar';

class App extends Component{
  render(){

    return(
      <React.Fragment>
      <NavBar></NavBar>
    <main className="container">
     <Switch>
     <Route  path="/about" component={about}></Route>
      <Route path="/appointment" component={appointment}></Route>
      <Route path="/contact" component={contact}></Route>
      <Redirect from="/" exact to="/about"></Redirect>
      <Route path="/not-found" component={notfound}></Route>
      <Redirect to="/not-found" />
     </Switch>
     
    </main>
    </React.Fragment>
    );
  }
}

export default App;
