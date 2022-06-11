import Objective from './Objective';
import Experience from './Experience';
import React, { Component } from 'react';
import './components.css';

export class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Objective />
        <Experience />
      </div>
    )
  }
}

export default Main