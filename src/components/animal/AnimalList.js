import React, { Component } from 'react'

export default class AnimalList extends Component {
  render() {
    const theOwners = this.props.owners;
    const theAnimals = this.props.animals;
    let ownerAnimalArray = []
    theOwners.forEach(owner => {
      theAnimals.forEach(animal => {
        if (owner.id === animal.ownerId) {
          const ownerAndPet = {
            id: owner.id,
            owner: owner.name,
            animal: animal.name,
            animalId: animal.id
          }
          ownerAnimalArray.push(ownerAndPet)
        }
      })
      console.log(ownerAnimalArray)
    })
      return (
        <section className="animals">
        {
            ownerAnimalArray.map(ownerandAnimal =>
               <section key={ownerandAnimal.animalId}>
                    <h4>Pet Owner:</h4>
                   <p>{ownerandAnimal.owner}</p>
                    <h4>Animal:</h4>
                   <p>{ownerandAnimal.animal}</p>
                   <hr></hr>
              </section>)
        }
        </section>
      )
    }
}
