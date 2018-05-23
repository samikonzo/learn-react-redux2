import Constants from './constants.js'

let l = console.log


export let loadUser = data => {
	return {
		type: Constants.USER_LOAD,
		payload: data
	}
}

export let changeAlbum = albumId => {
	return{
		type: Constants.ALBUM_CHANGE,
		payload: albumId

	}
}