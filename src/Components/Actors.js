import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const actors = [
    {
        name:'John',
        age:12
    },
    {
        name:'Victor',
        age:13
    }
];

const Actors = (props) => {
    console.log(props);
    const id = props.match.params.id;
    const actor = actors[id];
    if (id >= actors.length) {
        return <h2>No actor found maaan!!!111!!1111</h2>
    }
    return (
        <div>
            <h1>{actor.name}</h1>
            <h2>{actor.age}</h2>
        </div>
    )
};

export default Actors
