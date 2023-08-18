import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOptions from './HeaderOptions/HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
      <img src="src\assets\linkedinIcon.png" alt="Linkedin Icon" />
        <div className="header__search">
            <SearchIcon className='header__searchicon'/>
            <input type="text"  placeholder='Search'/>
        </div>

      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title='Home'/>
        <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOptions Icon={ChatIcon} title='Messaging'/>
        <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOptions avatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" title="Koushik"/>

      </div>
    </div>
  )
}

export default Header
