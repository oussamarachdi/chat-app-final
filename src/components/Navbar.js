import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
    <div className="container">
        <a className="navbar-brand" href="#">ChatBot</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon className='icon' icon={faBars}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">chat</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">contacts</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">settings</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">faqs</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">terms of use</a>
            </li>
        </ul>
        </div>
    </div>
</nav>
    )
}

export default Navbar
