import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import StudentDetail from './StudentDetail.jsx'

class EditStudent extends React.Component {

  constructor(props) {
    super(props);
    var urlId = this.props.params.id;
    this.student = this.getInfoStudent(urlId);
    this.student.date = new Date();
  }

  getInfoStudent(urlId) {
    const { students } = this.props
    var myArray = students
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

const mapStateToProps = (state) => ({
  students: state.students
})

EditStudent = connect(
  mapStateToProps,
//   mapDispatchToProps
)(EditStudent)

export default EditStudent