import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import NavBar from './pages/NavBar'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ViewEmployee from './pages/ViewEmployee'
import AddEmployee from './pages/AddEmployee'
import UpdateEmployees from './pages/UpdateEmployees'
const App = () => {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/Employees/:companyName/:id" component={ViewEmployee}></Route>
        <Route exact path="/Employees/:companyName/:id/Update" component={UpdateEmployees}></Route>
        <Route exact path="/Employees/AddEmployee" component={AddEmployee}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
