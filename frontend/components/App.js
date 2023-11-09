import React from 'react'
import ReactDOM  from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    };
  } 
  render() {
    return (
      <div>
        Todo App
      </div>
    )
  }
}
