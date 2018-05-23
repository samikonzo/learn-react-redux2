import data from './user.json'
import store from './redux/store.js'
import { loadUser } from './redux/actions.js'

let l = console.log

let fetchUserData = () => {
	l('fetchUserData')

	return new Promise(( resolve, reject ) => {
		setTimeout(() => {
			resolve(data)
		}, 3000)
	})
}


let getUserData = () => {
	fetchUserData().then( data => {
		store.dispatch( loadUser(data) )
	})
}

export default getUserData