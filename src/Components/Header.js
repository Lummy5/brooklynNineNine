import React from 'react'
import Navigation from './Navigation'
import download from './download.png'
import {Link } from 'react-router-dom';

function Header() {
    return(
        <header className='border-b p-3 shadow-lg h-24 w-screen flex justify-between items-center bg-blue-200'> 
               <Link to='/'><img src={download} alt="Brooklyn Nine-Nine" width="160" height="30" /></Link>
            <Navigation />
        </header>
    
    );
}
export default Header;