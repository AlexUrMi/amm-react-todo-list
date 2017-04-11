import React, {Component} from 'react';
import tree from './Tree.jsx';

export default class taskDetails extends Component {
    constructor(props) {
        super(props);

        var id = props.params.id;
        console.log('id:' + id);
        var category = null;
        if (id) {
            category = tree.getCategoryById(id);
        }
        this.state = {
            id: this.props.params.id,
            category: category
        };
    }
componentWillReceiveProps(nextProps){
  var id = nextProps.routeParams.id;
  var category = null;
  if (id) {
      category = tree.getCategoryById(id);
  }
  var state = {
      id: id,
      category: category
  };
  this.setState(state);
}

    render(props) {

        var ar = (this.state.category && this.state.category.taskList && this.state.category.taskList.length > 0)
            ? this.state.category.taskList.map((ca) => {
                return (<div>{ca.title} - {ca.description}</div>);
            })
            : "нет данных";
        return (
            <div className="cont">
                <h3>task details</h3>
                {ar}
            </div>
        );
    }
}
