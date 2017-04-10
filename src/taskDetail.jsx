import React, {Component} from 'react';

export default class taskDetail extends Component {
  constructor(props){
    super(props);
    this.state = {category:this.props.curCategory};
  }

    render() {
      return (<div>
          <h2>Список товаров</h2>
          <ul>
            <li>1</li>

          </ul>
      </div>);

        // return (
        //     <div>
        //         <ul>
        //             {
        //               this.state.category.taskList.map((ca)=>{<li>1</li>})
        //             }
        //         </ul>
        //     </div>
        // );
    }
}
