import React from 'react';

const FILTER_CONSTANTS = {
    SHOW_ALL: 'SHOW ALL',
    COMPLETED: 'COMPLETED',
    REMAINING: 'REMAINING',
}

class Filter extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
    return this.props.addFilter(event.target.value)
  }

  render() {
    return (
    <select value={this.state.value} onChange={this.handleChange} className="filter">
        <option value="SHOW_ALL">{FILTER_CONSTANTS['SHOW_ALL']}</option>
        <option value={FILTER_CONSTANTS['COMPLETED']}>{FILTER_CONSTANTS['COMPLETED']}</option>
        <option value={FILTER_CONSTANTS['REMAINING']}>{FILTER_CONSTANTS['REMAINING']}</option>
    </select>
    );
  }
}

export default Filter;
