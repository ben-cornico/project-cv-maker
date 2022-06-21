import React, { Component } from 'react';
import Info from './Info';
import Skills from './Skills';
import Education from './Education';


export class Sidebar extends Component {
  constructor(props) {
    super()

    console.log(props)
  }
  render() {
    return (
      <div className='sidebar'>
        <Info data={this.props.data}/>
        <Skills skills={this.props.skills}/>
        <Education edu={this.props.edu}/>
      </div>
    )
  }
}

export default Sidebar