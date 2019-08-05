// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo';

const TodoList = props => {
  console.log(props, 'props')


  return (
    <div className="shopping-list">
      {props.todo.map(item => (
          
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Item!
      </button>
    </div>
  );
};

export default TodoList