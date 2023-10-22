
# REACT FACTS

---

##### Contributors: Trevor Rapp, Bob Ziroll

*project completed as an instructor lead tutorial in Scrimba's [Front End Developer Career course](https://scrimba.com/learn/frontend).*

<br/>

[![View Project](https://user-images.githubusercontent.com/11747875/141705232-471a0b9c-ca45-4540-a1b6-740c5e1becbe.png)](https://sensational-palmier-06cfc0.netlify.app/)

<br>


https://user-images.githubusercontent.com/11747875/217636593-e8000a05-e8d6-4f0b-8e47-d0c32c6ba226.mp4

<br/>

---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<br>

---

### DESCRIPTION:

<br/>

> "You can't control other people's actions.  You can only choose how you ReactJS"
>
> -- Trevor Rapp, aspiring React developer and undercover Dad Joke Operator

<br/>

*A basic static page built using React.*

<br/>

---

### QUICKSTART GUIDE

To use the app simply click on the ```View Project``` button or visit <a href="https://sensational-palmier-06cfc0.netlify.app/">[https://trrapp12.github.io/groovy-blocks/](https://sensational-palmier-06cfc0.netlify.app/)</a>. 

<br/>

---

### PROJECT DEMONSTRATES:


- [X] Use of State and Props
- [X] Use of JSX
- [X] Use of basic syntax and architecture of React
- [X] Use of parent > child components
- [X] Use of custom composable, reusable components
- [X] Use of Bable and Webpack through Create React App
- [X] Use of git CLI and GitHub repositories
- [X] Use of CSS and images in React environment
- [X] Use of import and export statements
- [X] Use of local server with webpack

<br/>

---

### CHALLENGES I OVERCAME:

* The original scope of the project did not include a light/dark mode.  I took on the extra challenge to help me learn how to better use state in a real-world issue I might face.  To solve that I had to keep state in the parent app and pass it to the nav component and the main component.  I then use ternary operators and props to create elements that would change with state

```javascript  

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

```

<br/>

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED

- [X] light / dark mode.

<br/>

---

### ATTRIBUTIONS

Course developed and lead by Bob Ziroll as part of Scrimba's [Front End Developer Career course](https://scrimba.com/learn/frontend).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br/>

---

### YOU CAN FIND ME AT:

\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037), or return to my [Github](https://github.com/trrapp12)*




