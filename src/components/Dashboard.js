import React, { Component } from "react";
import Clock from './Clock';
import Weather from './Weather';
import { SocialIcon } from 'react-social-icons';

class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">
                <Weather />
                <div className="social-icons">
                    <ul>
                        <li><SocialIcon url="http://www.youtube.com" bgColor="#fff" /></li>
                        <li><SocialIcon url="http://www.facebook.com" bgColor="#fff" /></li>
                        <li><SocialIcon url="http://www.twitter.com" bgColor="#fff" /></li>
                        <li><SocialIcon url="http://www.instagram.com" bgColor="#fff" /></li>
                        <li><SocialIcon url="http://www.linkedin.com" bgColor="#fff" /></li>
                        <li><SocialIcon url="http://www.reddit.com" bgColor="#fff" /></li>
                    </ul>
                </div>
                <Clock />
            </div>
        )  
    }
}

export default Dashboard;