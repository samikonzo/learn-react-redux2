import { createStore } from 'redux'
import rootReducer from './reducers.js'

let store = createStore(rootReducer)

export default store
