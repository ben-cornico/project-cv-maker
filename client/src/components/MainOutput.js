import React, { Component } from 'react';
import Layout from './Output/Layout';
import ExperienceFormComponent from './Form/ExperienceFormComponent';
import Skills from './Form/Skills';
import Education from './Form/Education';
import PersonalInfo from './Form/PersonalInfo';
import ProfileSummary from './Form/ProfileSummary';

export class MainOutput extends Component {
    constructor() {
        super();
        this.state = {
            info: {
                name: '',
                email: '',
                pNumber: '',
                linkedin: '',
                address: {
                    addressLine1: '',
                    city: '',
                    stateProvince: '',
                    zipPostal: ''
                }
            },
            profSummary: '',
            exp: [{
                name: '',
                locationYear: '',
                info: ['']
            }],
            skills: [''],
            education: [{
                degreeName: '',
                universityLocation: '',
                year: ''
            }]
        }

        this.addressHandleChange = this.addressHandleChange.bind(this);
        this.infoHandleChange = this.infoHandleChange.bind(this);
        this.profChange = this.profChange.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);

    }

    handleExpOnChange = (e) => {
        let items = this.state.exp;
        const key = e.target.parentNode.parentNode.dataset.key;

        
        items[key] = {...items[key], [e.target.name]: e.target.value}

        this.setState({
          items
        })

        console.log(this.state)
    }

    handleInfoOnChange = (e) => {
        const expKey = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;
        const infoKey = e.target.dataset.key;
        let items = this.state.exp[expKey].info;

        items[infoKey] = [...items[infoKey], e.target.value]

        items[infoKey] = e.target.value;
        this.setState({
            items
        })
        console.log(this.state)
    }

    addInfo = (e) => {
        let items = this.state.exp

        const expKey = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;
        console.log(expKey)
        console.log(items[expKey])
        items[expKey] ={...items[expKey], info: [...items[expKey].info, '']}
        this.setState({
            items
        })
    }

    deleteInfo = (e) => {
        let items = this.state.exp;
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key)
        const expKey = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;
        items[expKey] = {...items[expKey], info: items[expKey].info.slice(0, -1)}
        this.setState({
            items
        })

    }

    addExp = (e) => {
        this.setState({
            ...this.state, exp: [...this.state.exp, { name: '', locationYear: '', info: ['']}]
        })
    }

    deleteExp = (e) => {
        this.setState({
            ...this.state, exp: this.state.exp.slice(0, -1),
        })
    }

    infoHandleChange = (e) => {
        
        this.setState({
            info: {
                ...this.state.info, [e.target.name]: e.target.value
            }
        })
    }

    addressHandleChange = (e) => {

        this.setState({
            info: {
                ...this.state.info, 
                address: {
                    ...this.state.info.address, [e.target.name]: e.target.value
                }
            }
        })
    }

    addSkill = (e) => {
        this.setState({
            ...this.state,
            skills: [...this.state.skills, '']
        })
    }

    deleteSkill = (e) => {
        const items = this.state.skills.slice(0, -1)
        console.log(items)
        this.setState({
            ...this.state,
            skills: items,
        })
    }

    handleSkillChange = (e) => {
        const key = e.target.dataset.key
        const skills = this.state.skills;
        skills[key] = e.target.value

        this.setState({
            ...this.state,
            skills: [...skills]
        })
    }

    profChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
        console.log(e.target.name)
    }

    addEduc = (e) => {
        this.setState({
            ...this.state,
            education: [...this.state.education, {degreeName: '', universityLocation: '', year: ''}]
        })
    }

    deleteEduc = (e) => {
        this.setState({
            ...this.state,
            education: this.state.education.slice(0, -1)
        })
    }

    handleEducChange = (e) => {
        const educKey = e.target.parentNode.parentNode.dataset.key;
        const items = this.state.education;
        items[educKey] = {...items[educKey], [e.target.name]: e.target.value}
        this.setState({
            ...this.state,
            items
        })
    }

  render() {
    return (
      <>
        <form>
            <PersonalInfo infoChange={this.infoHandleChange} addressChange={this.addressHandleChange}/>
            <ProfileSummary profChange={this.profChange}/>

            <fieldset className="fieldset-exp">
                <legend>Experience</legend>
                <ExperienceFormComponent func={this.addExp} onChange={this.handleExpOnChange} addInfo={this.addInfo} onInfoChange={this.handleInfoOnChange} deleteInfo={this.deleteInfo} deleteExp={this.deleteExp}/> 
            </fieldset>

            <Skills skillChange={this.handleSkillChange} addSkill={this.addSkill} deleteSkill={this.deleteSkill}/>

            <Education addEduc={this.addEduc} onChange={this.handleEducChange} deleteEduc={this.deleteEduc}/>
        </form>
        <Layout data={this.state}/>
      </>
    )
  }
}

export default MainOutput