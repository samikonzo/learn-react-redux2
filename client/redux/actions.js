import constants from './constants.js'

let l = console.log

export function changeAlbum(albumId){
	l('change album : ', albumId)
	
	return {
		type: constants.CHANGE_ALBUM,
		payload: albumId
	}
}
