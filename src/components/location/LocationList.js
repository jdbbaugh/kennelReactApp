import React, { Component } from 'react'

export default class LocationList extends Component {
  render() {
      return (
          <article>
            <section>
              <h2>Locations:</h2>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <hr></hr>
                </section>
            <section>
                <h3>Graduate Kennels</h3>
                <h4>Nashville South Location</h4>
                <h5>9834 Dog Street</h5>
                <hr></hr>
            </section>
          </article>

      );
  }
}
