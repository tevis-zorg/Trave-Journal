import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* toggle toggle button */}
      {/* <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>

          <button onClick={toggleDarkMode}>

              {isDarkMode ? 'Light Mode' : 'Dark Mode'}

          </button>

      </div> */}

      {/* Components */}
      <Header />
      <Entry />

    </>
  )
}

export default App
