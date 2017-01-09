import React, { Component } from 'react';
import axios from 'axios';




export default class Newpost extends Component {
	constructor() {
		super()

		this.state = {
			postname: "",
			posttext: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var newState = {}
		console.log(event.target)
		newState[event.target.id] = event.target.value
		this.setState(newState)
	}

	handleSubmit() {

		console.log(this.state)
		console.log(this.state.postname)
		console.log(this.state.posttext)
		console.log(this.props.routeParams.subredditId)



		axios.post('posts/new', {
		    title:this.state.postname,
			content:this.state.posttext,
			subredditId: this.props.routeParams.subredditId,
			comments: []
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  // .catch(function (error) {
		  //   console.log(error);
		  // });

		this.setState({
			postname: "",
			posttext: ""
		});
	}

	render() {
		console.log(this.props)
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
