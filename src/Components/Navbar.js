import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (

  <div className="navbar is-black is-bold">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Trending</Link>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Genres
        </a>
        <div className="navbar-dropdown">
          <a className="navbar-item">
            Action
          </a>
          <a className="navbar-item">
            Comedy
          </a>
          <a className="navbar-item">
            Crime
          </a>
          <a className="navbar-item">
            Horror
          </a>
          <a className="navbar-item">
            Thriller
          </a>
          <a className="navbar-item">
            War
          </a>
        </div>
      </div>
    </div>
  </div>


)



export default Navbar