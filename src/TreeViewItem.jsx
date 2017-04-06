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
    ProgressBar,
    Label
} from 'react-bootstrap';
import ee from 'event-emitter';

var emitter = ee();

class TreeViewItem extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        // debugger;
        this.onClick.bind(this);
        debugger;
        const {title, dataId} = props.data;
        this.state = {
            title: title,
            dataId:dataId
        };
    }
    onClick(e) {
        // alert('onClick ' + e.target);
        e.preventDefault();
        //var key = e.target.getNodeKey();
        debugger;
        var node = e.target;
        emitter.emit('Category.Changed', node);
    }
    // onSelect(e) {
    //     alert('onSelect ' + e.target.text);
    // }


    render() {
      const href = this.state.dataId + '';
      console.log(href);
        return (
            <Grid className="treeViewItem">
                <Row>
                    <Col md={6}>
                        <a href={href}> {this.state.title}
                        </a>
                        <Button className="pull-right">
                            <Glyphicon glyph="edit" bsSize="small" className="pull-left"></Glyphicon>
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Button className="pull-right">
                            <i className="glyphicon glyphicon-plus pull-right"></i>
                        </Button>
                        <Button className="pull-right">
                            <i className="glyphicon glyphicon-trash pull-right"></i>
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default TreeViewItem;
