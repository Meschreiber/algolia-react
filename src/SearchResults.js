import React from 'react';
import SearchResult from '../src/SearchResult';
import style from './SearchResults.css';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  convertMillisecondsToSeconds(ms) {
    let seconds = ((ms % 60000) / 1000).toFixed(4);
    return seconds;
  }

  render() {
    let response = this.props.results;

    if (response && (response.hits.length > 0)) {
      let results = response.hits.map(function(object, index) {
        return (
          <SearchResult
            name={object.name}
            address={object.address}
            image_url={object.image_url}
            rating={object.stars_count}
            neighborhood={object.neighborhood}
            price_range={object.price_range}
            food_type={object.food_type}
            reviews_count={object.reviews_count}
            key={index}
          />
        )
      });

      return (
        <div>
          <div className={style.stats}>
            <strong>{response.nbHits} results found </strong> in <span className={style.time}>{this.convertMillisecondsToSeconds(response.processingTimeMS)} seconds</span>
          </div>
          {results}
        </div>
      );
    }

    else {
      return (
        <div>
          No results
        </div>
      )
    }
  }

}
