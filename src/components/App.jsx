import React from 'react'
import { Link, Route, Router, IndexRoute, hashHistory, browserHistory } from 'react-router'
import StudentManagement from './StudentManagement.jsx'
import AddStudent from './AddStudent.jsx'
import EditStudent from './EditStudent.jsx'
import StudentDetail from './StudentDetail.jsx'
import NavLink from './NavLink.js'

const App = ({children}) => (
  <div>
    <ul className="nav" role="nav">
      <li className="nav-item"><NavLink to="/" className="nav-link active" onlyActiveOnIndex>StudentManagement</NavLink></li>
      <li className="nav-item"><NavLink to="/addstudent" className="nav-link">AddStudent</NavLink></li>
    </ul>
    {children}
  </div>
)

export default App;
