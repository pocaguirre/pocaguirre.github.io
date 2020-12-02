am4core.ready(function() {

    // Themes begin
    // am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var mainContainer = am4core.create("mapdiv", am4core.Container);
    mainContainer.width = am4core.percent(80);
    mainContainer.height = am4core.percent(80);
    mainContainer.layout = "horizontal";
    
    var usData = [{'race': 'Unknown', 'cases': 127037767.0, 'deaths': 712659.0},
     {'race': 'Other', 'cases': 16959659.0, 'deaths': 313822.0},
     {'race': 'Multiracial', 'cases': 1519737.0, 'deaths': 22397.0},
     {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 778266.0, 'deaths': 12086.0},
     {'race': 'American Indian /\nAlaska Native', 'cases': 2591791.0, 'deaths': 76163.0},
     {'race': 'Asian', 'cases': 5853581.0, 'deaths': 364766.0},
     {'race': 'LatinX', 'cases': 45693920.0, 'deaths': 1686325.0},
     {'race': 'Black', 'cases': 37411791.0, 'deaths': 2040357.0},
     {'race': 'White', 'cases': 96963212.0, 'deaths': 4926410.0}];
    
    var casesChart = mainContainer.createChild(am4charts.XYChart);
    casesChart.paddingRight = 0;
    casesChart.paddingTop = 50;
    casesChart.data = JSON.parse(JSON.stringify(usData));
    
    // Create axes
    var casesCategoryAxis = casesChart.yAxes.push(new am4charts.CategoryAxis());
    casesCategoryAxis.dataFields.category = "race";
    casesCategoryAxis.renderer.grid.template.location = 0;
    //casesCategoryAxis.renderer.inversed = true;
    casesCategoryAxis.renderer.minGridDistance = 15;
    
    var casesValueAxis = casesChart.xAxes.push(new am4charts.ValueAxis());
    casesValueAxis.renderer.inversed = true;
    casesValueAxis.min = 0;
    casesValueAxis.max = 100;
    casesValueAxis.strictMinMax = true;
    
    casesValueAxis.numberFormatter = new am4core.NumberFormatter();
    casesValueAxis.numberFormatter.numberFormat = "#.#'%'";
    
    // Create series
    var casesSeries = casesChart.series.push(new am4charts.ColumnSeries());
    casesSeries.dataFields.valueX = "cases";
    casesSeries.dataFields.valueXShow = "percent";
    casesSeries.calculatePercent = true;
    casesSeries.dataFields.categoryY = "race";
    casesSeries.interpolationDuration = 1000;
    casesSeries.columns.template.tooltipText = "cases: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
    //casesSeries.sequencedInterpolation = true;
    
    
    var deathsChart = mainContainer.createChild(am4charts.XYChart);
    deathsChart.paddingLeft = 0;
    deathsChart.paddingTop = 50;
    deathsChart.data = JSON.parse(JSON.stringify(usData));
    
    // Create axes
    var deathsCategoryAxis = deathsChart.yAxes.push(new am4charts.CategoryAxis());
    deathsCategoryAxis.renderer.opposite = true;
    deathsCategoryAxis.dataFields.category = "race";
    deathsCategoryAxis.renderer.grid.template.location = 0;
    deathsCategoryAxis.renderer.minGridDistance = 15;
    
    var deathsValueAxis = deathsChart.xAxes.push(new am4charts.ValueAxis());
    deathsValueAxis.min = 0;
    deathsValueAxis.max = 100;
    deathsValueAxis.strictMinMax = true;
    deathsValueAxis.numberFormatter = new am4core.NumberFormatter();
    deathsValueAxis.numberFormatter.numberFormat = "#.#'%'";
    deathsValueAxis.renderer.minLabelPosition = 0.01;
    
    // Create series
    var deathsSeries = deathsChart.series.push(new am4charts.ColumnSeries());
    deathsSeries.dataFields.valueX = "deaths";
    deathsSeries.dataFields.valueXShow = "percent";
    deathsSeries.calculatePercent = true;
    deathsSeries.fill = deathsChart.colors.getIndex(4);
    deathsSeries.stroke = deathsSeries.fill;
    //deathsSeries.sequencedInterpolation = true;
    deathsSeries.columns.template.tooltipText = "deaths: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
    deathsSeries.dataFields.categoryY = "race";
    deathsSeries.interpolationDuration = 1000;
    
    
    var mapChart = mainContainer.createChild(am4maps.MapChart);
    mapChart.projection = new am4maps.projections.Mercator();
    mapChart.geodata = am4geodata_usaAlbersLow;
    mapChart.zoomControl = new am4maps.ZoomControl();
    mapChart.zIndex = -1;
    
    ////////////////// Heat Map ////////////////////////////////////////////////////
    var polygonSeries = mapChart.series.push(new am4maps.MapPolygonSeries())
    polygonSeries.useGeodata = true;
    
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: mapChart.colors.getIndex(3).brighten(1),
      max: mapChart.colors.getIndex(3).brighten(-0.3)
    });
    
    polygonSeries.data = [{'id': 'US-AK', 'value': 447338.0},
     {'id': 'US-AL', 'value': 6477616.0},
     {'id': 'US-AR', 'value': 3547589.0},
     {'id': 'US-AS', 'value': 0.0},
     {'id': 'US-AZ', 'value': 9649075.0},
     {'id': 'US-CA', 'value': 33942824.0},
     {'id': 'US-CO', 'value': 4039479.0},
     {'id': 'US-CT', 'value': 3508875.0},
     {'id': 'US-DC', 'value': 811947.0},
     {'id': 'US-DE', 'value': 1041053.0},
     {'id': 'US-FL', 'value': 29074411.0},
     {'id': 'US-GA', 'value': 13108808.0},
     {'id': 'US-GU', 'value': 111080.0},
     {'id': 'US-HI', 'value': 428407.0},
     {'id': 'US-IA', 'value': 4342623.0},
     {'id': 'US-ID', 'value': 1900888.0},
     {'id': 'US-IL', 'value': 15697931.0},
     {'id': 'US-IN', 'value': 6254294.0},
     {'id': 'US-KS', 'value': 2754741.0},
     {'id': 'US-KY', 'value': 3211641.0},
     {'id': 'US-LA', 'value': 7345125.0},
     {'id': 'US-MA', 'value': 7956703.0},
     {'id': 'US-MD', 'value': 6153622.0},
     {'id': 'US-ME', 'value': 281953.0},
     {'id': 'US-MI', 'value': 7751414.0},
     {'id': 'US-MN', 'value': 5161727.0},
     {'id': 'US-MO', 'value': 5494882.0},
     {'id': 'US-MP', 'value': 3281.0},
     {'id': 'US-MS', 'value': 4198142.0},
     {'id': 'US-MT', 'value': 771223.0},
     {'id': 'US-NC', 'value': 9181592.0},
     {'id': 'US-ND', 'value': 1123794.0},
     {'id': 'US-NE', 'value': 2378420.0},
     {'id': 'US-NH', 'value': 478489.0},
     {'id': 'US-NJ', 'value': 11721497.0},
     {'id': 'US-NM', 'value': 1644476.0},
     {'id': 'US-NV', 'value': 3465534.0},
     {'id': 'US-NY', 'value': 25969727.0},
     {'id': 'US-OH', 'value': 7694891.0},
     {'id': 'US-OK', 'value': 3671217.0},
     {'id': 'US-OR', 'value': 1515846.0},
     {'id': 'US-PA', 'value': 8509572.0},
     {'id': 'US-PR', 'value': 1659570.0},
     {'id': 'US-RI', 'value': 1422895.0},
     {'id': 'US-SC', 'value': 6053972.0},
     {'id': 'US-SD', 'value': 1240356.0},
     {'id': 'US-TN', 'value': 8493899.0},
     {'id': 'US-TX', 'value': 30542469.0},
     {'id': 'US-UT', 'value': 3574505.0},
     {'id': 'US-VA', 'value': 6781031.0},
     {'id': 'US-VI', 'value': 44923.0},
     {'id': 'US-VT', 'value': 103111.0},
     {'id': 'US-WA', 'value': 4130125.0},
     {'id': 'US-WI', 'value': 6608217.0},
     {'id': 'US-WV', 'value': 739636.0},
     {'id': 'US-WY', 'value': 378624.0}];
    
     // Set up heat legend
    let heatLegend = mapChart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginRight = am4core.percent(5);
    heatLegend.marginBottom = am4core.percent(20);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 35000000;
    
    // Set up custom heat map legend labels using axis ranges
    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "0";
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "35,000,000";
    
    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
      return "";
    });
    
    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;
    
    /////////////////////////////////////////////////////////////////////////////////////////////////
    
    var selectedStateId = "US";
    var selectedPolygon;
    var selectedStateName;
    
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.togglable = true;
    
    var hoverState = polygonTemplate.states.create("hover");
    hoverState.properties.fill = mapChart.colors.getIndex(2);
    
    var activeState = polygonTemplate.states.create("active");
    activeState.properties.fill = mapChart.colors.getIndex(6);
    
    polygonTemplate.events.on("over", function(event) {
      var id = event.target.dataItem.dataContext.id;
      var stateId = id.split("-")[1];
      showState(stateId, event.target.dataItem.dataContext.name, event.target);
    })
    
    
    mapChart.seriesContainer.background.events.on("over", function(event) {
      showState(selectedStateId, selectedStateName, selectedPolygon);
    });
    
    
    function showState(id, stateName, polygon) {
      if(selectedStateId != id){
    
        var newData = stateData[id];
    
        if (selectedPolygon) {
          selectedPolygon.isActive = false;
        }
    
        for (var i = 0; i < deathsChart.data.length; i++) {
          deathsChart.data[i].deaths = newData[i].deaths;
          casesChart.data[i].cases = newData[i].cases;
        }
    
        deathsChart.invalidateRawData();
        casesChart.invalidateRawData();
    
        selectedStateName = stateName;
        selectedStateId = id;
        selectedPolygon = polygon;
    
        cases_label.text = stateName + ": Cases and Deaths by Race";
        cases_label.hide(0);
        cases_label.show();
       }
    }
    
    var label = mainContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.x = am4core.percent(80);
    label.horizontalCenter = "middle";
    label.y = 50;
    label.showOnInit = true;
    label.text = "US COVID-19 Cases";
    label.hiddenState.properties.dy = -100;
    
    var cases_label = mainContainer.createChild(am4core.Label);
    cases_label.isMeasured = false;
    cases_label.x = am4core.percent(35);
    cases_label.horizontalCenter = "middle";
    cases_label.y = 20;
    cases_label.showOnInit = true;
    cases_label.text = "Total U.S. Cases and Deaths by Race";
    cases_label.hiddenState.properties.dy = -100;
    
    var stateData = {'AK': [{'race': 'Unknown', 'cases': 134825.0, 'deaths': 121.0},
      {'race': 'Other', 'cases': 21665.0, 'deaths': 15.0},
      {'race': 'Multiracial', 'cases': 20479.0, 'deaths': 32.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 16174.0, 'deaths': 239.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 84864.0, 'deaths': 771.0},
      {'race': 'Asian', 'cases': 16982.0, 'deaths': 216.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 15097.0, 'deaths': 60.0},
      {'race': 'White', 'cases': 137252.0, 'deaths': 953.0}],
     'AL': [{'race': 'Unknown', 'cases': 2468000.0, 'deaths': 9664.0},
      {'race': 'Other', 'cases': 479529.0, 'deaths': 2475.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 22923.0, 'deaths': 379.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 1504235.0, 'deaths': 42277.0},
      {'race': 'White', 'cases': 2002857.0, 'deaths': 57366.0}],
     'AR': [{'race': 'Unknown', 'cases': 352997.0, 'deaths': 3506.0},
      {'race': 'Other', 'cases': 263914.0, 'deaths': 2577.0},
      {'race': 'Multiracial', 'cases': 18208.0, 'deaths': 182.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 107282.0, 'deaths': 1856.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 9680.0, 'deaths': 122.0},
      {'race': 'Asian', 'cases': 40459.0, 'deaths': 569.0},
      {'race': 'LatinX', 'cases': 232.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 736750.0, 'deaths': 11018.0},
      {'race': 'White', 'cases': 2018015.0, 'deaths': 34440.0}],
     'AS': [{'race': 'Unknown', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Other', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'White', 'cases': 0.0, 'deaths': 0.0}],
     'AZ': [{'race': 'Unknown', 'cases': 3408599.0, 'deaths': 28012.0},
      {'race': 'Other', 'cases': 294427.0, 'deaths': 3897.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 128.0, 'deaths': 2.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 589588.0, 'deaths': 26836.0},
      {'race': 'Asian', 'cases': 94655.0, 'deaths': 2636.0},
      {'race': 'LatinX', 'cases': 2743285.0, 'deaths': 66014.0},
      {'race': 'Black', 'cases': 274338.0, 'deaths': 7103.0},
      {'race': 'White', 'cases': 2244055.0, 'deaths': 93239.0}],
     'CA': [{'race': 'Unknown', 'cases': 10570856.0, 'deaths': 14379.0},
      {'race': 'Other', 'cases': 2545965.0, 'deaths': 5434.0},
      {'race': 'Multiracial', 'cases': 239888.0, 'deaths': 4581.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 132122.0, 'deaths': 3230.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 61021.0, 'deaths': 2184.0},
      {'race': 'Asian', 'cases': 1353333.0, 'deaths': 81233.0},
      {'race': 'LatinX', 'cases': 13889467.0, 'deaths': 308435.0},
      {'race': 'Black', 'cases': 1006308.0, 'deaths': 52823.0},
      {'race': 'White', 'cases': 4142613.0, 'deaths': 200884.0}],
     'CO': [{'race': 'Unknown', 'cases': 764756.0, 'deaths': 3046.0},
      {'race': 'Other', 'cases': 32526.0, 'deaths': 525.0},
      {'race': 'Multiracial', 'cases': 52534.0, 'deaths': 1667.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 14599.0, 'deaths': 344.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 21522.0, 'deaths': 669.0},
      {'race': 'Asian', 'cases': 74878.0, 'deaths': 3575.0},
      {'race': 'LatinX', 'cases': 1412174.0, 'deaths': 24457.0},
      {'race': 'Black', 'cases': 165167.0, 'deaths': 7095.0},
      {'race': 'White', 'cases': 1484588.0, 'deaths': 70909.0}],
     'CT': [{'race': 'Unknown', 'cases': 1124731.0, 'deaths': 3353.0},
      {'race': 'Other', 'cases': 37973.0, 'deaths': 1261.0},
      {'race': 'Multiracial', 'cases': 18074.0, 'deaths': 1529.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 2887.0, 'deaths': 134.0},
      {'race': 'Asian', 'cases': 49188.0, 'deaths': 2882.0},
      {'race': 'LatinX', 'cases': 657660.0, 'deaths': 23741.0},
      {'race': 'Black', 'cases': 427719.0, 'deaths': 39832.0},
      {'race': 'White', 'cases': 1191813.0, 'deaths': 197039.0}],
     'DC': [{'race': 'Unknown', 'cases': 23803.0, 'deaths': 162.0},
      {'race': 'Other', 'cases': 198815.0, 'deaths': 175.0},
      {'race': 'Multiracial', 'cases': 3825.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 2186.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 1931.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 12580.0, 'deaths': 484.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 4377.0},
      {'race': 'Black', 'cases': 399726.0, 'deaths': 26361.0},
      {'race': 'White', 'cases': 168804.0, 'deaths': 3756.0}],
     'DE': [{'race': 'Unknown', 'cases': 86168.0, 'deaths': 968.0},
      {'race': 'Other', 'cases': 49539.0, 'deaths': 545.0},
      {'race': 'Multiracial', 'cases': 719.0, 'deaths': 9.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 14549.0, 'deaths': 70.0},
      {'race': 'LatinX', 'cases': 246080.0, 'deaths': 2359.0},
      {'race': 'Black', 'cases': 270776.0, 'deaths': 8677.0},
      {'race': 'White', 'cases': 374335.0, 'deaths': 21450.0}],
     'FL': [{'race': 'Unknown', 'cases': 7391781.0, 'deaths': 26906.0},
      {'race': 'Other', 'cases': 1778331.0, 'deaths': 22831.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 8261752.0, 'deaths': 142198.0},
      {'race': 'Black', 'cases': 4179919.0, 'deaths': 105437.0},
      {'race': 'White', 'cases': 7462628.0, 'deaths': 275472.0}],
     'GA': [{'race': 'Unknown', 'cases': 3369541.0, 'deaths': 7418.0},
      {'race': 'Other', 'cases': 343063.0, 'deaths': 1019.0},
      {'race': 'Multiracial', 'cases': 68.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 12235.0, 'deaths': 354.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 7694.0, 'deaths': 332.0},
      {'race': 'Asian', 'cases': 204722.0, 'deaths': 5280.0},
      {'race': 'LatinX', 'cases': 1670110.0, 'deaths': 17318.0},
      {'race': 'Black', 'cases': 3509324.0, 'deaths': 128436.0},
      {'race': 'White', 'cases': 3987460.0, 'deaths': 147018.0}],
     'GU': [{'race': 'Unknown', 'cases': 13133.0, 'deaths': 1820.0},
      {'race': 'Other', 'cases': 7565.0, 'deaths': 0.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 52197.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 29813.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'White', 'cases': 8380.0, 'deaths': 0.0}],
     'HI': [{'race': 'Unknown', 'cases': 182689.0, 'deaths': 1441.0},
      {'race': 'Other', 'cases': 10020.0, 'deaths': 110.0},
      {'race': 'Multiracial', 'cases': 1661.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 103723.0, 'deaths': 1075.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 86150.0, 'deaths': 2220.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 5144.0, 'deaths': 110.0},
      {'race': 'White', 'cases': 38989.0, 'deaths': 350.0}],
     'IA': [{'race': 'Unknown', 'cases': 858330.0, 'deaths': 7140.0},
      {'race': 'Other', 'cases': 86572.0, 'deaths': 567.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 31264.0, 'deaths': 626.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 31108.0, 'deaths': 245.0},
      {'race': 'Asian', 'cases': 147328.0, 'deaths': 1474.0},
      {'race': 'LatinX', 'cases': 345.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 247598.0, 'deaths': 2526.0},
      {'race': 'White', 'cases': 2940892.0, 'deaths': 52801.0}],
     'ID': [{'race': 'Unknown', 'cases': 648022.0, 'deaths': 298.0},
      {'race': 'Other', 'cases': 184183.0, 'deaths': 309.0},
      {'race': 'Multiracial', 'cases': 25497.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 4889.0, 'deaths': 2.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 24929.0, 'deaths': 276.0},
      {'race': 'Asian', 'cases': 13953.0, 'deaths': 188.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 16537.0, 'deaths': 183.0},
      {'race': 'White', 'cases': 982098.0, 'deaths': 18700.0}],
     'IL': [{'race': 'Unknown', 'cases': 4156903.0, 'deaths': 18825.0},
      {'race': 'Other', 'cases': 562397.0, 'deaths': 3064.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 26908.0, 'deaths': 493.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 20415.0, 'deaths': 1173.0},
      {'race': 'Asian', 'cases': 365202.0, 'deaths': 21064.0},
      {'race': 'LatinX', 'cases': 3979362.0, 'deaths': 92885.0},
      {'race': 'Black', 'cases': 2124198.0, 'deaths': 125933.0},
      {'race': 'White', 'cases': 4464020.0, 'deaths': 224610.0}],
     'IN': [{'race': 'Unknown', 'cases': 1280752.0, 'deaths': 22701.0},
      {'race': 'Other', 'cases': 877036.0, 'deaths': 24107.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 78283.0, 'deaths': 950.0},
      {'race': 'LatinX', 'cases': 3821.0, 'deaths': 5.0},
      {'race': 'Black', 'cases': 589523.0, 'deaths': 24302.0},
      {'race': 'White', 'cases': 3432713.0, 'deaths': 121536.0}],
     'KS': [{'race': 'Unknown', 'cases': 489118.0, 'deaths': 1953.0},
      {'race': 'Other', 'cases': 152223.0, 'deaths': 1841.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 19799.0, 'deaths': 332.0},
      {'race': 'Asian', 'cases': 72429.0, 'deaths': 701.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 185629.0, 'deaths': 4746.0},
      {'race': 'White', 'cases': 1835453.0, 'deaths': 24085.0}],
     'KY': [{'race': 'Unknown', 'cases': 917411.0, 'deaths': 4915.0},
      {'race': 'Other', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Multiracial', 'cases': 128936.0, 'deaths': 1255.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 3324.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 7614.0, 'deaths': 1.0},
      {'race': 'Asian', 'cases': 32319.0, 'deaths': 595.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 268649.0, 'deaths': 7334.0},
      {'race': 'White', 'cases': 1853388.0, 'deaths': 44334.0}],
     'LA': [{'race': 'Unknown', 'cases': 1933485.0, 'deaths': 11674.0},
      {'race': 'Other', 'cases': 535785.0, 'deaths': 1399.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 6949.0, 'deaths': 322.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 15977.0, 'deaths': 238.0},
      {'race': 'Asian', 'cases': 303402.0, 'deaths': 1838.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 80.0},
      {'race': 'Black', 'cases': 2193900.0, 'deaths': 127571.0},
      {'race': 'White', 'cases': 2355627.0, 'deaths': 130503.0}],
     'MA': [{'race': 'Unknown', 'cases': 2597722.0, 'deaths': 36063.0},
      {'race': 'Other', 'cases': 457311.0, 'deaths': 32123.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 167823.0, 'deaths': 12860.0},
      {'race': 'LatinX', 'cases': 1647423.0, 'deaths': 35943.0},
      {'race': 'Black', 'cases': 702923.0, 'deaths': 40832.0},
      {'race': 'White', 'cases': 2383703.0, 'deaths': 374265.0}],
     'MD': [{'race': 'Unknown', 'cases': 968435.0, 'deaths': 2087.0},
      {'race': 'Other', 'cases': 285181.0, 'deaths': 2331.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 117718.0, 'deaths': 7961.0},
      {'race': 'LatinX', 'cases': 1388135.0, 'deaths': 23092.0},
      {'race': 'Black', 'cases': 1897684.0, 'deaths': 86462.0},
      {'race': 'White', 'cases': 1496469.0, 'deaths': 90846.0}],
     'ME': [{'race': 'Unknown', 'cases': 29249.0, 'deaths': 1266.0},
      {'race': 'Other', 'cases': 7451.0, 'deaths': 17.0},
      {'race': 'Multiracial', 'cases': 1587.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 146.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 664.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 5708.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 48452.0, 'deaths': 170.0},
      {'race': 'White', 'cases': 188696.0, 'deaths': 5931.0}],
     'MI': [{'race': 'Unknown', 'cases': 1356933.0, 'deaths': 15204.0},
      {'race': 'Other', 'cases': 451402.0, 'deaths': 8388.0},
      {'race': 'Multiracial', 'cases': 475160.0, 'deaths': 6632.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 526.0, 'deaths': 33.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 36334.0, 'deaths': 1378.0},
      {'race': 'Asian', 'cases': 142083.0, 'deaths': 5017.0},
      {'race': 'LatinX', 'cases': 3990.0, 'deaths': 120.0},
      {'race': 'Black', 'cases': 1581528.0, 'deaths': 159416.0},
      {'race': 'White', 'cases': 3705715.0, 'deaths': 224074.0}],
     'MN': [{'race': 'Unknown', 'cases': 561628.0, 'deaths': 6267.0},
      {'race': 'Other', 'cases': 197495.0, 'deaths': 747.0},
      {'race': 'Multiracial', 'cases': 67935.0, 'deaths': 811.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 7558.0, 'deaths': 149.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 44104.0, 'deaths': 1896.0},
      {'race': 'Asian', 'cases': 264040.0, 'deaths': 4424.0},
      {'race': 'LatinX', 'cases': 432097.0, 'deaths': 2480.0},
      {'race': 'Black', 'cases': 780671.0, 'deaths': 9154.0},
      {'race': 'White', 'cases': 2684698.0, 'deaths': 83372.0}],
     'MO': [{'race': 'Unknown', 'cases': 1891755.0, 'deaths': 11758.0},
      {'race': 'Other', 'cases': 391313.0, 'deaths': 7881.0},
      {'race': 'Multiracial', 'cases': 65363.0, 'deaths': 555.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 2388.0, 'deaths': 48.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 6399.0, 'deaths': 64.0},
      {'race': 'Asian', 'cases': 28457.0, 'deaths': 421.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 735810.0, 'deaths': 25802.0},
      {'race': 'White', 'cases': 2373349.0, 'deaths': 56208.0}],
     'MP': [{'race': 'Unknown', 'cases': 3281.0, 'deaths': 118.0},
      {'race': 'Other', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'White', 'cases': 0.0, 'deaths': 0.0}],
     'MS': [{'race': 'Unknown', 'cases': 576342.0, 'deaths': 2511.0},
      {'race': 'Other', 'cases': 243079.0, 'deaths': 1521.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 65695.0, 'deaths': 4097.0},
      {'race': 'Asian', 'cases': 14665.0, 'deaths': 210.0},
      {'race': 'LatinX', 'cases': 131179.0, 'deaths': 1688.0},
      {'race': 'Black', 'cases': 1682002.0, 'deaths': 58926.0},
      {'race': 'White', 'cases': 1488944.0, 'deaths': 56405.0}],
     'MT': [{'race': 'Unknown', 'cases': 256157.0, 'deaths': 3278.0},
      {'race': 'Other', 'cases': 26842.0, 'deaths': 265.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 93740.0, 'deaths': 1999.0},
      {'race': 'Asian', 'cases': 2123.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 3532.0, 'deaths': 0.0},
      {'race': 'White', 'cases': 388830.0, 'deaths': 3736.0}],
     'NC': [{'race': 'Unknown', 'cases': 2077870.0, 'deaths': 7449.0},
      {'race': 'Other', 'cases': 1050390.0, 'deaths': 9267.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 13115.0, 'deaths': 244.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 109724.0, 'deaths': 1950.0},
      {'race': 'Asian', 'cases': 134986.0, 'deaths': 1925.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 1662821.0, 'deaths': 45086.0},
      {'race': 'White', 'cases': 4132686.0, 'deaths': 88548.0}],
     'ND': [{'race': 'Unknown', 'cases': 454563.0, 'deaths': 11327.0},
      {'race': 'Other', 'cases': 2214.0, 'deaths': 0.0},
      {'race': 'Multiracial', 'cases': 13713.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 46303.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 14896.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 44740.0, 'deaths': 0.0},
      {'race': 'White', 'cases': 547365.0, 'deaths': 0.0}],
     'NE': [{'race': 'Unknown', 'cases': 783606.0, 'deaths': 3759.0},
      {'race': 'Other', 'cases': 94106.0, 'deaths': 586.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 3150.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 19897.0, 'deaths': 489.0},
      {'race': 'Asian', 'cases': 71351.0, 'deaths': 834.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 102774.0, 'deaths': 1472.0},
      {'race': 'White', 'cases': 1303536.0, 'deaths': 17085.0}],
     'NH': [{'race': 'Unknown', 'cases': 87990.0, 'deaths': 2234.0},
      {'race': 'Other', 'cases': 14795.0, 'deaths': 219.0},
      {'race': 'Multiracial', 'cases': 932.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 50.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 137.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 11919.0, 'deaths': 192.0},
      {'race': 'LatinX', 'cases': 48178.0, 'deaths': 649.0},
      {'race': 'Black', 'cases': 19937.0, 'deaths': 434.0},
      {'race': 'White', 'cases': 292923.0, 'deaths': 19793.0}],
     'NJ': [{'race': 'Unknown', 'cases': 4275357.0, 'deaths': 47417.0},
      {'race': 'Other', 'cases': 902216.0, 'deaths': 19040.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 368839.0, 'deaths': 48293.0},
      {'race': 'LatinX', 'cases': 2224098.0, 'deaths': 174651.0},
      {'race': 'Black', 'cases': 1190018.0, 'deaths': 159804.0},
      {'race': 'White', 'cases': 2761129.0, 'deaths': 474024.0}],
     'NM': [{'race': 'Unknown', 'cases': 228849.0, 'deaths': 7548.0},
      {'race': 'Other', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 473961.0, 'deaths': 18016.0},
      {'race': 'Asian', 'cases': 11817.0, 'deaths': 143.0},
      {'race': 'LatinX', 'cases': 669061.0, 'deaths': 8385.0},
      {'race': 'Black', 'cases': 32301.0, 'deaths': 384.0},
      {'race': 'White', 'cases': 228349.0, 'deaths': 8694.0}],
     'NV': [{'race': 'Unknown', 'cases': 1007130.0, 'deaths': 18392.0},
      {'race': 'Other', 'cases': 278391.0, 'deaths': 426.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 13181.0, 'deaths': 381.0},
      {'race': 'Asian', 'cases': 185902.0, 'deaths': 6156.0},
      {'race': 'LatinX', 'cases': 1033863.0, 'deaths': 10590.0},
      {'race': 'Black', 'cases': 202000.0, 'deaths': 5763.0},
      {'race': 'White', 'cases': 745067.0, 'deaths': 24286.0}],
     'NY': [{'race': 'Unknown', 'cases': 25969727.0, 'deaths': 212011.0},
      {'race': 'Other', 'cases': 0.0, 'deaths': 111695.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 0.0, 'deaths': 105776.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 413586.0},
      {'race': 'Black', 'cases': 0.0, 'deaths': 396646.0},
      {'race': 'White', 'cases': 0.0, 'deaths': 542030.0}],
     'OH': [{'race': 'Unknown', 'cases': 1046521.0, 'deaths': 4357.0},
      {'race': 'Other', 'cases': 488279.0, 'deaths': 1628.0},
      {'race': 'Multiracial', 'cases': 230411.0, 'deaths': 3203.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 10454.0, 'deaths': 83.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 9389.0, 'deaths': 127.0},
      {'race': 'Asian', 'cases': 176084.0, 'deaths': 2264.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 1463665.0, 'deaths': 41501.0},
      {'race': 'White', 'cases': 4270088.0, 'deaths': 181134.0}],
     'OK': [{'race': 'Unknown', 'cases': 712634.0, 'deaths': 3159.0},
      {'race': 'Other', 'cases': 141550.0, 'deaths': 1435.0},
      {'race': 'Multiracial', 'cases': 479.0, 'deaths': 21.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 346791.0, 'deaths': 4212.0},
      {'race': 'Asian', 'cases': 117825.0, 'deaths': 911.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 251315.0, 'deaths': 3054.0},
      {'race': 'White', 'cases': 2100623.0, 'deaths': 34624.0}],
     'OR': [{'race': 'Unknown', 'cases': 214478.0, 'deaths': 2948.0},
      {'race': 'Other', 'cases': 479474.0, 'deaths': 2437.0},
      {'race': 'Multiracial', 'cases': 29547.0, 'deaths': 430.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 25704.0, 'deaths': 330.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 34613.0, 'deaths': 470.0},
      {'race': 'Asian', 'cases': 43600.0, 'deaths': 876.0},
      {'race': 'LatinX', 'cases': 1358.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 49271.0, 'deaths': 633.0},
      {'race': 'White', 'cases': 639451.0, 'deaths': 16763.0}],
     'PA': [{'race': 'Unknown', 'cases': 4091624.0, 'deaths': 17942.0},
      {'race': 'Other', 'cases': 89763.0, 'deaths': 19369.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 144295.0, 'deaths': 9164.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 1064869.0, 'deaths': 88056.0},
      {'race': 'White', 'cases': 3119021.0, 'deaths': 312325.0}],
     'PR': [{'race': 'Unknown', 'cases': 1659570.0, 'deaths': 26185.0},
      {'race': 'Other', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'White', 'cases': 0.0, 'deaths': 0.0}],
     'RI': [{'race': 'Unknown', 'cases': 343706.0, 'deaths': 10882.0},
      {'race': 'Other', 'cases': 27813.0, 'deaths': 383.0},
      {'race': 'Multiracial', 'cases': 12165.0, 'deaths': 6.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 2154.0, 'deaths': 33.0},
      {'race': 'Asian', 'cases': 11408.0, 'deaths': 335.0},
      {'race': 'LatinX', 'cases': 475074.0, 'deaths': 5519.0},
      {'race': 'Black', 'cases': 128287.0, 'deaths': 3059.0},
      {'race': 'White', 'cases': 419552.0, 'deaths': 40015.0}],
     'SC': [{'race': 'Unknown', 'cases': 1687428.0, 'deaths': 18604.0},
      {'race': 'Other', 'cases': 419799.0, 'deaths': 3325.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 1.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 341.0, 'deaths': 4.0},
      {'race': 'Asian', 'cases': 55043.0, 'deaths': 921.0},
      {'race': 'LatinX', 'cases': 731.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 1551235.0, 'deaths': 46964.0},
      {'race': 'White', 'cases': 2335704.0, 'deaths': 64075.0}],
     'SD': [{'race': 'Unknown', 'cases': 70954.0, 'deaths': 2479.0},
      {'race': 'Other', 'cases': 75209.0, 'deaths': 483.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 155675.0, 'deaths': 1957.0},
      {'race': 'Asian', 'cases': 44987.0, 'deaths': 211.0},
      {'race': 'LatinX', 'cases': 85080.0, 'deaths': 202.0},
      {'race': 'Black', 'cases': 70219.0, 'deaths': 100.0},
      {'race': 'White', 'cases': 738232.0, 'deaths': 8032.0}],
     'TN': [{'race': 'Unknown', 'cases': 1412473.0, 'deaths': 1629.0},
      {'race': 'Other', 'cases': 1007929.0, 'deaths': 4549.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 5835.0, 'deaths': 95.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 10269.0, 'deaths': 146.0},
      {'race': 'Asian', 'cases': 79447.0, 'deaths': 1049.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 1490473.0, 'deaths': 28111.0},
      {'race': 'White', 'cases': 4487473.0, 'deaths': 68932.0}],
     'TX': [{'race': 'Unknown', 'cases': 28501117.0, 'deaths': 49423.0},
      {'race': 'Other', 'cases': 11410.0, 'deaths': 3028.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 43215.0, 'deaths': 10481.0},
      {'race': 'LatinX', 'cases': 930298.0, 'deaths': 295715.0},
      {'race': 'Black', 'cases': 367853.0, 'deaths': 61968.0},
      {'race': 'White', 'cases': 688576.0, 'deaths': 172043.0}],
     'UT': [{'race': 'Unknown', 'cases': 368446.0, 'deaths': 2078.0},
      {'race': 'Other', 'cases': 374762.0, 'deaths': 1578.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 126703.0, 'deaths': 1044.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 63731.0, 'deaths': 1439.0},
      {'race': 'Asian', 'cases': 78409.0, 'deaths': 984.0},
      {'race': 'LatinX', 'cases': 1079331.0, 'deaths': 4445.0},
      {'race': 'Black', 'cases': 69942.0, 'deaths': 340.0},
      {'race': 'White', 'cases': 1758729.0, 'deaths': 11418.0}],
     'VA': [{'race': 'Unknown', 'cases': 1510519.0, 'deaths': 6618.0},
      {'race': 'Other', 'cases': 261295.0, 'deaths': 3718.0},
      {'race': 'Multiracial', 'cases': 44757.0, 'deaths': 188.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 7678.0, 'deaths': 217.0},
      {'race': 'Asian', 'cases': 192109.0, 'deaths': 6505.0},
      {'race': 'LatinX', 'cases': 1529303.0, 'deaths': 13191.0},
      {'race': 'Black', 'cases': 1257002.0, 'deaths': 37308.0},
      {'race': 'White', 'cases': 1978368.0, 'deaths': 82104.0}],
     'VI': [{'race': 'Unknown', 'cases': 44923.0, 'deaths': 772.0},
      {'race': 'Other', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'White', 'cases': 0.0, 'deaths': 0.0}],
     'VT': [{'race': 'Unknown', 'cases': 2831.0, 'deaths': 8.0},
      {'race': 'Other', 'cases': 1947.0, 'deaths': 85.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 128.0, 'deaths': 2.0},
      {'race': 'Asian', 'cases': 3572.0, 'deaths': 128.0},
      {'race': 'LatinX', 'cases': 51.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 8805.0, 'deaths': 0.0},
      {'race': 'White', 'cases': 85828.0, 'deaths': 3392.0}],
     'WA': [{'race': 'Unknown', 'cases': 1356874.0, 'deaths': 3589.0},
      {'race': 'Other', 'cases': 55547.0, 'deaths': 2140.0},
      {'race': 'Multiracial', 'cases': 67799.0, 'deaths': 1296.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 67567.0, 'deaths': 1514.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 44028.0, 'deaths': 2338.0},
      {'race': 'Asian', 'cases': 147911.0, 'deaths': 8459.0},
      {'race': 'LatinX', 'cases': 1112113.0, 'deaths': 14062.0},
      {'race': 'Black', 'cases': 163596.0, 'deaths': 3445.0},
      {'race': 'White', 'cases': 1114690.0, 'deaths': 73562.0}],
     'WI': [{'race': 'Unknown', 'cases': 615496.0, 'deaths': 1630.0},
      {'race': 'Other', 'cases': 490989.0, 'deaths': 1296.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 77254.0, 'deaths': 943.0},
      {'race': 'Asian', 'cases': 158089.0, 'deaths': 1896.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 626037.0, 'deaths': 13253.0},
      {'race': 'White', 'cases': 4640352.0, 'deaths': 58000.0}],
     'WV': [{'race': 'Unknown', 'cases': 3270.0, 'deaths': 2881.0},
      {'race': 'Other', 'cases': 156170.0, 'deaths': 1696.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 9.0, 'deaths': 0.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 19.0, 'deaths': 0.0},
      {'race': 'Asian', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'LatinX', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Black', 'cases': 38185.0, 'deaths': 361.0},
      {'race': 'White', 'cases': 543158.0, 'deaths': 9641.0}],
     'WY': [{'race': 'Unknown', 'cases': 92409.0, 'deaths': 484.0},
      {'race': 'Other', 'cases': 14009.0, 'deaths': 15.0},
      {'race': 'Multiracial', 'cases': 0.0, 'deaths': 0.0},
      {'race': 'Native Hawaiian /\nPacific Islander', 'cases': 1081.0, 'deaths': 2.0},
      {'race': 'American Indian /\nAlaska Native', 'cases': 30553.0, 'deaths': 692.0},
      {'race': 'Asian', 'cases': 2112.0, 'deaths': 16.0},
      {'race': 'LatinX', 'cases': 38269.0, 'deaths': 138.0},
      {'race': 'Black', 'cases': 3307.0, 'deaths': 29.0},
      {'race': 'White', 'cases': 195928.0, 'deaths': 1608.0}]}
    
    }); // end am4core.ready()