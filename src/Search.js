import React from 'react';
import Algolia from '../node_modules/algoliasearch';
import AlgoliaHelper from '../node_modules/algoliasearch-helper';
import SearchResults from './SearchResults';
import Facets from './Facets';
import styles from './Search.css';

// TODO: move this to server config file
const client = Algolia('RHTCRR0Q2S', 'a0d474078fa8eb55c960069bfe7ca052');
const helper = AlgoliaHelper(client, 'restaurants', {
  facets: ['food_type', 'stars_count', 'payment_options'],
  hitsPerPage: 5,
  maxValuesPerFacet: 5
});

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'Wine'
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.fetchRestaurants = this.fetchRestaurants.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleQueryChange(e) {
    this.setState({
      filtersType: null,
      query: e.target.value
    });
    this.fetchRestaurants();
  }

  handleFilterChange(facetType, facetValue) {
    helper.toggleFacetRefinement(facetType, facetValue).search();
  }

  fetchRestaurants() {
    helper.setQuery(this.state.query).search();
  }

  componentWillMount() {
    this.fetchRestaurants();
  }

  componentDidMount() {
    helper.on('result', function (content) {
      if (this.state.filtersType) {
        content.getFacetValues(this.state.filtersType);
      }

      this.setState(function () {
        return {
         results: content
        }
      });
    }.bind(this))
  }

  // TODO: create a component for SearchBar
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search for Restaurants by Name, Cuisine, Location..." value={this.state.query} onChange={this.handleQueryChange} />
          <button onClick={this.fetchRestaurants}>Search</button>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.sidebar}>
            <Facets results={this.state.results} handleFilterChange={this.handleFilterChange} />
          </div>
          <div className={styles.content}>
            <SearchResults results={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}
