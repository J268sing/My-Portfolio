import React, { Component } from 'react';
import Home from './containers/Home/Home'
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home></Home>
        </div>
      </BrowserRouter>
    );
  }
}

export default App; 