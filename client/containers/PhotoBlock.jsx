let l = console.log

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { albumChange, albumShowing, albumHidding, albumReady } from '../redux/actions.js'
import PhotoNav from '../components/PhotoNav.jsx'
import PhotoGrid from '../components/PhotoGrid.jsx'




class PhotoBlock extends Component {

	componentDidMount(){
		/*let { slectedAlbum: selected } = this.props
		if(selected && selected.id !== undefined && !selected.show){
			l('componentDidMount albumShowHandler')
			this.props.albumShowHandler()	
		}*/
	}

	componentWillReceiveProps(nextProps){
		/*let { selectedAlbum: selected } = nextProps
		if(selected && selected.id !== undefined && !selected.show){
			l('nextProps albumShowHandler')
			this.props.albumShowHandler()
		}*/
	}

	render() {
		l(this.props)

		let { albumsNames: names, albums, selectedAlbum: selected } = this.props
		let { albumStartChanging, albumShowHandler, albumHideHandler, albumReadyHandler } = this.props
		
		selected = {
			...selected, 
			...albumFindById(albums, selected.id)
		}
		
		let PhotoBlockClass = 'PhotoBlock '
		let PhotoGridClass = 'PhotoGrid '
		if( selected.show ) PhotoGridClass += 'PhotoGrid--show'

		return (
			<div className={PhotoBlockClass}> 
				<PhotoNav albumChangeHandler={albumStartChanging} names={names} />

				<h3>{selected && selected.name} </h3>

				<PhotoGrid photo={selected && selected.photo} className={PhotoGridClass} showPhoto={albumShowHandler} albumId={selected.id}/>
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
	let { albums, albumsNames, selectedAlbum } = state.album
	return {
		albums, albumsNames, selectedAlbum
	}
}

let mapDispatchToProps = (dispatch) =>{
	return {
		albumChangeHandler: ( albumId ) => {
			dispatch( albumChange(albumId) )
		},

		albumShowHandler: () => {
			dispatch( albumShowing() )
		},

		albumHideHandler: () => {
			dispatch( albumHidding() )
		},

		albumStartChanging: (albumId) => {
			dispatch( albumHidding() )
			setTimeout(() => {
				dispatch( albumChange(albumId) )
			}, 1000)
		},

	}
}


PhotoBlock = connect( mapStateToProps, mapDispatchToProps )(PhotoBlock)

export default PhotoBlock