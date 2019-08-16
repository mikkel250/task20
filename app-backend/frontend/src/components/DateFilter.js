import React from 'react';

const DateFilter = ({ filterChange }) => {
  return (
    <div className="pa2">
      <input
        className='ml3 pa2 ba b--green bg-lightest-blue'
        type="Date"
        placeholder="search robots"
        onChange={filterChange}
      />
    </div>
  );
}

export default DateFilter;