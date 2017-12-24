import React from 'react';
import PropTypes from 'prop-types'

const FilteredFruitList = ({fruit, filter}) => (

  <ul className="fruit-list">
    {fruit.filter(fruit => fruit.fruit_type == filter || filter == null).map((item, index) => <li key={index}>{item.char}</li>)}
  </ul>
)

FilteredFruitList.defaultProps = {
  fruit: PropTypes.array,
  filter: PropTypes.string
}

export default FilteredFruitList;
