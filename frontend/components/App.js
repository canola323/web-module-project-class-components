import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

let id = 0
let getId = () => ++id

const initialTodos = [
  {
    name: 'Organize Garage',
    id: getId(),
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: getId(),
    completed: false
  },
];

export default class App extends React.Component {
  state = {
    todos: initialTodos
  } 

  addTodo = ({ name }) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: id, completed: false, name })
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if (id == td.id) return { ...td, completed: !td.completed}
        return td
      })
    })
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
