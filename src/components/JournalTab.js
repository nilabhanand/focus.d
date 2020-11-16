import React, { Component } from 'react'
import JournalEntries from './JournalEntries';
import Notes from './Notes';
import firebase from 'firebase/app';
import 'firebase/database';

export class JournalTab extends Component {
    constructor () {
        super();

        this.state = {
            notes: []
        }
    }

    componentDidMount () {
        this.db = firebase.database();

        this.listenForChange();
    }

    listenForChange () {
        this.db.ref('notes').on('child_added', snapshot => {
            let note = {
                id: snapshot.key,
                title: snapshot.val().title,
                note: snapshot.val().note
            }

            let notes = this.state.notes;
            notes.push(note);

            this.setState({
                notes: notes
            });
        });

        this.db.ref('notes').on('child_removed', snapshot => {
            let notes = this.state.notes;
            notes = notes.filter(note => note.id !== snapshot.key)

            this.setState({
                notes: notes
            });
        });
    }
    render() {
        return (
            <div className="journal-container">
                <div className="journal-wrapper">
                <Notes />
                <JournalEntries notes={this.state.notes} />
                </div>
            </div>
        )
    }
}

export default JournalTab
