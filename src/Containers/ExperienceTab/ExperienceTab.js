import React, { Component } from 'react'
import "./ExperienceTab.css"
import data from "./data"
import NavButton from "../../Components/NavButton/NavButton"
import Jobs from "../../Components/Jobs/Jobs"


class ExperienceTab extends Component {
    state = {
        persons: data,
        index: 0
    }
    displayJobHandler = (personIndex) => {
        this.setState(({ index }) => {
            index = personIndex
            return {
                index
            }
        })
    }
    render() {
        const persons = this.state.persons
        const navButton = persons.map((person, personIndex) => {
            let className = "navButton"
            if (this.state.index === personIndex) className = "navButton active"
            return (
                <NavButton name={person.name}
                    key={personIndex}
                    clicked={() => this.displayJobHandler(personIndex)}
                    className={className}
                />
            )
        })
        return (
            <main>
                <nav className="navigation">
                    {navButton}
                </nav>
                <Jobs person={this.state.persons[this.state.index]}>
                    <button className="btn">More Info</button>
                </Jobs>
            </main>
        )
    }
}
export default ExperienceTab