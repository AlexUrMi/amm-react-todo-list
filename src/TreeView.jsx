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
        var node1 = this.createCategoryItem("first");
        var t1 = this.createTask("t1", "d1");
        this.addTaskToCategory(node1, t1);
        this.addTaskToCategory(node1, {title:"t2", description:""});
        var node2 = this.createCategoryItem("second");
        this.addChildNode(node1, node2);
        var node3 = this.createCategoryItem("third");
        this.addChildNode(node2, node3);
        this.state = {treeData: [node1]};
    }
    //get new tree view item
    createCategoryItem(title) {
        const node = {
            title: (<TreeViewItem data={title} ></TreeViewItem>),
            children:[],
            taskList:[]
        };
        return node;
    }

    //add node to parent node
    addChildNode(parent, child) {
        parent.children.push(child);
        return parent;
    }

    createTask(title, description){
      return {title:title, description:description, done:false};
    }

    addTaskToCategory(category, task){
      category.taskList.push(task);
      return parent;
    }



    render() {

      const alertNodeInfo = ({
          node,
          path,
          treeIndex,
          lowerSiblingCounts: _lowerSiblingCounts,
      }) => {
          const objectString = Object.keys(node)
              .map(k => (k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`))
              .join(',\n   ');

          alert( // eslint-disable-line no-alert
              'Info passed to the button generator:\n\n' +
              `node: {\n   ${objectString}\n},\n` +
              `path: [${path.join(', ')}],\n` +
              `treeIndex: ${treeIndex}`
          );
      };

        return (
            <div style={{
                height: 400           }}>
                <SortableTree
                  treeData={this.state.treeData}
                  onChange={treeData => this.setState({treeData})}
                  generateNodeProps={rowInfo => ({
                		buttons: [
                			<button
                				style={{
                					verticalAlign: 'middle',
                				}}
                				onClick={() => alertNodeInfo(rowInfo)}
                			>ℹ</button>,
                		],
                	})}
                  maxDepth={5}
                  canDrag={false}
                  />
            </div>
        );
    }
}

export default TreeView;
