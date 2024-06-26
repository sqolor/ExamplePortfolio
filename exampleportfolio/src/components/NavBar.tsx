import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



export default function Navbar() {
  
  return (
    
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <li><ProjectIter /></li>
        <CustomLink to="/about">About Me</CustomLink>
      </ul>
    </nav>
  )
}
function ProjectIter() {
  const [showDropdown, setShowDropdown] = useState(false);
    const setDropdown = () => {
    setShowDropdown(!showDropdown)
}
  return (
    <DropdownButton id="dropdown-basic-button" title="Projects" onClick={() => setDropdown()} onBlur={() => setDropdown()}>
      <Dropdown.Item href="/">Action</Dropdown.Item>
      <Dropdown.Item href="/">Another action</Dropdown.Item>
      <Dropdown.Item href="/">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

function CustomLink({to, children, ...props }:{to:string,children:string}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}