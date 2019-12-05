import React from 'react';
import {Link} from 'react-router-dom'
const EmployeeContainer = props => {
  return (
    <li className="homePageLi">
    <p>{props.id}</p>
    <Link to={`/Employees/${props.id}`}><p>{props.firstName + ' ' + props.lastName}</p></Link>
    <p>Job: {props.jobTitle === '' ? ('N/A') : (props.jobTitle)}</p>
    <p>Full Time: {props.isFullTime === true ? ('Yes') : ('No')}</p>
    <img src={props.profileImage}/>
    <button className="deleteEmployee" onClick={props.deleteEmployee}>Delete</button>
    </li>
  );
}

export default EmployeeContainer;
