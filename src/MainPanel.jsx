import React from 'react';
import { Grid, Form, FormControl, FormGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';

import LeftPanel from './LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';
import MainHeadPanel from './MainHeadPanel.jsx';

class MainPanel extends React.Component {
  render(){
    return (
      <Grid>
        <Row>
          <Col md={12}>
              <MainHeadPanel />
          </Col>
        </Row>
        <Row >
          <Col md={4}>
            <div><LeftPanel /></div>
            </Col>
          <Col md={8}>
            <div><RightPanel /></div>
          </Col>

        </Row>
      </Grid>

    );
  }
}

export default MainPanel;
