import React, { Component } from 'react'
import Actions from '../redux/Actions'
class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleClick(event) {
    event.preventDefault();
    this.props.dispatch(Actions.addTodo(this.state.inputText));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Add a to do Item..."
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    )
  }

}

export default TodoInput
