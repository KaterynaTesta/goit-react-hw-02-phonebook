import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <>
    <p>Find contacts by name</p>
    <input name="filter" onChange={onChangeFilter} value={value} />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
