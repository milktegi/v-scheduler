import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

<<<<<<< HEAD
// firestore
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

// connect config
import fbConfig from './config/firebaseconfig';
=======
//firebase

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';
>>>>>>> 6c883bd7086fcae0b95f5235b919d58c38940eab

const store = createStore(
  rootReducer,
  compose(
<<<<<<< HEAD
<<<<<<< HEAD
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore
      })
    ),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
=======
    applyMiddleware(thunk.withExtraArgument(getFirebase, getFirestore)),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
>>>>>>> 6c883bd7086fcae0b95f5235b919d58c38940eab
=======
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
>>>>>>> step12-auth3
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();
});
