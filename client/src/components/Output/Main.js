import Profile from './Profile';
import Experience from './Experience';
import React, { Component } from 'react';
import AutoHeightTextArea from './AutoHeightTextArea'
import ExperienceForm from './ExperienceForm';
import '../components.css';

export class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Profile data={this.props.prof}/>
        <Experience />
      </div>
    )
  }
}

export default Main