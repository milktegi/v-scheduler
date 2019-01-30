import React from 'react'

const ProjectDetails = ( props) => {

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

export default ProjectDetails;

