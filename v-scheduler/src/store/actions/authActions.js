export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: 'LOGIN_SUCCESS'
        });
      })
      .catch(err => {
        dispatch({
          type: 'LOGIN_ERROR',
          err
        });
      });
  };
};

<<<<<<< HEAD
export const signOut = () => {
  return(dispatch, getState, { getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut()
    .then(()=> {
=======

export const signOut = () => {
  return(dispatch, getState, { getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(()=> {
>>>>>>> step12-auth3
      dispatch({
        type: 'SIGNOUT_SUCCESS'
      })
    })
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> step12-auth3
