import React from 'react'

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <div className="logo"><h3>DevConnect</h3></div>
            <div className="links">
                <li>Home</li>
                <li>About</li>
                <li>Community</li>
                <li>Discuss</li>
                <li>Contests</li>
            </div>
            <div className="profile">
                <h3>Profile/Login</h3>
                <p>Notify</p>
            </div>
        </nav>
    )
}
export default Navbar;