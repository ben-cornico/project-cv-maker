import React, { Component } from 'react';

export class Skills extends Component {
  constructor(props) {
    super();
    console.log(props.skills);
  }
  render() {
    return (
      <div className='skills'>
        <h2 className='component-title'>SKILLS</h2>
        <ul className="skill-list">
          {this.props.skills.map((skill) => {
            return (
              <li>{skill ? skill : 'Skill Name'}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Skills