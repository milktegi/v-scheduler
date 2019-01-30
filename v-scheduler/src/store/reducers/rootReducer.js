import authReducer from './authReducer';
import projectReducer from './projectReducer';

import { combineReducers } from 'redux';

//premade reducer
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
})

export default rootReducer;