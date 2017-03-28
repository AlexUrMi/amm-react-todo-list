import React, { Component } from 'react';
import {PanelGroup} from 'react-bootstrap';
import './App.css';
import MainPanel from './MainPanel.jsx';
import HeadPanel from './HeadPanel.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PanelGroup>
          <HeadPanel />
          <MainPanel />
        </PanelGroup>
      </div>
    );
  }
}

export default App;
