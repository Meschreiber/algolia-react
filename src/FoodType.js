import React from 'react';
import classNames from '../node_modules/classnames';
import style from './Facets.css';

export default class FoodType extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };

    this.selectFoodType = this.selectFoodType.bind(this);
  }

  selectFoodType() {
    this.setState(function () {
      return {
        // isSelected: !this.state.isSelected,
        name: this.props.facetName
      }
    }.bind(this))

    this.props.handleFilterChange(this.props.facetName, this.props.name);
  }

  render() {
    let classes = classNames(style.highlightOnHover, this.state.isSelected ? style.active : '')

    return (
      <li className={classes} onClick={this.selectFoodType}><span className={style.name}>{this.props.name}</span><span className={style.count}>{this.props.value}</span></li>
    )
  }
}
