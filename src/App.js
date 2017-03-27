import React, { Component } from 'react';
import { Grid, Form, FormControl, FormGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import MainPanel from './MainPanel.jsx';

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col xs={3} md={2}></Col>
      <Col xs={6} md={8}>
        <Form>
          <FormControl type="text" placeholder="Search products" />
        </Form>
      </Col>
      <Col xs={3} md={2}></Col>
    </Row>
  </Grid>
);

class HeadPanel extends Component {
  render(){
    return (
      <Panel>
        {gridInstance}
      </Panel>
    );
  }
}

class ProgressPanel extends Component {
  render(){
    return (
      <Panel>
        <Grid>
          <Row >
            <Col md={12}>
              <ProgressBar now={60} />
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

const listItem = (
  <ListGroupItem>Item 1</ListGroupItem>
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <PanelGroup>
          <HeadPanel />
          <ProgressPanel />
          <MainPanel />
        </PanelGroup>
      </div>
    );
  }
}

export default App;
