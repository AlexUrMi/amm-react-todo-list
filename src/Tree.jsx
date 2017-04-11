import React, {Component} from 'react';
import TreeViewItem from './TreeViewItem.jsx'

//recursion function
var getString = function _getString(catItem){
  if(!catItem)
    return '';
  if(!catItem.title || !catItem.dataId){
    debugger;
  }
  var s = `title:${catItem.title} dataId:${catItem.dataId}`;
  var ss = '';
  if(catItem.children){
    catItem.children.map((it)=>{
      ss += getString(it);
    });
  }
  return s + ss;
}

//recursion function
var getCategory = function _getCategory(catItem, id){
  if(!catItem || !id){
    console.log('_getCategory return null');
    return null;
  }

  if(!catItem.title || !catItem.dataId){
    debugger;
    console.log('_getCategory incorect data dataId');
  }
  if(catItem.dataId + "" === id){
    return catItem;
  }
  if(catItem.children){
    for(var i=0; i < catItem.children.length; i++){
      var it = catItem.children[i];
      var obj =  getCategory(it, id);
      if(obj){
        console.log('_getCategory return obj');
        return obj;
      }
      console.log(`_getCategory not found for id:${it.dataId}`);
    }
  }
  return null;
}

class Tree {
  constructor(){
    this.Arr = [];
  }
    //get new tree view item
    createCategoryItem(title) {
        const id = Tree.newId();
        var obj = {title, dataId:id};
        console.log(`createCategoryItem category title:${obj.title} dataId:${obj.dataId}`);
        const node = {
            dataId: id,
            title: (<TreeViewItem data={obj} ></TreeViewItem>),
            children:[],
            taskList:[]
        };

        return node;
    }

    static newId(){
      return (new Date()).getTime();
    }

    //add node to parent node
    addChildNode(parent, child) {
        parent.children.push(child);
        console.log(`addChildNode nodeParent:${parent.dataId} nodeChild:${child.dataId} `);
        this.logArr();
        return parent;
    }
    //add node to root level
    addRootNode(node){
      this.Arr.push(node);
      this.logArr();
    }
    logArr(){
      console.log(`for tree Array length is :${this.Arr.length}`);
    }
    createTask(title, description){
      var t =  {title:title, description:description, done:false};
      console.log(`createTask created task title:${t.title} desc:${t.description}`);
      return t;
    }

    addTaskToCategory(category, task){
      category.taskList.push(task);
      return parent;
    }

    getCategoryById(id){
      if(this.Arr){
        for(var i=0; i < this.Arr.length; i++){
          var it = this.Arr[i];
            var obj =  getCategory(it, id);
            if(obj){
              return obj;
            }
        }
      }
      return null;
    }


    log(){
      var ss = '';
      if(this.Arr){
          this.Arr.map((it)=>{
            ss += getString(it);
          });
      }
      var s = '';
      console.log(s + ss);
    }


}

var tree = new Tree();

var node1 = tree.createCategoryItem("first");
var t1 = tree.createTask("t1", "d1");
tree.addTaskToCategory(node1, t1);
var t2 = tree.createTask("t2", "d2");
tree.addTaskToCategory(node1, t2);
tree.addRootNode(node1);
var node2 = tree.createCategoryItem("second");
tree.addChildNode(node1, node2);
var node3 = tree.createCategoryItem("third");
tree.addChildNode(node1, node3);
tree.state = {treeData: tree.Arr};

export default tree;
