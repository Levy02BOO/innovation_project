import React from 'react';
import './styles.css'; // Import your CSS file
import Audit from './Audit'; // Import your Audit component


class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Audit />
      </div>
    );
  }
}

export default App;
