import React, {Component} from 'react';
import {
    Grid,
    Form,
    FormGroup,
    FormControl,
    InputGroup,
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
    Label,
    ListGroup,
    ListGroupItem,
    ProgressBar,
    Checkbox
} from 'react-bootstrap';

class ProgressRow extends Component {
    render() {
        return (
            <Row >
                <Col md={12}>
                    <ProgressBar now={60}/>
                </Col>
            </Row>
        );
    }
}

class InlineForm extends Component {
    render() {
        return (
            <Form inline className="inlineForm">
                <FormGroup>
                    <InputGroup>
                        <Checkbox className="inlineCheckbox">Show done</Checkbox>
                    </InputGroup>
                    {' '}
                    <InputGroup>
                        <FormControl type="text" placeholder="Search"/>
                        <InputGroup.Button>
                            <Button><Glyphicon glyph="remove"></Glyphicon></Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    }
}

const gridInstance = (
    <Grid>
        <Row className="show-grid">
            <Col xs={8} md={7}><h2 className="pull-left">TODO-LIST</h2></Col>
            <Col xs={4} md={5}>
                <InlineForm></InlineForm>
            </Col>
        </Row>
        <ProgressRow/>
    </Grid>
);

class HeadPanel extends Component {
    render() {
        return (
            <Panel>
                {gridInstance}
            </Panel>
        );
    }
}

export default HeadPanel;
