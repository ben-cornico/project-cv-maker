import React, { Component } from 'react';


export class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='cv-header'>{this.props.name ? this.props.name : 'FULL NAME'}</div>
    )
  }
}

export default Header