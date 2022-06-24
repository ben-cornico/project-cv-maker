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

    deleteEduc = (e) => {
      e.preventDefault();
      this.setState({
        educList: this.state.educList.slice(0, -1)
      })

      this.props.deleteEduc()
    }
  render() {
    return (
      <fieldset className='fieldset-education'>
        <legend>Education</legend>
            <ul>
                {this.state.educList}
            </ul>
        <div className="btn-group">
          <button className="btn-add" onClick={this.addEduc}>Add More</button>
          <button className="btn-delete" onClick={this.deleteEduc}>Delete</button>
        </div>
        
      </fieldset>
    )
  }
}

export default Education