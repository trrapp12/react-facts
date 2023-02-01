import React from 'react'

export default function Button(props) {
    
    const [isDark, setDarkMode] = React.useState(true)

    function toggle() {
        setDarkMode(prevState => !prevState)
    }

    return (
        <button className={isDark ? 'clicked' : 'not-clicked'}>
            <div onClick={toggle} id="circle" className="circle"></div>
            <div className="empty"></div>
        </button>
    )
}