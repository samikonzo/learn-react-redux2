import React, { Component } from 'react';

class Popup extends Component {
	render() {
		return (
			<div className="Popup">
				<img src={this.props.img}/>
			</div>
		);
	}
}

export default Popup