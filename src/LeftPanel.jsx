import React, {Component} from 'react';
import { Grid, Form, FormControl, FormGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';


class LeftPanel extends React.Component{
  render(){
    return (
      <Panel >
        Some default panel content here.
        <ListGroup fill>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
        </ListGroup>
        Some more panel content here.
      </Panel>
    );
  }
}

export default LeftPanel;
