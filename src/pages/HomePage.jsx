import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EmployeeContainer from './EmployeeContainer'

const HomePage = () => {

  const [employees, setEmployees] = useState([])
  const [value, setValue] = useState(localStorage.getItem('valueOfCompany') || '')
  const [valueOnClick, setValueOnClick] = useState(localStorage.getItem('valueOfCompany') || '')
  
    useEffect(() =>
    {
      localStorage.setItem('valueOfCompany', value)
    }, [value])

    useEffect(() => {
      makeApiCall()
    }, [])
  
  const onChange = event => {setValue(event.target.value)}
 
  const makeApiCall = async () => {
    
    const response = await axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/${value}/Employees`)
    setEmployees(response.data)
    console.log(response.data)
    setValueOnClick(value)
  }

  const deleteEmployee = async (e) => {
    const response = await axios.delete(
      `https://sdg-staff-directory-app.herokuapp.com/api/${value}/Employees/${e}`
    )
    window.location.reload()
  }
  
  return (<>
  <div>
  <input className="value" placeholder="Enter your Company Name" value={value} onChange={onChange}/>
  <button onClick={() => makeApiCall()}>Submit</button></div>
  <h1 className="companyHeader">{valueOnClick} Employee Directory</h1>
  <ul className="homePageUl">
  {employees.map(employee => {
    return (
    <EmployeeContainer 
    companyName={value}
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
