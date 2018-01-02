import React from 'react';
import style from './SearchResult.css';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className={style.searchResult}>
          <div className={style.left}>
            <img src={this.props.image_url} alt={this.props.name} />
          </div>
          <div className={style.right}>
            <div className={style.name}>{this.props.name}</div>
            <div className={style.rating}>{this.props.rating} ({this.props.reviews_count} reviews)</div>
            <div className={style.meta}>
              {this.props.food_type} | {this.props.neighborhood}  | {this.props.price_range}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
