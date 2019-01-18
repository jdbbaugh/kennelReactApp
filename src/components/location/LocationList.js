import React, { Component } from 'react'

class LocationList extends Component {
  render() {
      return (
        <section className="locations">
        {
            this.props.locations.map(location =>
               <section key={location.id}>
                   <h3>{location.name}</h3>
                   <h3>{location.address}</h3>
                   <hr></hr>
              </section>)
        }
        </section>
      )
    }
}
export default LocationList