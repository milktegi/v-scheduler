import React, { Component } from 'react';
import { connect } from 'react-redux';
// 액션 디스패치 호출해야지
// 서버에서 응답을 받을 수 있으니까
// 액션 크리에이터를 임포트 받음
import { createProject } from '../../store/actions/projectAction';

import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
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
		this.props.createProject(this.state)
  };

  render() {
        const { auth } = this.props;
    if(!auth.uid) return <Redirect to="/signin"></Redirect>
    const { handleChange, handleSubmit } = this;

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">일정 관리</h5>
          <div className="input-field">
            <label htmlFor="title">일정 이름</label>
            <input
              name="title"
              type="text"
              id="title"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">일정 내용</label>
            <textarea
              className="materialize-textarea"
              name="content"
              id="content"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">로그인</button>
          </div>
        </form>
      </div>
    );
  }
}

//스토어가 가지고 있는
//createProject 속성은 
//handleSubmit이 호출해서 
//보내주는 인풋인
//project가 토스되었을 때
//dispatch를 호출하고
//이 dispatch는 액션 크리에이터를 호출하고
//해당 project를 보내줌  
const mapStateToProps = state => {

  return {

    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
	return {
		createProject: project => dispatch(
			createProject(project)
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
