import { combineReducers } from 'redux'
import reducerAlbum from './reducerAlbum.js'

/**
* Page Reducer
*/

let initPage = {
	url: '/'
}
let reducerPage = (state = initPage, action) => {
	return state
} 

/**
* User Reducer
*/

let initeUser = {
	name: undefined,
	email: undefined,
	auth: false,
}
let reducerUser = (state = initeUser, action) => {
	return state
} 


/**
* Root Reducer
*/

const rootReducer = combineReducers({
	// albums editing
	album: reducerAlbum,

	// page editing
	page: reducerPage,

	// user editing
	user: reducerUser,
})


export default rootReducer