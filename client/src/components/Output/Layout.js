import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

import '../components.css';

import React, { Component } from 'react'

export class Layout extends Component {
  constructor(props) {
    super();

    console.log(props)
  }
  render() {
    return (
      <form className='cv-layout' onSubmit={this.test} >
        <Header name={this.props.data.info.name}/>

        <div className="cv-body">
          <Main prof={this.props.data.profSummary} />
          <Sidebar data={this.props.data.info}/>
        </div>


      </form>
    )
  }
}

export default Layout