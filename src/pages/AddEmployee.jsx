
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const AddEmployee = props => {

  const [newEmployee, setEmployee] = useState({ id: props.match.params.id, firstName: '', lastName: '', birthday: '', hiredDate: '', isFullTime: true, profileImage: '', 
  jobTitle: '', jobDescription: '', })
  const [employeeId, setEmployeeId] = useState()
  const [today, setToday] = useState(new Date())
  const [success, setSuccess] = useState(false)
  const [companyName, setCompanyName] = useState('')
  
  const addEmployee = async e => {
    e.preventDefault()
    const response = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/${companyName}/Employees/`,
      newEmployee
      )
    setEmployeeId(response.data.id)
    setSuccess(true)

  }

  useEffect(() => {
    setToday((today.getFullYear()) + '/' + (today.getMonth() + 1) + '/' + today.getDate())
  }, [])

  const handleInputChange = event => {
    event.persist()
    setEmployee(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  // I had an issue where my function was being called on click instead of on submit
  return (
    <>
  {success && (<Redirect to={`/Employees/${companyName}/${employeeId}`}/>)}
      <form onSubmit={addEmployee}>
      <input
          placeholder="Company Name"
          value={newEmployee.companyName}
          name="companyName"
          type="text"
          onChange={e => setCompanyName(e.target.value)}
          required
        />
        <input
          placeholder="First Name"
          value={newEmployee.firstName}
          name="firstName"
          type="text"
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Last Name"
          value={newEmployee.lastName}
          name="lastName"
          type="text"
          onChange={handleInputChange}
          required
        />
        <section>Hired Date:
        <input
          placeholder="Hired Date"
          value={newEmployee.hiredDate}
          name="hiredDate"
          type="date"
          min="1960-01-01" 
          max={today}
          onChange={handleInputChange}
        /></section>
        Full Time: 
          <input
          placeholder="Full Time: Yes or No"
          name="fullTime"
          value={newEmployee.isFullTime}
          type="checkbox"
          onChange={handleInputChange}
        />
        <input
          placeholder="Profile Image Link"
          value={newEmployee.profileImage}
          name="profileImage"
          type="text"
          onChange={handleInputChange}
        />
        <input
          placeholder="Job Title"
          value={newEmployee.jobTitle}
          name="jobTitle"
          type="text"
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Job Description"
          value={newEmployee.jobDescription}
          name="jobDescription"
          type="text"
          onChange={handleInputChange}
          required
        />
        <div>Birthday:  
        <input
          placeholder="Birthday"
          value={newEmployee.birthday}
          name="birthday"
          type="date"
          min="1920-01-01" max="2005-01-01"
          onChange={handleInputChange}
        /></div>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddEmployee
