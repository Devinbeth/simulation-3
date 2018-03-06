import React, { Component } from 'react';
import './Dashboard.css';
import home from '../../assets/home.png';
import search from '../../assets/search.png';

export default class Dashboard extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className='Dashboard'>
                <header>
                    <h1>Helo</h1>
                    <img src={home} alt='' />
                    <img src={search} alt='' />
                    <h1>Dashboard</h1>
                    <a href={ process.env.REACT_APP_LOGOUT }><div>Logout</div></a>
                </header>
            </div> 
        )
    }
}
