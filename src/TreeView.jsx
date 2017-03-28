import React, {Component} from 'react';
import {
    Grid,
    Panel,
    PanelGroup,
    Navbar,
    Glyphicon,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import SortableTree from 'react-sortable-tree';
import TreeViewItem from './TreeViewItem.jsx'

class TreeView extends Component {
    constructor(props) {
        super(props);
        var node1 = this.getNewTreeViewItem("first", "k1");
        var node2 = this.getNewTreeViewItem("second", "k2");
        var node1 = this.addChildTreeViewItem(node1, node2);
        var node3 = this.getNewTreeViewItem("third", "k3");
        this.addChildTreeViewItem(node2, node3);
        this.state = {treeData: [node1]};
    }
    //get new tree view item
    getNewTreeViewItem(title, key) {
        const node = {
            title: (
                <TreeViewItem data={{title,key}}></TreeViewItem>
            ),
            noDragging: true,
            children:[]
        };
        return node;
    }

    //add node to parent node
    addChildTreeViewItem(parent, item) {
        parent.children.push(item);
        return parent;
    }
    render() {
        return (
            <div style={{
                height: 400           }}>
                <SortableTree
                  treeData={this.state.treeData}
                  onChange={treeData => this.setState({treeData})}
                  maxDepth={5}
                  canDrag={({ node }) => !node.noDragging}
                  />
            </div>
        );
    }
}

export default TreeView;
