import React from 'react';
import {Link} from 'react-router-dom'
const EmployeeContainer = props => {
  return (
    <li>
    <Link to={`/Employees/${props.id}`}><p>{props.firstName}</p></Link>
    <p>{props.id}</p>
    <p>{props.isFullTime}</p>
    <p>{props.jobTitle}</p>
    <p>{props.lastName}</p>
    <img src={props.profileImage}/>
    </li>
  );
}

export default EmployeeContainer;
