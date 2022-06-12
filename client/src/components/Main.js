import Profile from './Profile';
import Experience from './Experience';
import React, { Component } from 'react';
import './components.css';

export class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Profile />
        <Experience />
      </div>
    )
  }
}

export default Main