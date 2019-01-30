import * as types from './index';

export const createProject = project => {
<<<<<<< HEAD
  // thunk 미들웨서 사용 시에는
  // 객체 대신 함수를 리턴

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // db참조 얻기
=======
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // thunk 미들웨서 사용 시에는
    // 객체 대신 함수를 리턴
    // extra 인자로 서버 연동을 위한 객체를 토스
    // 이거 한 다음 index.js에서
    // compose로 리덕스도 연동해야 함.

    // firestore 초기화 해줘서 참조를 얻음
		 // 데이터베이스(서버)에 비동기 요청
>>>>>>> 6c883bd7086fcae0b95f5235b919d58c38940eab
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
<<<<<<< HEAD
        author: '김개발',
        authorId: 'testest',
=======
        author: 'wheein',
        authorId: 'wi',
>>>>>>> 6c883bd7086fcae0b95f5235b919d58c38940eab
        createAt: new Date()
      })
      .then(() => {
        dispatch({
          type: types.CREATE_PROJECT,
          project
        });
      })
<<<<<<< HEAD
      .catch(err => {
        dispatch({
          type: 'CREATE_PROJECT_ERROR',
          err
        });
      });
=======
			.catch((err) => {
				type: types.CREATE_PROJECT_ERROR,
				err
			})
>>>>>>> 6c883bd7086fcae0b95f5235b919d58c38940eab
  };
};
