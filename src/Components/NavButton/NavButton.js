import React from 'react'
import "./NavButtons.css"
const navButton = (props) => (
    <button className={props.className}
        onClick={props.clicked}>
        {props.name}
    </button>
)
export default navButton