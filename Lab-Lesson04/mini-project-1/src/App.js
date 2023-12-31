import React, { Component } from 'react'
import Title from './Components/Title'
import ListStudent from './Components/ListStudent'
import Form from './Components/Form'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
      ]
    }
  }
  render() {
    let students = this.state;

    return (
      <div className=''>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Title />
              <ListStudent renderStudents = {students}/>
            </div>
          </div>
          <div className="col-5 grid-margin">
            <Form />
          </div>
        </div>

      </div>
    )
  }
}

