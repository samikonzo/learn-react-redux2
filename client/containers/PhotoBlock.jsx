let l = console.log

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeAlbum } from '../redux/actions.js'
import { albums } from '../user.json'
import PhotoNav from '../components/PhotoNav.jsx'
import PhotoGrid from '../components/PhotoGrid.jsx'

let albumsNames = []
for(var id in albums){
	albumsNames.push({
		id: id,
		name: albums[id].name
	})
}




class PhotoBlock extends Component {
	state = {
		albums, albumsNames
	}


	render() {
		let { albums, albumsNames: names } = this.state 
		let { selected } = this.props.album
		let photo = selected ? albums[selected] : undefined

		return (
			<div className="PhotoBlock"> 
				<PhotoNav onChangeAlbum={this.props.onChangeAlbum} names={names}/>
				<h1 className="PhotoBlock_albumName"> {selected && albums[selected] && albums[selected].name} </h1>
				<PhotoGrid photo={photo} />
			</div>
		)

	}
}


let mapStateToProps = (state) => {
	return {
		album: state.album
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