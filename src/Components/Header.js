import React from 'react'
import Navigation from './Navigation'
function Header() {
    return(
        <header className='border-b p-3 shadow-lg h-24 w-screen flex justify-between items-center bg-gray-200'> 
            <h1 className='font-mono font-bold'>Brooklyn Nine-Nine</h1>
            <Navigation />
        </header>

    );
}
export default Header;