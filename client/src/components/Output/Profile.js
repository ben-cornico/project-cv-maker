import React, { Component } from 'react'

export class Profile extends Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div className='objective'>
        <h2 className='component-title'>Profile</h2>
        <div className="grow-wrap">
          <textarea name="text" id="text" >

          </textarea>
        </div>
      </div>
    )
  }
}

export default Profile