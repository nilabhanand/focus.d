import React, { Component } from 'react'
import Dashboard from './Dashboard';
import JournalTab from './JournalTab';
import TodoTab from './TodoTab';
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            activeTab: 0
        }
    }


    logout = e => {
        console.log("clicked");
        firebase.auth().signOut().then(function() {
            console.log("signout");
        }).catch((error) => {
            console.log("error");
            console.log(error);
        });
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    render() {

        return (
            <div>
                <AppBar position="static" color="transparent" className="appbar">
                    <Tabs className="main-tabs" value={this.state.activeTab} onChange={this.handleChange} centered>
                        <Tab label="Home" style={{ color: "#fff", fontSize: "15px" }}/>
                        <Tab label="Todo" style={{ color: "#fff", fontSize: "15px" }}/>
                        <Tab label="Journal" style={{ color: "#fff", fontSize: "15px" }}/>
                        <Button onClick={this.logout} style={{ color: "#fff", fontSize: "15px" }}>Logout</Button>
                    </Tabs>
                    {this.state.activeTab === 0 && (
                        <Dashboard />
                    )}
                    {this.state.activeTab === 1 && (
                        <TodoTab />
                    )}
                    {this.state.activeTab === 2 && (
                        <JournalTab />
                    )}
                    
                </AppBar>
            </div>
      
        );
    }
}
export default Home
