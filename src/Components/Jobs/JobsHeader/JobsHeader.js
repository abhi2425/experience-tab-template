import React from 'react'
import "./JobsHeader.css"
const jobHeader = ({ designation, name, activeYears }) => (
    <header>
        <h3>
            {designation}
        </h3>
        <h4>
            {name}
        </h4>
        <p className="activeYears">
            {activeYears}
        </p>
    </header>
)
export default jobHeader