import React from 'react';
import FoodTypes from './FoodTypes';
import Ratings from './Ratings';

export default class Facets extends React.Component {
  render() {
    let response = this.props.results;

    if (response && (response.facets.length > 0)) {
      let results = response.facets.map(function(object, index) {
        if (object.name === 'food_type') {
          return (
            <FoodTypes
              title="Cuisine/Food Type"
              facetName={object.name}
              facetValues={object.data}
              handleFilterChange={this.props.handleFilterChange}
              key={index}
            />
          )
        }
        if (object.name === 'stars_count') {
          return (
            <Ratings
              title="Rating"
              facetValues={object.data}
              key={index}
            />
          )
        }
      }.bind(this));

      return (
        <div>
          {results}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}
