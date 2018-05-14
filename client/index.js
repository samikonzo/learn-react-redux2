import React from 'react'
import ReactDOM from 'react-dom'


import Provider from 'react-redux'
import store from './redux/store.js'



ReactDOM.render(
	<Provider store={store}>
		<div> lol bebebe </div>
	</Provider>, document.getElementById('app')
)