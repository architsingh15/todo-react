import React from 'react';

class AddBar extends React.Component {
  
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
  }

  render() {
    return (
      <div>
        <input type="text" name="addText" value={this.state.value} onChange={this.handleChange}/>
        <button type="button" className="add-button" onClick={() => this.props.addTodoItem(this.state.value)}>Add</button>
      </div>
    );
  }
}

export default AddBar;
