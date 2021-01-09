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

    // var temp = createSeries("Black",[{'date': '2020-04-12', 'value': 0.0009291473083591873},
    // {'date': '2020-04-15', 'value': 0.0011504880094257593},
    // {'date': '2020-04-19', 'value': 0.0014311770365453974},
    // {'date': '2020-04-22', 'value': 0.0018831967318546415},
    // {'date': '2020-04-26', 'value': 0.0022677131729102033},
    // {'date': '2020-04-29', 'value': 0.002536079769089478},
    // {'date': '2020-05-03', 'value': 0.002917226192497466},
    // {'date': '2020-05-06', 'value': 0.003135582755799775},
    // {'date': '2020-05-10', 'value': 0.0034630404247765756},
    // {'date': '2020-05-13', 'value': 0.004004661428990384},
    // {'date': '2020-05-17', 'value': 0.004315783516240398},
    // {'date': '2020-05-20', 'value': 0.004590375641203739},
    // {'date': '2020-05-24', 'value': 0.004900597342059364},
    // {'date': '2020-05-27', 'value': 0.005110901878463272},
    // {'date': '2020-05-31', 'value': 0.005405070976173204},
    // {'date': '2020-06-03', 'value': 0.005595129681366118},
    // {'date': '2020-06-07', 'value': 0.005880089112527719},
    // {'date': '2020-06-10', 'value': 0.006063510683727702},
    // {'date': '2020-06-14', 'value': 0.0066573026481650125},
    // {'date': '2020-06-17', 'value': 0.006833263874954337},
    // {'date': '2020-06-21', 'value': 0.0067817617731952395},
    // {'date': '2020-06-24', 'value': 0.007088073224566657},
    // {'date': '2020-06-28', 'value': 0.007460756015867381},
    // {'date': '2020-07-01', 'value': 0.007819907285926703},
    // {'date': '2020-07-05', 'value': 0.008316586146397683},
    // {'date': '2020-07-08', 'value': 0.008713347842416945},
    // {'date': '2020-07-12', 'value': 0.00934914926348393},
    // {'date': '2020-07-15', 'value': 0.00990553660456573},
    // {'date': '2020-07-19', 'value': 0.01057408636506295},
    // {'date': '2020-07-22', 'value': 0.012049922566770082},
    // {'date': '2020-07-26', 'value': 0.01282780496087178},
    // {'date': '2020-07-29', 'value': 0.013562854687926076},
    // {'date': '2020-08-02', 'value': 0.014273156651797429},
    // {'date': '2020-08-05', 'value': 0.014761140352231158},
    // {'date': '2020-08-09', 'value': 0.015393597480976122},
    // {'date': '2020-08-12', 'value': 0.016032048610575167},
    // {'date': '2020-08-16', 'value': 0.016588230149052537},
    // {'date': '2020-08-19', 'value': 0.017081487541224835},
    // {'date': '2020-08-23', 'value': 0.01761942982388442},
    // {'date': '2020-08-26', 'value': 0.017991803911278498},
    // {'date': '2020-08-30', 'value': 0.01842288319158679},
    // {'date': '2020-09-02', 'value': 0.01876996928396129},
    // {'date': '2020-09-06', 'value': 0.019137841439383414},
    // {'date': '2020-09-09', 'value': 0.019370964339553716},
    // {'date': '2020-09-13', 'value': 0.019727054295872116},
    // {'date': '2020-09-16', 'value': 0.02002948122308488},
    // {'date': '2020-09-20', 'value': 0.02039660734406594},
    // {'date': '2020-09-23', 'value': 0.020718508342723076},
    // {'date': '2020-09-27', 'value': 0.02120201583651041},
    // {'date': '2020-09-30', 'value': 0.021511825932157173},
    // {'date': '2020-10-04', 'value': 0.021815513400322083},
    // {'date': '2020-10-07', 'value': 0.022099701071717062},
    // {'date': '2020-10-11', 'value': 0.022502842648473718},
    // {'date': '2020-10-14', 'value': 0.022808459516055174},
    // {'date': '2020-10-18', 'value': 0.02329852696785878},
    // {'date': '2020-10-21', 'value': 0.02368973199355838},
    // {'date': '2020-10-25', 'value': 0.024265413328805677},
    // {'date': '2020-10-28', 'value': 0.02471015275698314},
    // {'date': '2020-11-01', 'value': 0.025286837379927044},
    // {'date': '2020-11-04', 'value': 0.025762550100071516},
    // {'date': '2020-11-08', 'value': 0.02651316364908598}] 
  
    // );
    // covid.scrollbarX.series.push(temp);


    // var temp = createSeries("Latinx", [{'date': '2020-04-12', 'value': 0.00021589465153148155},
    // {'date': '2020-04-15', 'value': 0.0003464297014190505},
    // {'date': '2020-04-19', 'value': 0.0004243446599067051},
    // {'date': '2020-04-22', 'value': 0.000612051185305628},
    // {'date': '2020-04-26', 'value': 0.0008015681125630045},
    // {'date': '2020-04-29', 'value': 0.0009379742787578951},
    // {'date': '2020-05-03', 'value': 0.0011870483512653356},
    // {'date': '2020-05-06', 'value': 0.001555828901796697},
    // {'date': '2020-05-10', 'value': 0.0018540037798483661},
    // {'date': '2020-05-13', 'value': 0.0023820150957059635},
    // {'date': '2020-05-17', 'value': 0.0026242028732938656},
    // {'date': '2020-05-20', 'value': 0.002876373240568568},
    // {'date': '2020-05-24', 'value': 0.003162332135986559},
    // {'date': '2020-05-27', 'value': 0.0033342526339655075},
    // {'date': '2020-05-31', 'value': 0.0036175551453481976},
    // {'date': '2020-06-03', 'value': 0.0037519478739621915},
    // {'date': '2020-06-07', 'value': 0.003992900517571896},
    // {'date': '2020-06-10', 'value': 0.004191892445209964},
    // {'date': '2020-06-14', 'value': 0.004923954662123179},
    // {'date': '2020-06-17', 'value': 0.005452152094059682},
    // {'date': '2020-06-21', 'value': 0.005428769146691617},
    // {'date': '2020-06-24', 'value': 0.005678130853139186},
    // {'date': '2020-06-28', 'value': 0.006077468279898279},
    // {'date': '2020-07-01', 'value': 0.006364137800344822},
    // {'date': '2020-07-05', 'value': 0.006800766121459353},
    // {'date': '2020-07-08', 'value': 0.007137196313548066},
    // {'date': '2020-07-12', 'value': 0.007679132496036574},
    // {'date': '2020-07-15', 'value': 0.00808960304824298},
    // {'date': '2020-07-19', 'value': 0.008703836867564874},
    // {'date': '2020-07-22', 'value': 0.009104341749728016},
    // {'date': '2020-07-26', 'value': 0.009783140928786913},
    // {'date': '2020-07-29', 'value': 0.010203018802799863},
    // {'date': '2020-08-02', 'value': 0.010978226110732299},
    // {'date': '2020-08-05', 'value': 0.011389847198699218},
    // {'date': '2020-08-09', 'value': 0.01203433334066518},
    // {'date': '2020-08-12', 'value': 0.012464870590106408},
    // {'date': '2020-08-16', 'value': 0.013033167577225483},
    // {'date': '2020-08-19', 'value': 0.01340885134231992},
    // {'date': '2020-08-23', 'value': 0.014058701011287094},
    // {'date': '2020-08-26', 'value': 0.01434513365672412},
    // {'date': '2020-08-30', 'value': 0.014803655996575463},
    // {'date': '2020-09-02', 'value': 0.015039312791758103},
    // {'date': '2020-09-06', 'value': 0.01546908865724017},
    // {'date': '2020-09-09', 'value': 0.015665914870505507},
    // {'date': '2020-09-13', 'value': 0.016282348243487205},
    // {'date': '2020-09-16', 'value': 0.016494943564528984},
    // {'date': '2020-09-20', 'value': 0.016898054071796814},
    // {'date': '2020-09-23', 'value': 0.01710334010683063},
    // {'date': '2020-09-27', 'value': 0.017429838468163154},
    // {'date': '2020-09-30', 'value': 0.017665935174077753},
    // {'date': '2020-10-04', 'value': 0.01800223000901817},
    // {'date': '2020-10-07', 'value': 0.018205028856452053},
    // {'date': '2020-10-11', 'value': 0.01861776664089241},
    // {'date': '2020-10-14', 'value': 0.018826707318930203},
    // {'date': '2020-10-18', 'value': 0.019244182603560908},
    // {'date': '2020-10-21', 'value': 0.019546265919269612},
    // {'date': '2020-10-25', 'value': 0.020040860939141734},
    // {'date': '2020-10-28', 'value': 0.020440824392711693},
    // {'date': '2020-11-01', 'value': 0.02106265513198168},
    // {'date': '2020-11-04', 'value': 0.02152158354327791},
    // {'date': '2020-11-08', 'value': 0.02220584776719924}]
  
    // );
    // covid.scrollbarX.series.push(temp);

    // var temp = createSeries("Asian", [{'date': '2020-04-12', 'value': 0.00023818250477586743},
    // {'date': '2020-04-15', 'value': 0.00030598871562486117},
    // {'date': '2020-04-19', 'value': 0.00043216046914567506},
    // {'date': '2020-04-22', 'value': 0.0005361744191212404},
    // {'date': '2020-04-26', 'value': 0.0006377449020391843},
    // {'date': '2020-04-29', 'value': 0.0006975543116086899},
    // {'date': '2020-05-03', 'value': 0.0008312230663290239},
    // {'date': '2020-05-06', 'value': 0.0009576724865609312},
    // {'date': '2020-05-10', 'value': 0.0010771247056732863},
    // {'date': '2020-05-13', 'value': 0.0013391310142609623},
    // {'date': '2020-05-17', 'value': 0.0014824625705273447},
    // {'date': '2020-05-20', 'value': 0.0015983606557377049},
    // {'date': '2020-05-24', 'value': 0.001727697809764983},
    // {'date': '2020-05-27', 'value': 0.0017914500866320138},
    // {'date': '2020-05-31', 'value': 0.0019033497712026301},
    // {'date': '2020-06-03', 'value': 0.0019804300502021415},
    // {'date': '2020-06-07', 'value': 0.002106657337065174},
    // {'date': '2020-06-10', 'value': 0.002170076413878893},
    // {'date': '2020-06-14', 'value': 0.0025151606024256964},
    // {'date': '2020-06-17', 'value': 0.002665489359811631},
    // {'date': '2020-06-21', 'value': 0.002571638011462082},
    // {'date': '2020-06-24', 'value': 0.0026331134212981473},
    // {'date': '2020-06-28', 'value': 0.002747845306321916},
    // {'date': '2020-07-01', 'value': 0.0028531365231685103},
    // {'date': '2020-07-05', 'value': 0.002956261939668577},
    // {'date': '2020-07-08', 'value': 0.00305788795592874},
    // {'date': '2020-07-12', 'value': 0.0031838931094228975},
    // {'date': '2020-07-15', 'value': 0.0032969034608378873},
    // {'date': '2020-07-19', 'value': 0.0034417899506863922},
    // {'date': '2020-07-22', 'value': 0.003804922475454263},
    // {'date': '2020-07-26', 'value': 0.003978686303256475},
    // {'date': '2020-07-29', 'value': 0.004130958727620063},
    // {'date': '2020-08-02', 'value': 0.004306444089031055},
    // {'date': '2020-08-05', 'value': 0.004414845173041895},
    // {'date': '2020-08-09', 'value': 0.004603269803189835},
    // {'date': '2020-08-12', 'value': 0.004765316095783909},
    // {'date': '2020-08-16', 'value': 0.004941134657248212},
    // {'date': '2020-08-19', 'value': 0.005097794215647074},
    // {'date': '2020-08-23', 'value': 0.0052774445777244655},
    // {'date': '2020-08-26', 'value': 0.005430938735616864},
    // {'date': '2020-08-30', 'value': 0.005624972233328891},
    // {'date': '2020-09-02', 'value': 0.005755808787596073},
    // {'date': '2020-09-06', 'value': 0.005961226620462926},
    // {'date': '2020-09-09', 'value': 0.006066573370651739},
    // {'date': '2020-09-13', 'value': 0.006212126260606869},
    // {'date': '2020-09-16', 'value': 0.006344129015060642},
    // {'date': '2020-09-20', 'value': 0.0065392176462748235},
    // {'date': '2020-09-23', 'value': 0.006659280732151584},
    // {'date': '2020-09-27', 'value': 0.0068522035630192366},
    // {'date': '2020-09-30', 'value': 0.007042960593540362},
    // {'date': '2020-10-04', 'value': 0.007234272957483673},
    // {'date': '2020-10-07', 'value': 0.0073616664445332975},
    // {'date': '2020-10-11', 'value': 0.007554478208716514},
    // {'date': '2020-10-14', 'value': 0.007701030698831579},
    // {'date': '2020-10-18', 'value': 0.007915444933137856},
    // {'date': '2020-10-21', 'value': 0.008114254298280688},
    // {'date': '2020-10-25', 'value': 0.008368041672220002},
    // {'date': '2020-10-28', 'value': 0.008575347638722289},
    // {'date': '2020-11-01', 'value': 0.008803867341952107},
    // {'date': '2020-11-04', 'value': 0.009065262783775379},
    // {'date': '2020-11-08', 'value': 0.009438946643564797}]
  
    // );
    // covid.scrollbarX.series.push(temp);

    

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