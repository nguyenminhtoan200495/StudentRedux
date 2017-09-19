import React from 'react'
import StudentDetail from './StudentDetail.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.student = {
      date: new Date().toISOString()
    };
  }

  render() {
    return (
      <StudentDetail student = {this.student} />
    );
  }
}

export default AddStudent