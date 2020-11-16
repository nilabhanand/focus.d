import './App.css';
import React, { Component } from "react";
import JournalTab from './components/JournalTab';
import Dashboard from './components/Dashboard';
import TodoTab from './components/TodoTab';
import Home from './components/Home';
import Login from './components/Login';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import firebase from "firebase/app";
import "firebase/auth";
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      //console.log(user)
      //{this.state.user ?  (<Home />) : (<Login />)}
      if (user) {
        this.setState( {user} );
      } else {
        this.setState( {user: null });
      }
    });
  }

  render () {
    

    return (
      <div className="App">
    {this.state.user ? (<Home />) : (<Login />)}
      </div>
      
    );
  }
}

export default App;