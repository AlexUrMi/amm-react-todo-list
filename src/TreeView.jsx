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

import getNodeKey from './utils/tree-data-utils.js';
import {getNodeAtPath} from './utils/tree-data-utils.js';

import tree from './Tree.jsx';

class TreeView extends Component {
    constructor(props) {
        super(props);
        tree.log();
        this.componentDidMount = this.componentDidMount.bind(this);//try to mount to current context
        this.updateTreeData = this.updateTreeData.bind(this);
        this.addNode = this.addNode.bind(this);
        this.removeNode = this.removeNode.bind(this);
        this.state = {
            treeData: tree.Arr
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.tree){
          console.log('componentWillReceiveProps' + nextProps.tree.log());
          this.setState({treeData: nextProps.tree});
        } else{
          console.log('componentWillReceiveProps tree is empty');
        }

    }
    componentDidMount() {
        var self = this;
        //подписываемся на обработчик
        console.log('componentDidMount');
        window.ee.on('Category.Add', function(item) {
          debugger;
            self.setState({treeData: item});//not use item
        });
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
        window.ee.off('Category.Add');//отписываемся от обработчика
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    addNode(rowInfo){
        let NEW_NODE = {title: ''};
        let {node, treeIndex, path} = rowInfo;
        path.pop();
        let parentNode = getNodeAtPath({
            treeData: this.state.treeData,
            path : path,
            getNodeKey: ({ treeIndex }) =>  treeIndex,
            ignoreCollapsed : true
        });
        let getNodeKey = ({ node: object, treeIndex: number }) => {
            return number;
        };
        let parentKey = getNodeKey(parentNode);
        if(parentKey == -1) {
            parentKey = null;
        }
        let newTree = addNodeUnderParent({
                treeData: this.state.treeData,
                newNode: NEW_NODE,
                expandParent: true,
                parentKey: parentKey,
                getNodeKey: ({ treeIndex }) =>  treeIndex
         });
         this.setState({treeData: newTree.treeData});
    }

    removeNode(rowInfo) {
      let {node, treeIndex, path} = rowInfo;
      this.setState({ treeData : removeNodeAtPath({
                       treeData: this.state.treeData,
                       path: path,   // You can use path from here
                       getNodeKey: ({node: TreeNode, treeIndex: number}) => {
                           return number;
                       },
                       ignoreCollapsed: false,
                    })
        })
    }
    updateTreeData(treeData) {
        this.setState({ treeData });
    }

    render() {

        const alertNodeInfo = ({node, path, treeIndex, lowerSiblingCounts: _lowerSiblingCounts}) => {
            const objectString = Object.keys(node).map(k => (k === 'children'
                ? 'children: Array'
                : `${k}: '${node[k]}'`)).join(',\n   ');

            alert( // eslint-disable-line no-alert
                    'Info passed to the button generator:\n\n' + `node: {\n   ${objectString}\n},\n` + `path: [${path.join(', ')}],\n` + `treeIndex: ${treeIndex}`);
        };
        var styleObj = {height: 400};
        return (
            <div style={styleObj}>
                <SortableTree
                  treeData={this.state.treeData}
                  onChange={treeData => this.setState({treeData})}
                  generateNodeProps={rowInfo => ({
                    buttons: [
                      <div>
                        <button label='-'
                                onClick={(event) => this.removeNode(rowInfo)}>Remove</button>
                        <button label='+'
                          onClick={(event) => this.addNode(rowInfo)}>Add</button>
                        <button
                          style = {{verticalAlign: 'middle'}}
                          onClick = {() => alertNodeInfo(rowInfo)}
                        >ℹ</button>
                      </div>,
                  ]})
                }
                maxDepth={99}
                canDrag={false} />
            </div>
        );
    }
}

export default TreeView;
