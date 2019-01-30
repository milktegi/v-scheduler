import React, { Component } from 'react'

class SignIn extends Component {

	state = {
		email: '',
		password: ''
	}

	handleChange = (e) => {
		// console.log(e)
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	render() {

  const { handleChange, handleSubmit } = this;

		return (
			<div className="container">
				<form onSubmit={handleSubmit}>
					<h5 className="grey-text text-darken-3">
						로그인
					</h5>
					<div className="input-field">
						<label htmlFor="email">이메일</label>
						<input 
						name="email"
						type="email" id="email" onChange={handleChange}/>
					</div>
							<div className="input-field">
						<label htmlFor="password">패스워드</label>
						<input 
						name="password"
						type="password" id="password" onChange={handleChange}/>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">
							로그인
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;
