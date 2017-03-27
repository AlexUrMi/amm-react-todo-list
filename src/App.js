import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import React, { Component } from 'react';
import { Grid, Form, FormGroup, FormControl, InputGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, ListGroup, ListGroupItem, ProgressBar, Checkbox } from 'react-bootstrap';


import './App.css';
import MainPanel from './MainPanel.jsx';

class ProgressRow extends Component {
  render(){
    return (
          <Row >
            <Col md={12}>
              <ProgressBar now={60} />
            </Col>
          </Row>
    );
  }
}

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col xs={8} md={7}></Col>
      <Col xs={4} md={5}>
        <Form inline>
          <FormGroup>
            <InputGroup>
              <Checkbox>Checkbox</Checkbox>
            </InputGroup>
            {' '}
            <InputGroup>
              <FormControl type="text" placeholder="Search products"  />
                <InputGroup.Button>
                  <Button>X</Button>
                </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </Col>
    </Row>
    <ProgressRow />
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



const listItem = (
  <ListGroupItem>Item 1</ListGroupItem>
);


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
