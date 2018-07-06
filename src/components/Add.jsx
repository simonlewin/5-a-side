import React, {Component, Fragment} from 'react';

// add players component
class Add extends Component {
	constructor(props) {
		super(props);

		// initial state for controlled component and 
		// whether input it valid
		this.state = {
			value: '',
			invalid: false,
		}

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// handle user input to controlled component
	handleChange(e) {
		let value = e.target.value;
		this.setState({
			value: value, 
			invalid: false,
		});
	}

	// onSubmit event handler 
	onSubmit(e) {
		e.preventDefault();

		// regex to test for valid player name - characters and spaces only
		// limited test because it doesn't allow hyphens, apostrophes or commas
		// and it allows multiple spaces
		const re = /^[a-zA-Z][(a-zA-Z)\u0020]+$/;		
		const data = this.state.value;

		// if player name is valid and between 2 and 30 characters then submit
		// otherwise set invalid flag
		if (re.test(data) && data.length >= 2 && data.length <= 30) {
			// submit dummy player rating
			this.props.onSubmit({name: data, rating: 0});
			this.setState({value: ''});
		} else {
			this.setState({invalid: true});
		}
	}

	render() {
		// stop add button being used if controller component input is empty
		const disabled = this.state.value.length === 0;
		const { invalid } = this.state;

		return (
			<Fragment>
				<form onSubmit={this.onSubmit} className='input-group input-group-lg mb-3'> 
					<input
						// if input is invalid add .is-invalid class to show red border
						className={`form-control ${ invalid ? 'is-invalid' : '' }`}
						placeholder='Player name' 
						onChange={this.handleChange} 
						value={this.state.value} 
					/>
					<div className='input-group-append'>
						{/* button disabled if input is invalid or set to disabled */}
						<button className='btn btn-outline-primary rounded-right' disabled={ disabled || invalid }>Add</button>
					</div>
					<div className='invalid-feedback'>
						Please enter a valid player name - between 2 and 30 characters long containing letters and spaces only 
					</div>
				</form>
			</Fragment>
		);
	}
}

export default Add;
