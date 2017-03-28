import React, {Component} from 'react';
import {
    Grid,
    Form,
    FormControl,
    FormGroup,
    Panel,
    PanelGroup,
    Navbar,
    Glyphicon,
    Nav,
    NavItem,
    Well,
    Row,
    Col,
    Button,
    ListGroup,
    ListGroupItem,
    ProgressBar
} from 'react-bootstrap';

class TreeViewItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.data.title,
            subtitle: props.data.subtitle
        };
    }

    render() {
        return (
            <Grid className="treeViewItem">

    <Row>
      <Col md={6}>
        <span className="pull-left">{this.state.title}</span>
        <Button className="pull-right"><Glyphicon glyph="edit" bsSize="small" className="pull-left"></Glyphicon></Button>
      </Col>
      <Col md={6}>

        <Button className="pull-right"><i className="glyphicon glyphicon-plus pull-right"></i></Button>
        <Button className="pull-right"><i className="glyphicon glyphicon-trash pull-right"></i></Button>
      </Col>
    </Row>
  </Grid>

        );
    }
}

export default TreeViewItem;
