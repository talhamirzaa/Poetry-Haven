import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';//to change active tabs

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src="/logo1.png" alt="logo" srcset="" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-2">
          <li className="nav-item px-1">
            <NavLink className="nav-link" aria-current="page" to="/" activeClassName="active">Home</NavLink>
          </li> 
         <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/Search" activeClassName="active">Search Poet</NavLink>
          </li> &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;
          <li className="nav-item px-2">
          <button type="button" className="btn btn-outline-light btn-sm mt-1 rounded-pill">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </li>
          <li className="nav-item px-2">
          <button type="button" className="btn btn-light btn-sm mt-3 mt-md-1 rounded-pill">Create Account</button>
          </li>
        </ul>
        
          
      </div>
    </div>
  </nav>
  )
}
