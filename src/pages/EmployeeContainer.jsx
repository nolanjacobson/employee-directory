import React from 'react';
import moment from 'moment'
const EmployeeContainer = props => {

  return (
    <>
    
    <li className="employeePageLi">
    <img src={props.profileImage} alt=""/>
    <p>{props.firstName + ' ' + props.lastName}</p>
    <p>Full Time: {props.isFullTime === true ? ('Yes') : ('No')}</p>
    <p>Job: {props.jobTitle === '' ? ('N/A') : (props.jobTitle)}</p>
    <p>Job Description: {props.jobDescription === '' ? ('N/A') : (props.jobDescription)}</p>
    <p>Hired Date: {moment(props.hiredDate).format('MMMM Do YYYY')}</p>
    <p>Birthday: {props.birthday === '' ? ('N/A') : (moment(props.birthday).format('MMMM Do YYYY'))}</p>
    <p>Address: {props.address + ', ' + props.city + ', ' + + props.state + ', ' + props.zipCode}</p>
    <p>Contact Information: {props.email + ' - ' + props.phoneNumber}</p>
    <p>Emergency Contact Information: {typeof props.emergencyEmail !== undefined ? props.emergencyEmail + ' - ' + props.emergencyPhoneNumber : (<p>N/A</p>)}</p>
    <p>PTO Hours: {props.ptoHours === '' || undefined ? <p>None</p> : props.ptoHours}</p>
    <button className="deleteEmployee" onClick={props.deleteEmployee}>Delete</button>
    <button className="modifyEmployee" onClick={props.openModal}>Modify</button>
    </li>
    </>
  )
}

export default EmployeeContainer;
