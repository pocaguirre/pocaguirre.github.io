am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var container = am4core.create("piediv", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "horizontal";


    var chart = container.createChild(am4charts.PieChart);

    // Add data
  chart.data = [{ "region": "West", "deaths": 30249.0, "subData": [{ "name": "Black", "value": 2815.0 }, { "name": "HL", "value": 19089.0 }, { "name": "Asian", "value": 4245.0 }, { "name": "AIAN", "value": 2300.0 }, { "name": "NHPI", "value": 373.0 }, { "name": "Multiracial", "value": 490.0 }, { "name": "Other", "value": 937.0 }] }, { "region": "Midwest", "deaths": 20244.0, "subData": [{ "name": "Black", "value": 9950.0 }, { "name": "HL", "value": 4562.0 }, { "name": "Asian", "value": 1323.0 }, { "name": "AIAN", "value": 503.0 }, { "name": "NHPI", "value": 62.0 }, { "name": "Multiracial", "value": 465.0 }, { "name": "Other", "value": 3379.0 }] }, { "region": "Northeast", "deaths": 38880.0, "subData": [{ "name": "Black", "value": 15569.0 }, { "name": "HL", "value": 14745.0 }, { "name": "Asian", "value": 4003.0 }, { "name": "AIAN", "value": 16.0 }, { "name": "NHPI", "value": 5.0 }, { "name": "Multiracial", "value": 103.0 }, { "name": "Other", "value": 4439.0 }] }, { "region": "South", "deaths": 54107.0, "subData": [{ "name": "Black", "value": 26754.0 }, { "name": "HL", "value": 22636.0 }, { "name": "Asian", "value": 1412.0 }, { "name": "AIAN", "value": 455.0 }, { "name": "NHPI", "value": 81.0 }, { "name": "Multiracial", "value": 148.0 }, { "name": "Other", "value": 2621.0 }] }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "deaths";
    pieSeries.dataFields.category = "region";
    pieSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;
    //pieSeries.labels.template.text = "{category}\n{value.percent.formatNumber('#.#')}%";

    pieSeries.slices.template.events.on("hit", function (event) {
      selectSlice(event.target.dataItem);
    })

    var chart2 = container.createChild(am4charts.PieChart);
    chart2.width = am4core.percent(30);
    chart2.radius = am4core.percent(80);

    // Add and configure Series
    var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "value";
    pieSeries2.dataFields.category = "name";
    pieSeries2.slices.template.states.getKey("active").properties.shiftRadius = 0;
    //pieSeries2.labels.template.radius = am4core.percent(50);
    //pieSeries2.labels.template.inside = true;
    //pieSeries2.labels.template.fill = am4core.color("#ffffff");
    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;
    pieSeries2.alignLabels = false;
    pieSeries2.events.on("positionchanged", updateLines);

    var interfaceColors = new am4core.InterfaceColorSet();

    var line1 = container.createChild(am4core.Line);
    line1.strokeDasharray = "2,2";
    line1.strokeOpacity = 0.5;
    line1.stroke = interfaceColors.getFor("alternativeBackground");
    line1.isMeasured = false;

    var line2 = container.createChild(am4core.Line);
    line2.strokeDasharray = "2,2";
    line2.strokeOpacity = 0.5;
    line2.stroke = interfaceColors.getFor("alternativeBackground");
    line2.isMeasured = false;

    var selectedSlice;

    function selectSlice(dataItem) {

      selectedSlice = dataItem.slice;

      var fill = selectedSlice.fill;

      var count = dataItem.dataContext.subData.length;
      pieSeries2.colors.list = [];
      for (var i = 0; i < count; i++) {
        pieSeries2.colors.list.push(fill.brighten(i * 2 / count));
      }

      chart2.data = dataItem.dataContext.subData;
      pieSeries2.appear();

      var middleAngle = selectedSlice.middleAngle;
      var firstAngle = pieSeries.slices.getIndex(0).startAngle;
      var animation = pieSeries.animate([{ property: "startAngle", to: firstAngle - middleAngle }, { property: "endAngle", to: firstAngle - middleAngle + 360 }], 600, am4core.ease.sinOut);
      animation.events.on("animationprogress", updateLines);

      selectedSlice.events.on("transformed", updateLines);

      //  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
      //  animation.events.on("animationprogress", updateLines)
    }


    function updateLines() {
      if (selectedSlice) {
        var p11 = { x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle), y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle) };
        var p12 = { x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc), y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc) };

        p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
        p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

        var p21 = { x: 0, y: -pieSeries2.pixelRadius };
        var p22 = { x: 0, y: pieSeries2.pixelRadius };

        p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
        p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

        line1.x1 = p11.x;
        line1.x2 = p21.x;
        line1.y1 = p11.y;
        line1.y2 = p21.y;

        line2.x1 = p12.x;
        line2.x2 = p22.x;
        line2.y1 = p12.y;
        line2.y2 = p22.y;
      }
    }

    chart.events.on("datavalidated", function () {
      setTimeout(function () {
        selectSlice(pieSeries.dataItems.getIndex(0));
      }, 1000);
    });


  }); // end am4core.ready()