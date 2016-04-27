import React, { Component } from 'react'

class TextDisplay extends Component {

	render() {
		return <div>I am going to display text from parent : {this.props.text}</div>
	}
}

export default TextDisplay