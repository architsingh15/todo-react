import React from 'react';

class Summary extends React.Component {
  render() {
    return (
        <div>
            <h3>
                Number of Remaining items: {this.props.count[0]}
            </h3>
            <h3>
                Number of Completed items: {this.props.count[1]}
            </h3>
        </div>
    );
  }
}

export default Summary;
