import React, { useState } from 'react'
import ThemeContext from './Context/ThemeContext'
import HerorSection from './Components/HeroSection'
import ThemeToggler from './Components/ThemeToggler';


function App() {
  const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="App">
      <ThemeToggler/>
      <HerorSection/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
