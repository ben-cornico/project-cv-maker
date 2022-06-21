import React, { Component } from 'react'

export class Skills extends Component {
    constructor(props) {
        super();

        this.state = {
            skills: [<input type="text" name="skill" id="skill" data-key='0' onChange={props.skillChange}/>]
        }
    }

    addSkill = (e) => {
      e.preventDefault();
        this.setState({
            skills: [...this.state.skills, <input type="text" name="skill" id="skill" data-key={this.state.skills.length} onChange={this.props.skillChange}/>]
        })

        this.props.addSkill()
    }
  render() {
    return (
      <fieldset>
        <legend>Skills</legend>
            <ul>
                {this.state.skills.map(skillInput => {
                  return(
                    <li>{skillInput}</li>
                  )
                })}
            </ul>
            <button className="btn-add-skill" onClick={this.addSkill}>Add skill</button>
      </fieldset>
    )
  }
}

export default Skills