import React, { Component } from 'react'
import firebase from 'firebase/app';
import 'firebase/database';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export class JournalEntries extends Component {
    constructor (props) {
        super(props);
    }

    removeNote (id) {
        firebase.database().ref('notes').child(id).remove();
    }

    render() {
        return (
            <div className="notes-wrapper">
                <div className="notes">
                    {this.props.notes.map(note => (
                        <Accordion className="note" key={note.id}>
                            <AccordionSummary className="note-title" expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header"> 
                                <IconButton onClick={() => this.removeNote(note.id)} style={{ color: "#fff" }}>
                                    <CloseIcon />
                                </IconButton>
                                <Typography variant="h8">{note.title}</Typography>
                                
                            </AccordionSummary>
                            <AccordionDetails className="note-content">
                                <p>{note.note}</p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div> 
        )
    }
}

export default JournalEntries;
