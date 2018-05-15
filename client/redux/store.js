import { createStore } from 'redux'
import rootReducer from './redusers.js'

let store = createStore(rootReducer)

//console.log(store.getState())

export default store
