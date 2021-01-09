am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_material);
    // Themes end
    
    // Create chart instance
    var mainContainer = am4core.create("chartdiv", am4core.Container);
    mainContainer.width = am4core.percent(90);
    mainContainer.height = am4core.percent(90);
    mainContainer.layout = "vertical";
    var covid = mainContainer.createChild(am4charts.XYChart);
    covid.paddingRight = 0;
    covid.paddingTop = 0;
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
    var scrollBar = new am4charts.XYChartScrollbar();
    covid.scrollbarX = scrollBar;

    // Create series
  var temp = createSeries("White", [{ 'date': '2020-04-12', 'value': 0.0003821449114530831 },
  { 'date': '2020-04-17', 'value': 0.00048551526905653037 },
  { 'date': '2020-04-22', 'value': 0.000880108220243214 },
  { 'date': '2020-04-27', 'value': 0.0009456807596693943 },
  { 'date': '2020-05-02', 'value': 0.0011767960612670927 },
  { 'date': '2020-05-07', 'value': 0.0012330808090026393 },
  { 'date': '2020-05-12', 'value': 0.0014458239095188653 },
  { 'date': '2020-05-17', 'value': 0.0016576387523591044 },
  { 'date': '2020-05-22', 'value': 0.0017772692640846154 },
  { 'date': '2020-05-27', 'value': 0.0019714524260118662 },
  { 'date': '2020-06-01', 'value': 0.0020528731400297562 },
  { 'date': '2020-06-06', 'value': 0.0022519479070136125 },
  { 'date': '2020-06-11', 'value': 0.00253702731215689 },
  { 'date': '2020-06-16', 'value': 0.0025930252387004185 },
  { 'date': '2020-06-21', 'value': 0.002724128598106667 },
  { 'date': '2020-06-26', 'value': 0.0029056551230697584 },
  { 'date': '2020-07-01', 'value': 0.0033141771543270106 },
  { 'date': '2020-07-06', 'value': 0.0035198644535195827 },
  { 'date': '2020-07-11', 'value': 0.0040479804919869985 },
  { 'date': '2020-07-16', 'value': 0.004368448417294587 },
  { 'date': '2020-07-21', 'value': 0.004772370879618017 },
  { 'date': '2020-07-26', 'value': 0.005448961211866471 },
  { 'date': '2020-07-31', 'value': 0.005798465871667855 },
  { 'date': '2020-08-05', 'value': 0.0063495328204275095 },
  { 'date': '2020-08-10', 'value': 0.006638742450735853 },
  { 'date': '2020-08-15', 'value': 0.007204202608404069 },
  { 'date': '2020-08-20', 'value': 0.007527397942501217 },
  { 'date': '2020-08-25', 'value': 0.007758648832298778 },
  { 'date': '2020-08-30', 'value': 0.008332828354204356 },
  { 'date': '2020-09-04', 'value': 0.008645562537188975 },
  { 'date': '2020-09-09', 'value': 0.009177402036221867 },
  { 'date': '2020-09-14', 'value': 0.009452239317344704 },
  { 'date': '2020-09-19', 'value': 0.01009394697771295 },
  { 'date': '2020-09-24', 'value': 0.010484117667611786 },
  { 'date': '2020-09-29', 'value': 0.010956569535104568 },
  { 'date': '2020-10-04', 'value': 0.011721015805933653 },
  { 'date': '2020-10-09', 'value': 0.012194583668609925 },
  { 'date': '2020-10-14', 'value': 0.013201696312678904 },
  { 'date': '2020-10-19', 'value': 0.01366745742400151 },
  { 'date': '2020-10-24', 'value': 0.014898650428067591 },
  { 'date': '2020-10-29', 'value': 0.01568506720220529 },
  { 'date': '2020-11-03', 'value': 0.016377062439930517 },
  { 'date': '2020-11-08', 'value': 0.01829592228918773 },
  { 'date': '2020-11-13', 'value': 0.019739847963908506 },
  { 'date': '2020-11-18', 'value': 0.02229649384559946 },
  { 'date': '2020-11-23', 'value': 0.023464841719028916 },
  { 'date': '2020-11-28', 'value': 0.025782529043253156 },
  { 'date': '2020-12-03', 'value': 0.02738424287809943 },
  { 'date': '2020-12-08', 'value': 0.028513744732268063 },
  { 'date': '2020-12-13', 'value': 0.0316545567282776 },
  { 'date': '2020-12-18', 'value': 0.033314641283165004 },
  { 'date': '2020-12-23', 'value': 0.03559210063147596 },
  { 'date': '2020-12-28', 'value': 0.03671254936583834 },
  { 'date': '2021-01-02', 'value': 0.039940200388929537 }]
  
    );
    covid.scrollbarX.series.push(temp);

  var temp = createSeries("Black", [{ 'date': '2020-04-12', 'value': 0.0011504880094257593 },
  { 'date': '2020-04-17', 'value': 0.0014311770365453974 },
  { 'date': '2020-04-22', 'value': 0.0022677131729102033 },
  { 'date': '2020-04-27', 'value': 0.002536079769089478 },
  { 'date': '2020-05-02', 'value': 0.0031374607045652164 },
  { 'date': '2020-05-07', 'value': 0.0034630404247765756 },
  { 'date': '2020-05-12', 'value': 0.004004661428990384 },
  { 'date': '2020-05-17', 'value': 0.004590375641203739 },
  { 'date': '2020-05-22', 'value': 0.004900597342059364 },
  { 'date': '2020-05-27', 'value': 0.0054064858690786735 },
  { 'date': '2020-06-01', 'value': 0.005595129681366118 },
  { 'date': '2020-06-06', 'value': 0.006067832538420774 },
  { 'date': '2020-06-11', 'value': 0.0066573026481650125 },
  { 'date': '2020-06-16', 'value': 0.006833263874954337 },
  { 'date': '2020-06-21', 'value': 0.007088381928473305 },
  { 'date': '2020-06-26', 'value': 0.007460756015867381 },
  { 'date': '2020-07-01', 'value': 0.008319698910789717 },
  { 'date': '2020-07-06', 'value': 0.008713347842416945 },
  { 'date': '2020-07-11', 'value': 0.00990553660456573 },
  { 'date': '2020-07-16', 'value': 0.01057408636506295 },
  { 'date': '2020-07-21', 'value': 0.012049922566770082 },
  { 'date': '2020-07-26', 'value': 0.013562854687926076 },
  { 'date': '2020-07-31', 'value': 0.014273156651797429 },
  { 'date': '2020-08-05', 'value': 0.015401675233200076 },
  { 'date': '2020-08-10', 'value': 0.016032048610575167 },
  { 'date': '2020-08-15', 'value': 0.01708485755887241 },
  { 'date': '2020-08-20', 'value': 0.01761942982388442 },
  { 'date': '2020-08-25', 'value': 0.017991803911278498 },
  { 'date': '2020-08-30', 'value': 0.018772078760656716 },
  { 'date': '2020-09-04', 'value': 0.019137841439383414 },
  { 'date': '2020-09-09', 'value': 0.019734128760399462 },
  { 'date': '2020-09-14', 'value': 0.02002948122308488 },
  { 'date': '2020-09-19', 'value': 0.020718508342723076 },
  { 'date': '2020-09-24', 'value': 0.02120201583651041 },
  { 'date': '2020-09-29', 'value': 0.021511825932157173 },
  { 'date': '2020-10-04', 'value': 0.022099855423670385 },
  { 'date': '2020-10-09', 'value': 0.022502842648473718 },
  { 'date': '2020-10-14', 'value': 0.02329852696785878 },
  { 'date': '2020-10-19', 'value': 0.02368973199355838 },
  { 'date': '2020-10-24', 'value': 0.02471015275698314 },
  { 'date': '2020-10-29', 'value': 0.025286837379927044 },
  { 'date': '2020-11-03', 'value': 0.025762550100071516 },
  { 'date': '2020-11-08', 'value': 0.027124320208272237 },
  { 'date': '2020-11-13', 'value': 0.028119941757862945 },
  { 'date': '2020-11-18', 'value': 0.030059657029959715 },
  { 'date': '2020-11-23', 'value': 0.031008921542902124 },
  { 'date': '2020-11-28', 'value': 0.03282955428300945 },
  { 'date': '2020-12-03', 'value': 0.03425905917339384 },
  { 'date': '2020-12-08', 'value': 0.03544059765076327 },
  { 'date': '2020-12-13', 'value': 0.038246999140774125 },
  { 'date': '2020-12-18', 'value': 0.03975072159538179 },
  { 'date': '2020-12-23', 'value': 0.041887415685245497 },
  { 'date': '2020-12-28', 'value': 0.043004409320799956 },
  { 'date': '2021-01-02', 'value': 0.0457907450568787 }]);
    covid.scrollbarX.series.push(temp);

  var temp = createSeries("Latinx", [{ 'date': '2020-04-12', 'value': 0.0004450712232394688 },
  { 'date': '2020-04-17', 'value': 0.000498401939667935 },
  { 'date': '2020-04-22', 'value': 0.001180162056345797 },
  { 'date': '2020-04-27', 'value': 0.0013828763055619944 },
  { 'date': '2020-05-02', 'value': 0.0020992709325599926 },
  { 'date': '2020-05-07', 'value': 0.0024510641609802567 },
  { 'date': '2020-05-12', 'value': 0.0030532850333909165 },
  { 'date': '2020-05-17', 'value': 0.0037516771596656003 },
  { 'date': '2020-05-22', 'value': 0.00415818851528436 },
  { 'date': '2020-05-27', 'value': 0.0049343433232548655 },
  { 'date': '2020-06-01', 'value': 0.0051686127076674745 },
  { 'date': '2020-06-06', 'value': 0.005868781396513538 },
  { 'date': '2020-06-11', 'value': 0.006735930047425761 },
  { 'date': '2020-06-16', 'value': 0.007030044211028562 },
  { 'date': '2020-06-21', 'value': 0.007471308514472217 },
  { 'date': '2020-06-26', 'value': 0.007991333758580374 },
  { 'date': '2020-07-01', 'value': 0.008996682057902404 },
  { 'date': '2020-07-06', 'value': 0.00943244747719655 },
  { 'date': '2020-07-11', 'value': 0.010634198998695495 },
  { 'date': '2020-07-16', 'value': 0.011363249519059133 },
  { 'date': '2020-07-21', 'value': 0.011885085165025743 },
  { 'date': '2020-07-26', 'value': 0.013245999773276777 },
  { 'date': '2020-07-31', 'value': 0.014136700567992433 },
  { 'date': '2020-08-05', 'value': 0.015413896780022638 },
  { 'date': '2020-08-10', 'value': 0.01593150251510501 },
  { 'date': '2020-08-15', 'value': 0.01707354461456206 },
  { 'date': '2020-08-20', 'value': 0.017832948975430987 },
  { 'date': '2020-08-25', 'value': 0.018192745195244227 },
  { 'date': '2020-08-30', 'value': 0.0190802481773314 },
  { 'date': '2020-09-04', 'value': 0.019583489135050904 },
  { 'date': '2020-09-09', 'value': 0.02030343688719166 },
  { 'date': '2020-09-14', 'value': 0.02057892252326028 },
  { 'date': '2020-09-19', 'value': 0.021352150232898895 },
  { 'date': '2020-09-24', 'value': 0.0217818076608762 },
  { 'date': '2020-09-29', 'value': 0.02208959289645686 },
  { 'date': '2020-10-04', 'value': 0.022796106451629276 },
  { 'date': '2020-10-09', 'value': 0.023306927409653334 },
  { 'date': '2020-10-14', 'value': 0.02416485485483792 },
  { 'date': '2020-10-19', 'value': 0.024593953934578507 },
  { 'date': '2020-10-24', 'value': 0.0257291943373337 },
  { 'date': '2020-10-29', 'value': 0.02648695749277954 },
  { 'date': '2020-11-03', 'value': 0.02709433885646897 },
  { 'date': '2020-11-08', 'value': 0.02882662272071252 },
  { 'date': '2020-11-13', 'value': 0.03009363330733348 },
  { 'date': '2020-11-18', 'value': 0.03250569768996107 },
  { 'date': '2020-11-23', 'value': 0.03350104647995276 },
  { 'date': '2020-11-28', 'value': 0.03580337005459969 },
  { 'date': '2020-12-03', 'value': 0.037700721961189725 },
  { 'date': '2020-12-08', 'value': 0.03819162849877079 },
  { 'date': '2020-12-13', 'value': 0.04293931431452602 },
  { 'date': '2020-12-18', 'value': 0.04458838737185485 },
  { 'date': '2020-12-23', 'value': 0.04864971092789017 },
  { 'date': '2020-12-28', 'value': 0.04915826465368028 },
  { 'date': '2021-01-02', 'value': 0.054416179239935775 }]
    );
    covid.scrollbarX.series.push(temp);

  var temp = createSeries("Asian", [{ 'date': '2020-04-12', 'value': 0.00030598871562486117 },
  { 'date': '2020-04-17', 'value': 0.00043216046914567506 },
  { 'date': '2020-04-22', 'value': 0.0006377449020391843 },
  { 'date': '2020-04-27', 'value': 0.0006975543116086899 },
  { 'date': '2020-05-02', 'value': 0.0009581722866408992 },
  { 'date': '2020-05-07', 'value': 0.0010771247056732863 },
  { 'date': '2020-05-12', 'value': 0.0013391310142609623 },
  { 'date': '2020-05-17', 'value': 0.001598693855791017 },
  { 'date': '2020-05-22', 'value': 0.001727697809764983 },
  { 'date': '2020-05-27', 'value': 0.0019034608378870675 },
  { 'date': '2020-06-01', 'value': 0.0019804300502021415 },
  { 'date': '2020-06-06', 'value': 0.002170076413878893 },
  { 'date': '2020-06-11', 'value': 0.0025151606024256964 },
  { 'date': '2020-06-16', 'value': 0.002665489359811631 },
  { 'date': '2020-06-21', 'value': 0.002642942822870852 },
  { 'date': '2020-06-26', 'value': 0.002747845306321916 },
  { 'date': '2020-07-01', 'value': 0.002968979075036652 },
  { 'date': '2020-07-06', 'value': 0.00305788795592874 },
  { 'date': '2020-07-11', 'value': 0.0032969034608378873 },
  { 'date': '2020-07-16', 'value': 0.0034417899506863922 },
  { 'date': '2020-07-21', 'value': 0.003804922475454263 },
  { 'date': '2020-07-26', 'value': 0.004130958727620063 },
  { 'date': '2020-07-31', 'value': 0.004306444089031055 },
  { 'date': '2020-08-05', 'value': 0.004604102803323115 },
  { 'date': '2020-08-10', 'value': 0.004765316095783909 },
  { 'date': '2020-08-15', 'value': 0.005097905282331512 },
  { 'date': '2020-08-20', 'value': 0.0052774445777244655 },
  { 'date': '2020-08-25', 'value': 0.005430938735616864 },
  { 'date': '2020-08-30', 'value': 0.005759918254920254 },
  { 'date': '2020-09-04', 'value': 0.005961226620462926 },
  { 'date': '2020-09-09', 'value': 0.006246390332755787 },
  { 'date': '2020-09-14', 'value': 0.006344129015060642 },
  { 'date': '2020-09-19', 'value': 0.006660058198942645 },
  { 'date': '2020-09-24', 'value': 0.0068522035630192366 },
  { 'date': '2020-09-29', 'value': 0.007042960593540362 },
  { 'date': '2020-10-04', 'value': 0.00736283264471989 },
  { 'date': '2020-10-09', 'value': 0.007554478208716514 },
  { 'date': '2020-10-14', 'value': 0.007915500466480074 },
  { 'date': '2020-10-19', 'value': 0.008114254298280688 },
  { 'date': '2020-10-24', 'value': 0.008575347638722289 },
  { 'date': '2020-10-29', 'value': 0.008803867341952107 },
  { 'date': '2020-11-03', 'value': 0.009065262783775379 },
  { 'date': '2020-11-08', 'value': 0.009825514238748945 },
  { 'date': '2020-11-13', 'value': 0.010379681460749034 },
  { 'date': '2020-11-18', 'value': 0.011561097783108978 },
  { 'date': '2020-11-23', 'value': 0.012091663334666134 },
  { 'date': '2020-11-28', 'value': 0.01320755031320805 },
  { 'date': '2020-12-03', 'value': 0.014032442578524146 },
  { 'date': '2020-12-08', 'value': 0.014674241414545293 },
  { 'date': '2020-12-13', 'value': 0.016396274823403972 },
  { 'date': '2020-12-18', 'value': 0.017478175396508065 },
  { 'date': '2020-12-23', 'value': 0.018580789906259717 },
  { 'date': '2020-12-28', 'value': 0.01965691501177307 },
  { 'date': '2021-01-02', 'value': 0.021557987915944734 }]
  
    );
    covid.scrollbarX.series.push(temp);

  var temp = createSeries("AIAN", [{ 'date': '2020-04-12', 'value': 0.0006609587430023051 },
  { 'date': '2020-04-17', 'value': 0.0007856235592981135 },
  { 'date': '2020-04-22', 'value': 0.0016286399774192032 },
  { 'date': '2020-04-27', 'value': 0.0018572705461730253 },
  { 'date': '2020-05-02', 'value': 0.0025318718539775135 },
  { 'date': '2020-05-07', 'value': 0.002867761208072635 },
  { 'date': '2020-05-12', 'value': 0.0031415533706543727 },
  { 'date': '2020-05-17', 'value': 0.004032553982217623 },
  { 'date': '2020-05-22', 'value': 0.004431010961095169 },
  { 'date': '2020-05-27', 'value': 0.0054377381568424515 },
  { 'date': '2020-06-01', 'value': 0.005774568377475655 },
  { 'date': '2020-06-06', 'value': 0.006555487604083361 },
  { 'date': '2020-06-11', 'value': 0.007064966834454533 },
  { 'date': '2020-06-16', 'value': 0.007526932304652585 },
  { 'date': '2020-06-21', 'value': 0.008645622618431575 },
  { 'date': '2020-06-26', 'value': 0.009244484169920497 },
  { 'date': '2020-07-01', 'value': 0.010189584607423438 },
  { 'date': '2020-07-06', 'value': 0.010813379122171519 },
  { 'date': '2020-07-11', 'value': 0.011965940631321448 },
  { 'date': '2020-07-16', 'value': 0.012700286964294115 },
  { 'date': '2020-07-21', 'value': 0.013380533471327092 },
  { 'date': '2020-07-26', 'value': 0.014855341769769959 },
  { 'date': '2020-07-31', 'value': 0.015577927271016607 },
  { 'date': '2020-08-05', 'value': 0.016538552006397894 },
  { 'date': '2020-08-10', 'value': 0.016977466246412946 },
  { 'date': '2020-08-15', 'value': 0.018312555863950697 },
  { 'date': '2020-08-20', 'value': 0.019213906007432845 },
  { 'date': '2020-08-25', 'value': 0.019632591616879146 },
  { 'date': '2020-08-30', 'value': 0.020756456696617586 },
  { 'date': '2020-09-04', 'value': 0.0213887190102084 },
  { 'date': '2020-09-09', 'value': 0.022407677470950745 },
  { 'date': '2020-09-14', 'value': 0.02291292280190055 },
  { 'date': '2020-09-19', 'value': 0.02424095592040269 },
  { 'date': '2020-09-24', 'value': 0.024561320976619467 },
  { 'date': '2020-09-29', 'value': 0.025786799642470715 },
  { 'date': '2020-10-04', 'value': 0.027551865267911747 },
  { 'date': '2020-10-09', 'value': 0.028764642235498895 },
  { 'date': '2020-10-14', 'value': 0.030803029590252624 },
  { 'date': '2020-10-19', 'value': 0.03176694735851719 },
  { 'date': '2020-10-24', 'value': 0.034303053111916074 },
  { 'date': '2020-10-29', 'value': 0.03624688337959261 },
  { 'date': '2020-11-03', 'value': 0.03749870630851014 },
  { 'date': '2020-11-08', 'value': 0.041405184174624826 },
  { 'date': '2020-11-13', 'value': 0.04453874017970551 },
  { 'date': '2020-11-18', 'value': 0.049417603612927505 },
  { 'date': '2020-11-23', 'value': 0.05159523921531731 },
  { 'date': '2020-11-28', 'value': 0.055697887754622005 },
  { 'date': '2020-12-03', 'value': 0.05915604271534083 },
  { 'date': '2020-12-08', 'value': 0.06105847485534177 },
  { 'date': '2020-12-13', 'value': 0.06657995013407349 },
  { 'date': '2020-12-18', 'value': 0.069492402502705 },
  { 'date': '2020-12-23', 'value': 0.07298066519264243 },
  { 'date': '2020-12-28', 'value': 0.07499506045067507 },
  { 'date': '2021-01-02', 'value': 0.07993555064214142 }]

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
      unpProcessOver(event.target.dataItem.name);
    })
    
    covid.legend.itemContainers.template.events.on("out", function(event) {
      processOut(event.target.dataItem.dataContext);
      unpProcessOut(event.target.dataItem.name);
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

  var unp = mainContainer.createChild(am4charts.XYChart);
  unp.paddingRight = 0;
  unp.paddingTop = 0;
  // var title = unp.titles.create();
  // title.text = "Unemployment Rate per Population Group";


  // Set input format for the dates
  unp.dateFormatter.inputDateFormat = "yyyy-MM-dd";

  // Create axes
  var unpdateAxis = unp.xAxes.push(new am4charts.DateAxis());
  var unpvalueAxis = unp.yAxes.push(new am4charts.ValueAxis());

  unpvalueAxis.numberFormatter = new am4core.NumberFormatter();
  unpvalueAxis.numberFormatter.numberFormat = "0%";
  unpvalueAxis.title.text = "Unemployment Rate"
  // unp.scrollbarX = new am4charts.XYChartScrollbar();

  // Create series
  var temp = unpCreateSeries("White", [{ 'date': '2020-01-01', 'value': .030 },
    { 'date': '2020-02-01', 'value': .030 },
    { 'date': '2020-03-01', 'value': .039 },
  { 'date': '2020-04-01', 'value': .141 },
  { 'date': '2020-05-01', 'value': .123 },
  { 'date': '2020-06-01', 'value': .101 },
    { 'date': '2020-07-01', 'value': .092 },
    { 'date': '2020-08-01', 'value': .074 },
    { 'date': '2020-09-01', 'value': .070 },
    { 'date': '2020-10-01', 'value': .060 },
    { 'date': '2020-11-01', 'value': .059 },
    { 'date': '2020-12-01', 'value': .060 }]
  );
  // unp.scrollbarX.series.push(temp);

  var temp = unpCreateSeries("Black", [{ 'date': '2020-01-01', 'value': .061 },
    { 'date': '2020-02-01', 'value': .060 },
    { 'date': '2020-03-01', 'value': .068 },
  { 'date': '2020-04-01', 'value': .167 },
  { 'date': '2020-05-01', 'value': .167 },
  { 'date': '2020-06-01', 'value': .153 },
  { 'date': '2020-07-01', 'value': .144 },
  { 'date': '2020-08-01', 'value': .128 },
  { 'date': '2020-09-01', 'value': .120 },
  { 'date': '2020-10-01', 'value': .108 },
  { 'date': '2020-11-01', 'value': .103 },
    { 'date': '2020-12-01', 'value': .099 }]);
  // unp.scrollbarX.series.push(temp);

  var temp = unpCreateSeries("Latinx", [{ 'date': '2020-01-01', 'value': .043 },
    { 'date': '2020-02-01', 'value': .044 },
    { 'date': '2020-03-01', 'value': .060 },
  { 'date': '2020-04-01', 'value': .189 },
  { 'date': '2020-05-01', 'value': .176 },
  { 'date': '2020-06-01', 'value': .145 },
  { 'date': '2020-07-01', 'value': .127 },
  { 'date': '2020-08-01', 'value': .105 },
  { 'date': '2020-09-01', 'value': .103 },
    { 'date': '2020-10-01', 'value': .088 },
    { 'date': '2020-11-01', 'value': .084 },
    { 'date': '2020-12-01', 'value': .093 }]
  );
  // unp.scrollbarX.series.push(temp);

  var temp = unpCreateSeries("Asian", [{ 'date': '2020-01-01', 'value': .031 },
    { 'date': '2020-02-01', 'value': .024 },
    { 'date': '2020-03-01', 'value': .041 },
    { 'date': '2020-04-01', 'value': .145 },
  { 'date': '2020-05-01', 'value': .149 },
  { 'date': '2020-06-01', 'value': .139 },
  { 'date': '2020-07-01', 'value': .119 },
  { 'date': '2020-08-01', 'value': .106 },
    { 'date': '2020-09-01', 'value': .088 },
    { 'date': '2020-10-01', 'value': .076 },
    { 'date': '2020-11-01', 'value': .067 },
    { 'date': '2020-12-01', 'value': .059 }]

  );
  // unp.scrollbarX.series.push(temp);

  function unpCreateSeries(name, data) {
    var series = unp.series.push(new am4charts.LineSeries());
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

    segment.events.on("over", function (event) {
      unpProcessOver(event.target.parent.parent.parent.parent.name);
    });

    segment.events.on("out", function (event) {
      unpProcessOut(event.target.parent.parent.parent.parent.name);
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

  function unpProcessOver(hoveredSeriesName) {
    unp.series.each(function (series) {
      if (series.name != hoveredSeriesName) {
        series.segments.each(function (segment) {
          segment.setState("dimmed");
        })
        series.bulletsContainer.setState("dimmed");
      } else {
        series.toFront();

        series.segments.each(function (segment) {
          segment.setState("hover");
        })
      }
    });
  }

  function unpProcessOut(hoveredSeries) {
    unp.series.each(function (series) {
      series.segments.each(function (segment) {
        segment.setState("default");
      })
      series.bulletsContainer.setState("default");
    });
  }

unp.scrollbarX = scrollBar;

  // Make a panning cursor
  unp.cursor = new am4charts.XYCursor();
  unp.cursor.behavior = "panXY";
  unp.cursor.xAxis = dateAxis;
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