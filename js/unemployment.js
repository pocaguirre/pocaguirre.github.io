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
    var temp = createSeries("White", [{'date': '2020-04-12', 'value': 0.00029080539912211854},
    {'date': '2020-04-15', 'value': 0.0003821449114530831},
    {'date': '2020-04-19', 'value': 0.00048551526905653037},
    {'date': '2020-04-22', 'value': 0.0007494950643287784},
    {'date': '2020-04-26', 'value': 0.0008466387946000435},
    {'date': '2020-04-29', 'value': 0.0009456807596693943},
    {'date': '2020-05-03', 'value': 0.0010879962202181824},
    {'date': '2020-05-06', 'value': 0.0011356502575393557},
    {'date': '2020-05-10', 'value': 0.0012330808090026393},
    {'date': '2020-05-13', 'value': 0.0014458239095188653},
    {'date': '2020-05-17', 'value': 0.0015548472520704579},
    {'date': '2020-05-20', 'value': 0.0016576387523591044},
    {'date': '2020-05-24', 'value': 0.0017772692640846154},
    {'date': '2020-05-27', 'value': 0.0018561972411973273},
    {'date': '2020-05-31', 'value': 0.0019714524260118662},
    {'date': '2020-06-03', 'value': 0.0020528731400297562},
    {'date': '2020-06-07', 'value': 0.0021759820105748365},
    {'date': '2020-06-10', 'value': 0.0022519479070136125},
    {'date': '2020-06-14', 'value': 0.00253702731215689},
    {'date': '2020-06-17', 'value': 0.0025930252387004185},
    {'date': '2020-06-21', 'value': 0.0025940995144377965},
    {'date': '2020-06-24', 'value': 0.002724128598106667},
    {'date': '2020-06-28', 'value': 0.0029056551230697584},
    {'date': '2020-07-01', 'value': 0.0030868739671177756},
    {'date': '2020-07-05', 'value': 0.0033105162729307022},
    {'date': '2020-07-08', 'value': 0.0035198644535195827},
    {'date': '2020-07-12', 'value': 0.00379581772982591},
    {'date': '2020-07-15', 'value': 0.0040479804919869985},
    {'date': '2020-07-19', 'value': 0.004368448417294587},
    {'date': '2020-07-22', 'value': 0.004772370879618017},
    {'date': '2020-07-26', 'value': 0.0051385633178641105},
    {'date': '2020-07-29', 'value': 0.005448961211866471},
    {'date': '2020-08-02', 'value': 0.005798465871667855},
    {'date': '2020-08-05', 'value': 0.006033393287654017},
    {'date': '2020-08-09', 'value': 0.0063495328204275095},
    {'date': '2020-08-12', 'value': 0.006638742450735853},
    {'date': '2020-08-16', 'value': 0.006943602088266875},
    {'date': '2020-08-19', 'value': 0.007203837563250591},
    {'date': '2020-08-23', 'value': 0.007527397942501217},
    {'date': '2020-08-26', 'value': 0.007758648832298778},
    {'date': '2020-08-30', 'value': 0.008078209359653437},
    {'date': '2020-09-02', 'value': 0.008317778064019532},
    {'date': '2020-09-06', 'value': 0.008645562537188975},
    {'date': '2020-09-09', 'value': 0.008849982608205902},
    {'date': '2020-09-13', 'value': 0.009176171312561569},
    {'date': '2020-09-16', 'value': 0.009452239317344704},
    {'date': '2020-09-20', 'value': 0.009817644301045437},
    {'date': '2020-09-23', 'value': 0.010093196027682938},
    {'date': '2020-09-27', 'value': 0.010484117667611786},
    {'date': '2020-09-30', 'value': 0.010956569535104568},
    {'date': '2020-10-04', 'value': 0.011392308290018988},
    {'date': '2020-10-07', 'value': 0.011721015805933653},
    {'date': '2020-10-11', 'value': 0.012194583668609925},
    {'date': '2020-10-14', 'value': 0.01260085284977714},
    {'date': '2020-10-18', 'value': 0.013201696312678904},
    {'date': '2020-10-21', 'value': 0.01366745742400151},
    {'date': '2020-10-25', 'value': 0.014361022355886693},
    {'date': '2020-10-28', 'value': 0.014898650428067591},
    {'date': '2020-11-01', 'value': 0.01568506720220529},
    {'date': '2020-11-04', 'value': 0.016377062439930517},
    {'date': '2020-11-08', 'value': 0.017388268804649214}]
    // [{'date': '2020-04-15', 'value': 17515.0},
    // {'date': '2020-04-19', 'value': 19822.0},
    // {'date': '2020-04-22', 'value': 50620.0},
    // {'date': '2020-04-26', 'value': 18628.0},
    // {'date': '2020-04-29', 'value': 18992.0},
    // {'date': '2020-05-03', 'value': 27290.0},
    // {'date': '2020-05-06', 'value': 9138.0},
    // {'date': '2020-05-10', 'value': 18683.0},
    // {'date': '2020-05-13', 'value': 40795.0},
    // {'date': '2020-05-17', 'value': 20906.0},
    // {'date': '2020-05-20', 'value': 19711.0},
    // {'date': '2020-05-24', 'value': 22940.0},
    // {'date': '2020-05-27', 'value': 15135.0},
    // {'date': '2020-05-31', 'value': 22101.0},
    // {'date': '2020-06-03', 'value': 15613.0},
    // {'date': '2020-06-07', 'value': 23607.0},
    // {'date': '2020-06-10', 'value': 14567.0},
    // {'date': '2020-06-14', 'value': 54666.0},
    // {'date': '2020-06-17', 'value': 10738.0},
    // {'date': '2020-06-21', 'value': 206.0},
    // {'date': '2020-06-24', 'value': 24934.0},
    // {'date': '2020-06-28', 'value': 34809.0},
    // {'date': '2020-07-01', 'value': 34750.0},
    // {'date': '2020-07-05', 'value': 42885.0},
    // {'date': '2020-07-08', 'value': 40144.0},
    // {'date': '2020-07-12', 'value': 52916.0},
    // {'date': '2020-07-15', 'value': 48354.0},
    // {'date': '2020-07-19', 'value': 61452.0},
    // {'date': '2020-07-22', 'value': 77455.0},
    // {'date': '2020-07-26', 'value': 70220.0},
    // {'date': '2020-07-29', 'value': 59521.0},
    // {'date': '2020-08-02', 'value': 67020.0},
    // {'date': '2020-08-05', 'value': 45049.0},
    // {'date': '2020-08-09', 'value': 60622.0},
    // {'date': '2020-08-12', 'value': 55458.0},
    // {'date': '2020-08-16', 'value': 58459.0},
    // {'date': '2020-08-19', 'value': 49902.0},
    // {'date': '2020-08-23', 'value': 62045.0},
    // {'date': '2020-08-26', 'value': 44344.0},
    // {'date': '2020-08-30', 'value': 61278.0},
    // {'date': '2020-09-02', 'value': 45939.0},
    // {'date': '2020-09-06', 'value': 62855.0},
    // {'date': '2020-09-09', 'value': 39199.0},
    // {'date': '2020-09-13', 'value': 62549.0},
    // {'date': '2020-09-16', 'value': 52938.0},
    // {'date': '2020-09-20', 'value': 70069.0},
    // {'date': '2020-09-23', 'value': 52839.0},
    // {'date': '2020-09-27', 'value': 74962.0},
    // {'date': '2020-09-30', 'value': 90596.0},
    // {'date': '2020-10-04', 'value': 83556.0},
    // {'date': '2020-10-07', 'value': 63032.0},
    // {'date': '2020-10-11', 'value': 90810.0},
    // {'date': '2020-10-14', 'value': 77905.0},
    // {'date': '2020-10-18', 'value': 115216.0},
    // {'date': '2020-10-21', 'value': 89313.0},
    // {'date': '2020-10-25', 'value': 132996.0},
    // {'date': '2020-10-28', 'value': 103094.0},
    // {'date': '2020-11-01', 'value': 150801.0},
    // {'date': '2020-11-04', 'value': 132695.0},
    // {'date': '2020-11-08', 'value': 193906.0}]
    );
    covid.scrollbarX.series.push(temp);

    var temp = createSeries("Black",[{'date': '2020-04-12', 'value': 0.0009291473083591873},
    {'date': '2020-04-15', 'value': 0.0011504880094257593},
    {'date': '2020-04-19', 'value': 0.0014311770365453974},
    {'date': '2020-04-22', 'value': 0.0018831967318546415},
    {'date': '2020-04-26', 'value': 0.0022677131729102033},
    {'date': '2020-04-29', 'value': 0.002536079769089478},
    {'date': '2020-05-03', 'value': 0.002917226192497466},
    {'date': '2020-05-06', 'value': 0.003135582755799775},
    {'date': '2020-05-10', 'value': 0.0034630404247765756},
    {'date': '2020-05-13', 'value': 0.004004661428990384},
    {'date': '2020-05-17', 'value': 0.004315783516240398},
    {'date': '2020-05-20', 'value': 0.004590375641203739},
    {'date': '2020-05-24', 'value': 0.004900597342059364},
    {'date': '2020-05-27', 'value': 0.005110901878463272},
    {'date': '2020-05-31', 'value': 0.005405070976173204},
    {'date': '2020-06-03', 'value': 0.005595129681366118},
    {'date': '2020-06-07', 'value': 0.005880089112527719},
    {'date': '2020-06-10', 'value': 0.006063510683727702},
    {'date': '2020-06-14', 'value': 0.0066573026481650125},
    {'date': '2020-06-17', 'value': 0.006833263874954337},
    {'date': '2020-06-21', 'value': 0.0067817617731952395},
    {'date': '2020-06-24', 'value': 0.007088073224566657},
    {'date': '2020-06-28', 'value': 0.007460756015867381},
    {'date': '2020-07-01', 'value': 0.007819907285926703},
    {'date': '2020-07-05', 'value': 0.008316586146397683},
    {'date': '2020-07-08', 'value': 0.008713347842416945},
    {'date': '2020-07-12', 'value': 0.00934914926348393},
    {'date': '2020-07-15', 'value': 0.00990553660456573},
    {'date': '2020-07-19', 'value': 0.01057408636506295},
    {'date': '2020-07-22', 'value': 0.012049922566770082},
    {'date': '2020-07-26', 'value': 0.01282780496087178},
    {'date': '2020-07-29', 'value': 0.013562854687926076},
    {'date': '2020-08-02', 'value': 0.014273156651797429},
    {'date': '2020-08-05', 'value': 0.014761140352231158},
    {'date': '2020-08-09', 'value': 0.015393597480976122},
    {'date': '2020-08-12', 'value': 0.016032048610575167},
    {'date': '2020-08-16', 'value': 0.016588230149052537},
    {'date': '2020-08-19', 'value': 0.017081487541224835},
    {'date': '2020-08-23', 'value': 0.01761942982388442},
    {'date': '2020-08-26', 'value': 0.017991803911278498},
    {'date': '2020-08-30', 'value': 0.01842288319158679},
    {'date': '2020-09-02', 'value': 0.01876996928396129},
    {'date': '2020-09-06', 'value': 0.019137841439383414},
    {'date': '2020-09-09', 'value': 0.019370964339553716},
    {'date': '2020-09-13', 'value': 0.019727054295872116},
    {'date': '2020-09-16', 'value': 0.02002948122308488},
    {'date': '2020-09-20', 'value': 0.02039660734406594},
    {'date': '2020-09-23', 'value': 0.020718508342723076},
    {'date': '2020-09-27', 'value': 0.02120201583651041},
    {'date': '2020-09-30', 'value': 0.021511825932157173},
    {'date': '2020-10-04', 'value': 0.021815513400322083},
    {'date': '2020-10-07', 'value': 0.022099701071717062},
    {'date': '2020-10-11', 'value': 0.022502842648473718},
    {'date': '2020-10-14', 'value': 0.022808459516055174},
    {'date': '2020-10-18', 'value': 0.02329852696785878},
    {'date': '2020-10-21', 'value': 0.02368973199355838},
    {'date': '2020-10-25', 'value': 0.024265413328805677},
    {'date': '2020-10-28', 'value': 0.02471015275698314},
    {'date': '2020-11-01', 'value': 0.025286837379927044},
    {'date': '2020-11-04', 'value': 0.025762550100071516},
    {'date': '2020-11-08', 'value': 0.02651316364908598}] 
    // [{'date': '2020-04-15', 'value': 8604.0},
    // {'date': '2020-04-19', 'value': 10911.0},
    // {'date': '2020-04-22', 'value': 17571.0},
    // {'date': '2020-04-26', 'value': 14947.0},
    // {'date': '2020-04-29', 'value': 10432.0},
    // {'date': '2020-05-03', 'value': 14816.0},
    // {'date': '2020-05-06', 'value': 8488.0},
    // {'date': '2020-05-10', 'value': 12729.0},
    // {'date': '2020-05-13', 'value': 21054.0},
    // {'date': '2020-05-17', 'value': 12094.0},
    // {'date': '2020-05-20', 'value': 10674.0},
    // {'date': '2020-05-24', 'value': 12059.0},
    // {'date': '2020-05-27', 'value': 8175.0},
    // {'date': '2020-05-31', 'value': 11435.0},
    // {'date': '2020-06-03', 'value': 7388.0},
    // {'date': '2020-06-07', 'value': 11077.0},
    // {'date': '2020-06-10', 'value': 7130.0},
    // {'date': '2020-06-14', 'value': 23082.0},
    // {'date': '2020-06-17', 'value': 6840.0},
    // {'date': '2020-06-24', 'value': 11907.0},
    // {'date': '2020-06-28', 'value': 14487.0},
    // {'date': '2020-07-01', 'value': 13961.0},
    // {'date': '2020-07-05', 'value': 19307.0},
    // {'date': '2020-07-08', 'value': 15423.0},
    // {'date': '2020-07-12', 'value': 24715.0},
    // {'date': '2020-07-15', 'value': 21628.0},
    // {'date': '2020-07-19', 'value': 25988.0},
    // {'date': '2020-07-22', 'value': 57369.0},
    // {'date': '2020-07-26', 'value': 30238.0},
    // {'date': '2020-07-29', 'value': 28573.0},
    // {'date': '2020-08-02', 'value': 27611.0},
    // {'date': '2020-08-05', 'value': 18969.0},
    // {'date': '2020-08-09', 'value': 24585.0},
    // {'date': '2020-08-12', 'value': 24818.0},
    // {'date': '2020-08-16', 'value': 21620.0},
    // {'date': '2020-08-19', 'value': 19174.0},
    // {'date': '2020-08-23', 'value': 20911.0},
    // {'date': '2020-08-26', 'value': 14475.0},
    // {'date': '2020-08-30', 'value': 16757.0},
    // {'date': '2020-09-02', 'value': 13492.0},
    // {'date': '2020-09-06', 'value': 14300.0},
    // {'date': '2020-09-09', 'value': 9062.0},
    // {'date': '2020-09-13', 'value': 13842.0},
    // {'date': '2020-09-16', 'value': 11756.0},
    // {'date': '2020-09-20', 'value': 14271.0},
    // {'date': '2020-09-23', 'value': 12513.0},
    // {'date': '2020-09-27', 'value': 18795.0},
    // {'date': '2020-09-30', 'value': 12043.0},
    // {'date': '2020-10-04', 'value': 11805.0},
    // {'date': '2020-10-07', 'value': 11047.0},
    // {'date': '2020-10-11', 'value': 15671.0},
    // {'date': '2020-10-14', 'value': 11880.0},
    // {'date': '2020-10-18', 'value': 19050.0},
    // {'date': '2020-10-21', 'value': 15207.0},
    // {'date': '2020-10-25', 'value': 22378.0},
    // {'date': '2020-10-28', 'value': 17288.0},
    // {'date': '2020-11-01', 'value': 22417.0},
    // {'date': '2020-11-04', 'value': 18492.0},
    // {'date': '2020-11-08', 'value': 29178.0}]
    );
    covid.scrollbarX.series.push(temp);


    var temp = createSeries("Latinx", [{'date': '2020-04-12', 'value': 0.00021589465153148155},
    {'date': '2020-04-15', 'value': 0.0003464297014190505},
    {'date': '2020-04-19', 'value': 0.0004243446599067051},
    {'date': '2020-04-22', 'value': 0.000612051185305628},
    {'date': '2020-04-26', 'value': 0.0008015681125630045},
    {'date': '2020-04-29', 'value': 0.0009379742787578951},
    {'date': '2020-05-03', 'value': 0.0011870483512653356},
    {'date': '2020-05-06', 'value': 0.001555828901796697},
    {'date': '2020-05-10', 'value': 0.0018540037798483661},
    {'date': '2020-05-13', 'value': 0.0023820150957059635},
    {'date': '2020-05-17', 'value': 0.0026242028732938656},
    {'date': '2020-05-20', 'value': 0.002876373240568568},
    {'date': '2020-05-24', 'value': 0.003162332135986559},
    {'date': '2020-05-27', 'value': 0.0033342526339655075},
    {'date': '2020-05-31', 'value': 0.0036175551453481976},
    {'date': '2020-06-03', 'value': 0.0037519478739621915},
    {'date': '2020-06-07', 'value': 0.003992900517571896},
    {'date': '2020-06-10', 'value': 0.004191892445209964},
    {'date': '2020-06-14', 'value': 0.004923954662123179},
    {'date': '2020-06-17', 'value': 0.005452152094059682},
    {'date': '2020-06-21', 'value': 0.005428769146691617},
    {'date': '2020-06-24', 'value': 0.005678130853139186},
    {'date': '2020-06-28', 'value': 0.006077468279898279},
    {'date': '2020-07-01', 'value': 0.006364137800344822},
    {'date': '2020-07-05', 'value': 0.006800766121459353},
    {'date': '2020-07-08', 'value': 0.007137196313548066},
    {'date': '2020-07-12', 'value': 0.007679132496036574},
    {'date': '2020-07-15', 'value': 0.00808960304824298},
    {'date': '2020-07-19', 'value': 0.008703836867564874},
    {'date': '2020-07-22', 'value': 0.009104341749728016},
    {'date': '2020-07-26', 'value': 0.009783140928786913},
    {'date': '2020-07-29', 'value': 0.010203018802799863},
    {'date': '2020-08-02', 'value': 0.010978226110732299},
    {'date': '2020-08-05', 'value': 0.011389847198699218},
    {'date': '2020-08-09', 'value': 0.01203433334066518},
    {'date': '2020-08-12', 'value': 0.012464870590106408},
    {'date': '2020-08-16', 'value': 0.013033167577225483},
    {'date': '2020-08-19', 'value': 0.01340885134231992},
    {'date': '2020-08-23', 'value': 0.014058701011287094},
    {'date': '2020-08-26', 'value': 0.01434513365672412},
    {'date': '2020-08-30', 'value': 0.014803655996575463},
    {'date': '2020-09-02', 'value': 0.015039312791758103},
    {'date': '2020-09-06', 'value': 0.01546908865724017},
    {'date': '2020-09-09', 'value': 0.015665914870505507},
    {'date': '2020-09-13', 'value': 0.016282348243487205},
    {'date': '2020-09-16', 'value': 0.016494943564528984},
    {'date': '2020-09-20', 'value': 0.016898054071796814},
    {'date': '2020-09-23', 'value': 0.01710334010683063},
    {'date': '2020-09-27', 'value': 0.017429838468163154},
    {'date': '2020-09-30', 'value': 0.017665935174077753},
    {'date': '2020-10-04', 'value': 0.01800223000901817},
    {'date': '2020-10-07', 'value': 0.018205028856452053},
    {'date': '2020-10-11', 'value': 0.01861776664089241},
    {'date': '2020-10-14', 'value': 0.018826707318930203},
    {'date': '2020-10-18', 'value': 0.019244182603560908},
    {'date': '2020-10-21', 'value': 0.019546265919269612},
    {'date': '2020-10-25', 'value': 0.020040860939141734},
    {'date': '2020-10-28', 'value': 0.020440824392711693},
    {'date': '2020-11-01', 'value': 0.02106265513198168},
    {'date': '2020-11-04', 'value': 0.02152158354327791},
    {'date': '2020-11-08', 'value': 0.02220584776719924}]
    // [{'date': '2020-04-15', 'value': 7715.0},
    // {'date': '2020-04-19', 'value': 4605.0},
    // {'date': '2020-04-22', 'value': 11094.0},
    // {'date': '2020-04-26', 'value': 11201.0},
    // {'date': '2020-04-29', 'value': 8062.0},
    // {'date': '2020-05-03', 'value': 14721.0},
    // {'date': '2020-05-06', 'value': 21796.0},
    // {'date': '2020-05-10', 'value': 17623.0},
    // {'date': '2020-05-13', 'value': 31207.0},
    // {'date': '2020-05-17', 'value': 14314.0},
    // {'date': '2020-05-20', 'value': 14904.0},
    // {'date': '2020-05-24', 'value': 16901.0},
    // {'date': '2020-05-27', 'value': 10161.0},
    // {'date': '2020-05-31', 'value': 16744.0},
    // {'date': '2020-06-03', 'value': 7943.0},
    // {'date': '2020-06-07', 'value': 14241.0},
    // {'date': '2020-06-10', 'value': 11761.0},
    // {'date': '2020-06-14', 'value': 43267.0},
    // {'date': '2020-06-17', 'value': 31218.0},
    // {'date': '2020-06-24', 'value': 14738.0},
    // {'date': '2020-06-28', 'value': 23602.0},
    // {'date': '2020-07-01', 'value': 16943.0},
    // {'date': '2020-07-05', 'value': 25806.0},
    // {'date': '2020-07-08', 'value': 19884.0},
    // {'date': '2020-07-12', 'value': 32030.0},
    // {'date': '2020-07-15', 'value': 24260.0},
    // {'date': '2020-07-19', 'value': 36303.0},
    // {'date': '2020-07-22', 'value': 23671.0},
    // {'date': '2020-07-26', 'value': 40119.0},
    // {'date': '2020-07-29', 'value': 24816.0},
    // {'date': '2020-08-02', 'value': 45817.0},
    // {'date': '2020-08-05', 'value': 24328.0},
    // {'date': '2020-08-09', 'value': 38091.0},
    // {'date': '2020-08-12', 'value': 25446.0},
    // {'date': '2020-08-16', 'value': 33588.0},
    // {'date': '2020-08-19', 'value': 22204.0},
    // {'date': '2020-08-23', 'value': 38408.0},
    // {'date': '2020-08-26', 'value': 16929.0},
    // {'date': '2020-08-30', 'value': 27100.0},
    // {'date': '2020-09-02', 'value': 13928.0},
    // {'date': '2020-09-06', 'value': 25401.0},
    // {'date': '2020-09-09', 'value': 11633.0},
    // {'date': '2020-09-13', 'value': 36433.0},
    // {'date': '2020-09-16', 'value': 12565.0},
    // {'date': '2020-09-20', 'value': 23825.0},
    // {'date': '2020-09-23', 'value': 12133.0},
    // {'date': '2020-09-27', 'value': 19297.0},
    // {'date': '2020-09-30', 'value': 13954.0},
    // {'date': '2020-10-04', 'value': 19876.0},
    // {'date': '2020-10-07', 'value': 11986.0},
    // {'date': '2020-10-11', 'value': 24394.0},
    // {'date': '2020-10-14', 'value': 12349.0},
    // {'date': '2020-10-18', 'value': 24674.0},
    // {'date': '2020-10-21', 'value': 17854.0},
    // {'date': '2020-10-25', 'value': 29232.0},
    // {'date': '2020-10-28', 'value': 23639.0},
    // {'date': '2020-11-01', 'value': 36752.0},
    // {'date': '2020-11-04', 'value': 27124.0},
    // {'date': '2020-11-08', 'value': 40442.0}]
    );
    covid.scrollbarX.series.push(temp);

    var temp = createSeries("Asian", [{'date': '2020-04-12', 'value': 0.00023818250477586743},
    {'date': '2020-04-15', 'value': 0.00030598871562486117},
    {'date': '2020-04-19', 'value': 0.00043216046914567506},
    {'date': '2020-04-22', 'value': 0.0005361744191212404},
    {'date': '2020-04-26', 'value': 0.0006377449020391843},
    {'date': '2020-04-29', 'value': 0.0006975543116086899},
    {'date': '2020-05-03', 'value': 0.0008312230663290239},
    {'date': '2020-05-06', 'value': 0.0009576724865609312},
    {'date': '2020-05-10', 'value': 0.0010771247056732863},
    {'date': '2020-05-13', 'value': 0.0013391310142609623},
    {'date': '2020-05-17', 'value': 0.0014824625705273447},
    {'date': '2020-05-20', 'value': 0.0015983606557377049},
    {'date': '2020-05-24', 'value': 0.001727697809764983},
    {'date': '2020-05-27', 'value': 0.0017914500866320138},
    {'date': '2020-05-31', 'value': 0.0019033497712026301},
    {'date': '2020-06-03', 'value': 0.0019804300502021415},
    {'date': '2020-06-07', 'value': 0.002106657337065174},
    {'date': '2020-06-10', 'value': 0.002170076413878893},
    {'date': '2020-06-14', 'value': 0.0025151606024256964},
    {'date': '2020-06-17', 'value': 0.002665489359811631},
    {'date': '2020-06-21', 'value': 0.002571638011462082},
    {'date': '2020-06-24', 'value': 0.0026331134212981473},
    {'date': '2020-06-28', 'value': 0.002747845306321916},
    {'date': '2020-07-01', 'value': 0.0028531365231685103},
    {'date': '2020-07-05', 'value': 0.002956261939668577},
    {'date': '2020-07-08', 'value': 0.00305788795592874},
    {'date': '2020-07-12', 'value': 0.0031838931094228975},
    {'date': '2020-07-15', 'value': 0.0032969034608378873},
    {'date': '2020-07-19', 'value': 0.0034417899506863922},
    {'date': '2020-07-22', 'value': 0.003804922475454263},
    {'date': '2020-07-26', 'value': 0.003978686303256475},
    {'date': '2020-07-29', 'value': 0.004130958727620063},
    {'date': '2020-08-02', 'value': 0.004306444089031055},
    {'date': '2020-08-05', 'value': 0.004414845173041895},
    {'date': '2020-08-09', 'value': 0.004603269803189835},
    {'date': '2020-08-12', 'value': 0.004765316095783909},
    {'date': '2020-08-16', 'value': 0.004941134657248212},
    {'date': '2020-08-19', 'value': 0.005097794215647074},
    {'date': '2020-08-23', 'value': 0.0052774445777244655},
    {'date': '2020-08-26', 'value': 0.005430938735616864},
    {'date': '2020-08-30', 'value': 0.005624972233328891},
    {'date': '2020-09-02', 'value': 0.005755808787596073},
    {'date': '2020-09-06', 'value': 0.005961226620462926},
    {'date': '2020-09-09', 'value': 0.006066573370651739},
    {'date': '2020-09-13', 'value': 0.006212126260606869},
    {'date': '2020-09-16', 'value': 0.006344129015060642},
    {'date': '2020-09-20', 'value': 0.0065392176462748235},
    {'date': '2020-09-23', 'value': 0.006659280732151584},
    {'date': '2020-09-27', 'value': 0.0068522035630192366},
    {'date': '2020-09-30', 'value': 0.007042960593540362},
    {'date': '2020-10-04', 'value': 0.007234272957483673},
    {'date': '2020-10-07', 'value': 0.0073616664445332975},
    {'date': '2020-10-11', 'value': 0.007554478208716514},
    {'date': '2020-10-14', 'value': 0.007701030698831579},
    {'date': '2020-10-18', 'value': 0.007915444933137856},
    {'date': '2020-10-21', 'value': 0.008114254298280688},
    {'date': '2020-10-25', 'value': 0.008368041672220002},
    {'date': '2020-10-28', 'value': 0.008575347638722289},
    {'date': '2020-11-01', 'value': 0.008803867341952107},
    {'date': '2020-11-04', 'value': 0.009065262783775379},
    {'date': '2020-11-08', 'value': 0.009438946643564797}]
    // [{'date': '2020-04-15', 'value': 1221.0},
    // {'date': '2020-04-19', 'value': 2272.0},
    // {'date': '2020-04-22', 'value': 1873.0},
    // {'date': '2020-04-26', 'value': 1829.0},
    // {'date': '2020-04-29', 'value': 1077.0},
    // {'date': '2020-05-03', 'value': 2407.0},
    // {'date': '2020-05-06', 'value': 2277.0},
    // {'date': '2020-05-10', 'value': 2151.0},
    // {'date': '2020-05-13', 'value': 4718.0},
    // {'date': '2020-05-17', 'value': 2581.0},
    // {'date': '2020-05-20', 'value': 2087.0},
    // {'date': '2020-05-24', 'value': 2329.0},
    // {'date': '2020-05-27', 'value': 1148.0},
    // {'date': '2020-05-31', 'value': 2015.0},
    // {'date': '2020-06-03', 'value': 1388.0},
    // {'date': '2020-06-07', 'value': 2273.0},
    // {'date': '2020-06-10', 'value': 1142.0},
    // {'date': '2020-06-14', 'value': 6214.0},
    // {'date': '2020-06-17', 'value': 2707.0},
    // {'date': '2020-06-24', 'value': 1107.0},
    // {'date': '2020-06-28', 'value': 2066.0},
    // {'date': '2020-07-01', 'value': 1896.0},
    // {'date': '2020-07-05', 'value': 1857.0},
    // {'date': '2020-07-08', 'value': 1830.0},
    // {'date': '2020-07-12', 'value': 2269.0},
    // {'date': '2020-07-15', 'value': 2035.0},
    // {'date': '2020-07-19', 'value': 2609.0},
    // {'date': '2020-07-22', 'value': 6539.0},
    // {'date': '2020-07-26', 'value': 3129.0},
    // {'date': '2020-07-29', 'value': 2742.0},
    // {'date': '2020-08-02', 'value': 3160.0},
    // {'date': '2020-08-05', 'value': 1952.0},
    // {'date': '2020-08-09', 'value': 3393.0},
    // {'date': '2020-08-12', 'value': 2918.0},
    // {'date': '2020-08-16', 'value': 3166.0},
    // {'date': '2020-08-19', 'value': 2821.0},
    // {'date': '2020-08-23', 'value': 3235.0},
    // {'date': '2020-08-26', 'value': 2764.0},
    // {'date': '2020-08-30', 'value': 3494.0},
    // {'date': '2020-09-02', 'value': 2356.0},
    // {'date': '2020-09-06', 'value': 3699.0},
    // {'date': '2020-09-09', 'value': 1897.0},
    // {'date': '2020-09-13', 'value': 2621.0},
    // {'date': '2020-09-16', 'value': 2377.0},
    // {'date': '2020-09-20', 'value': 3513.0},
    // {'date': '2020-09-23', 'value': 2162.0},
    // {'date': '2020-09-27', 'value': 3474.0},
    // {'date': '2020-09-30', 'value': 3435.0},
    // {'date': '2020-10-04', 'value': 3445.0},
    // {'date': '2020-10-07', 'value': 2294.0},
    // {'date': '2020-10-11', 'value': 3472.0},
    // {'date': '2020-10-14', 'value': 2639.0},
    // {'date': '2020-10-18', 'value': 3861.0},
    // {'date': '2020-10-21', 'value': 3580.0},
    // {'date': '2020-10-25', 'value': 4570.0},
    // {'date': '2020-10-28', 'value': 3733.0},
    // {'date': '2020-11-01', 'value': 4115.0},
    // {'date': '2020-11-04', 'value': 4707.0},
    // {'date': '2020-11-08', 'value': 6729.0}]
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