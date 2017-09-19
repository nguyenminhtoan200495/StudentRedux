import React from 'react'
import StudentList from './StudentList.jsx'
import AddStudent from './AddStudent.jsx'
import EditStudent from './EditStudent.jsx'
import StudentDetail from './StudentDetail.jsx'

class StudentManagement extends React.Component {
   constructor(props) {
      super(props);
	
      this.state = {
         data: JSON.parse(localStorage.getItem('myData'))
      }
      this.reload = this.reload.bind(this);
   }

   reload() {
       this.setState({ data: JSON.parse(localStorage.getItem('myData')) });
   }

   render() {
      return (
         <div>
            <StudentList students = {this.state.data} reload={() => this.reload()} />
         </div>
      );
   }
}

export default StudentManagement

// data: 
//          [
//             {
//                id: 1,
//                name: 'Nguyễn Minh Toàn',
//                date: '01/03/1991',
//                gender: 'male',
//                address: 'Bến Tre',
//                email: 'nguyenminhtoan.20.04.95@gmail.com',
//                phone: '0965558393'
//             },
				
//             {
//                id: 2,
//                name: 'Nguyễn Minh Tiến',
//                date: '20/04/1995',
//                gender: 'male',
//                address: 'Bến Tre',
//                email: 'nguyenminhtiend@gmail.com',
//                phone: '0966638355'
//             }
//          ]