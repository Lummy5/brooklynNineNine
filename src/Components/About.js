import React from 'react'
import insta from './instalogo.png'
import github from './github.png'
function About(){
    return(
        <div>
            <h1 className="text-xl font-mono">See more of me at:</h1>
            <div className="flex justify-start">
            <img src={insta} width="50" height="50" className=" m-4"/>
            <a className="p-5 text-xl" href="https://www.instagram.com/soltan.cristian/">@soltan.cristian</a>
            </div>
            <div className="flex justify-start">
            <img src={github} width="50" height="50" className=" m-4"/>
            <a className="p-5 text-xl" href="https://github.com/Lummy5">@Lummy5</a>
            </div>
        </div>
    );
}
export default About;