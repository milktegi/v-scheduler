import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
// connect할 게 여러개 있으면
// compose를 사용함
import { compose } from 'redux';
// connect
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects'
    }
  ])
)(Dashboard);
