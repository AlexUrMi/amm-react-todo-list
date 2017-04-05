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
import treeViewUtil from 'react-sortable-tree';
import {addNodeUnderParent, removeNodeAtPath, changeNodeAtPath, map, walk} from './utils/tree-data-utils.js';

class TreeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: props.tree
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({treeData: nextProps.tree});
    }
    componentDidMount() {
        var self = this;
        window.ee.on('Category.Add', function(item) {
          console.log('Category.Add');
            self.setState({treeData: item});
        });
    }
    componentWillUnmount() {
        window.ee.off('Category.Add');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {

        const alertNodeInfo = ({node, path, treeIndex, lowerSiblingCounts: _lowerSiblingCounts}) => {
            const objectString = Object.keys(node).map(k => (k === 'children'
                ? 'children: Array'
                : `${k}: '${node[k]}'`)).join(',\n   ');

            alert( // eslint-disable-line no-alert
                    'Info passed to the button generator:\n\n' + `node: {\n   ${objectString}\n},\n` + `path: [${path.join(', ')}],\n` + `treeIndex: ${treeIndex}`);
        };

        return (
            <div style={{
                height: 400
            }}>
                <SortableTree treeData={this.state.treeData} onChange={treeData => this.setState({treeData})} generateNodeProps={rowInfo => ({
                    buttons: [ < button style = {{ verticalAlign: 'middle', }}onClick = {
                            () => alertNodeInfo(rowInfo)
                        } > ℹ < /button>, ], })} maxDepth={99} canDrag={false}/>
            </div>
        );
    }
}

export default TreeView;
