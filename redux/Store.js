import { applyMiddleware, compose, createStore } from 'redux'
import Reducer from './Reducer'
import logger from 'redux-logger'

let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = {todos : []}) {

	return finalCreateStore(Reducer, initialState);
}