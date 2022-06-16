import React, { Component } from 'react';


export class Header extends Component {
  

  render() {
    return (
      <div className='cv-header'>{this.props.name}</div>
    )
  }
}

export default Header