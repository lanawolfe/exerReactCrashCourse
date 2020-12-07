import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
    //markComplete = () => {
    //console.log('Hello ')
//}
  render() {
      //console.log(this.props.todos)
      return this.props.todos.map((todo) =>(
          //<h3>{ todo.title }</h3>
          <Todoitem key={todo.id} todo={todo} markComplete=
          {this.props.markComplete} delTodo={this.props.delTodo} />

      ));
    //return (
        //<div>
       // <h1>Todos</h1>
      //</div>
    //);

  }
}
//propTypes
Todos.propTypes = {
    todo: PropTypes.array.isRequired,   
    markComplete: PropTypes.func.isRequired,  
    delTodo: PropTypes.func.isRequired,  
}



export default Todos;
  