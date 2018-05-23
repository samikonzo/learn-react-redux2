let l = console.log

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeAlbum } from '../redux/actions.js'
import PhotoNav from '../components/PhotoNav.jsx'
import PhotoGrid from '../components/PhotoGrid.jsx'




class PhotoBlock extends Component {
	render() {
		//let { albums, albumsNames: names } = this.state 
		//let { selected } = this.props.album
		//let photo = selected ? albums[selected] : undefined
		l(this.props)

		let { albumsNames: names, albums, selectedAlbum: selected, onChangeAlbum } = this.props
		
		selected = {
			...selected, 
			...albumsFindById(albums, selected.id)
		}
		l(selected)
		

		return (
			<div className="PhotoBlock"> 
				<PhotoNav onChangeAlbum={onChangeAlbum} names={names} />

				<h3>{selected && selected.name} </h3>

				<PhotoGrid photo={selected && selected.photo} />
				
			</div>
		)

	}
}

let albumsFindById = (albums, id) => {
	for(var i = 0; i < albums.length; i++){
		if(albums[i].id == id) return albums[i]
	}
}


let mapStateToProps = (state) => {

	let { albums, albumsNames, selectedAlbum } = state.album

	return {
		albums, albumsNames, selectedAlbum
	}
}

let mapDispatchToProps = (dispatch) =>{
	return {
		onChangeAlbum: ( albumId ) => {
			dispatch( changeAlbum(albumId) )
		}
	}
}


PhotoBlock = connect( mapStateToProps, mapDispatchToProps )(PhotoBlock)

export default PhotoBlock