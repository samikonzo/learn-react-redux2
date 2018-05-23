import Constants from './constants.js'
import { combineReducers } from 'redux'

let l = console.log


let initState = {
	albums: [],

	albumsNames: [],

	selectedAlbum: {
		id: undefined,
		loading: false,
	}
}


let albums = (state = initState.albums, action) => {
	switch(action.type){
		case Constants.USER_LOAD: {
			return [...action.payload.albums]
		};

		default: return state
	}
} 

let albumsNames = (state = initState.albumsNames, action) => {
	switch(action.type){
		case Constants.USER_LOAD: {
			let namesArr = action.payload.albums.map(album => {
				return {
					id: album.id,
					name: album.name,
				}
			}) 

			return namesArr
		};

		default: return state
	}
}

let selectedAlbum = (state = initState.selectedAlbum, action) => {
	switch(action.type){
		case Constants.USER_LOAD: {
			return {
				...state,
				id: action.payload.albums && action.payload.albums[0] &&  action.payload.albums[0].id
			}
		};

		case Constants.ALBUM_CHANGE: {
			return {...state, id: action.payload}
		};

		case Constants.ALBUM_LOAD: {
			return {...state, loading: true}
		};

		case Constants.ALBUM_LOAD_SUCCESS: {
			return {...state, loading: false, error: false}
		};

		case Constants.ALBUM_LOAD_FAIL: {
			return {...state, loading: false, error: action.payload}
		};

		default: return state;
	}
}


let reducerAlbum = combineReducers({
	albums,
	albumsNames,
	selectedAlbum,
})

export default reducerAlbum