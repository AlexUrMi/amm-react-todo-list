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
    InputGroup
} from 'react-bootstrap';

const removePadding = {
    paddingLeft: '0'
};

class MainHeadPanel extends React.Component {
    render() {
        return (
            <Form inline>
                <Grid>
                    <Row className="show-grid">
                        <Col md={4} style={removePadding}>
                            <FormGroup className="pull-left">
                                <InputGroup >
                                    <FormControl type="text" placeholder="Enter category title"/>
                                    <InputGroup.Button>
                                        <Button>Add</Button>
                                    </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col md={4}></Col>
                        <Col md={4}>
                            <FormGroup className="pull-left">
                                <InputGroup>
                                    <FormControl type="text" placeholder="Text input with button"/>
                                    <InputGroup.Button>
                                        <Button>Add</Button>
                                    </InputGroup.Button>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>

                </Grid>
            </Form>

        );
    }
}

export default MainHeadPanel;
