import React from 'react';
import Network from './d3Network.react';

export default class VizPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.drawViz();
  }

  render() {
    return (
      <div>
        Hi
        <Network />
      </div>
    )
  }
}