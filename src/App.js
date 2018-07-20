import React, { Component } from 'react';
import WaterWave from './components/WaterWave';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><WaterWave type="circle" /></li>
          <li style={{ marginTop: '5px' }}><WaterWave type="star" /></li>
          <li style={{ marginTop: '22px', marginLeft: '-10px' }}><WaterWave type="roundRect" /></li>
          <li style={{ marginTop: '5px', marginLeft: '-170px' }}><WaterWave type="heart" /></li>
        </ul>
      </div>
    );
  }
}

export default App;
