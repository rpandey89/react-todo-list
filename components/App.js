import React, { Component } from 'react'
import TextInput from './TextInput'

class App extends Component {

  render() {
    return(
    	<div>
    		<h1>This is App Component!!</h1>
    		<TextInput/>
    	</div>
   	)
  }

}

export default App
//return <div>This is the App component</div> <div></div>//Cannot have two siblings <div> at same level