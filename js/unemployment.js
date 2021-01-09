am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_material);
    // Themes end
    
    // Create chart instance
    var covid = am4core.create("chartdiv", am4charts.XYChart);
    var title = covid.titles.create();
    title.text = "Cummulative COVID-19 Cases Population Percent";

    
    // Set input format for the dates
    covid.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    
    // Create axes
    var dateAxis = covid.xAxes.push(new am4charts.DateAxis());
    var valueAxis = covid.yAxes.push(new am4charts.ValueAxis());

    valueAxis.numberFormatter = new am4core.NumberFormatter();
    valueAxis.numberFormatter.numberFormat = "0.00%"; 
    valueAxis.title.text = "Population Percent"
    covid.scrollbarX = new am4charts.XYChartScrollbar();

    // Create series
  var temp = createSeries("White", [{ 'date': '2020-04-17', 'value': 0.00010337035760344728 },
  { 'date': '2020-04-22', 'value': 0.0003945929511866836 },
  { 'date': '2020-04-27', 'value': 6.557253942618031e-05 },
  { 'date': '2020-05-02', 'value': 0.00023111530159769834 },
  { 'date': '2020-05-07', 'value': 5.628474773554669e-05 },
  { 'date': '2020-05-12', 'value': 0.000212743100516226 },
  { 'date': '2020-05-17', 'value': 0.00021181484284023904 },
  { 'date': '2020-05-22', 'value': 0.00011963051172551108 },
  { 'date': '2020-05-27', 'value': 0.00019418316192725067 },
  { 'date': '2020-06-01', 'value': 8.142071401789033e-05 },
  { 'date': '2020-06-06', 'value': 0.00019907476698385613 },
  { 'date': '2020-06-11', 'value': 0.00028507940514327764 },
  { 'date': '2020-06-16', 'value': 5.599792654352825e-05 },
  { 'date': '2020-06-21', 'value': 0.00013110335940624883 },
  { 'date': '2020-06-26', 'value': 0.00018152652496309133 },
  { 'date': '2020-07-01', 'value': 0.000408522031257252 },
  { 'date': '2020-07-06', 'value': 0.00020568729919257227 },
  { 'date': '2020-07-11', 'value': 0.0005281160384674153 },
  { 'date': '2020-07-16', 'value': 0.00032046792530758967 },
  { 'date': '2020-07-21', 'value': 0.00040392246232342897 },
  { 'date': '2020-07-26', 'value': 0.0006765903322484539 },
  { 'date': '2020-07-31', 'value': 0.00034950465980138415 },
  { 'date': '2020-08-05', 'value': 0.0005510669487596548 },
  { 'date': '2020-08-10', 'value': 0.0002892096303083432 },
  { 'date': '2020-08-15', 'value': 0.0005654601576682167 },
  { 'date': '2020-08-20', 'value': 0.00032319533409714684 },
  { 'date': '2020-08-25', 'value': 0.0002312508897975616 },
  { 'date': '2020-08-30', 'value': 0.0005741795219055774 },
  { 'date': '2020-09-04', 'value': 0.0003127341829846196 },
  { 'date': '2020-09-09', 'value': 0.0005318394990328911 },
  { 'date': '2020-09-14', 'value': 0.0002748372811228372 },
  { 'date': '2020-09-19', 'value': 0.0006417076603682471 },
  { 'date': '2020-09-24', 'value': 0.00039017068989883556 },
  { 'date': '2020-09-29', 'value': 0.00047245186749278126 },
  { 'date': '2020-10-04', 'value': 0.0007644462708290853 },
  { 'date': '2020-10-09', 'value': 0.00047356786267627117 },
  { 'date': '2020-10-14', 'value': 0.001007112644068981 },
  { 'date': '2020-10-19', 'value': 0.0004657611113226055 },
  { 'date': '2020-10-24', 'value': 0.0012311930040660815 },
  { 'date': '2020-10-29', 'value': 0.0007864167741376981 },
  { 'date': '2020-11-03', 'value': 0.0006919952377252264 },
  { 'date': '2020-11-08', 'value': 0.0019188598492572114 },
  { 'date': '2020-11-13', 'value': 0.0014439256747207797 },
  { 'date': '2020-11-18', 'value': 0.0025566458816909518 },
  { 'date': '2020-11-23', 'value': 0.0011683478734294585 },
  { 'date': '2020-11-28', 'value': 0.00231768732422424 },
  { 'date': '2020-12-03', 'value': 0.0016017138348462716 },
  { 'date': '2020-12-08', 'value': 0.0011295018541686332 },
  { 'date': '2020-12-13', 'value': 0.003140811996009535 },
  { 'date': '2020-12-18', 'value': 0.0016600845548874071 },
  { 'date': '2020-12-23', 'value': 0.002277459348310962 },
  { 'date': '2020-12-28', 'value': 0.0011204487343623782 },
  { 'date': '2021-01-02', 'value': 0.003227651023091192 }]
  
    );
    covid.scrollbarX.series.push(temp);

  var temp = createSeries("Black", [{ 'date': '2020-04-17', 'value': 0.0002806890271196382 },
      { 'date': '2020-04-22', 'value': 0.0008365361363648057 },
      { 'date': '2020-04-27', 'value': 0.00026836659617927465 },
      { 'date': '2020-05-02', 'value': 0.0006013809354757384 },
      { 'date': '2020-05-07', 'value': 0.0003255797202113593 },
      { 'date': '2020-05-12', 'value': 0.0005416210042138083 },
      { 'date': '2020-05-17', 'value': 0.0005857142122133556 },
      { 'date': '2020-05-22', 'value': 0.0003102217008556243 },
      { 'date': '2020-05-27', 'value': 0.0005058885270193094 },
      { 'date': '2020-06-01', 'value': 0.0001886438122874445 },
      { 'date': '2020-06-06', 'value': 0.000472702857054656 },
      { 'date': '2020-06-11', 'value': 0.0005894701097442388 },
      { 'date': '2020-06-16', 'value': 0.000175961226789325 },
      { 'date': '2020-06-21', 'value': 0.0002551180535189673 },
      { 'date': '2020-06-26', 'value': 0.000372374087394076 },
      { 'date': '2020-07-01', 'value': 0.0008589428949223353 },
      { 'date': '2020-07-06', 'value': 0.00039364893162722976 },
      { 'date': '2020-07-11', 'value': 0.001192188762148785 },
      { 'date': '2020-07-16', 'value': 0.0006685497604972191 },
      { 'date': '2020-07-21', 'value': 0.0014758362017071327 },
      { 'date': '2020-07-26', 'value': 0.0015129321211559933 },
      { 'date': '2020-07-31', 'value': 0.0007103019638713528 },
      { 'date': '2020-08-05', 'value': 0.0011285185814026476 },
      { 'date': '2020-08-10', 'value': 0.0006303733773750906 },
      { 'date': '2020-08-15', 'value': 0.0010528089482972408 },
      { 'date': '2020-08-20', 'value': 0.0005345722650120137 },
      { 'date': '2020-08-25', 'value': 0.000372374087394076 },
      { 'date': '2020-08-30', 'value': 0.0007802748493782189 },
      { 'date': '2020-09-04', 'value': 0.0003657626787266993 },
      { 'date': '2020-09-09', 'value': 0.0005962873210160474 },
      { 'date': '2020-09-14', 'value': 0.0002953524626854153 },
      { 'date': '2020-09-19', 'value': 0.000689027119638199 },
      { 'date': '2020-09-24', 'value': 0.0004835074937873339 },
      { 'date': '2020-09-29', 'value': 0.0003098100956467604 },
      { 'date': '2020-10-04', 'value': 0.0005880294915132151 },
      { 'date': '2020-10-09', 'value': 0.00040298722480332986 },
      { 'date': '2020-10-14', 'value': 0.0007956843193850619 },
      { 'date': '2020-10-19', 'value': 0.0003912050256996002 },
      { 'date': '2020-10-24', 'value': 0.001020420763424761 },
      { 'date': '2020-10-29', 'value': 0.0005766846229439033 },
      { 'date': '2020-11-03', 'value': 0.00047571272014447345 },
      { 'date': '2020-11-08', 'value': 0.0013617701082007192 },
      { 'date': '2020-11-13', 'value': 0.00099562154959071 },
      { 'date': '2020-11-18', 'value': 0.0019397152720967684 },
      { 'date': '2020-11-23', 'value': 0.0009492645129424113 },
      { 'date': '2020-11-28', 'value': 0.001820632740107326 },
      { 'date': '2020-12-03', 'value': 0.0014295048903843878 },
      { 'date': '2020-12-08', 'value': 0.001181538477369431 },
      { 'date': '2020-12-13', 'value': 0.002806401490010856 },
      { 'date': '2020-12-18', 'value': 0.001503722454607663 },
      { 'date': '2020-12-23', 'value': 0.0021366940898637074 },
      { 'date': '2020-12-28', 'value': 0.001116993635554458 },
      { 'date': '2021-01-02', 'value': 0.00278633573607874 }]);
    covid.scrollbarX.series.push(temp);


  var temp = createSeries("Latinx", [{ 'date': '2020-04-17', 'value': 5.333071642846629e-05 },
  { 'date': '2020-04-22', 'value': 0.0006817601166778618 },
  { 'date': '2020-04-27', 'value': 0.0002027142492161975 },
  { 'date': '2020-05-02', 'value': 0.0007163946269979984 },
  { 'date': '2020-05-07', 'value': 0.00035179322842026364 },
  { 'date': '2020-05-12', 'value': 0.0006022208724106601 },
  { 'date': '2020-05-17', 'value': 0.0006983921262746837 },
  { 'date': '2020-05-22', 'value': 0.00040651135561875983 },
  { 'date': '2020-05-27', 'value': 0.0007761548079705056 },
  { 'date': '2020-06-01', 'value': 0.0002342693844126092 },
  { 'date': '2020-06-06', 'value': 0.0007001686888460633 },
  { 'date': '2020-06-11', 'value': 0.0008671486509122225 },
  { 'date': '2020-06-16', 'value': 0.0002941141636028012 },
  { 'date': '2020-06-21', 'value': 0.00044126430344365505 },
  { 'date': '2020-06-26', 'value': 0.0005200252441081571 },
  { 'date': '2020-07-01', 'value': 0.00100534829932203 },
  { 'date': '2020-07-06', 'value': 0.0004357654192941463 },
  { 'date': '2020-07-11', 'value': 0.001201751521498945 },
  { 'date': '2020-07-16', 'value': 0.000729050520363637 },
  { 'date': '2020-07-21', 'value': 0.0005218356459666108 },
  { 'date': '2020-07-26', 'value': 0.0013609146082510333 },
  { 'date': '2020-07-31', 'value': 0.0008907007947156569 },
  { 'date': '2020-08-05', 'value': 0.001277196212030205 },
  { 'date': '2020-08-10', 'value': 0.0005176057350823733 },
  { 'date': '2020-08-15', 'value': 0.0011420420994570487 },
  { 'date': '2020-08-20', 'value': 0.0007594043608689252 },
  { 'date': '2020-08-25', 'value': 0.00035979621981324097 },
  { 'date': '2020-08-30', 'value': 0.0008875029820871734 },
  { 'date': '2020-09-04', 'value': 0.0005032409577195027 },
  { 'date': '2020-09-09', 'value': 0.0007199477521407578 },
  { 'date': '2020-09-14', 'value': 0.0002754856360686193 },
  { 'date': '2020-09-19', 'value': 0.0007732277096386133 },
  { 'date': '2020-09-24', 'value': 0.00042965742797730736 },
  { 'date': '2020-09-29', 'value': 0.0003077852355806568 },
  { 'date': '2020-10-04', 'value': 0.0007065135551724196 },
  { 'date': '2020-10-09', 'value': 0.0005108209580240564 },
  { 'date': '2020-10-14', 'value': 0.0008579274451845848 },
  { 'date': '2020-10-19', 'value': 0.000429099079740588 },
  { 'date': '2020-10-24', 'value': 0.0011352404027551947 },
  { 'date': '2020-10-29', 'value': 0.000757763155445841 },
  { 'date': '2020-11-03', 'value': 0.0006073813636894297 },
  { 'date': '2020-11-08', 'value': 0.001732283864243548 },
  { 'date': '2020-11-13', 'value': 0.001267010586620961 },
  { 'date': '2020-11-18', 'value': 0.002412064382627587 },
  { 'date': '2020-11-23', 'value': 0.0009953487899916924 },
  { 'date': '2020-11-28', 'value': 0.002302323574646929 },
  { 'date': '2020-12-03', 'value': 0.001897351906590032 },
  { 'date': '2020-12-08', 'value': 0.0004909065375810662 },
  { 'date': '2020-12-13', 'value': 0.004747685815755234 },
  { 'date': '2020-12-18', 'value': 0.0016490730573288281 },
  { 'date': '2020-12-23', 'value': 0.0040613235560353214 },
  { 'date': '2020-12-28', 'value': 0.000508553725790105 },
  { 'date': '2021-01-02', 'value': 0.005257914586255497 }]
    );
    covid.scrollbarX.series.push(temp);

  var temp = createSeries("Asian", [{ 'date': '2020-04-17', 'value': 0.0001261717535208139 },
  { 'date': '2020-04-22', 'value': 0.00020558443289350926 },
  { 'date': '2020-04-27', 'value': 5.980940956950553e-05 },
  { 'date': '2020-05-02', 'value': 0.00026061797503220937 },
  { 'date': '2020-05-07', 'value': 0.00011895241903238705 },
  { 'date': '2020-05-12', 'value': 0.00026200630858767604 },
  { 'date': '2020-05-17', 'value': 0.00025956284153005464 },
  { 'date': '2020-05-22', 'value': 0.00012900395397396597 },
  { 'date': '2020-05-27', 'value': 0.0001757630281220845 },
  { 'date': '2020-06-01', 'value': 7.696921231507397e-05 },
  { 'date': '2020-06-06', 'value': 0.00018964636367675152 },
  { 'date': '2020-06-11', 'value': 0.0003450841885468035 },
  { 'date': '2020-06-16', 'value': 0.00015032875738593451 },
  { 'date': '2020-06-26', 'value': 0.00010490248345106402 },
  { 'date': '2020-07-01', 'value': 0.00022113376871473633 },
  { 'date': '2020-07-06', 'value': 8.890888089208761e-05 },
  { 'date': '2020-07-11', 'value': 0.00023901550490914745 },
  { 'date': '2020-07-16', 'value': 0.00014488648984850504 },
  { 'date': '2020-07-21', 'value': 0.00036313252476787066 },
  { 'date': '2020-07-26', 'value': 0.0003260362521658004 },
  { 'date': '2020-07-31', 'value': 0.00017548536141099116 },
  { 'date': '2020-08-05', 'value': 0.00029765871429206095 },
  { 'date': '2020-08-10', 'value': 0.00016121329246079346 },
  { 'date': '2020-08-15', 'value': 0.0003325891865476032 },
  { 'date': '2020-08-20', 'value': 0.00017953929539295393 },
  { 'date': '2020-08-25', 'value': 0.0001534941578923986 },
  { 'date': '2020-08-30', 'value': 0.00032897951930338975 },
  { 'date': '2020-09-04', 'value': 0.00020130836554267182 },
  { 'date': '2020-09-09', 'value': 0.00028516371229286066 },
  { 'date': '2020-09-14', 'value': 9.773868230485584e-05 },
  { 'date': '2020-09-19', 'value': 0.0003159291838820028 },
  { 'date': '2020-09-24', 'value': 0.00019214536407659159 },
  { 'date': '2020-09-29', 'value': 0.00019075703052112488 },
  { 'date': '2020-10-04', 'value': 0.0003198720511795282 },
  { 'date': '2020-10-09', 'value': 0.00019164556399662357 },
  { 'date': '2020-10-14', 'value': 0.00036102225776356127 },
  { 'date': '2020-10-19', 'value': 0.0001987538318006131 },
  { 'date': '2020-10-24', 'value': 0.00046109334044160116 },
  { 'date': '2020-10-29', 'value': 0.00022851970322981918 },
  { 'date': '2020-11-03', 'value': 0.0002613954418232707 },
  { 'date': '2020-11-08', 'value': 0.0007602514549735662 },
  { 'date': '2020-11-13', 'value': 0.0005541672220000888 },
  { 'date': '2020-11-18', 'value': 0.001181416322359945 },
  { 'date': '2020-11-23', 'value': 0.000530565551557155 },
  { 'date': '2020-11-28', 'value': 0.0011158869785419165 },
  { 'date': '2020-12-03', 'value': 0.0008248922653160958 },
  { 'date': '2020-12-08', 'value': 0.0006417988360211471 },
  { 'date': '2020-12-13', 'value': 0.0017220334088586787 },
  { 'date': '2020-12-18', 'value': 0.0010819005731040917 },
  { 'date': '2020-12-23', 'value': 0.001102614509751655 },
  { 'date': '2020-12-28', 'value': 0.0010761251055133503 },
  { 'date': '2021-01-02', 'value': 0.0019010729041716646 }]
  
    );
    covid.scrollbarX.series.push(temp);

    

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    
    
    covid.scrollbarX.parent = covid.bottomAxesContainer;
    // Create series
    function createSeries(name, data) {
        var series = covid.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText = "{name}: {valueY}"
        series.strokeWidth = 2;
        series.minBulletDistance = 15;
        series.calculatePercent = false;
        
        // Drop-shaped tooltips
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = "middle";
        series.tooltip.label.textValign = "middle";

        series.name = name;
    
        var segment = series.segments.template;
        segment.interactionsEnabled = true;
    
        var hoverState = segment.states.create("hover");
        hoverState.properties.strokeWidth = 3;
    
        var dimmed = segment.states.create("dimmed");
        dimmed.properties.stroke = am4core.color("#dadada");
    
        segment.events.on("over", function(event) {
        processOver(event.target.parent.parent.parent);
        });
    
        segment.events.on("out", function(event) {
        processOut(event.target.parent.parent.parent);
        });
    
        series.data = data;
        
        // Make bullets grow on hover
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = am4core.color("#fff");
        
        var bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.3;
        return series;
    }

    covid.legend = new am4charts.Legend();
    covid.legend.position = "right";
    covid.legend.scrollable = true;
    covid.legend.itemContainers.template.events.on("over", function(event) {
      processOver(event.target.dataItem.dataContext);
    })
    
    covid.legend.itemContainers.template.events.on("out", function(event) {
      processOut(event.target.dataItem.dataContext);
    })
    
    function processOver(hoveredSeries) {
      hoveredSeries.toFront();
    
      hoveredSeries.segments.each(function(segment) {
        segment.setState("hover");
      })
    
      covid.series.each(function(series) {
        if (series != hoveredSeries) {
          series.segments.each(function(segment) {
            segment.setState("dimmed");
          })
          series.bulletsContainer.setState("dimmed");
        }
      });
    }
    
    function processOut(hoveredSeries) {
      covid.series.each(function(series) {
        series.segments.each(function(segment) {
          segment.setState("default");
        })
        series.bulletsContainer.setState("default");
      });
    }
    
    
    // Make a panning cursor
    covid.cursor = new am4charts.XYCursor();
    covid.cursor.behavior = "panXY";
    covid.cursor.xAxis = dateAxis;
    
    // Create vertical scrollbar and place it before the value axis
    covid.scrollbarY = new am4core.Scrollbar();
    covid.scrollbarY.parent = covid.leftAxesContainer;
    covid.scrollbarY.toBack();
    
    
    
    // dateAxis.start = 0.79;
    dateAxis.keepSelection = true;


