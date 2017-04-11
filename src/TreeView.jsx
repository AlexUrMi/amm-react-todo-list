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
            self.setState({treeData: item});
        });
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
        window.ee.off('Category.Add');//отписываемся от обработчика
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    removeNode(rowInfo) {
      let {node, treeIndex, path} = rowInfo;
        var ar = Object.keys(node).map(k=>(k==='dataId')? node[k]:null);
        if(ar && ar.length > 0){
          var id = ar[0];
          if(id){
            var res = tree.removeNodeById(id + '');
            if(res){
              this.setState({treeData: tree.Arr});
            }
          }

        }
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
                          <button className="pull-right" onClick={() => this.removeNode(rowInfo)} >
                              <i className="glyphicon glyphicon-trash pull-right"></i>
                          </button>
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
