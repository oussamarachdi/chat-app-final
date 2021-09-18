import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="#">ChatBot</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon className='icon' icon={faBars}/>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">chat</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">contacts</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">settings</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">faqs</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">terms of use</a>
            </li>
        </ul>
        </div>
    </div>
</nav>
    )
}

export default Navbar
