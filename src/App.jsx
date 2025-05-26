import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <Sidebar/>
      <div className="main-content">
        <Header/>
      </div>
    </div>
  )
}

export default App
