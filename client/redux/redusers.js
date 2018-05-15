import { combineReducers } from 'redux'
import Constants from './constants.js'

let l = console.log

const initState = {
	year: 2015,
}

function yearChange(state = 2015 ,action){
	switch (action.type) {
		case Constants.CHANGE_YEAR: {
			return action.payload
		}

		default: {
			return state
		}
	}
}


const rootReducer = combineReducers({
	year: yearChange,
})


export default rootReducer