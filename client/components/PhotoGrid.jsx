import React, { Component } from 'react';

class PhotoGrid extends Component {
	state = {
		albumId: undefined
	}

	componentDidMount(){

	}

	componentWillReceiveProps(nextProps){
		let { albumId } = nextProps
		if( this.state.albumId !== albumId){
			// dont need render
			this.state.albumId = albumId

			this.props.showPhoto()
		}
 	}

 	onClickHandler(e){
 		if(!e.target) return
 		if(e.target.tagName !== 'IMG') return	

 		this.props.albumPopupShowHandler(e.target.getAttribute('src'))
 	}

	render() {

		let { photo } = this.props

		return (
			<div className={this.props.className} onClick={(e) => { this.onClickHandler(e) }}>
				{photo && photo.map && photo.map( link => {
					return (
						<div className="PhotoGrid_img-wrapper" key={link}>
							<img src={link}  className="PhotoGrid_img"/> 
						</div>
					)
				})}		
			</div>
		);
	}
}

export default PhotoGrid