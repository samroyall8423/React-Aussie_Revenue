import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';


class App extends Component {
  render() {
    return (
      <div className="chart">
            <Chart />
            <h1>Worker Revenue 2016, 2017, 2018, and projected 2019</h1>
      </div>
    );
  }
}

export default App

