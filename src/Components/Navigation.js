import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu'
import {useTransition, animated } from 'react-spring'

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
            from: { position: 'absolute', opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)'},
    })
  
    return (
        <nav>
            <span className=' '> 
                <h1 onClick={() => setShowMenu(!showMenu)} className="text-xl p-3"><i class="fas fa-bars"></i></h1>
            </span>
            
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && <animated.div key={key} style={props}
                    className="bg-black-t-50 fixed top-0 right-0 w-full h-full"
                    onClick={() => setShowMenu(false)}

                    >
                        
                    </animated.div>
)}
{
                menuTransitions.map(({ item, key, props }) =>
                    item && <animated.div key={key} style={props}
                    className='bg-white fixed  top-0 left-0 w-4/5 h-full shadow-lg'
                    onClick={() => setShowMenu(false)}>
                        <NavigationMenu
                        />
                    </animated.div>
)}
        </nav>

    );

    
}

export default Navigation