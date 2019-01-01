import React, { Component } from 'react';
import './Reset.css'
import './App.css';
import {HashRouter} from 'react-router-dom'
import router from './Routes'
import Nav from './Components/Nav'
import Footer from './Components/Footer'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav/>
          {router}
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
