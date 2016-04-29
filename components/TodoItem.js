import React, { Component } from 'react'

class TodoItem extends Component {

  handleComplete() {

    this.props.actions.completeTodo(this.props.todo.id);
  }

  handleInComplete() {
    this.props.actions.deleteTodo(this.props.todo.id);
  }

  render() {
    return (
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)}>Complete</button>
        <button onClick={this.handleInComplete.bind(this)}>Delete</button>
      </li>
    )
  }

}

export default TodoItem
