import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

function ThemeToggler() {
     
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <div
            onClick={
                () => {
                    setThemeMode( themeMode==="light" ? "dark" : "light" )
                }
        }
        >
            <button style={{
                padding: "1rem",
                background: "#7a6bff",
                color: "white",
                border: "none",
                borderRadius: "10px",
                position: "absolute",
                top: "30px",
                right: "10px"        
        }}> { themeMode==="light" ? "ON " : "OFF"} </button>
        </div>
    )
}

export default ThemeToggler
