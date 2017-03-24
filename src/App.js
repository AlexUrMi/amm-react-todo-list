import React, { Component } from 'react';
import { Grid, Form, FormControl, FormGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col xs={6} md={2}></Col>
      <Col xs={12} md={8}>
        <Form>
          <FormControl type="text" placeholder="Search products" />
        </Form>
      </Col>
      <Col xs={6} md={2}></Col>
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
          <Row className="show-grid">
            <Col md={8}>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}
class MainPanel extends Component {
  render(){
    return (
      <Panel>
        <Grid>
          <Row className="show-grid">
            <Col md={8}>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ReactEshop__nav-spacer" />
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
