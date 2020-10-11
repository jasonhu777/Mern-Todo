import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';
import Jason from 'D:/React/todo-app/src/jason.png'

function App() {
  return (
    <Router>
      <div className='container'>
        <h2 style={{ display: 'inline', margin: '20px' }}>Jason MERN Todo App</h2>
        <a className='navbar-brand' href='https://www.linkedin.com/in/jasonhu-/' target='_blank' rel="noopener noreferrer">
          <h6>Jason LinkedIn</h6>
        </a>
        <a className='navbar-brand' href='https://github.com/jasonhu777' target='_blank' rel="noopener noreferrer">
          <h6>Jason Github</h6>
        </a>
        <a className='navbar-brand' href='https://hotel-app-jason.web.app/' target='_blank' rel="noopener noreferrer">
          <h6>Hotel App</h6>
        </a>
        <a className='navbar-brand' href='https://instagram-clone-764c7.web.app/' target='_blank' rel="noopener noreferrer">
          <h6>Instagram Clone</h6>
        </a>
        <nav className='navbar navbar-expand-lg nabar-light bg-light'>
          <a className='navbar-brand' href='https://www.linkedin.com/in/jasonhu-/' target='_blank' rel="noopener noreferrer">
            <img src={Jason} alt='Jason LinkedIn' width='100' />
          </a>
          <div className="collapse navbar-collapse">
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>Todo List</Link>
              </li>
              <li className='nav-item'>
                <Link to='/create' className='nav-link'>Create Todo Item</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path='/' exact component={TodoList} />
        <Route path='/edit/:id' component={EditTodo} />
        <Route path='/create' component={CreateTodo} />
      </div>

    </Router >

  );
}

export default App;
