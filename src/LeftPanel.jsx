import React, {Component} from 'react';
import { Grid, Form, FormControl, FormGroup, Panel, PanelGroup, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import SortableTree from 'react-sortable-tree';

class Tree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [{ title: 'Chicken', children: [ { title: 'Egg', children:[{title:"e1"}, {title:"e2"}] } ] }],
        };
    }

    render() {
        return (
            <div style={{ height: 400 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                />
            </div>
        );
    }
}


class LeftPanel extends React.Component{
  render(){
    return (
      <Panel >
        <Tree />
      </Panel>
    );
  }
}

export default LeftPanel;
