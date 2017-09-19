import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import { browserHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class StudentDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.student);
        this.state = {
            student: this.props.student
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var student1 = this.state.student;
        student1[name] = value;
        this.setState({
            student: student1
        });
    }

    handleChange(value, formattedValue) {
        var student1 = this.state.student;
        student1.date = value;
        this.setState({
            student: student1
        });
    }

    handleSubmit() {
        var urlId = this.state.student.id;
        if (urlId) {
            var myArray = JSON.parse(localStorage.getItem('myData'));
            for (var i = 0; i < myArray.length; i++) {
                if (myArray[i].id == urlId) {
                    myArray[i] = this.state.student;
                }
            }
            localStorage.setItem('myData', JSON.stringify(myArray));
            this.setState({ data: myArray });
        } else {
            var item = this.state.student;
            item.id = new Date().getTime();
            var myArray = JSON.parse(localStorage.getItem('myData'));
            myArray.push(item);
            localStorage.setItem('myData', JSON.stringify(myArray));
            this.setState({ data: myArray });
        }
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="name" className="col-form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={this.state.student.name} placeholder="Name" onChange={this.handleInputChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail" className="col-form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={this.state.student.email} placeholder="Email" onChange={this.handleInputChange} />
                    </div>
                    <div className="col-2">
                        <label htmlFor="inputPhone" className="col-form-label">Phone</label>
                        <input type="tel" className="form-control" name="phone" value={this.state.student.phone} placeholder="Phone" onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="inputAddress" className="col-form-label">Address</label>
                        <input type="text" className="form-control" name="address" value={this.state.student.address} placeholder="Address" onChange={this.handleInputChange} />
                    </div>
                    <div className="col-4">
                        {/*<label htmlFor="inputDate" className="col-form-label">Date</label>*/}
                        {/*<input type="date" className="form-control" name="date" value={this.state.student.date} placeholder="Date" onChange={this.handleInputChange} />*/}
                        {/*<DatePicker id="example-datepicker" value={this.state.student.date} onChange={this.handleInputChange} />*/}
                        <FormGroup>
                            <ControlLabel>Date</ControlLabel>
                            <DatePicker id="date" placeholder="Date" value={this.state.student.date} onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                    <div className="col-2">
                        <label htmlFor="inputGender" className="col-form-label">Gender</label>
                        <select className="form-control" name="gender" value={this.state.student.gender} onChange={this.handleInputChange}>
                            <option>Choose</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <br />
                <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default StudentDetail
