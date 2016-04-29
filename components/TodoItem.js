import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoItem extends Component {

  handleComplete() {

    this.props.dispatch(actions.completeTodo(this.props.todo.id));
  }

  handleInComplete() {
    this.props.dispatch(actions.deleteTodo(this.props.todo.id));
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
