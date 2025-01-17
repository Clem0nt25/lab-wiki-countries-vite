import { React, useState } from 'react'
import { Link } from 'react-router-dom'

// create empty Navbar component with return statement
const Navbar = () => {

    return (

        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to={'/'}>WikiCountries</Link>
        </div>
      </nav>

    )
}

export default Navbar
