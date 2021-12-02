import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../AppTheme'
import ThemeToggler from './ThemeToggler';


function HeroSection() {

    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const themeName = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[themeName];


    return (
        <div style={{ 
            padding: "2rem", 
            background: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            border: `${currentTheme.border}`,
            fontFamily: `${currentTheme.fontFamily}`
            }} >
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam doloremque incidunt aliquam, obcaecati repellat exercitationem quis voluptate omnis aperiam reprehenderit consectetur atque magnam excepturi unde odit! Corporis eos laboriosam facilis!</p>
            <button >Contact</button>
        </div>
    )
}

export default HeroSection
