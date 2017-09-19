import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import StudentList from './StudentList.jsx'
import AddStudent from './AddStudent.jsx'
import EditStudent from './EditStudent.jsx'
import StudentDetail from './StudentDetail.jsx'

class StudentManagement extends React.Component {
   constructor(props) {
      super(props);
	
    //   this.state = {
    //      data: JSON.parse(localStorage.getItem('myData'))
    //   }
    //   this.reload = this.reload.bind(this);
   }

   reload() {
    //    this.setState({ data: JSON.parse(localStorage.getItem('myData')) });
   }

   render() {
       const { students } = this.props
      return (
         <div>
            <StudentList students = {students} />
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
  students: state.students
})

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onCalculate: (calculation, value1, value2) => {
//       dispatch(doCalculation(calculation, value1, value2))
//     }
//   }
// }

StudentManagement = connect(
  mapStateToProps,
//   mapDispatchToProps
)(StudentManagement)

export default StudentManagement
