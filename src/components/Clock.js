import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="clock">
                <Typography style={{ padding: 16, fontSize: 130 }} variant="h1">
                    {this.state.date.toLocaleTimeString()}
                </Typography>     
            </div>
        )  
    }
}

export default Clock;