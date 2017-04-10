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
import tree from './Tree.jsx';

class TreeView extends Component {
    constructor(props) {
        super(props);
        tree.log();
        this.componentDidMount = this.componentDidMount.bind(this);//try to mount to current context
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
                <SortableTree treeData={this.state.treeData} onChange={treeData => this.setState({treeData})} generateNodeProps={rowInfo => ({
                    buttons: [ < button style = {{ verticalAlign: 'middle' }} onClick = {() => alertNodeInfo(rowInfo)
                        } > ℹ < /button>, ], })} maxDepth={99} canDrag={false}/>
            </div>
        );
    }
}

export default TreeView;
