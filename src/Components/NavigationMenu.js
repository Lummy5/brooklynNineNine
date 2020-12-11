import React from 'react'
import {Link } from 'react-router-dom';



function NavigationMenu(){
    return (
        <div >
            <div className="font-bold py-3 border-b p-3  ">
                Brooklyn Nine-Nine
            </div>
            <ul>
                <Link to='/'>
                <li>
                    Home
                </li>
                </Link>
                <Link to='/cast'>
                <li>
                    Cast
                </li>
                </Link>
                <Link to ='/about'>
                <li>
                    About
                </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavigationMenu