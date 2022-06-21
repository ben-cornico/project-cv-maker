import React, { Component } from 'react';
import EducationForm from './EducationForm';

export class Education extends Component {
    constructor(props) {
        super();

        this.state ={
            educList: [<li><EducationForm indexKey='0' onChange={props.onChange} /></li>]
        }
    }

    addEduc = (e) => {
        e.preventDefault();
        this.setState({
            educList:[...this.state.educList,<li><EducationForm indexKey={this.state.educList.length} onChange={this.props.onChange}/></li>]
        })

        this.props.addEduc()
    }
  render() {
    return (
      <fieldset className='fieldset-education'>
        <legend>Education</legend>
            <ul>
                {this.state.educList}
            </ul>
        
        <button className="btn-add" onClick={this.addEduc}>Add More</button>
      </fieldset>
    )
  }
}

export default Education