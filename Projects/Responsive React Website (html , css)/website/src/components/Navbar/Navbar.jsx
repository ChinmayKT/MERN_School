import React from 'react'

import './navbar.css'



const Navbar = () => {
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <span  className='Left'><div className='Logo'><h1>Chinmay KT</h1></div>
                        <ul className='Menu'>
                            <li className='MenuItem'>HOME</li>
                            <li className='MenuItem'>Features</li>
                            <li className='MenuItem'>Services</li>
                            <li className='MenuItem'>Pricing</li>
                            <li className='MenuItem'>Contact</li>
                        </ul>
                </span>
              
                <span className='Button' >Join Today</span>
            </div>          
        </div>
    )
}

export default Navbar
