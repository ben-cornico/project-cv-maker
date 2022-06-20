import React, { Component } from 'react';
import AutoHeightTextArea from './AutoHeightTextArea';
export class ExperienceForm extends Component {
    constructor(props) {
        super();
        
        this.state = {
            jobInfo: [<li><input type='text' id="info" name="info" /></li>]
        }

        this.addInfo = this.addInfo.bind(this)
    }

    addInfo = (e) => {
        e.preventDefault();
        this.setState({
            jobInfo: [...this.state.jobInfo, <li><input type='text' id="info" name="info" /></li>]
        })

        this.props.addInfo();
    }

  render() {
    return (
        <div className="div-experience" data-key={this.props.keyIndex}>
            <div className="form-group">
                <label htmlFor="expTitle">Title</label>
                <input type="text" name="name" id="expTitle" onChange={this.props.onChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="locationYear">Location / Year</label>
                <input type="text" name="locationYear" id="locationYear" onChange={this.props.onChange}/>
            </div>

            <div className="exp-info">
                <ul>
                    {this.state.jobInfo}
                </ul>
                <button className='btn-add' onClick={this.addInfo}>Add Info</button>
            </div>
        </div>
    )
  }
}

export default ExperienceForm