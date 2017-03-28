import React, {Component} from 'react';
import { Grid, Form, FormControl, FormGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import TreeView from './TreeView.jsx';

class LeftPanel extends React.Component{
  render(){
    return (
      <Panel >
        <TreeView />
      </Panel>
    );
  }
}

export default LeftPanel;
