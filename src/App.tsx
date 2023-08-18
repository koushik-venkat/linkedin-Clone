import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

function App() {

  return (
    <div className="App">
      <Header/>
       <div className="app__body">
        <SideBar/>

       </div>
    </div>
  )
}

export default App
