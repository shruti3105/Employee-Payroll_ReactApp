import React from 'react';
import './display.css';
import EmployeeService from '../../services/employee-service';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import UtilityService from '../../services/utility-service';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse -4.png';
import profile3 from '../../assets/profile-images/Ellipse -5.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';
import profile5 from '../../assets/profile-images/Ellipse -2.png';
import profile6 from '../../assets/profile-images/Ellipse -1.png';
import {withRouter} from 'react-router-dom';


const Display = (props) => {

  const edit = (id) => {
    props.history.push(`/payroll-form/${id}`);
  }
  const remove = (id) => {
    var deleteChoice = window.confirm("Employee will be deleted permanently!!!\nDo you wish to continue ?");
    if(deleteChoice) {
      new EmployeeService().deleteEmployee(id)
      .then(responseText => {
        alert("Employee deleted successfully!!!");
        window.location.reload();
      }).catch(error => {
        alert("Error occurred while deleting the Employee!!!");
        console("Delete Error : " + JSON.stringify(error));
      })
    } 
  }
  return (
    <table id="display" className="table">
      <tbody>
        
        <tr key={-1}>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Startdate</th>
            <th>Actions</th>
        </tr>
        {
            props.employeeArray && props.employeeArray.map((employee) => (
              <tr key={employee.id}>
                  <td><img src={handleProfilePicture(employee.profilePicture)} alt="" /></td>
                  <td>{employee.name}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.departments && employee.departments.map(dept => (<div className="dept-label">{dept}</div>))}</td>
                  <td> ??? {employee.salary}</td>
                  <td>{new UtilityService().stringifyDate(employee.startDate)}</td>
                  <td><img src={deleteIcon} onClick={() => remove(employee.id)} alt="delete" />
                      <img src={editIcon} onClick={() => edit(employee.id)} alt="edit" /></td>
              </tr>
            ))
          }
        </tbody>
    </table>
  )
}

const profiles = ["../../assets/profile-images/Ellipse -3.png", "../../assets/profile-images/Ellipse -4.png",
                  "../../assets/profile-images/Ellipse -5.png", "../../assets/profile-images/Ellipse -7.png",
                  "../../assets/profile-images/Ellipse -2.png", "../../assets/profile-images/Ellipse -1.png"];
const handleProfilePicture = (profilePicturePath) => {
  let index;
  for( let i = 0; i < profiles.length; i++) {
    if(profiles[i] === profilePicturePath) {
      index = i;
    }
  }
  switch(index) {
    case 0 : return profile1;
    case 1 : return profile2;
    case 2 : return profile3;
    case 3 : return profile4;
    case 4 : return profile5;
    case 5 : return profile6;
    default : return null;
    
  }
}

export default withRouter(Display);