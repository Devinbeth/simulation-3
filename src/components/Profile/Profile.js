import React, { Component } from 'react';
import './Profile.css';

export default class Profile extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className='Profile'>  
                <h1>Profile</h1>
                <a href={ process.env.REACT_APP_LOGOUT }><button>Logout</button></a>
            </div> 
        )
    }
}
