import React from 'react';
import d3plus from 'd3plus';
import countryDebt from '../data/country_debt.json';

    // Sample data array
    var sample_data = [
      {"name": "alpha", "size": 10},
      {"name": "beta", "size": 12},
      {"name": "gamma", "size": 30},
      {"name": "delta", "size": 26},
      {"name": "epsilon", "size": 12},
      {"name": "zeta", "size": 26},
      {"name": "theta", "size": 11},
      {"name": "eta", "size": 24}
    ];

    // Sample array of node positions
    var positions = [
      {"name": "alpha", "x": 10, "y": 15},
      {"name": "beta", "x": 12, "y": 24},
      {"name": "gamma", "x": 16, "y": 18},
      {"name": "delta", "x": 26, "y": 21},
      {"name": "epsilon", "x": 13, "y": 4},
      {"name": "zeta", "x": 31, "y": 13},
      {"name": "theta", "x": 19, "y": 8},
      {"name": "eta", "x": 24, "y": 11}
    ];

    // Sample array of node connections
    var connections = [
      {"source": "alpha", "target": "beta"},
      {"source": "alpha", "target": "gamma"},
      {"source": "beta", "target": "delta"},
      {"source": "beta", "target": "epsilon"},
      {"source": "zeta", "target": "gamma"},
      {"source": "theta", "target": "gamma"},
      {"source": "eta", "target": "gamma"}
    ];

export default class VizPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.drawViz();
  }

  drawViz() {
    var visualization = d3plus.viz()
      .container(".viz")
      .type("network")
      .edges(connections)
      .id("name")
      .draw();

  }

  render() {
    return (
      <div className="viz"> </div>
    )
  }
}