import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="Header">
            <div className="SearchBar">
                <button type="submit" className="search-btn"><FontAwesomeIcon className="search-icon" icon={faSearch} /></button>
                <input type="text" placeholder="SEARCH" autoFocus required />
            </div>
            <div className="Buttons">
                    <button className="btn">Clear Chat</button>
                    <button className="btn">More</button>
            </div>
        </div>
    )
}

export default Header
