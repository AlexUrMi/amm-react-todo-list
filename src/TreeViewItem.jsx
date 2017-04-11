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
import {Link} from 'react-router';

var emitter = ee();

class TreeViewItem extends Component {
    constructor(props) {
        super(props);
        this.onClick.bind(this);
        // debugger;
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

    render() {
      const href = '/task/' + this.state.dataId;
      //console.log(href);
        return (
            <Grid className="treeViewItem">
                <Row>
                    <Col md={6}>
                        <Link to={href}>{this.state.title}</Link>
                        <Button className="pull-right">
                            <Glyphicon glyph="edit" bsSize="small" className="pull-left"></Glyphicon>
                        </Button>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default TreeViewItem;
