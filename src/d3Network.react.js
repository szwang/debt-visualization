import React from 'react';
import d3plus from 'd3plus';
import d3 from 'd3';
import data from '../data/data.json';
import { makeNetwork } from './networkUtils.js';

class d3Network extends React.Component {
  constructor(props) {
    super(props);

    this.constructNetwork = this.constructNetwork.bind(this);
  }

  componentDidMount() {
    this.constructNetwork();
  }

  constructNetwork(year = 2015, quarter = 2) {
    // console.log(data)

    makeNetwork(year, quarter, () => {
      console.log("Completed");
    });
  }

  render() {
    return (
      <div id="container">
        <div id="info"> </div>
      </div>
    )
  }
}

export default d3Network;