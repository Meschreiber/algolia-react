import React from 'react';
import FoodType from './FoodType';
import style from './Facets.css';

export default class FoodTypes extends React.Component {
  render() {
    let data = this.props.facetValues;
    let facetValues = Object.keys(data).map(function(key, index) {
      return (
        <FoodType
          facetName={this.props.facetName}
          name={key}
          value={data[key]}
          handleFilterChange={this.props.handleFilterChange}
          key={index}
        />
      )
    }.bind(this));

    return (
      <div className={style.facet}>
        <h1 className={style.facetTitle}>{this.props.title}</h1>
        <ul className={style.facetList}>{facetValues}</ul>
      </div>
    )
  }
}
