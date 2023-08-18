import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import AppContent from './AppContent/AppContent'
import OtherWidgets from './Widgets/OtherWidgets'

function App() {

  return (
    <div className="app">
      <Header/>
       <div className="app__body">
        <SideBar/>
        <AppContent/>
        <OtherWidgets/>

       </div>
    </div>
  )
}

export default App
