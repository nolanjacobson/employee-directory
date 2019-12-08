import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const HomePage = () => {

  const [employees, setEmployees] = useState([])
  const [value, setValue] = useState(localStorage.getItem('valueOfCompany') || 'Strize')
  const [valueOnClick, setValueOnClick] = useState(localStorage.getItem('valueOfCompany') || 'Strize')

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
  
  return (
  <>
  <section className="companyName">
  <input className="value" placeholder="Enter your Company Name" value={value} onChange={onChange}/>
  <button onClick={() => makeApiCall()}>Submit</button>
  </section>
  <h1 className="companyHeader">{valueOnClick} Employee Directory</h1>
  <ul className="homePageUl">
  {employees.map(employee => {
    return (
      <li className="homePageLi">
      <img src={employee.profileImage !== '' ? employee.profileImage : ('')}/>
      <Link to={`/Employees/${value}/${employee.id}`}><h1>{employee.firstName + ' ' + employee.lastName}</h1></Link>
      <h2>Job Title: {employee.jobTitle}</h2>
      <p>Full Time: {employee.jobTitle === true ? ('Yes') : ('No')}</p>
      </li>
    )
  })}
  </ul>
  </>)
}

export default HomePage
