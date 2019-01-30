import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    // console.log(e)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
		this.props.signIn(this.state)
  };

  render() {
    const { handleChange, handleSubmit } = this;
		const { authError } = this.props;

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">로그인</h5>
          <div className="input-field">
            <label htmlFor="email">이메일</label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">패스워드</label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">로그인</button>
						<div className="red-text center">
							{ authError ? <p>등록되지 않은 이메일입니다.</p> : null	}
						</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		authError: state.auth.authError
	}
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
