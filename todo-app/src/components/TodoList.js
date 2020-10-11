import Axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_taskName}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
)

export default class TodoList extends Component {

  constructor(props) {
    super()
    this.state = { todos: [] }
  }

  componentDidMount() {
    Axios.get('http://localhost:4000/todos')
      .then(res => this.setState({ todos: res.data }))
      .catch(error => console.log(error))
    console.log(this.state)
  }

  todoList() {
    return this.state.todos.map((item, index) => <Todo todo={item} key={index} />)
  }
  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.todoList()}
          </tbody>

        </table>
      </div>
    )
  }
}
