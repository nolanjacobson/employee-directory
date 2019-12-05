import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import useSignUpForm from '../hooks/useSignUpForm'

const AddEmployee = () => {
  // state needs to be initialized with a value it can recognize.
  const [newEmployee, setEmployee] = useState({ firstName: '', lastName: '', })
  const [employeeId, setEmployeeId] = useState(null)
  const [length, setLength] = useState(0)

  const addEmployee = async e => {
    e.preventDefault()
    const response = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/Strize/Employees/',
      newEmployee
    )
  }

  const updateEmployee = async () => {
    const response = await axios.put(
      `https://sdg-staff-directory-app.herokuapp.com/api/Strize/Employees/${employeeId}`
    )
    setEmployeeId(null)
  }

  const deleteEmployee = async () => {
    const response = await axios.delete(
      `https://sdg-staff-directory-app.herokuapp.com/api/Strize/Employees/${employeeId}`
    )
    setEmployeeId(null)
  }

  const getLength = async () => {
    const response = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Strize/Employees'
    )
    setLength(response.data.length)
  }

  useEffect(() => {
    getLength()
    console.log(length)
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
      <form onSubmit={e => addEmployee(e)}>
        <input
          placeholder="First Name"
          value={newEmployee.firstName}
          name="firstName"
          type="text"
          onChange={handleInputChange}
        />
        <input
          placeholder="Last Name"
          value={newEmployee.lastName}
          name="lastName"
          type="text"
          onChange={handleInputChange}
        />
        <input
          placeholder="Birthday"
          value={newEmployee.birthday}
          name="birthday"
          type="text"
          onChange={handleInputChange}
        />
        <input
          placeholder="Hired Data"
          name="hiredData"
          value={newEmployee.hiredData}
          type="text"
        />
        <input
          placeholder="Full Time: True or False"
          name="fullTime"
          value={newEmployee.fullTime}
          type="text"
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
        />
        <input
          placeholder="Job Description"
          value={newEmployee.jobDescription}
          name="jobDescription"
          type="text"
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
        <button type="submit" onClick={() => updateEmployee()}>
          Update
        </button>
      </form>
      <input
        placeholder="ID of Employee"
        type="number"
        onChange={e => setEmployeeId(e.target.value)}
      />
      <button
        onClick={() => deleteEmployee()}
        disabled={employeeId === null || length === 0}
      >
        Delete Employee
      </button>
    </>
  )
}

export default AddEmployee
