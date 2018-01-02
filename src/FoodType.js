import React from 'react';
import style from './FoodTypes.css';

export default class FoodType extends React.Component {
  render() {
    return (
      <li><span className={style.name}>{this.props.name}</span><span className={style.count}>{this.props.value}</span></li>
    )
  }
}
