import d3 from 'd3';
import _ from 'lodash';
import linkData from './data/links.json';
import nodeData from './data/nodes.json';

export function makeNetwork(year, quarter, callback) {
  var info;
  var links = [],
      nodes = [];

  const width = 960,
        height = 850,
        innerRadius = 40,
        outerRadius = 640;

  // set color scheme
  var color = d3.scale.category10();

  // append svg container
  var svg = d3.select('#container').append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + outerRadius * .20 + "," + outerRadius * .57 + ")");

  // load and transform data
  d3.json(linkData, (allLinks) => {
    d3.json(nodeData, (allNodes) => {

      //transform the data
      /* STRUCTURE:

      links = [{ source: ISO2, target: ISO2, owed: num }] 
      nodes = [{ node: ISO2, continent: xx, name: country name, debt: num}]

      */

      _.forEach(allLinks, (val) => {
        var timeKey = constructTimeKey(year, quarter, "link");
        console.log(timeKey)
        if(val.timeKey !== "NaN" && val.timeKey !== 0) {
          var data = {
            source: val.source,
            target: val.target,
            owed: val[]
          }
          links.push(data);
        }
      })

      _.forEach(allNodes, (val) => {
        var data = {

        }
      })

      //initialize info display
      var info = d3.select('#info')
          .text("Showing stuff")

      var force = d3.layout.force()
        .charge(-120)
        .linkDistance(30)
        .size([width, height]);

      //draw the links
      svg.append("g")
         .attr("class", "links")
         .selectAll(".link")
         .data(links)
         .enter().append("path")
         .attr("class", "link")
         // .attr("d", link()
         //    .angle(function(d) { return angle(d.type)})
         //    .radius(function(d) { return radius(d.node.index)})
         // )
         .on("mouseover", linkMouseover)

      //draw the nodes
      svg.append("g")
         .attr("class", "nodes")
         .selectAll(".node")
         .data(countryData)
         .enter().append("g")
         .attr("class", "node")
         .style("fill", function(d) { return color(d.continent)}) //TODO: write color function
         .selectAll("circle")
          .data(function(d) {})
         .enter().append("circle")
          .attr("r", function(d) { return d.debt})
    })
  })

  function linkMouseover(d) {
    svg.selectAll(".link").classed("active", function(p) { return p === d});
    svg.selectAll(".node circle").classed("active", function(p) { return p === d});
    console.log(d.source, d.target);
  }

  function mouseout() {
    svg.selectAll(".active").classed("active", false);
  }
}

function constructTimeKey(year, quarter, type) {
  if(type === 'link') {
    console.log(year + '-Q' + quarter)
    return year + '-Q' + quarter;
  } else if(type === 'node') {
    var prefix = year + 'Q' + quarter;
    var suffix = "[YR" + prefix + "]";
    console.log(prefix, suffix)
    return prefix, suffix;
  }
}


