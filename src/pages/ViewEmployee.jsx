import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const ViewEmployee =  props => {

  const [employeeData, setEmployeeData] = useState({})

  
  useEffect(() => {
    const makeApiCall = async () => {
      const response = await axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/Strize/Employees/${props.match.params.id}`)
      setEmployeeData(response.data)
      console.log(response.data)
    }
    makeApiCall()
    console.log(employeeData)
  }, [props.match.params.id])

  return (
    <ul>
    <li>
     <h1>{employeeData.firstName + employeeData.lastName}</h1>
     <img src={employeeData.profileImage}/>
     <h2>{employeeData.email}</h2>
     <h2>{employeeData.phoneNumber}</h2>
     <h3>{employeeData.jobTitle}</h3>
     <p>{employeeData.jobDescription}</p>
     <p>{employeeData.birthday}</p>
     <p>{employeeData.hiredData}</p>
     <p>{employeeData.emergencyContactPhone + employeeData.emergencyContactAddress}</p>
     <p>{employeeData.ptoHours}</p>
     <Link to={`/Employees/${props.match.params.id}/Update`}><button>Modify</button></Link>
     </li>
    </ul>
  );
}

export default ViewEmployee;
