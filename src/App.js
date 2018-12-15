import React, { Component } from 'react';
import './Reset.css'
import './App.css';
import {HashRouter} from 'react-router-dom'
import router from './Routes'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          {router}
        </div>
      </HashRouter>
    );
  }
}

export default App;
