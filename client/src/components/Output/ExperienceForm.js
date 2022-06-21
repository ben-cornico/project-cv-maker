import React, { Component } from 'react';
export class ExperienceForm extends Component {
    constructor(props) {
        super();
        
        this.state = {
            jobInfo: [<li><input type='text' id="info" name="info" data-key='0' onChange={props.onInfoChange}/></li>]
        }
        console.log(props)

        this.addInfo = this.addInfo.bind(this)
    }

    addInfo = (e) => {
        e.preventDefault();
        this.setState({
            jobInfo: [...this.state.jobInfo, <li><input type='text' id="info" name="info" data-key={this.state.jobInfo.length} onChange={this.props.onInfoChange} /></li>]
        })
        this.props.addInfo(e)
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
                <button className='btn-add' onClick={this.addInfo} >Add Info</button>
            </div>
        </div>
    )
  }
}

export default ExperienceForm