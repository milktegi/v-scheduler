import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h3>v-scheduler</h3>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;