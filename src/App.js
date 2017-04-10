import React, { Component } from 'react';
import {PanelGroup} from 'react-bootstrap';
import './App.css';
import MainPanel from './MainPanel.jsx';
import HeadPanel from './HeadPanel.jsx';
import ee from 'event-emitter';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import EmptyPanel from './EmptyPanel.jsx';
import taskDetails from './taskDetails.jsx';
import RightPanel from './RightPanel.jsx';

window.ee = ee();

class App extends Component {
  constructor(props){

    super(props);
    this.state = {tree:props.tree};
  }
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
            <Route component={MainPanel} path="/">
                <IndexRoute component={EmptyPanel}></IndexRoute>
                <Route path="task" component={RightPanel}>
                  <IndexRoute component={EmptyPanel}></IndexRoute>
                  <Route path=":id" component={taskDetails} />
                </Route>
            </Route>
        </Router>


      </div>
    );
  }
}

export default App;
