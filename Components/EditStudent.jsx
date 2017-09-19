import React from 'react'
import StudentDetail from './StudentDetail.jsx'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class EditStudent extends React.Component {

  constructor(props) {
    super(props);
    var urlId = this.props.match.params.id;
    this.student = this.getInfoStudent(urlId);
  }

  getInfoStudent(urlId) {
    var myArray = JSON.parse(localStorage.getItem('myData'));
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].id == urlId) {
        var student = myArray[i];
        return student;
      }
    }
  }

  render() {
    return (
      <StudentDetail student = {this.student} />
    );
  }
}

export default EditStudent