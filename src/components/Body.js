import React from 'react'
import largeLogo from "../images/large_group.svg"

function Body (props) {

  console.log(props.isDark)

  return (
    <div className={props.isDark ? "body--container" : "body--container background-light"}>
      <h1 className={props.isDark ? "body--title condensed-letter-spacing" : "condensed-letter-spacing font-light"}>Fun Facts about React</h1>
      <ul>
        <li className={props.isDark ? "body--list-items" : "body--list-items font-light"}>Was first released in 2013</li>
        <li className={props.isDark ? "body--list-items" : "body--list-items font-light"}>Was originally created by Jordan Walke</li>
        <li className={props.isDark ? "body--list-items" : "body--list-items font-light"}>Has well over 100K stars on Github</li>
        <li className={props.isDark ? "body--list-items" : "body--list-items font-light"}>Is maintained by Facebook</li>
        <li className={props.isDark ? "body--list-items" : "body--list-items font-light"}>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className="large-logo" src={largeLogo} alt="subdued react logo on background"></img>
      <button onClick={() => props.toggle()} id='circle' className={props.isDark ? 'clicked' : 'not-clicked'}>
            <div id="circle" className="circle"></div>
            <div className="empty"></div>
        </button>
    </div>
  )
}

export default Body