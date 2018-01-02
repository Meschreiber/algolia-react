import React from 'react';
import style from './Facets.css';

export default class FoodType extends React.Component {
  render() {
    return (
      <li className={style.highlightOnHover}><span className={style.name}>{this.props.name}</span><span className={style.count}>{this.props.value}</span></li>
    )
  }
}
