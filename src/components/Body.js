import React from 'react'
import largeLogo from "../images/large_group.svg"

function Body () {
  return (
    <div className="body--container">
      <h1 className="body--title condensed-letter-spacing">Fun Facts about React</h1>
      <ul>
        <li className="body--list-items">Was first released in 2013</li>
        <li className="body--list-items">Was originally created by Jordan Walke</li>
        <li className="body--list-items">Has well over 100K stars on Github</li>
        <li className="body--list-items">Is maintained by Facebook</li>
        <li className="body--list-items">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className="large-logo" src={largeLogo} alt="subdued react logo on background"></img>
    </div>
  )
}

export default Body