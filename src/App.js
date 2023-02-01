import React from "react"
import Nav from "./components/Nav"
import Body from "./components/Body"

function App () {

  const [isDark, setDarkMode] = React.useState(true)

  function toggle() {
      setDarkMode(prevState => !prevState)
  }

  return (
    <div className={isDark ? "main-container background-dark" : "main-container background-light border--light"}>
      <Nav/>
      <Body 
      toggle={toggle}
      isDark={isDark}
      />
    </div>
  )
}

export default App