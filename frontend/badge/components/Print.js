import React, { Component } from 'react';
class PrintThisComponent extends Component {
  componentDidMount() {
    console.log('PrintThisComponent mounted!');
  }
  render() {
    return (
      <div>
        <button onClick={() => window.print()}>PRINT</button>
      </div>
    );
  }
}
export default PrintThisComponent;
