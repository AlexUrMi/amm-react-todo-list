import React, {Component} from 'react';
import TreeViewItem from './TreeViewItem.jsx'

/*using class
var node1 = this.createCategoryItem("first");
var t1 = this.createTask("t1", "d1");
this.addTaskToCategory(node1, t1);
this.addTaskToCategory(node1, {title:"t2", description:""});
var node2 = this.createCategoryItem("second");
this.addChildNode(node1, node2);
var node3 = this.createCategoryItem("third");
this.addChildNode(node2, node3);
this.state = {treeData: [node1]};
*/
class Tree {
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
}

var tree = new Tree();

var node1 = tree.createCategoryItem("first");
var t1 = tree.createTask("t1", "d1");
tree.addTaskToCategory(node1, t1);
tree.addTaskToCategory(node1, {title:"t2", description:""});
var node2 = tree.createCategoryItem("second");
tree.addChildNode(node1, node2);
var node3 = tree.createCategoryItem("third");
tree.addChildNode(node2, node3);
tree.state = {treeData: [node1]};

export default tree;
