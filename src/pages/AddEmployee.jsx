import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { booleanLiteral } from '@babel/types'

const AddEmployee = () => {
  const [newEmployee, setEmployee] = useState({ firstName: '', lastName: '', birthday: '', hiredDate: '', isFullTime: true, profileImage: '', 
  jobTitle: '', jobDescription: '', })
  const [employeeId, setEmployeeId] = useState('')
  const [length, setLength] = useState(0)
  const [today, setToday] = useState(new Date())

  const addEmployee = async () => {

    const response = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/Strize/Employees/',
      newEmployee
    )

    window.alert("Success")
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

  return (
    <>
      <form>
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
        <button type="submit" onClick={() => addEmployee()}>Add</button>
      </form>
    </>
  )
}

export default AddEmployee
