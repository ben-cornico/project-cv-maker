import React, { Component } from 'react';


export class Header extends Component {
  

  render() {
    return (
      <div className='cv-header'><input type="text" name="fullName" id="fullName" placeholder='Full Name'/></div>
    )
  }
}

export default Header