import React from 'react'
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={style}>
        <ul className={style.navbar}>
            <li>
              <NavLink to={"/"} >Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} >About</NavLink>
            </li>
            <li>
              <NavLink to={"/skills"} >Skills</NavLink>
            </li>            
            <li>
              <NavLink to={"/experience"} >Experience</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"} >Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} >Contact</NavLink>
            </li>

        </ul>


    </nav>
  )
}

export default NavBar