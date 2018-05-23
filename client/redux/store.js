import { createStore } from 'redux'
import rootReducer from './reducers.js'
global.l = console.log


let store = createStore(rootReducer)

store.subscribe(() => {
	l(store.getState())
})

//store.dispatch({ type: 'TEST', payload: {name: 'bebebe', id: Math.random().toString(36)}})
//store.dispatch({ type: 'TEST', payload: {name: 'bebebe2', id: Math.random().toString(36)}})

export default store
