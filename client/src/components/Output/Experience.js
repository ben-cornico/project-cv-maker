import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';

export class Experience extends Component {
  constructor() {
    super();
    this.state = {
      jobList: [<ExperienceForm />],
    }

    this.addJob = this.addJob.bind(this)
  }


  addJob() {
    this.setState({
      jobList: [...this.state.jobList, <ExperienceForm />]
    })
  }

  render() {
    return (
      <div className='experience'>
        <h2 className='component-title'>EXPERIENCE</h2>
        <div className="exp-container">
          {this.state.jobList}
          <button onClick={this.addJob}>Add Experience</button>
        </div>
      </div>
    )
  }
}

export default Experience