import Constants from './constants.js'


let defaultAlbumState = {
	selected : undefined
}

let albumsReducer = (state = defaultAlbumState, action) => {
	switch(action.type){
		case Constants.CHANGE_ALBUM: {
			return {...state, selected: action.payload}
		};

		default: return state
	}
}

export default albumsReducer