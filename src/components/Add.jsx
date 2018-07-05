import React, {Component, Fragment} from 'react';

class Add extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			invalid: false,
		}

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(e) {
		let value = e.target.value;
		this.setState({
			value: value, 
			invalid: false,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		// regex to test for valid player name characters and spaces only
		const re = /^[a-zA-Z][(a-zA-Z)\u0020]+$/;		
		const data = this.state.value;

		// test player name is valid and between 2 and 30 characters
		if (re.test(data) && data.length > 1 && data.length < 31) {
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
						{/* button disabled if input is invalid or set disabled */}
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
