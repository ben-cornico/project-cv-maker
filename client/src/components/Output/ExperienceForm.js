import React, { Component } from 'react';

export class ExperienceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobInfo: []
        }

        this.addJobInfo = this.addJobInfo.bind(this)
    }

    addJobInfo = () => {
        console.log("ADD INFO")
        this.setState({
            jobInfo: [...this.state.jobInfo, <li><input type="text" name="jobInfo" id="jobInfo" placeholder='Job Info'/></li>]
        })
    }
  render() {
    return (
        <div className="exp">
            <p className="exp-title">
                <input type="text" name="jobTitle" id="jobTitle" placeholder='Job Title'/>
            </p>
            <p className="exp-location-date">
                <input type="text" name="jobLocationDate" id="jobLocationDate" placeholder='Location / Date' />
            </p>
            <div className='info-container'>
            <ul className='exp-info'>
                    {this.state.jobInfo}
                </ul>
                <div className="btn-group">
                    <button onClick={this.addJobInfo}>Add Info</button>
                    <button>Delete</button>
                </div>
            </div>
                
        </div>
    )
  }
}

export default ExperienceForm