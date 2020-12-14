import React from 'react';
import './Read.css';

const Read = ({id, name, position, salary}) => {
    console.log(id, name);
    return (
        <div>
            <h1>Id:{id}</h1>
            <h1>Name:{name}</h1>
            <h1>Position:{position}</h1>
            <h1>Salary:{salary}</h1>
        </div>
    );
};

export default Read;