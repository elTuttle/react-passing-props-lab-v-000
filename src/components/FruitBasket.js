import React from 'react';
import PropTypes from 'prop-types'

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, updateFilterCallback}) => (
  <div className="fruit-basket">
    <Filter handleChange={updateFilterCallback} />
    <FilteredFruitList
     filter={currentFilter} />
  </div>
)

FruitBasket.defaultProps = {
  fruit: PropTypes.array,
  filters: PropTypes.array,
  currentFilter: PropTypes.string,
  updateFilterCallback: PropTypes.func
}

export default FruitBasket;
