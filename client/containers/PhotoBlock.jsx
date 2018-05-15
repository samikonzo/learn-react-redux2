import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeYear } from '../redux/actions.js'

let l = console.log


const mapStateToProps = (state) => {
	return {
		year: state.year
	}
}

class PhotoBlock extends Component {
	render() {
		return (
			<div 
				className="PhotoBlock" 
				onClick={(e) => {
					this.props.onChangeYear(this.props.year + 1)
				}}
			>
				<p>{this.props.year}</p>
			</div>
		);
	}
}

PhotoBlock = connect(
	mapStateToProps,
	( dispatch ) => ({onChangeYear : (year) => (dispatch(changeYear(year)))})
)(PhotoBlock)

export default PhotoBlock