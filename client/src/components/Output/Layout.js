import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

import '../components.css';

import React, { Component } from 'react'

export class Layout extends Component {
  constructor(props) {
    super();

  }
  render() {
    return (
      <form className='cv-layout' onSubmit={this.test} >
        <Header name={this.props.data.info.name}/>

        <div className="cv-body">
          <Main prof={this.props.data.profSummary} exp={this.props.data.exp}/>
          <Sidebar data={this.props.data.info} skills={this.props.data.skills}/>
        </div>


      </form>
    )
  }
}

export default Layout