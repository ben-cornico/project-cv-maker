import React, { Component } from 'react'

export class Skills extends Component {
    constructor(props) {
        super();

        this.state = {
            skills: [<input type="text" name="skill" id="skill" data-key='0' onChange={props.skillChange}/>]
        }
        console.log(props)
    }

    addSkill = (e) => {
      e.preventDefault();
        this.setState({
            skills: [...this.state.skills, <input type="text" name="skill" id="skill" data-key={this.state.skills.length} onChange={this.props.skillChange}/>]
        })

        this.props.addSkill()
    }

    deleteSkill = (e) => {
      e.preventDefault()
      if(this.state.skills.length > 1) {
        const items = this.state.skills.slice(0, -1);
        console.log(items)
        this.setState({
          skills: items,
        })
  
        this.props.deleteSkill();
      }
      
    }
  render() {
    return (
      <fieldset className='fieldset-skills'>
        <legend>Skills</legend>
        <label>Skill list</label>
        <div className="skill-list">
          <ul>
              {this.state.skills.map(skillInput => {
                return(
                  <li>{skillInput}</li>
                )
              })}
          </ul>
          <div className="btn-group">
            <button className="btn-list-add" onClick={this.addSkill}><span className="mdi mdi-plus"></span></button>
            <button className='btn-list-delete' onClick={this.deleteSkill}><span className='mdi mdi-minus'></span></button>
          </div>
          
        </div>
            
      </fieldset>
    )
  }
}

export default Skills