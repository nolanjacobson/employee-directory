import React from 'react';

const EmployeeContainer = props => {

  return (
    <>
    
    <li className="employeePageLi">
    <p>{props.firstName + ' ' + props.lastName}</p>
    <p>Full Time: {props.isFullTime === true ? ('Yes') : ('No')}</p>
    <p>Job: {props.jobTitle === '' ? ('N/A') : (props.jobTitle)}</p>
    <p>Job Description: {props.jobDescription === '' ? ('N/A') : (props.jobDescription)}</p>
    <img src={props.profileImage} alt=""/>
    <p>Birthday: {props.birthday === '' ? ('N/A') : (props.birthday)}</p>
    <p>Address: {props.address + ', ' + props.city + ', ' + + props.state + ', ' + props.zipCode}</p>
    <p>Contact Information: {props.email + ' - ' + props.phoneNumber}</p>
    <p>Emergency Contact Information: {props.emergencyEmail + ' - ' + props.emergencyPhoneNumber}</p>
    <p>PTO Hours: {props.ptoHours}</p>
    <button className="deleteEmployee" onClick={props.deleteEmployee}>Delete</button>
    <button className="modifyEmployee" onClick={props.openModal}>Modify</button>
    </li>
    </>
  )
}

export default EmployeeContainer;
