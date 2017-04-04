import React, { Component } from 'react';
import {PanelGroup} from 'react-bootstrap';
import './App.css';
import MainPanel from './MainPanel.jsx';
import HeadPanel from './HeadPanel.jsx';


class App extends Component {
  constructor(props){

    super(props);
    this.state = {tree:props.tree};
  }
  render() {
    return (
      <div className="App">
        <PanelGroup>
          <HeadPanel />
          <MainPanel tree={this.state.tree} />
        </PanelGroup>
      </div>
    );
  }
}

export default App;
