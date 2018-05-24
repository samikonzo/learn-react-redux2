import Constants from './constants.js'

let l = console.log


export let loadUser = data => {
	return {
		type: Constants.USER_LOAD,
		payload: data
	}
}

export let albumChange = albumId => {
	l('albumChange')
	return {
		type: Constants.ALBUM_CHANGE,
		payload: albumId

	}
}

export let albumShowing	= () => {
	l('albumShowing')
	return {
		type: Constants.ALBUM_SHOWING,
	}
}

export let albumHidding	= () => {
	l('albumHidding')
	return {
		type: Constants.ALBUM_HIDDING,
	}
}