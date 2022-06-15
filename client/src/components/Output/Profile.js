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
          <p className="profile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis magna quis erat tempor, et eleifend augue mattis. Sed imperdiet libero sed ipsum rhoncus, sed tincidunt felis sollicitudin.
          </p>
        </div>
      </div>
    )
  }
}

export default Profile