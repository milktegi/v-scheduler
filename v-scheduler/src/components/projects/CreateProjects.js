import React, { Component } from 'react'

class CreateProject extends Component {

	state = {
		title: '',
		content: ''
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
						일정 관리
					</h5>
					<div className="input-field">
						<label htmlFor="title">일정 이름</label>
						<input 
						name="title"
						type="text" id="title" onChange={handleChange}/>
					</div>
							<div className="input-field">
						<label htmlFor="content">일정 내용</label>
					<textarea 
					className="materialize-textarea"
					name="content" id="content"
					onChange={handleChange}
					>
					</textarea>
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

export default CreateProject;
