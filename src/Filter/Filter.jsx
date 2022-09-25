import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { filterChange, filterValue } = this.props;
    return (
      <div>
        <form>
          <label>
            Find contact by name:
            <input
              onChange={filterChange}
              type="text"
              name="filter"
              value={filterValue}
            />
          </label>
        </form>
      </div>
    );
  }
}
