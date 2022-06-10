import React, { Component } from 'react';
import Info from './Info';
import Skills from './Skills';
import Education from './Education';


export class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <Info />
        <Skills />
        <Education />
      </div>
    )
  }
}

export default Sidebar