//------------------------------------------------------------------------------------------------------------------------------------
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("unemploymentdiv", am4charts.XYChart);

chart.data = [{
 "country": "White",
 "visits": .078
}, {
 "country": "Black",
 "visits": .111
}, {
 "country": "Latinx",
 "visits": .121
}, {
 "country": "Asian",
 "visits": .104
}];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.numberFormatter = new am4core.NumberFormatter();
valueAxis.numberFormatter.numberFormat = "0.00%";
valueAxis.title.text = "Unemployment Percent"
//valueAxis.rangeChangeEasing = am4core.ease.linear;
//valueAxis.rangeChangeDuration = 1500;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
// series.tooltipText = "{values.valueY.workingValue}%"
series.columns.template.strokeOpacity = 0;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.column.cornerRadiusTopLeft = 10;
//series.interpolationDuration = 1500;
//series.interpolationEasing = am4core.ease.linear;
var labelBullet = series.bullets.push(new am4charts.LabelBullet());
labelBullet.label.verticalCenter = "bottom";
labelBullet.label.dy = -10;
// labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";
labelBullet.label.text = "{values.valueY.workingValue}";

chart.zoomOutButton.disabled = true;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function (fill, target) {
 return chart.colors.getIndex(target.dataItem.index);
});

// setInterval(function () {
//  am4core.array.each(chart.data, function (item) {
//    item.visits += Math.round(Math.random() * 200 - 100);
//    item.visits = Math.abs(item.visits);
//  })
//  chart.invalidateRawData();
// }, 2000)

categoryAxis.sortBySeries = series;

    
    
    }); // end am4core.ready()