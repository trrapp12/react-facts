
# REACT FACTS

[![Netlify Status](https://api.netlify.com/api/v1/badges/3d4959b9-5f7c-42c4-885c-1ff5dcd2d8b9/deploy-status)](https://app.netlify.com/sites/sensational-palmier-06cfc0/deploys)

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

### SCRIMBA FRONT END DEVELOPER CAREER CERTIFICATE:

*This project was completed as part of the Scrimba [The Frontend Career Path](https://scrimba.com/learn/frontend), which is composed of:*

* over 1000 lessons
* over 65 hours of instruction
* over 30 instructor-lead, hands-on projects
* over 15 Solo Projects (completed completely alone, with only Figma files and user stories provided.)

![Scrimba Frontend Developer Career Path Certificate of Completion](https://private-user-images.githubusercontent.com/11747875/286343080-af711cc7-262a-4e10-b714-38242281f13a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDE5MTksIm5iZiI6MTcwMTIwMTYxOSwicGF0aCI6Ii8xMTc0Nzg3NS8yODYzNDMwODAtYWY3MTFjYzctMjYyYS00ZTEwLWI3MTQtMzgyNDIyODFmMTNhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI4VDIwMDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmZjY2MGEwZDJlZjk1ZWQ0NTI2MmViM2IxNmYyNWVhYTYzYjc4NDYxYzNjNTBiNmMwZmQ2YjhjMzk2NGRlMzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.cHBvWMxpR5PRF-Aw44drZbsAgS64QlpdTXDzz9xUYhY)

[CERTIFICATE OF COMPLETION - The Frontend Developer Career Path.pdf](https://github.com/trrapp12/dice-game/files/13483804/CERTIFICATE.OF.COMPLETION.-.The.Frontend.Developer.Career.Path.pdf)

<br/>

---

### ATTRIBUTIONS

* Course developed and lead by Bob Ziroll as part of Scrimba's [Front End Developer Career course](https://scrimba.com/learn/frontend).

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br/>

---

### YOU CAN FIND ME AT:

\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037), or return to my [Github](https://github.com/trrapp12)*




