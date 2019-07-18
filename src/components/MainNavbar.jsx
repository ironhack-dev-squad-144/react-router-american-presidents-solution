import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavbar() {
  return (
    <div className="MainNavbar">
      <NavLink to="/" exact className="MainNavbar__link MainNavbar__link--main">React Presidents</NavLink>
      <NavLink to="/about" className="MainNavbar__link">About</NavLink>
      <NavLink to="/list-presidents" className="MainNavbar__link">Presidents</NavLink>
      <NavLink to="/list-presidents2" className="MainNavbar__link">Presidents 2</NavLink>
    </div>
  )
}
