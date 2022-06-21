import React, { Component } from 'react';
import AutoHeightTextArea from './AutoHeightTextArea';

export class Profile extends Component {
  constructor(props) {
    super();
    
  }
  render() {
    return (
      <div className='objective'>
        <h2 className='component-title'>Profile</h2>
        <div className="profile">
          <p className="profile">
            {this.props.data ? this.props.data : 'Profile Summary'}
          </p>
        </div>
      </div>
    )
  }
}

export default Profile