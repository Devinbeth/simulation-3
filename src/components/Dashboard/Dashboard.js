import React, { Component } from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className='Dashboard'>  
                <h1>Dashboard</h1>
                <a href={ process.env.REACT_APP_LOGOUT }><button>Logout</button></a>
            </div> 
        )
    }
}
