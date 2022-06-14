import React, { Component } from 'react';
import AutoHeightTextArea from './AutoHeightTextArea';

export class Profile extends Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div className='objective'>
        <h2 className='component-title'>Profile</h2>
        <div className="profile">
          <AutoHeightTextArea tempText="Enter Profile Summary" textareaId="profile" textareaName="profile"/>
        </div>
      </div>
    )
  }
}

export default Profile