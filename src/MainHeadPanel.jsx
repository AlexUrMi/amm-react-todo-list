import React from 'react';
import ReactDOM from 'react-dom';
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
import tree from './Tree.jsx';
import ee from 'event-emitter';

const removePadding = {
    paddingLeft: '0'
};

class MainHeadPanel extends React.Component {
    constructor(props) {
        super(props);

        this.onClickAddCategory = this.onClickAddCategory.bind(this);
        this.onCategoryNameChanged = this.onCategoryNameChanged.bind(this);
        this.state = {
            title: props.data,
            categoryName: null
        };
    }


    onCategoryNameChanged(e) {
        e.preventDefault();
        this.setState({categoryName: e.target.value});
    }
    onClickAddCategory(e) {
        e.preventDefault();
        const name = this.state.categoryName;
        if (name) {
            var node = tree.createCategoryItem(name);
            tree.addChildNode(tree.Arr[0],node);
            var newTree = tree.Arr;
            //log
            tree.log();
            window.ee.emit('Category.Add', newTree);
        }
    }

    render() {
        return (
            <Form inline>
                <Grid>
                    <Row className="show-grid">
                        <Col md={4} style={removePadding}>
                            <FormGroup className="pull-left">
                                <InputGroup >
                                    <FormControl type="text" placeholder="Enter category title" ref={(refToReactObject) => this.state.categoryNameRef = refToReactObject} onChange={this.onCategoryNameChanged}/>
                                    <InputGroup.Button>
                                        <Button onClick={this.onClickAddCategory}>Add</Button>
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
                                        <Button >Add</Button>
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
