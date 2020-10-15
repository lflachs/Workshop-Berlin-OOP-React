import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true,
    };
  }
  render() {
    console.log(this.props);
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default MyComponent;
