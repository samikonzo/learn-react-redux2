import React, { Component } from 'react';

class Popup extends Component {
	state = {
		show: false,
	}

	componentDidMount(){
		setTimeout( () => { this.setState({ show : true }) }, 100)
	}

	onClickHandler(){
		this.setState({ show: false}, () => {
			setTimeout(() => {
				this.props.albumPopupHideHandler()
			}, 1000)
		})

	}

	render() {

		let { img } = this.props.popup
		let { show } = this.state

		l(show, img)

		let popupClass = 'Popup '
		if(show) popupClass += 'Popup--show '

		return (
			<div className={popupClass} onClick={() => {this.onClickHandler()}}>
				<img src={img} className="Popup_img"/>
			</div>
		);
	}
}

export default Popup