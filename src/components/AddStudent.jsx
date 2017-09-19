import React from 'react'
import StudentDetail from './StudentDetail.jsx'

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