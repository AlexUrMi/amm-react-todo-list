import React from 'react';
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
import ee from 'event-emitter';

import LeftPanel from './LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';
import MainHeadPanel from './MainHeadPanel.jsx';


var emitter = ee();

class MainPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            CurrentCategory: null
        };
        this.onCategoryChanged.bind(this);
    }
    onCategoryChanged(args){
      debugger;
      alert('Category.Changed ' + args);
    }

    componentDidMount() {
        var that = this;
        emitter.on('Category.Changed', this.onCategoryChanged);
    }
    componentWillUnmount() {
        emitter.off('Category.Changed', this.onCategoryChanged);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <MainHeadPanel/>
                    </Col>
                </Row>
                <Row >
                    <Col md={5}>
                        <div><LeftPanel/></div>
                    </Col>
                    <Col md={7}>
                        <div><RightPanel category={this.state.CurrentCategory}/></div>
                    </Col>

                </Row>
            </Grid>

        );
    }
}

export default MainPanel;
