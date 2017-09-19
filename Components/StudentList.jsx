import React from 'react'
import Modal from 'react-modal';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    width: '400px'
  }
};

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      deleteId: -1
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openModal(id) {
    this.setState({ modalIsOpen: true, deleteId: id });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, deleteId: -1 });
  }

  handleDelete() {
    var myArray = JSON.parse(localStorage.getItem('myData'));
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].id == this.state.deleteId) {
        myArray.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('myData', JSON.stringify(myArray));
    this.setState({ modalIsOpen: false, deleteId: -1 });
    this.props.reload();

  }

  render() {
    return (
      <div>
        <table className="table table-hover table-bordered">
          <thead>
            <tr className="success">
              <th>Date</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete <i className="fa fa-trash-o" aria-hidden="true"></i></th>
              <th><Link to="/addstudent"><button className="btn btn-primary">Add</button></Link></th>
            </tr>
          </thead>
          <tbody>
            {this.props.students.map((student, index) => {
              return <tr className="info" key={index}>
                <td>{student.date}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.address}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td><Link to={`/editstudent/${student.id}`} ><button className="btn btn-primary">Edit</button></Link></td>
                <td><button className="btn btn-danger" onClick={() => this.openModal(student.id)}>Delete</button></td>
              </tr>;
            })}
          </tbody>
        </table>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Comfirmation</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure to want to delete?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.handleDelete}>Yes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default StudentList