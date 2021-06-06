import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import '../../App.css';

const Total = (props) => {
    return (
        <div>
            <p className='total'>${props.countUp}</p>
            <br></br>
        </div>
    )
}

export default Total