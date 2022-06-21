import React, { Component } from 'react'

export class EducationForm extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className='eduction-form' data-key={this.props.indexKey}>
        <div className="form-group">
            <label htmlFor="degreeName">Degree Name / Major</label>
            <input type="text" name="degreeName" id="degreeName" onChange={this.props.onChange}/>
        </div>
        
        <div className="form-group">
            <label htmlFor="universityLocation">University, Location</label>
            <input type="text" name="universityLocation" id="universityLocation" onChange={this.props.onChange}/>
        </div>
        
        <div className="form-group">
            <label htmlFor="year">Year</label>
            <input type="text" name="year" id="year" onChange={this.props.onChange}/>
        </div>
      </div>
    )
  }
}

export default EducationForm