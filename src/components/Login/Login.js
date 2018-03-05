import React, { Component } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

export default class Login extends Component {
    render() {
        return (
            <div className='Login'>
                <div className='button-box'>
                    <img src={logo} alt='helo logo'/>
                    <h1>Helo</h1>
                    <a href={ process.env.REACT_APP_LOGIN }><div className='login'>Login / Register</div></a>
                </div>
            </div> 
        )
    }
}
