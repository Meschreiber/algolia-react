import React from 'react';
import Rating from './Rating';
import style from './Facets.css';

export default class Ratings extends React.Component {
  render() {
    let data = this.props.facetValues;
    let facetValues = Object.keys(data).sort().map(function(key, index) {
      return (
        <Rating
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
