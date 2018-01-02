import React from 'react';
import FoodType from './FoodType';
import style from './FoodTypes.css';

export default class FoodTypes extends React.Component {
  render() {
    let data = this.props.facetValues;
    let facetValues = Object.keys(data).map(function(key, index) {
      return (
        <FoodType
          name={key}
          value={data[key]}
          key={index}
        />
      )
    });

    return (
      <div className={style.facet}>
        <h1 className={style.facetTitle}>{this.props.title}</h1>
        <ul className={style.facetList}>{facetValues}</ul>
      </div>
    )
  }
}
