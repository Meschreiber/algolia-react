import React from 'react';
import style from './Facets.css';

export default class Rating extends React.Component {
  render() {
    let numStars = this.props.name;
    let size = Math.max(0, (Math.min(5, numStars))) * 17;
    let sizeString = size + 'px';

    let stars = {
      width: sizeString
    }

    return (
      <li><span className={style.stars}><span style={stars}></span></span></li>
    )
  }
}
