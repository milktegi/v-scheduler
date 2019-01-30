import * as types from '../actions/index';

const initialState = {
  projects: [{}]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PROJECT:
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('errorrrrr', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
