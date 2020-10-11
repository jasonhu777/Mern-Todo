import Axios from 'axios'
import React, { Component } from 'react'

export default class EditTodo extends Component {


  constructor(props) {
    super()
    this.onChangeTodoTaskName = this.onChangeTodoTaskName.bind(this)
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
    this.onChangeCompleted = this.onChangeCompleted.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      todo_taskName: '',
      todo_description: '',
      todo_priority: '',
      todo_completed: false
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          todo_taskName: res.data.todo_taskName,
          todo_description: res.data.todo_description,
          todo_priority: res.data.todo_priority,
          todo_completed: res.data.todo_completed
        })
      })
      .catch(error => { console.log(error) })
  }

  onChangeTodoTaskName(e) {
    this.setState({
      todo_taskName: e.target.value
    })
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    })
  }
  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    })
  }
  onChangeCompleted(e) {
    this.setState({
      todo_completed: !this.state.todo_completed
    })
  }
  onSubmit(e) {
    e.preventDefault()
    const obj = {
      todo_taskName: this.state.todo_taskName,
      todo_description: this.state.todo_description,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed
    }
    Axios.post('http:localhost:4000/todos/update/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data))

    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h3>Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Task Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_taskName}
              onChange={this.onChangeTodoTaskName}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityLow'
                value='Low'
                checked={this.state.todo_priority === 'Low'}
                onChange={this.onChangeTodoPriority} />
              <label className='form-check-label'>Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityMedium'
                value='Medium'
                checked={this.state.todo_priority === 'Medium'}
                onChange={this.onChangeTodoPriority} />
              <label className='form-check-label'>Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityHigh'
                value='High'
                checked={this.state.todo_priority === 'High'}
                onChange={this.onChangeTodoPriority} />
              <label className='form-check-label'>High</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completedCheckbox"
                name="completedCheckbox"
                onChange={this.onChangeCompleted}
                checked={this.state.todo_completed}
                value={this.state.todo_completed}
              />
              <label htmlFor="completedCheckbox" className="form-check-label">Completed</label>
            </div>
            <br />
            <div className="form-group">
              <input type="submit" value="Update Todo" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
