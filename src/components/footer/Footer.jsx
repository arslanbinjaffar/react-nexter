import React from 'react'
import { footerData } from '../../data/data'
import Style from './style'
const Footer = () => {
  return (
    <Style>
      <ul className="nav">
      {footerData.map(({text,id})=>{
        return(
       <li className='nav__item' key={id}>
        <a href="#" className='nav__link'>
          {text}
        </a>
       </li>
        )
      })}
      </ul>
      <p className="copyright">
        &copy;copyright 2022 by jonas schemedtman
      </p>
    </Style>
  )
}

export default Footer