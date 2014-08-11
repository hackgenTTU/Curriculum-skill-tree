
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];
var diameter = 960,
    format = d3.format(",d"),
    color = d3.scale.category20c();

var bubble = d3.layout.pack()
    .sort(function comparator(a, b) {return a.value - b.value;})
    .size([diameter, diameter])
    .padding(50);

var cluster = d3.layout.cluster();

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.json("classFord3jsTest.json", function(error, root) {
  var node = svg.selectAll(".node")
      .data(bubble.nodes(classes(root))
      .filter(function(d) { return !d.children; }))
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.className + ": " + format(d.r); });

  node.append("circle")
      .attr("r", function(d) { return d.value; })
      .style("fill", function(d) { return color(d.className); })
      .on("click",click);

  node.append("text")
      .attr("dy", ".5em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.className.substring(0,2); });
});

function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.SbjTitle, value: Math.random()*5+25});
  }

  recurse(null, root);
  return {children: classes,r:60};
}
function click (d) {
	console.log(d.r);
}
function updateWindow(){
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    svg.attr("width", x).attr("height", y);
}
window.onresize = updateWindow;
d3.select(self.frameElement).style("height", diameter + "px");