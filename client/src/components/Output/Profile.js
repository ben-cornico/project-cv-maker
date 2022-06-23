import React, { Component } from 'react';
import Temp from './Temp';

export class Profile extends Component {
  render() {
    return (
      <div className='objective'>
        <h2 className='component-title'>Profile</h2>
        <div className="profile">
          <p className="profile">
            {this.props.data ? this.props.data : <Temp />}
          </p>
        </div>
      </div>
    )
  }
}

export default Profile