import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: []
    };
  }

  // ADD TODO ITEM
  addNewTodo = newTodo => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        {
          task: newTodo, id: Date.now(), complete: false
        }
      ]
    }
    this.setState(newState);
  }

  // TODO ITEM
  addTodo = event => {
    this.setState({ task: event.target.value, id: Date.now(), complete: false })
  }

  // COMPLETE A TASK 
  taskComplete = id => {
    console.log('index app taskCompleted id:', id);

    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item;
      })
    }
    this.setState(newState);
  }

  // CLEAR COMPLETED TASKS

  clearTodos = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.complete;
      })
    }
    this.setState(newState);
  }



  render() {
    console.log('app is rendering', this.state);
    return (
      <div className='App'>
        <div className='header'>
          <h2>Todo List: MVP</h2>

          <TodoForm addNewTodo={this.addNewTodo} />
        </div>
        <div className='todoList'>
          <TodoList
            todos={this.state.todoList}
            taskComplete={this.taskComplete}
            clearTodos={this.clearTodos}
          />
        </div>
      </div>
    );
  }

}

export default App;
