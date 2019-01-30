const initialState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah' },
    { id: '2', title: 'help me find lemon', content: 'blah blah' },
    { id: '3', title: 'help me find lime', content: 'blah blah blah' }
  ]
};

const projectReducer = (state = initialState, action) => {
  return state;
};

export default projectReducer;
