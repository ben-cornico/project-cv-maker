import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';

export class ExperienceFormComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            exp: [
                <ExperienceForm onChange={props.onChange}  keyIndex='0' addInfo={props.addInfo} onInfoChange={props.onInfoChange} deleteInfo={props.deleteInfo}/>
            ]
        }

        console.log(props)

        this.add = this.add.bind(this)
    }

    add = (e) => {
        e.preventDefault();
        this.setState({
            exp: [...this.state.exp, <ExperienceForm onChange={this.props.onChange} keyIndex={this.state.exp.length} addInfo={this.props.addInfo} onInfoChange={this.props.onInfoChange} deleteInfo={this.props.deleteInfo}/>]
        })
        this.props.func();
    }

    delete = (e) => {
      e.preventDefault();
      this.setState({
        exp: this.state.exp.slice(0, -1)
      })

      this.props.deleteExp()
    }
  render() {
    return (
      <div className='exp-container'>

        <ul>
          {this.state.exp.map(x => {
            return (
              <li className='exp-list-item'>{x}</li>
            )
          })}
        </ul>
        <div className="btn-group">
          <button className="btn-add" onClick={this.add}>
            Add More
          </button>
          <button className="btn-delete" onClick={this.delete}>
            Delete
          </button>
        </div>

      </div>
    )
  }
}

export default ExperienceFormComponent