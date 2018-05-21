import { combineReducers } from 'redux'
import albumsReducer from './albumsReducer.js'


const rootReducer = combineReducers({
	album: albumsReducer
})


export default rootReducer