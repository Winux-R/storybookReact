import React, { Component, PropTypes } from 'react';

class hello extends Component {
  render() {
    const { words } = this.props;
    return (
      <div className="hello">
        hello {words}
      </div>
    )
  }
}

export default hello;