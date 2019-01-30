import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {

	const id = props.match.params.id;

	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">
						일정 이름
					</span>
					<p>우연일까 하얀 얼굴 어딘가 {id}</p>
				</div>
				<div className="card-action grey-lighten-4 grey-text">
					<div>milktegi님이 등록함</div>
					<div>01.30 6:00 </div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;

	return {
		// individual project!

	}
}

export default compose(
 connect(mapStateToProps),
 firestoreConnect([
	 {
		 collection: 'projects'
	 }
 ])
)(ProjectDetails);

