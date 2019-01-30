import React from 'react';
import moment from 'moment'
const Notification = (props) => {
	const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <span className="card-title">알림</span>
        <ul className="notification">
          {
						notifications && notifications.map(note => {
							return (
								<li key={note.id}>
									<span className="pink-text">
										{note.user}
									</span>
									{'    '}
									<span>
										{note.content}
									</span>
									<div className="grey-text note-date">
										{
											moment(note.time.toDate()).fromNow()
										}
									</div>
								</li>
							)
						})
					}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
