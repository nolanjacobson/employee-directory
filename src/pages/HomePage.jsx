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

  const deleteEmployee = async (e) => {
    const response = await axios.delete(
      `https://sdg-staff-directory-app.herokuapp.com/api/Strize/Employees/${e}`
    )
    window.location.reload()
  }

  return (<>
  <ul className="homePageUl">
  {employees.map(employee => {
    return (
    <EmployeeContainer 
    key = {employee.id}
    id = {employee.id}
    firstName = {employee.firstName}
    isFullTime = {employee.isFullTime}
    jobTitle = {employee.jobTitle}
    lastName = {employee.lastName}
    profileImage = {employee.profileImage}
    hiredDate = {employee.hiredDate}
    deleteEmployee = {() => deleteEmployee(employee.id)}
    />
    )
  })}
  </ul>
  </>)
}

export default HomePage
