import constants from './constants.js'

let l = console.log

export function changeYear(year){
	l('change year : ', year)
	
	return {
		type: constants.CHANGE_YEAR,
		payload: year
	}
}
