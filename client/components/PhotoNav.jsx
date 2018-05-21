import React, { Component } from 'react';

class PhotoNav extends Component {
	render() {
		return (
			<div className="PhotoNav">
				{this.props.names.map(nameObj => (
					<a 
						key={nameObj.id} 
						href="#" 
						onClick={(e) => { 
							e.preventDefault()
							this.props.onChangeAlbum(nameObj.id) 
						}}
						className="PhotoNav_link"
					>
						{nameObj.name}
					</a>
				))}	
			</div>
		);
	}
}

export default PhotoNav