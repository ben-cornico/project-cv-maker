import React, { Component } from 'react'

export class AutoHeightTextArea extends Component {
    constructor(props) {
        super();
        this.state = {
            tempText: props.tempText,
            textareaId: props.textareaId,
            textareaName: props.textareaName
        }
    }

    handleInput = (e) => {
        console.log(this.state)

        e.target.style.height = (e.target.scrollHeight)+"px";
    }
  render() {


    return (
      <textarea onInput={this.handleInput} placeholder={this.state.tempText} id={this.state.textareaId} name={this.state.textareaName}></textarea>
    )
  }
}

export default AutoHeightTextArea