(function () {
  const container = document.getElementById("timeline");

  var criticalGrp = "color: white; background-color: #2E66A7;";

  var groups = new vis.DataSet([
    {id: 0},
    { id: 1, content: "Chip Design", value: 1 },
    { id: 2, content: "Quality", value: 4 },
    { id: 3, content: "S/W", value: 2 },
    { id: 4, content: "Marketing", value: 5 },
    { id: 5, content: "Critical Path", value: 3, style: criticalGrp },
  ]);

  //var template  = '<div>'; //can we draw all that critical line with node here and pass as custom markup.

  var items = new vis.DataSet([
    {
      id: 0,
      group: 0,
      content: "Concept",
      start: new Date(2014, 3, 17),
      end: new Date(2014, 3, 20),
    },
    {
      id: 1,
      group: 0,
      content: "Planning",
      start: new Date(2014, 3, 20),
      end: new Date(2014, 3, 25),
    },

    {
      id: 2,
      group: 0,
      content: "Development",
      start: new Date(2014, 3, 25),
      end: new Date(2014, 3, 27),
      // className: "criticalLine",
      // type: "range", //box, background ,point
    },
    {
      id: 3,
      group: 0,
      content: "Production",
      start: new Date(2014, 3, 27),
      end: new Date(2014, 3, 29),
    }
  ]);
  var options = {
    groupOrder: function (a, b) {
      return a.value - b.value;
    },
    editable: true,
    margin: { item: 0 }, // this will remove all space between 2 items
    orientation: "top", // makes the timeline to top of chart
    horizontalScroll: true,
  };

  var timeline = new vis.Timeline(container, items, groups, options);
})();
