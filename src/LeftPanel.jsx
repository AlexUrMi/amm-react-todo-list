import React, {Component} from 'react';
import { Grid, Form, FormControl, FormGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import TreeView from './TreeView.jsx';

class LeftPanel extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
          tree:props.tree
      };
  }
  render(){
    return (
      <Panel >
        <TreeView tree={this.state.tree}  />
      </Panel>
    );
  }
}

export default LeftPanel;
