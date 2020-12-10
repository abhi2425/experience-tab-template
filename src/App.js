import React from "react";
import "./App.css";
import ExperienceTab from "./Containers/ExperienceTab/ExperienceTab";

function App() {
    return <div className="app">
        <header className="experience">
            <div>Experience</div>
            <div className="underline"></div>
        </header>
        <ExperienceTab />
    </div>;
}
export default App;
