import React, { Component } from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>  
                <h1>Dashboard</h1>
                <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
            </div> 
        )
    }
}
