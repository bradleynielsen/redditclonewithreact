import React, { Component } from 'react';




export default class Newpost extends Component {
	constructor() {
		super()

		this.state = {
			postname: "",
			posttext: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		var newState = {}
		console.log(event.target)
		newState[event.target.id] = event.target.value
		this.setState(newState)

	}

	handleSubmit() {

		console.log(this.state)
		// this.setState({
			 
		// });
	}

	render() {
		return (
		
			<div className="formGroup">				
				<div>
					<label htmlFor="postname" className="col2 colFormLabel">Post Name</label>
					<input id="postname" className="formControl" type="text" value={this.state.postname} onChange={this.handleChange}/>
				</div>
				<div>
					<label htmlFor="posttext">Post Text</label>
			    	<textarea id="posttext" className="formControl" value={this.state.posttext} rows="5" onChange={this.handleChange}></textarea>
				</div>
			  	<button id="submitbutton" type="submit" className="btn btnPrimary" onClick={this.handleSubmit}>Post it!</button>
			</div>	

		);
	}
}
