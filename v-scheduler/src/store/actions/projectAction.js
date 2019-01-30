import * as types from './index'

export const createProject = project => {
// thunk 미들웨서 사용 시에는
// 객체 대신 함수를 리턴

	return (dispatch, getState, { getFirebase, getFirestore }) => {

// db참조 얻기
const firestore = getFirestore();
firestore.collection('projects').add({
	...project,
	author: '김개발',
	authorId: 'testest',
	createAt: new Date()
}).then(() => {
	dispatch({
		type: types.CREATE_PROJECT, project
	})
}).catch((err) => {
	dispatch({
		type: 'CREATE_PROJECT_ERROR',
		err
	})
})

// 데이터베이스(서버)에 비동기 요청
		dispatch({
			type: types.CREATE_PROJECT,
			project
		})
	}
}