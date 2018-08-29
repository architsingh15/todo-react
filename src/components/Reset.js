import React from 'react';

class Reset extends React.Component {
  render() {
    return (
    <button type="button" className="add-button" onClick={() => this.props.resetTodoItemsList()}>Reset</button>
    );
  }
}

export default Reset;
