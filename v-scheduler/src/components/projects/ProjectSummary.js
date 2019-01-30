import React from 'react';

const ProjectSummary = ({ project }) => {
	return (
			<div className="project-list section">
			<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title">
						{project.title}
						 
					</span>
					 <p>{project.content}</p>
					<p>{project.author}님이 등록하였음</p>
					<p className="grey-text">2019-01-30</p>
				</div>
			</div>
		</div>
	)
}

export default ProjectSummary;