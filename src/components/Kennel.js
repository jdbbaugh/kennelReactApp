import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" },
        { id: 3, name: "Nashville East", address: "324 Est Court" }
    ]

    animalsFromAPI = [
        {id: 1, name: "Sparky", type: "Dog", ownerId: 4 },
        {id: 2, name: "Grey", type: "Cat", ownerId: 2 },
        {id: 3, name: "Liz", type: "Lizard", ownerId: 3 },
        {id: 4, name: "Jim", type: "Giraffe", ownerId: 4 }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs"},
        { id: 6, name: "Angela Lee" }
    ]

    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <AnimalList animals={this.state.animals} owners={this.state.owners} />
                <EmployeeList employees={this.state.employees} />
            </article>
        )
    }
}

export default Kennel