import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import '../../App.css';

const Total = (props) => {
    return (
        <div>
            <p className='total'>${props.count}</p>
            <br></br>
        </div>
    )
}

export default Total