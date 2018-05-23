import React, { Component } from 'react';
import Popup from './Popup.jsx'

class PhotoGrid extends Component {
	render() {
		/*let { photo: album } = this.props

		if(album){
			var { photo } = album
		} */

		let { photo } = this.props

		return (
			<div className="PhotoGrid">
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