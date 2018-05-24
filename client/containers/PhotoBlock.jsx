let l = console.log

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { albumChange, albumShowing, albumHidding, albumPopupShow, albumPopupHide } from '../redux/actions.js'
import PhotoNav from '../components/PhotoNav.jsx'
import PhotoGrid from '../components/PhotoGrid.jsx'
import Popup from '../components/Popup.jsx'




class PhotoBlock extends Component {
	state = {}

	albumShowHandler = () => {
		let { dispatch } = this.props

		dispatch( albumShowing() )
	}

	albumHideHandler = () => {
		let { dispatch } = this.props

		dispatch( albumHidding() )
	}

	albumStartChanging = (albumId) => {
		let { dispatch } = this.props

		dispatch( albumHidding() )
		setTimeout(() => {
			dispatch( albumChange(albumId) )
		}, 1000)
	}

	albumPopupShowHandler = (img) => {
		let { dispatch } = this.props

		dispatch( albumPopupShow(img) )
	}

	albumPopupHideHandler = () => {
		let { dispatch } = this.props

		dispatch( albumPopupHide() )
	}

	render() {
		l(this.props)

		let { albumsNames: names, 
				albums, 
				selectedAlbum: selected, 
				popup } = this.props

		let { albumStartChanging, 
				albumShowHandler, 
				albumHideHandler, 
				albumPopupShowHandler,
				albumPopupHideHandler  } = this

		
		selected = {
			...selected, 
			...albumFindById(albums, selected.id)
		}
		
		let photoBlockClass = 'PhotoBlock '
		let photoGridClass = 'PhotoGrid '
		if( selected.show ) photoGridClass += 'PhotoGrid--show'
		let albumNameClass = 'PhotoBlock_albumName '
		if( selected.show ) albumNameClass += 'PhotoBlock_albumName--show'

		return (
			<div className={photoBlockClass}> 
				<PhotoNav albumChangeHandler={albumStartChanging} names={names} />

				<h3 className={albumNameClass}>{selected && selected.name} </h3>

				<PhotoGrid 
					photo={selected && selected.photo} 
					className={photoGridClass} 
					showPhoto={albumShowHandler} 
					albumId={selected.id}
					albumPopupShowHandler={albumPopupShowHandler}
				/>

				{popup.show && <Popup state={popup} albumPopupHideHandler={albumPopupHideHandler} popup={popup}/> }

			</div>
		)

	}
}

let albumFindById = (albums, id) => {
	for(var i = 0; i < albums.length; i++){
		if(albums[i].id == id) return albums[i]
	}
}


let mapStateToProps = (state) => {
	let { albums, albumsNames, selectedAlbum, popup } = state.album
	return {
		albums, albumsNames, selectedAlbum, popup
	}
}


PhotoBlock = connect( mapStateToProps )(PhotoBlock)

export default PhotoBlock