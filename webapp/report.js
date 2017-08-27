var report = (function (document, window) {
    
    'use strict';

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart', 'table']});


    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(doYourJob);

    function doYourJob() {
        performCalculation();
        drawChart();
    };

    var stats = {};
    var calls = [
{"date":1501574231645,"duration":163,"reason":"rdv tandem"},{"date":1501575215379,"duration":317,"reason":"rdv tandem"},{"date":1501576031472,"duration":148,"reason":"infos saut"},{"date":1501576344278,"duration":123,"reason":"infos saut"},{"date":1501576440991,"duration":82,"reason":"infos vidéo"},{"date":1501577671046,"duration":93,"reason":"infos vidéo"},{"date":1501580764018,"duration":300,"reason":"rdv tandem"},{"date":1501580835169,"duration":64,"reason":"report météo"},{"date":1501581053340,"duration":169,"reason":"infos saut"},{"date":1501581388796,"duration":119,"reason":"infos brevet b"},{"date":1501589730167,"duration":207,"reason":"infos saut d'initiation"},{"date":1501590791825,"duration":453,"reason":"rdv tandem"},{"date":1501591333418,"duration":222,"reason":"infos PAC"},{"date":1501592354363,"duration":309,"reason":"rdv tandem"},{"date":1501592698115,"duration":125,"reason":"infos saut d'initiation"},{"date":1501594231940,"duration":519,"reason":"infos brevet b"},{"date":1501594415796,"duration":120,"reason":"annulation saut"},{"date":1501595000718,"duration":260,"reason":"infos tandem"},{"date":1501595298996,"duration":75,"reason":"infos tandem"},{"date":1501595446133,"duration":147,"reason":"infos tandem"},{"date":1501596522468,"duration":114,"reason":"infos vidéo"},{"date":1501597948726,"duration":365,"reason":"rdv tandem"},{"date":1501598521046,"duration":298,"reason":"rdv tandem"},{"date":1501598839126,"duration":252,"reason":"rdv tandem"},
{"date":1501749624560,"duration":369,"reason":"rdv tandem"},{"date":1501749741344,"duration":116,"reason":"infos saut"},{"date":1501751511808,"duration":165,"reason":"infos tandem"},{"date":1501752355076,"duration":270,"reason":"infos tandem"},{"date":1501752860948,"duration":304,"reason":"rdv tandem"},{"date":1501753066381,"duration":80,"reason":"infos tandem"},{"date":1501753154164,"duration":82,"reason":"infos saut"},{"date":1501764093992,"duration":547,"reason":"infos tandem groupe"},{"date":1501764249114,"duration":138,"reason":"infos bon kdo"},{"date":1501764831069,"duration":65,"reason":"infos saut"},{"date":1501765213740,"duration":232,"reason":"report météo"},{"date":1501765644971,"duration":90,"reason":"annulation saut"},{"date":1501766894581,"duration":198,"reason":"infos tandem"},{"date":1501768704263,"duration":216,"reason":"rdv tandem"},{"date":1501768872281,"duration":44,"reason":"infos météo"},{"date":1501770387983,"duration":99,"reason":"infos tandem"},{"date":1501772771888,"duration":86,"reason":"rdv tandem"},{"date":1501835930460,"duration":2,"reason":"rdv tandem"},
{"date":1501665087992,"duration":189,"reason":"infos tandem"},{"date":1501667029976,"duration":200,"reason":"infos tandem"},{"date":1501667685350,"duration":352,"reason":"infos PAC"},{"date":1501667865553,"duration":52,"reason":"infos tandem"},{"date":1501676590951,"duration":339,"reason":"rdv tandem"},{"date":1501676990581,"duration":270,"reason":"rdv tandem"},{"date":1501677144213,"duration":115,"reason":"rdv tandem"},{"date":1501678486802,"duration":88,"reason":"report météo"},{"date":1501678640114,"duration":48,"reason":"équipe vr4"},{"date":1501680190544,"duration":231,"reason":"rdv tandem"},{"date":1501680534327,"duration":92,"reason":"rdv tandem"},{"date":1501680656119,"duration":116,"reason":"infos tandem"},{"date":1501684362600,"duration":80,"reason":"infos bon kdo"},{"date":1501685139685,"duration":60,"reason":"report météo"},{"date":1501686708280,"duration":551,"reason":"infos PAC"},{"date":1501687086058,"duration":263,"reason":"infos PAC"},
{"date":1501920311464,"duration":344,"reason":"rdv tandem"},{"date":1501922635275,"duration":366,"reason":"rdv tandem"},{"date":1501922796889,"duration":157,"reason":"infos saut"},{"date":1501922930359,"duration":44,"reason":"infos météo"},{"date":1501923588933,"duration":315,"reason":"infos PAC"},{"date":1501923859407,"duration":266,"reason":"infos saut"},{"date":1501925845711,"duration":147,"reason":"infos saut"},{"date":1501925846831,"duration":1,"reason":"infos saut"},{"date":1501927949063,"duration":40,"reason":"infos saut"},{"date":1501934252664,"duration":76,"reason":"rdv tandem"},{"date":1501934808777,"duration":389,"reason":"rdv tandem"},{"date":1501935365168,"duration":41,"reason":"rdv tandem"},{"date":1501935569454,"duration":139,"reason":"rdv tandem"},{"date":1501937920860,"duration":673,"reason":"rdv tandem"},{"date":1501938964420,"duration":186,"reason":"rdv tandem"},{"date":1501944062773,"duration":128,"reason":"infos saut"},{"date":1501945581945,"duration":115,"reason":"infos tandem"},{"date":1501946260720,"duration":249,"reason":"infos tandem"},
{"date":1502178619322,"duration":266,"reason":"rdv tandem"},{"date":1502178909047,"duration":137,"reason":"infos PAC"},{"date":1502179442649,"duration":174,"reason":"infos météo"},{"date":1502179522535,"duration":73,"reason":"infos saut"},{"date":1502179993082,"duration":168,"reason":"infos saut"},{"date":1502180928712,"duration":350,"reason":"rdv tandem"},{"date":1502181323643,"duration":218,"reason":"rdv tandem"},{"date":1502182004194,"duration":130,"reason":"annulation saut"},{"date":1502182308719,"duration":112,"reason":"annulation saut"},{"date":1502182995262,"duration":495,"reason":"infos tandem"},{"date":1502184122385,"duration":99,"reason":"annulation saut"},{"date":1502184667975,"duration":161,"reason":"annulation saut"},{"date":1502194606372,"duration":128,"reason":"rdv tandem"},{"date":1502196181510,"duration":204,"reason":"rdv tandem"},{"date":1502196275708,"duration":35,"reason":"infos vidéo"},{"date":1502197448865,"duration":153,"reason":"infos vidéo"},{"date":1502198921610,"duration":36,"reason":"infos tarif"},{"date":1502199317710,"duration":201,"reason":"rdv tandem"},{"date":1502199906720,"duration":146,"reason":"rdv tandem"},{"date":1502200077390,"duration":83,"reason":"annulation tandem"},{"date":1502202749450,"duration":133,"reason":"infos tandem"},{"date":1502203233109,"duration":134,"reason":"infos saut"},{"date":1502206607170,"duration":321,"reason":"rdv tandem"},{"date":1502206993998,"duration":343,"reason":"rdv tandem"},
{"date":1502265823147,"duration":82,"reason":"infos saut"},{"date":1502266743254,"duration":389,"reason":"rdv tandem"},{"date":1502268423125,"duration":466,"reason":"rdv tandem"},{"date":1502268867574,"duration":98,"reason":"infos saut"},{"date":1502280877956,"duration":50,"reason":"infos saut"},{"date":1502281420489,"duration":101,"reason":"infos saut"},{"date":1502281732433,"duration":140,"reason":"infos saut"},{"date":1502281912442,"duration":134,"reason":"rdv tandem"},{"date":1502282953599,"duration":397,"reason":"rdv tandem"},{"date":1502284040373,"duration":206,"reason":"infos tandem"},{"date":1502285066706,"duration":344,"reason":"rdv tandem"},{"date":1502286912006,"duration":111,"reason":"infos saut"},{"date":1502287311022,"duration":337,"reason":"rdv tandem"},{"date":1502287942609,"duration":519,"reason":"rdv tandem"},{"date":1502288585296,"duration":328,"reason":"rdv tandem"},{"date":1502290225620,"duration":91,"reason":"infos PAC"},{"date":1502292964744,"duration":67,"reason":"infos saut"},{"date":1502293504868,"duration":209,"reason":"infos météo"},{"date":1502293702559,"duration":182,"reason":"rdv tandem"},
{"date":1502352856284,"duration":97,"reason":"appel commercial"},{"date":1502353290793,"duration":171,"reason":"infos saut"},{"date":1502353970920,"duration":266,"reason":"infos saut"},{"date":1502355556163,"duration":308,"reason":"rdv tandem"},{"date":1502356393814,"duration":60,"reason":"infos météo"},{"date":1502357936118,"duration":388,"reason":"infos saut"},{"date":1502366806100,"duration":124,"reason":"infos saut"},{"date":1502366986102,"duration":171,"reason":"infos saut"},{"date":1502367168488,"duration":120,"reason":"infos PAC"},{"date":1502368900205,"duration":161,"reason":"infos saut handi"},{"date":1502369304370,"duration":105,"reason":"infos saut"},{"date":1502371135393,"duration":368,"reason":"rdv tandem"},{"date":1502371556694,"duration":70,"reason":"infos saut"},{"date":1502371689055,"duration":129,"reason":"infos saut d'initiation"},{"date":1502372998162,"duration":159,"reason":"infos saut"},{"date":1502377094596,"duration":121,"reason":"infos saut"},
{"date":1502441167921,"duration":59,"reason":"infos saut"},{"date":1502442049582,"duration":349,"reason":"rdv tandem"},{"date":1502443983255,"duration":132,"reason":"rdv tandem"},{"date":1502444050856,"duration":68,"reason":"infos localisation"},{"date":1502453356137,"duration":62,"reason":"infos saut"},{"date":1502453512944,"duration":125,"reason":"infos vidéo"},{"date":1502453716845,"duration":177,"reason":"infos saut"},{"date":1502453892197,"duration":171,"reason":"rdv tandem"},{"date":1502454367712,"duration":1,"reason":"rdv tandem"},{"date":1502455536310,"duration":2,"reason":"rdv tandem"},{"date":1502455590694,"duration":54,"reason":"infos saut"},{"date":1502456057753,"duration":70,"reason":"infos saut"},{"date":1502456771493,"duration":89,"reason":"infos saut d'initiation"},{"date":1502457455335,"duration":102,"reason":"infos remboursement"},{"date":1502459354102,"duration":158,"reason":"rdv tandem"},{"date":1502459539395,"duration":93,"reason":"infos saut"},{"date":1502460118232,"duration":114,"reason":"infos saut"},{"date":1502463481997,"duration":117,"reason":"infos saut"},{"date":1502464159567,"duration":206,"reason":"report météo"},{"date":1502464584476,"duration":214,"reason":"infos PAC"},{"date":1502467329079,"duration":41,"reason":"infos certificat médical"},
{"date":1502525948532,"duration":79,"reason":"infos météo"},{"date":1502526890381,"duration":214,"reason":"rdv tandem"},{"date":1502527159815,"duration":143,"reason":"infos saut"},{"date":1502527277357,"duration":97,"reason":"infos saut"},{"date":1502527451154,"duration":139,"reason":"rdv tandem"},{"date":1502528927981,"duration":60,"reason":"infos météo"},{"date":1502529129848,"duration":201,"reason":"infos saut"},{"date":1502529238445,"duration":108,"reason":"infos météo"},{"date":1502529359761,"duration":100,"reason":"infos saut"},{"date":1502529825143,"duration":248,"reason":"infos saut"},{"date":1502532169176,"duration":249,"reason":"report météo"},{"date":1502540338678,"duration":170,"reason":"infos météo"},{"date":1502540588258,"duration":241,"reason":"infos PAC"},{"date":1502542167753,"duration":91,"reason":"infos saut"},{"date":1502544583948,"duration":69,"reason":"infos météo"},{"date":1502548540661,"duration":132,"reason":"infos vidéo"},{"date":1502552411431,"duration":90,"reason":"infos saut"},
{"date":1502614044461,"duration":237,"reason":"infos saut"},{"date":1502614429491,"duration":379,"reason":"infos saut"},{"date":1502616044708,"duration":82,"reason":"infos saut"},{"date":1502616270475,"duration":156,"reason":"infos saut"},{"date":1502616624905,"duration":99,"reason":"rdv tandem"},{"date":1502628461752,"duration":190,"reason":"rdv tandem"},{"date":1502632098222,"duration":37,"reason":"infos saut"},
{"date":1502870518996,"duration":84,"reason":"infos remboursement"},{"date":1502871153715,"duration":390,"reason":"rdv tandem"},{"date":1502874512727,"duration":124,"reason":"rdv tandem"},{"date":1502876448325,"duration":472,"reason":"rdv tandem"},{"date":1502885369612,"duration":304,"reason":"infos saut"},{"date":1502886009871,"duration":298,"reason":"infos certificat médical"},{"date":1502887255561,"duration":174,"reason":"rdv tandem"},{"date":1502888198644,"duration":287,"reason":"rdv tandem"},{"date":1502889344222,"duration":143,"reason":"infos saut"},{"date":1502890723381,"duration":206,"reason":"infos tandem"},{"date":1502891607250,"duration":126,"reason":"rdv tandem"},{"date":1502891934816,"duration":205,"reason":"rdv tandem"},{"date":1502892167982,"duration":182,"reason":"infos PAC"},{"date":1502897230427,"duration":303,"reason":"infos tandem"},
{"date":1502785135269,"duration":66,"reason":"report météo"},{"date":1502785314255,"duration":90,"reason":"report météo"},{"date":1502786617057,"duration":261,"reason":"rdv tandem"},{"date":1502787353444,"duration":107,"reason":"report météo"},{"date":1502788398060,"duration":337,"reason":"rdv tandem"},{"date":1502788774090,"duration":348,"reason":"infos PAC"},{"date":1502788932774,"duration":121,"reason":"infos météo"},{"date":1502789419413,"duration":111,"reason":"infos saut"},{"date":1502800224220,"duration":176,"reason":"report météo"},{"date":1502801612349,"duration":327,"reason":"report météo"},{"date":1502804837449,"duration":116,"reason":"report météo"},{"date":1502805015833,"duration":178,"reason":"infos saut"},{"date":1502805773118,"duration":281,"reason":"report météo"},{"date":1502807691502,"duration":59,"reason":"infos météo"},{"date":1502810520676,"duration":174,"reason":"rdv tandem"},
{"date":1503130537042,"duration":110,"reason":"infos saut"},{"date":1503130647418,"duration":105,"reason":"infos tandem"},{"date":1503131256232,"duration":219,"reason":"rdv tandem"},{"date":1503132467907,"duration":83,"reason":"infos saut"},{"date":1503132609267,"duration":66,"reason":"infos météo"},{"date":1503133388963,"duration":135,"reason":"infos météo"},{"date":1503133623951,"duration":227,"reason":"infos saut"},{"date":1503136207173,"duration":106,"reason":"infos PAC"},{"date":1503136273668,"duration":54,"reason":"infos météo"},{"date":1503136674923,"duration":218,"reason":"infos météo"},{"date":1503145746147,"duration":154,"reason":"rdv tandem"},{"date":1503147801098,"duration":2,"reason":"rdv tandem"},{"date":1503147802692,"duration":1,"reason":"rdv tandem"},{"date":1503148008825,"duration":206,"reason":"infos saut"},{"date":1503148316154,"duration":68,"reason":"infos saut"},{"date":1503149534236,"duration":479,"reason":"infos saut"},{"date":1503153618259,"duration":325,"reason":"infos tandem"},
{"date":1500556009612,"duration":179,"reason":"changement rdv"},{"date":1500556095067,"duration":69,"reason":"infos tandem"},{"date":1500557569844,"duration":132,"reason":"rdv tandem"},{"date":1500557897558,"duration":105,"reason":"changement rdv"},{"date":1500563949620,"duration":37,"reason":"infos standard"},{"date":1500564333160,"duration":263,"reason":"infos PAC"},{"date":1500565446724,"duration":326,"reason":"rdv tandem"},{"date":1500566394767,"duration":364,"reason":"rdv tandem"},
{"date":1500539788452,"duration":44,"reason":"rdv tandem"},{"date":1500540608679,"duration":132,"reason":"rdv tandem"},{"date":1500541115588,"duration":386,"reason":"rdv tandem"},{"date":1500542385440,"duration":343,"reason":"rdv tandem"},{"date":1500542775160,"duration":69,"reason":"rdv tandem"},
{"date":1503218969681,"duration":413,"reason":"infos tandem"},{"date":1503232679687,"duration":94,"reason":"infos saut"},{"date":1503232681279,"duration":2,"reason":"infos saut"},{"date":1503232793999,"duration":113,"reason":"infos saut"},{"date":1503234570576,"duration":88,"reason":"infos saut"},{"date":1503239446373,"duration":247,"reason":"rdv tandem"},{"date":1503240887614,"duration":68,"reason":"infos saut"},
{"date":1500713205401,"duration":178,"reason":"infos météo"},{"date":1500714724825,"duration":66,"reason":"changement rdv"},{"date":1500714882358,"duration":132,"reason":"changement rdv"},{"date":1500715180599,"duration":67,"reason":"changement rdv"},{"date":1500715314133,"duration":128,"reason":"changement rdv"},{"date":1500716156347,"duration":128,"reason":"changement rdv"},{"date":1500716322457,"duration":141,"reason":"infos tandem"},{"date":1500716395481,"duration":59,"reason":"changement rdv"},{"date":1500716485992,"duration":61,"reason":"changement rdv"},{"date":1500716851509,"duration":52,"reason":"infos météo"},{"date":1500717430427,"duration":149,"reason":"infos tandem"},{"date":1500718566611,"duration":188,"reason":"rdv tandem"},{"date":1500720253108,"duration":74,"reason":"infos météo"},{"date":1500724802345,"duration":22,"reason":"infos localisation"},{"date":1500725679904,"duration":444,"reason":"changement rdv"},{"date":1500726056601,"duration":192,"reason":"changement rdv"},{"date":1500726280753,"duration":106,"reason":"infos météo"},{"date":1500727477774,"duration":112,"reason":"changement rdv"},{"date":1500728869762,"duration":144,"reason":"infos météo"},{"date":1500729555989,"duration":290,"reason":"rdv tandem"},{"date":1500730125719,"duration":236,"reason":"annulation tandem"},{"date":1500730216606,"duration":84,"reason":"annulation tandem"},{"date":1500732889223,"duration":389,"reason":"rdv tandem"},{"date":1500734401215,"duration":377,"reason":"rdv tandem"},{"date":1500734803894,"duration":134,"reason":"infos tandem"},{"date":1500735595977,"duration":213,"reason":"infos tandem"},{"date":1500736205020,"duration":131,"reason":"infos PAC"},{"date":1500736520636,"duration":83,"reason":"infos tandem"},{"date":1500738238055,"duration":422,"reason":"rdv tandem"},{"date":1500738613120,"duration":371,"reason":"infos tandem"},{"date":1500739405822,"duration":318,"reason":"rdv tandem"},
{"date":1500798656451,"duration":151,"reason":"infos météo"},{"date":1500799911078,"duration":37,"reason":"infos saut"},{"date":1500800100647,"duration":8,"reason":"infos saut"},{"date":1500800211468,"duration":111,"reason":"infos tandem"},{"date":1500801371193,"duration":212,"reason":"annulation tandem"},{"date":1500801543424,"duration":86,"reason":"infos tandem"},{"date":1500802484270,"duration":179,"reason":"report météo"},{"date":1500802882692,"duration":398,"reason":"report météo"},{"date":1500802952626,"duration":69,"reason":"report météo"},{"date":1500803523793,"duration":93,"reason":"report météo"},{"date":1500803987751,"duration":66,"reason":"infos tandem"},{"date":1500804901304,"duration":75,"reason":"infos météo"},{"date":1500805185790,"duration":84,"reason":"infos météo"},{"date":1500809413871,"duration":69,"reason":"infos météo"},{"date":1500809490886,"duration":76,"reason":"infos météo"},{"date":1500809603134,"duration":49,"reason":"infos météo"},{"date":1500809664957,"duration":61,"reason":"infos météo"},{"date":1500810420187,"duration":29,"reason":"infos météo"},{"date":1500810563181,"duration":34,"reason":"infos météo"},{"date":1500811227249,"duration":70,"reason":"infos météo"},{"date":1500811709478,"duration":44,"reason":"infos vidéo"},{"date":1500812305260,"duration":90,"reason":"rdv tandem"},{"date":1500812958378,"duration":71,"reason":"infos tandem"},{"date":1500816950453,"duration":52,"reason":"report météo"},{"date":1500817425866,"duration":310,"reason":"report météo"},{"date":1500817692345,"duration":117,"reason":"rdv tandem"},{"date":1500817768073,"duration":34,"reason":"infos saut"},{"date":1500818228048,"duration":69,"reason":"infos tandem"},{"date":1500821538230,"duration":62,"reason":"infos tandem"},{"date":1500822198168,"duration":220,"reason":"infos tandem"},{"date":1500824063825,"duration":204,"reason":"rdv tandem"},
{"date":1503474766196,"duration":75,"reason":"infos saut"},{"date":1503475010035,"duration":210,"reason":"infos saut"},{"date":1503475524552,"duration":318,"reason":"rdv tandem"},{"date":1503476225587,"duration":140,"reason":"infos tandem"},{"date":1503476488713,"duration":93,"reason":"rdv tandem"},{"date":1503477184692,"duration":226,"reason":"rdv tandem"},{"date":1503477908088,"duration":235,"reason":"infos PAC"},{"date":1503479091248,"duration":254,"reason":"infos PAC"},{"date":1503479315424,"duration":224,"reason":"infos tandem"},{"date":1503479442181,"duration":127,"reason":"infos tandem"},{"date":1503482559254,"duration":120,"reason":"infos tandem"},{"date":1503490816990,"duration":374,"reason":"rdv tandem"},{"date":1503490818588,"duration":2,"reason":"rdv tandem"},{"date":1503491001524,"duration":182,"reason":"infos PAC"},{"date":1503494341799,"duration":199,"reason":"infos saut"},{"date":1503494621253,"duration":277,"reason":"rdv tandem"},{"date":1503494941947,"duration":321,"reason":"rdv tandem"},{"date":1503495307479,"duration":175,"reason":"infos saut"},{"date":1503495604446,"duration":122,"reason":"infos saut"},{"date":1503495890909,"duration":117,"reason":"infos PAC"},{"date":1503497324673,"duration":75,"reason":"rdv tandem"},{"date":1503497858128,"duration":121,"reason":"rdv tandem"},{"date":1503498497694,"duration":73,"reason":"infos météo"},{"date":1503499041853,"duration":83,"reason":"infos météo"},{"date":1503499329495,"duration":89,"reason":"infos météo"},{"date":1503499617996,"duration":91,"reason":"infos météo"},{"date":1503500267528,"duration":185,"reason":"infos tandem"},{"date":1503501211553,"duration":301,"reason":"rdv tandem"},{"date":1503502264252,"duration":129,"reason":"infos saut"},{"date":1503502446754,"duration":182,"reason":"infos saut"},{"date":1503503889833,"duration":439,"reason":"rdv tandem"},
{"date":1503561359802,"duration":306,"reason":"infos saut"},{"date":1503561716021,"duration":273,"reason":"infos expédition"},{"date":1503561889548,"duration":138,"reason":"infos saut"},{"date":1503562172928,"duration":91,"reason":"infos bon kdo"},{"date":1503562693465,"duration":295,"reason":"infos saut"},{"date":1503563176444,"duration":344,"reason":"rdv tandem"},{"date":1503564036977,"duration":75,"reason":"infos saut"},{"date":1503564250886,"duration":117,"reason":"infos saut"},{"date":1503566213188,"duration":243,"reason":"infos bon kdo"},{"date":1503566674399,"duration":43,"reason":"infos saut"},{"date":1503567094874,"duration":254,"reason":"infos saut"},{"date":1503567559445,"duration":152,"reason":"rdv tandem"},{"date":1503568263788,"duration":113,"reason":"rdv tandem"},{"date":1503568520482,"duration":84,"reason":"infos bon kdo"},{"date":1503576234272,"duration":172,"reason":"infos météo"},{"date":1503576404210,"duration":138,"reason":"infos brevet b"},{"date":1503577102460,"duration":75,"reason":"infos vidéo"},{"date":1503577577397,"duration":186,"reason":"infos tandem"},{"date":1503579141175,"duration":307,"reason":"infos tandem"},{"date":1503580120802,"duration":404,"reason":"infos saut"},{"date":1503582313340,"duration":97,"reason":"infos certificat médical"},{"date":1503582718938,"duration":214,"reason":"infos saut handi"},{"date":1503583571581,"duration":648,"reason":"infos saut d'initiation"},{"date":1503583634820,"duration":63,"reason":"report météo"},{"date":1503586731434,"duration":369,"reason":"infos saut"},
{"date":1500969651569,"duration":221,"reason":"rdv tandem"},{"date":1500969881370,"duration":100,"reason":"infos PAC"},{"date":1500970387988,"duration":303,"reason":"infos PAC"},{"date":1500970559344,"duration":133,"reason":"infos PAC"},{"date":1500970712881,"duration":26,"reason":"infos PAC"},{"date":1500971820889,"duration":281,"reason":"infos tandem"},{"date":1500973058309,"duration":195,"reason":"rdv tandem"},{"date":1500973166451,"duration":103,"reason":"infos tandem"},{"date":1500973773689,"duration":66,"reason":"infos tandem"},{"date":1500974525840,"duration":346,"reason":"rdv tandem"},{"date":1500974650672,"duration":58,"reason":"infos tandem"},{"date":1500976814337,"duration":264,"reason":"infos tandem"},{"date":1500977814473,"duration":74,"reason":"infos tandem"},{"date":1500986594905,"duration":185,"reason":"infos tandem"},{"date":1500986735000,"duration":71,"reason":"infos saut"},{"date":1500986863559,"duration":103,"reason":"infos saut"},{"date":1500987124391,"duration":202,"reason":"infos tandem"},{"date":1500989108648,"duration":36,"reason":"infos tandem"},{"date":1500989466798,"duration":331,"reason":"infos tandem"},{"date":1500990361756,"duration":431,"reason":"infos tandem"},{"date":1500990491693,"duration":71,"reason":"infos tandem"},{"date":1500991776151,"duration":98,"reason":"infos PAC"},{"date":1500992140721,"duration":285,"reason":"infos tandem"},{"date":1500993944665,"duration":207,"reason":"infos tandem"},{"date":1500994120504,"duration":139,"reason":"infos PAC"},
{"date":1501057154019,"duration":144,"reason":"report météo"},{"date":1501059190486,"duration":162,"reason":"infos tandem"},{"date":1501060216470,"duration":270,"reason":"infos tandem"},{"date":1501061126422,"duration":74,"reason":"assos questionnaire"},{"date":1501062453543,"duration":383,"reason":"infos tandem"},{"date":1501063475415,"duration":190,"reason":"rdv tandem"},{"date":1501064196853,"duration":257,"reason":"infos tandem"},{"date":1501065950476,"duration":178,"reason":"infos tandem"},{"date":1501066489044,"duration":257,"reason":"rdv tandem"},{"date":1501071153353,"duration":277,"reason":"rdv tandem"},{"date":1501072180616,"duration":310,"reason":"rdv tandem"},{"date":1501072640770,"duration":63,"reason":"infos tandem"},{"date":1501073680908,"duration":104,"reason":"report saut tandem"},{"date":1501074065373,"duration":320,"reason":"rdv tandem"},{"date":1501074278511,"duration":164,"reason":"infos tandem"},{"date":1501075087077,"duration":129,"reason":"infos vidéo"},{"date":1501076699849,"duration":205,"reason":"infos PAC"},{"date":1501076769706,"duration":70,"reason":"infos saut"},{"date":1501077250751,"duration":231,"reason":"infos tandem"},{"date":1501078256605,"duration":61,"reason":"infos sigal"},{"date":1501078305326,"duration":47,"reason":"infos saut"},{"date":1501078489271,"duration":91,"reason":"report météo"},{"date":1501079691464,"duration":100,"reason":"infos tandem"},{"date":1501079856585,"duration":140,"reason":"infos saut d'initiation"},{"date":1501080246564,"duration":248,"reason":"rdv tandem"},{"date":1501081517911,"duration":71,"reason":"infos tandem"},{"date":1501083856295,"duration":83,"reason":"infos tandem"},
{"date":1503735783075,"duration":115,"reason":"rdv tandem"},{"date":1503737364565,"duration":74,"reason":"rdv tandem"},{"date":1503737636007,"duration":69,"reason":"infos météo"},{"date":1503737714017,"duration":65,"reason":"infos bon kdo"},{"date":1503738311036,"duration":69,"reason":"rappel répondeur"},{"date":1503739388919,"duration":128,"reason":"infos tandem"},{"date":1503740243226,"duration":121,"reason":"annulation saut"},{"date":1503743194929,"duration":200,"reason":"rdv tandem"},{"date":1503745423240,"duration":185,"reason":"rdv tandem"},{"date":1503748891342,"duration":135,"reason":"infos vidéo"},{"date":1503749345300,"duration":377,"reason":"infos tandem"},{"date":1503749679002,"duration":334,"reason":"rdv tandem"},{"date":1503750617444,"duration":51,"reason":"infos tandem"},{"date":1503751061530,"duration":216,"reason":"rdv tandem"},{"date":1503754324782,"duration":44,"reason":"infos tandem"},{"date":1503754410450,"duration":52,"reason":"infos tandem"},{"date":1503757089093,"duration":465,"reason":"infos PAC"},{"date":1503759160559,"duration":275,"reason":"infos tandem"},{"date":1503759536531,"duration":305,"reason":"infos PAC"},{"date":1503759821238,"duration":285,"reason":"infos tandem"},
{"date":1501144162182,"duration":31,"reason":"infos saut"},{"date":1501145518711,"duration":170,"reason":"infos tandem"},{"date":1501146084255,"duration":385,"reason":"infos tandem"},{"date":1501146733430,"duration":85,"reason":"annulation tandem"},{"date":1501146993918,"duration":120,"reason":"infos tandem"},{"date":1501148195519,"duration":336,"reason":"rdv tandem"},{"date":1501149355391,"duration":315,"reason":"rdv tandem"},{"date":1501149439515,"duration":45,"reason":"infos bon kdo"},{"date":1501152099959,"duration":46,"reason":"rdv tandem"},{"date":1501156631408,"duration":266,"reason":"rdv tandem"},{"date":1501156827763,"duration":66,"reason":"report météo"},{"date":1501157285352,"duration":286,"reason":"report météo"},{"date":1501157904230,"duration":322,"reason":"rdv tandem"},{"date":1501161524851,"duration":72,"reason":"report météo"},{"date":1501161696948,"duration":77,"reason":"infos saut"},{"date":1501163472419,"duration":343,"reason":"infos vidéo"},{"date":1501163815440,"duration":146,"reason":"infos saut"},
{"date":1501230665831,"duration":142,"reason":"report météo"},{"date":1501230925992,"duration":166,"reason":"report météo"},{"date":1501231408214,"duration":258,"reason":"report météo"},{"date":1501231856285,"duration":269,"reason":"rdv tandem"},{"date":1501232499491,"duration":53,"reason":"infos saut"},{"date":1501232791200,"duration":108,"reason":"infos saut"},{"date":1501233503512,"duration":157,"reason":"report météo"},{"date":1501233937578,"duration":64,"reason":"report météo"},{"date":1501234041886,"duration":104,"reason":"infos tandem"},{"date":1501234575340,"duration":106,"reason":"report météo"},{"date":1501235153682,"duration":121,"reason":"report météo"},{"date":1501235635264,"duration":167,"reason":"infos tandem"},{"date":1501237086845,"duration":87,"reason":"report météo"},{"date":1501237228525,"duration":116,"reason":"report météo"},{"date":1501237586164,"duration":69,"reason":"rdv tandem"},{"date":1501244459635,"duration":731,"reason":"infos tandem"},{"date":1501244701536,"duration":71,"reason":"report météo"},{"date":1501245409210,"duration":707,"reason":"infos initiation-PAC"},{"date":1501245681395,"duration":231,"reason":"infos tandem"},{"date":1501246097969,"duration":96,"reason":"infos saut d'initiation"},{"date":1501246284810,"duration":105,"reason":"infos météo"},{"date":1501246651693,"duration":136,"reason":"report météo"},{"date":1501250523319,"duration":177,"reason":"report météo"},{"date":1501252657036,"duration":178,"reason":"infos météo"},{"date":1501253197478,"duration":76,"reason":"infos météo"},{"date":1501253738002,"duration":207,"reason":"rdv tandem"},{"date":1501253870472,"duration":132,"reason":"report météo"},{"date":1501255633665,"duration":194,"reason":"infos PAC"},{"date":1501255981550,"duration":87,"reason":"report météo"},{"date":1501256857869,"duration":348,"reason":"rdv tandem"},
{"date":1501315493321,"duration":91,"reason":"infos saut"},{"date":1501315652245,"duration":63,"reason":"infos saut"},{"date":1501316518656,"duration":57,"reason":"infos saut"},{"date":1501316664004,"duration":144,"reason":"infos bon kdo"},{"date":1501316799681,"duration":74,"reason":"infos tandem"},{"date":1501317092366,"duration":247,"reason":"infos tandem"},{"date":1501318658024,"duration":328,"reason":"rdv tandem"},{"date":1501321082864,"duration":39,"reason":"infos météo"},{"date":1501321297293,"duration":110,"reason":"infos tandem"},{"date":1501321551759,"duration":188,"reason":"infos météo"},{"date":1501328549139,"duration":218,"reason":"infos tandem"},{"date":1501329264836,"duration":27,"reason":"report météo"},{"date":1501330457950,"duration":56,"reason":"infos météo"},{"date":1501331115663,"duration":59,"reason":"report météo"},{"date":1501331165614,"duration":50,"reason":"report météo"},{"date":1501331378364,"duration":35,"reason":"report météo"},{"date":1501333202850,"duration":53,"reason":"infos tandem"},{"date":1501333633550,"duration":315,"reason":"report météo"},{"date":1501334076026,"duration":82,"reason":"report météo"},{"date":1501334614571,"duration":66,"reason":"report météo"},{"date":1501337601302,"duration":223,"reason":"infos tandem"},{"date":1501338559437,"duration":329,"reason":"rdv tandem"},{"date":1501339449868,"duration":87,"reason":"infos tandem"},{"date":1501340677660,"duration":69,"reason":"infos tandem"},{"date":1501340943420,"duration":124,"reason":"rdv tandem"},{"date":1501341752922,"duration":586,"reason":"rdv tandem"},
{"date":1501407223994,"duration":759,"reason":"report météo"},{"date":1501407660047,"duration":109,"reason":"report météo"},{"date":1501414035023,"duration":189,"reason":"report météo"},{"date":1501415304958,"duration":93,"reason":"report météo"},{"date":1501415477279,"duration":172,"reason":"report météo"},{"date":1501416387651,"duration":111,"reason":"report météo"},{"date":1501420769263,"duration":229,"reason":"report météo"},{"date":1501421192328,"duration":185,"reason":"infos tandem"},{"date":1501421597880,"duration":27,"reason":"infos saut"},{"date":1501423468230,"duration":315,"reason":"rdv tandem"},{"date":1501423826792,"duration":134,"reason":"rdv tandem"},{"date":1501428564741,"duration":50,"reason":"infos tandem"},{"date":1501429403008,"duration":307,"reason":"infos tandem"}
        ];
		
    var performCalculation = function() {
                
        // stats globales 
        stats["all"] = getStat(calls);
        stats["all"].reasons = {};
    
		var dailyCalls = {};     	   // Trie par jour calendaire !!
        var weekdayCalls = {};     // Trie par jour de semaine
        var nbCalls = calls.length;  
        for (let i = 0 ; i < nbCalls; i++) {
            let call = calls[i];
            
			var flooredDate = floorDate(call.date);
			
			// Regroupement des appels par jour calendaire
			let day = flooredDate.toLocaleDateString("fr-FR");
			if (dailyCalls[day] === undefined) {
                dailyCalls[day] = [];
            }
            dailyCalls[day].push(call);
			
			// Regroupement des appels par jour de semaine
            var weekDay = flooredDate.getDay();
            if (weekdayCalls[weekDay] === undefined) {
                weekdayCalls[weekDay] = [];
            }
            weekdayCalls[weekDay].push(call);
            
            // Comptage des causes d'appel
            if (!stats["all"].reasons.hasOwnProperty(call.reason)) {
                stats["all"].reasons[call.reason] = 0;
            }
            stats["all"].reasons[call.reason] += 1;
        }
        
        // calculs par jour de semaine
        for(var propt in weekdayCalls) {
            stats[propt] = getStat(weekdayCalls[propt]);
        }
    }
    
    // Pour une liste d'appels, retourne un objet contenant mini, maxi, durée moyenne
    // et au tri par jour le nombre mini, maxi et moyen d'appels 
    var getStat = function(aCalls) {
        var stat = {
            "minTimeInSec":3600,	// Durée mini d'appel
            "maxTimeInSec":0,		// Durée maxi d'appel
            "averageTimeInSec":0,	// Durée moyenne d'appel
			"totalTimeInSec":0,		// Temps total de comm
            "minNbCalls":3600,		// Nombre mini d'appel
            "maxNbCalls":0,			// Nombre maxi d'appel
            "averageNbCallsPerDay":0,	// Nombre moyen d'appel par jour
			"totalNbCalls":0,			// Total des appels	
			"averageTimeInSecPerDay":0,// ?
			"nbDays":0
        };
		
		
        
        var nbCalls = aCalls.length;  
        var totalTimeInSec = 0;
        var dayCalls = {};
        
        for (let i = 0 ; i < nbCalls; i++) {
            var call = aCalls[i];
            
            var currentTime = call.duration;
            totalTimeInSec += currentTime;
			if (currentTime > 10) {
				// On considère qu'un appel de moins de 10 secondes est une saisie à postériori
				stat.minTimeInSec = Math.min(currentTime, stat.minTimeInSec);
			}
            stat.maxTimeInSec = Math.max(currentTime, stat.maxTimeInSec);
            
            // Records sur le nombre d'appels au jour
            var flooredDate = floorDate(call.date);
            var day = flooredDate.toLocaleDateString("fr-FR");
            
            if (!dayCalls.hasOwnProperty(day)) {
                dayCalls[day] = 0;
            }
            dayCalls[day] += 1;
        }
		
		stat.nbDays = Object.keys(dayCalls).length;
		stat.totalNbCalls = nbCalls;
		stat.totalTimeInSec = totalTimeInSec;
		
		stat.averageNbCallsPerDay = stat.totalNbCalls / stat.nbDays;
		stat.averageTimeInSecPerDay = totalTimeInSec / stat.nbDays;
        stat.averageTimeInSec = totalTimeInSec / nbCalls;

        // records des nombres d'appels
        for(var propt in dayCalls) {
            stat.minNbCalls = Math.min(dayCalls[propt], stat.minNbCalls);
            stat.maxNbCalls = Math.max(dayCalls[propt], stat.maxNbCalls);
        }
		
		console.log(stat);
        return stat;
    }
    
    // Arrondit une date donnée au jour
    var floorDate = function(datetime) {
        var newDate = new Date(datetime);
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        return newDate;
    }
    
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
		
		/*
		var dataCalls = new google.visualization.DataTable();
        dataCalls.addColumn('date', 'Date');
        dataCalls.addColumn('timeofday', 'Durée');
        dataCalls.addColumn('string', 'Raison');
	    var nbCalls = calls.length;  
        for (let i = 0 ; i < nbCalls; i++) {
            let call = calls[i];
			dataCalls.addRow([new Date(call.date), formatTime(call.duration), call.reason]);
        }
        var chartCalls = new google.visualization.Table(document.getElementById('chart_table'));
		var formatter_long = new google.visualization.DateFormat({pattern: 'dd/MM/yyyy kk:mm:ss'});
		formatter_long.format(dataCalls, 0);
        chartCalls.draw(dataCalls, {showRowNumber: true, width: '100%', height: '100%'});*/

		
        var dataReasons =  new google.visualization.DataTable();
        dataReasons.addColumn('string', 'Causes de l\'appel');
        dataReasons.addColumn('number', 'Nombre');
        for(var reason in stats["all"].reasons) {
            dataReasons.addRow([reason, stats["all"].reasons[reason]]);
        }
		var view = new google.visualization.DataView(dataReasons);
		view.setRows(dataReasons.getSortedRows({column: 1, desc: true}));

        // Instantiate and draw our chart, passing in some options.
        var chartReason = new google.visualization.PieChart(document.getElementById('chart_reason'));
        chartReason.draw(view, {title: 'Causes de l\'appel'});
        //chartCalls.draw(dataReasons, {showRowNumber: true, width: '100%', height: '100%'});
        
        //// Affichage des graphes par jour de semaine
        var dataNbCalls = new google.visualization.DataTable();
        dataNbCalls.addColumn('string', 'Day');
        dataNbCalls.addColumn('number', 'Min');
        dataNbCalls.addColumn('number', 'Max');
        dataNbCalls.addColumn('number', 'Moyenne');
        // Set chart options
        var optionsNbCalls = {
            title:"Nombres d'appels",
            seriesType: 'bars',
            series: {2: {type: 'line'}},
            legend: { position: 'bottom' }
        };
        
        
        // Create the data table.
        var dataDuration = new google.visualization.DataTable();
        dataDuration.addColumn('string', 'Day');
        dataDuration.addColumn('timeofday', 'Min');
        dataDuration.addColumn('timeofday', 'Max');
        dataDuration.addColumn('timeofday', 'Moyenne');
        // Set chart options
        var optionsDuration = {
            title:"Durée d'appels",
            // vAxis: {gridlines : {count: 4}},
            seriesType: 'bars',
            series: {2: {type: 'line'}},
            legend: { position: 'bottom' }
        };
        
        for(var propt in stats) {
            if (propt === "all") {
                continue;
            }
            var stat = stats[propt] ;
            dataNbCalls.addRow([weekday[propt], stat.minNbCalls, stat.maxNbCalls, stat.averageNbCallsPerDay]);
            dataDuration.addRow([weekday[propt], formatTime(stat.minTimeInSec), formatTime(stat.maxTimeInSec), formatTime(stat.averageTimeInSec)]);
        }


        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ComboChart(document.getElementById('chart_weekday_nb'));
        chart.draw(dataNbCalls, optionsNbCalls);
        
        // Instantiate and draw our chart, passing in some options.
        var chartDuration = new google.visualization.ComboChart(document.getElementById('chart_weekday_duration'));
        chartDuration.draw(dataDuration, optionsDuration);
        
		updateView();
    }

    var weekday = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    
    // Zero padding helper function:
    var zeroPad = function(i) {
        return (i < 10 ? '0' : '') + i;
    };
    
    // Time formatting helper function
    var formatTime = function(sec){
        var hours = Math.floor(sec / 3600);
        var minutes = Math.floor((sec % 3600) / 60);
        var seconds = Math.floor((sec % 3600) % 60);
        
        return [hours, minutes, seconds, 0];
    };
	
	var stringFormattedTime = function(sec) {
        var hours = Math.floor(sec / 3600);
        var minutes = Math.floor((sec % 3600) / 60);
        var seconds = Math.floor((sec % 3600) % 60);
        
        return zeroPad(hours) + 'h ' + zeroPad(minutes) + 'm ' + zeroPad(seconds) + 's';
    };
	    
    // Maj des indicateurs
    var updateView = function() {
		document.getElementById('nbDays').firstChild.nodeValue = stats["all"].nbDays;
        document.getElementById('nbCall').firstChild.nodeValue = stats["all"].totalNbCalls;
        document.getElementById('totalTimeInSec').firstChild.nodeValue = stringFormattedTime(stats["all"].totalTimeInSec);
        document.getElementById('averageTimeInSec').firstChild.nodeValue = stringFormattedTime(stats["all"].averageTimeInSec);
		document.getElementById('averageTimeInSecPerDay').firstChild.nodeValue = stringFormattedTime(stats["all"].averageTimeInSecPerDay);
        document.getElementById('averageNbCallsPerDay').firstChild.nodeValue = stats["all"].averageNbCallsPerDay;
    };
    
    return {
    };

})(document, window);
