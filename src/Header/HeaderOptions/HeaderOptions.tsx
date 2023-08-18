import React from 'react'
import './HeaderOptions.css'
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Avatar, SvgIconTypeMap } from '@mui/material';

type propType={
    title:string,
    Icon?:OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;},
    avatar?: string,
    

}

const HeaderOptions = ({Icon, title, avatar}:propType) => {
  return (
    <div className='headerOption
    '>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon"/>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOptions
