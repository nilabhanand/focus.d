import React, { Component } from "react";
import firebase from 'firebase/app';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import 'firebase/database';
import { Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

class Journal extends Component {
    constructor () {
        super();
        this.state = {
            title: '',
            note: ''
        }

        this.createNote = this.createNote.bind(this);
    }

    onChangeHandler (evt, key) {
        this.setState({
            [key]: evt.target.value
        })
    }

    createNote() {
        if (this.state.title !== '' && this.state.note !== '') {
            firebase.database().ref('notes').push({
                title: this.state.title,
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <FirebaseDatabaseProvider>
            <div className="journal">
                <Typography style={{ padding: 16 }} variant="h2">
                    Write A Journal Entry
                </Typography>
                <div className="form-group">
                    <Typography htmlFor="noteform-title" style={{ padding: 10, textAlign: "left" }} variant="h6">Date</Typography>
                    <textarea className="noteform-title" type="text" id="noteform-title" name="noteform-title" value={this.state.title} onChange={(evt) => 
                        this.onChangeHandler(evt, 'title')} style={{ width: "550px", height: "25px" }} />
                </div>
                <br></br>
                <div className="form-group">
                    <Typography htmlFor="noteform-notes" style={{ padding: 10, textAlign: "left" }} variant="h6">Note</Typography>
                    <textarea className="noteform-notes" name="noteform-notes" id="noteform-notes" value={this.state.note} onChange={(evt) => 
                        this.onChangeHandler(evt, 'note')} style={{ width: "550px", height: "200px" }} />
                </div>
                <br></br>
                <Button onClick={this.createNote} style={{ color: "#fff", fontSize: "18px" }}>Create Entry</Button>
            </div>
            </FirebaseDatabaseProvider>
        )  
    }
}

export default Journal;
