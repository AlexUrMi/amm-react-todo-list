import React, {Component} from 'react';
import { Grid, Form, FormControl, FormGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';

class RightPanel extends React.Component {
  render(){
    return (
      <Panel>
        right panel
            {this.props.children}
      </Panel>
    );
  }
}

export default RightPanel;
