import React, {Component} from 'react';
import tree from './Tree.jsx';
import taskDetail from './taskDetail.jsx';

export default class taskDetails extends Component {
  constructor(props){
    super(props);

    var id = props.params.id;
    console.log('id:' + id);
    var category = null;
    if (id) {
        category = tree.getCategoryById(id);
        // console.log('category.taskList.length:' + category.taskList.length);
    }
    this.state = {id:this.props.params.id, category:category};
  }
    render(props) {
        return (
          <div className="cont">
            <h3>task details</h3>
            {this.state.category ? this.state.category.taskList.map((ca) =>{<div className="da">{ca.title + "1"}</div>}):"нет данных"}
            {this.state.category ? this.state.category.taskList.map((ca) =>{console.log('ca.title:' + ca.title)}):console.log("not")}



          </div>



        );
    }
}
