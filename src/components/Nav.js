import React from 'react'
import logo from "../images/Group.svg"

function Nav () {
  return (
    <nav>
      <div className="nav--logo-grouping">
        <img src={logo} alt="small neon blue react logo"></img>
        <h3 className="nav--facebook-blue">ReactFacts</h3>
      </div>
      <h3 className="nav--react-course">React Course - Project 1</h3>
    </nav>
  )
}

export default Nav