import React from 'react'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'
import StudentManagement from './StudentManagement.jsx'
import StudentDetails from './StudentDetails.jsx'
import AddStudent from './AddStudent.jsx'
import EditStudent from './EditStudent.jsx'
import StudentDetail from './StudentDetail.jsx'

const App = () => (
  <HashRouter>
    <div>
      <ul className="nav">
        <li className="nav-item"><Link to="/" className="nav-link active">StudentManagement</Link></li>
        <li className="nav-item"><Link to="/studentdetails" className="nav-link">StudentDetails</Link></li>
        <li className="nav-item"><Link to="/addstudent" className="nav-link">AddStudent</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={StudentManagement}/>
      <Route path="/studentdetails" component={StudentDetails}/>
      <Route path="/addstudent" component={AddStudent}/>
      <Route path="/editstudent/:id" component={EditStudent}/>
    </div>
  </HashRouter>
)

export default App;
