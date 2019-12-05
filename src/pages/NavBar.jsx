import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return(<header>
  <h1 className="strizeHeader">Strize Employee Directory</h1>
  <nav>
    <ul>
      <li>
        <Link to="/">All Employees</Link>
      </li>
      <li>
        <Link to="/AddEmployee">Add Employee</Link>
      </li>
    </ul>
  </nav>
</header>)
}

export default NavBar;
