import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import EmployeeContainer from './EmployeeContainer'
import Modal from 'react-modal'

const customStyles = {
content : {
  top                   : '50%',
  left                  : '50%',
  right                 : 'auto',
  bottom                : 'auto',
  marginRight           : '-50%',
  transform             : 'translate(-50%, -50%)'
}}

const ViewEmployee =  props => {

  const [employee, setEmployeeData] = useState({})
  const [success, setSuccess] = useState(false)
  const [id, setStoreId] = useState()
  const [updateEmployee, setUpdateEmployee] = useState({id: props.match.params.id, firstName: '', lastName: '', birthday: '', hiredDate: '', isFullTime: true, profileImage: '', 
  jobTitle: '', jobDescription: '', })
  const [today, setToday] = useState(new Date())
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [companyName, setCompanyName] = useState('')

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)


  const updateEmployeeApiCall = async e => {
    e.preventDefault()
    const response = await axios.put(`https://sdg-staff-directory-app.herokuapp.com/api/${props.match.params.companyName}/Employees/${props.match.params.id}`, updateEmployee)
    setSuccess(true)
  }



  useEffect(() => {
    setToday((today.getFullYear()) + '/' + (today.getMonth() + 1) + '/' + today.getDate())
  }, [])



  const handleInputChange = event => {
    event.persist()
    setUpdateEmployee(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  
  useEffect(() => {
    const makeApiCall = async () => {
      const response = await axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/${props.match.params.companyName}/Employees/${props.match.params.id}`)
      setEmployeeData(response.data)
      setStoreId(response.data.id)
      setCompanyName(response.data.companyKey)
      console.log(response.data)
    }
    makeApiCall()
    console.log(employee)
  }, [props.match.params.id])

  const deleteEmployee = async (e) => {
    const response = await axios.delete(
      `https://sdg-staff-directory-app.herokuapp.com/api/${props.match.params.companyName}/Employees/${e}`
    )
    setSuccess(true)
  }

  return (
    <>
    {success && <Redirect to={"/"}/>}
    <ul>
    <EmployeeContainer 
    key = {employee.id}
    id = {employee.id}
    companyName = {props.match.params.companyName}
    firstName = {employee.firstName}
    lastName = {employee.lastName}
    isFullTime = {employee.isFullTime}
    jobTitle = {employee.jobTitle}
    jobDescription = {employee.jobDescription}
    birthday = {employee.birthday}
    address = {employee.address}
    city = {employee.city}
    zipCode = {employee.zipCode}
    state = {employee.state}
    profileImage = {employee.profileImage}
    hiredDate = {employee.hiredDate}
    deleteEmployee = {() => deleteEmployee(employee.id)}
    openModal = {openModal}/>
    </ul>
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal">
      <button onClick={closeModal}>Back</button>
      <form onSubmit={updateEmployeeApiCall}>
        <input
          placeholder="First Name"
          value={updateEmployee.firstName}
          name="firstName"
          type="text"
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Last Name"
          value={updateEmployee.lastName}
          name="lastName"
          type="text"
          onChange={handleInputChange}
          required
        />
        <section>Hired Date:
        <input
          placeholder="Hired Date"
          value={updateEmployee.hiredDate}
          name="hiredDate"
          type="date"
          min="1960-01-01" 
          max={updateEmployee.today}
          onChange={handleInputChange}
        /></section>
        Full Time: 
          <input
          placeholder="Full Time: Yes or No"
          name="fullTime"
          value={updateEmployee.isFullTime}
          type="checkbox"
          onChange={handleInputChange}
        />
        <input
          placeholder="Profile Image Link"
          value={updateEmployee.profileImage}
          name="profileImage"
          type="text"
          onChange={handleInputChange}
        />
        <input
          placeholder="Job Title"
          value={updateEmployee.jobTitle}
          name="jobTitle"
          type="text"
          onChange={handleInputChange}
          required
        />
        <input
          placeholder="Job Description"
          value={updateEmployee.jobDescription}
          name="jobDescription"
          type="text"
          onChange={handleInputChange}
          required
        />
        <div>Birthday:  
        <input
          placeholder="Birthday"
          value={updateEmployee.birthday}
          name="birthday"
          type="date"
          min="1920-01-01" max="2005-01-01"
          onChange={handleInputChange}
        /></div>
        <button type="submit">Update</button>
      </form>
        </Modal>
    </>
  );
}

export default ViewEmployee;
