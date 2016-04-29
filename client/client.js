import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/Store'
import { Provider } from 'react-redux'

let initialState = {

	todos : [
		{
			text : 'First To do',
			id : 0,
			completed : false
		}
	]
};

let store = configureStore(initialState);

render(
  <Provider store = { store }>
  <App/>
  </Provider>,
  document.getElementById('app')
)
