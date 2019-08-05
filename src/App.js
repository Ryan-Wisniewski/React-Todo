import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

import './components/TodoComponents/Todo.css'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      task: 'Ryan',
      todo: todoData
    }
  }

  toggleItem = id => {
    console.log(id, 'look############')

    this.setState({
      todo: this.state.todo.map(item => {
        
        if (item.id === id) {
          // console.log('item',item)
          return {           
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addItem = itemName => {
    // console.log(itemName, 'look@@@@@@@@@@@@')
    const newItem = {
      task:itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  clearPurchased = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm 
            addItem={this.addItem}
          />
        </div>
        <TodoList 
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        /> 
      </div>
    );
  }
}

export default App;
