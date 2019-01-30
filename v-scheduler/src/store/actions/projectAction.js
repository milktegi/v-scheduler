export const createProject = project => {
// thunk 미들웨서 사용 시에는
// 객체 대신 함수를 리턴
	return (dispatch, getState) => {
// 데이터베이스(서버)에 비동기 요청
		dispatch({
			type: 'CREATE_PROJECT',
			project
		})
	}
}