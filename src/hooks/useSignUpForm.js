import { useState } from 'react'

const useSignUpForm = callback => {
  const [newEmployees, setNewEmployee] = useState({})
  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
      // your POST
      if (callback) {
        callback(newEmployees)
      }
    }
  }
  const handleInputChange = event => {
    event.persist()
    // the value is what the user see/types
    // the name is the what state needs to know which object property to update

    setNewEmployee(prev => ({
      ...prev,

      [event.target.name]: event.target.value,
    }))
  }
  return {
    handleSubmit,
    handleInputChange,
    newEmployees,
  }
}

export default useSignUpForm
