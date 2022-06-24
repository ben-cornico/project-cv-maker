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
  render() {
    return (
      <>
        {this.state.exp}
        <button className="btn-add" onClick={this.add}>
            Add More
        </button>
      </>
    )
  }
}

export default ExperienceFormComponent