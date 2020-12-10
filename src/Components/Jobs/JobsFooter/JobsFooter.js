import React from "react";
import "./JobsFooter.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const jobsFooter = (props) => (
    <div className="jobDesc">
        <i className="icon">
            <FaAngleDoubleRight />
        </i>
        <p className="jobDesc--content">{props.description}</p>
    </div>
);
export default jobsFooter;
