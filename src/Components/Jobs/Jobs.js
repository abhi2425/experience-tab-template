import React from "react";
import "./Jobs.css";
import JobHeader from "./JobsHeader/JobsHeader";
import JobFooter from "./JobsFooter/JobsFooter";

const jobs = (props) => {
    const jobDescription = props.person.jobDescription
    const jobFooter = jobDescription.map((description, index) => (
        <JobFooter description={description}
            key={index}
        />
    ))
    return (
        <article className="jobs">
            <JobHeader designation={props.person.designation}
                name={props.person.name}
                activeYears={props.person.activeYears}
            />
            <footer>
                {jobFooter}
            </footer>
            {props.children}
        </article>
    );
};

export default jobs;
