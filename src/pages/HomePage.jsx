import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EmployeeContainer from './EmployeeContainer'

const HomePage = () => {

  const [employees, setEmployees] = useState([]
    )
  const makeApiCall = async () => {
    const response = await axios.get('https://sdg-staff-directory-app.herokuapp.com/api/Strize/Employees')
    setEmployees(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    makeApiCall()
  }, [])

  return (<>
  <ul>
  {employees.map(employee => {
    return (
    <EmployeeContainer 
    firstName = {employee.firstName}
    id = {employee.id}
    isFullTime = {employee.isFullTime}
    jobTitle = {employee.jobTitle}
    lastName = {employee.lastName}
    profileImage = {employee.profileImage}/>
    )
  })}
  </ul>
  </>)
}

export default HomePage
