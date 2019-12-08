import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return(
  <header>
  <nav>
    <ul>
      <li>
        <Link to="/">All Employees</Link>
      </li>
      <li>
        <Link to={`/Employees/AddEmployee`}>Add Employee</Link>
      </li>
    </ul>
  </nav>
</header>
)
}

export default NavBar;
