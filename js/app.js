var theElements = JSON.parse('{ "H": {  "name":"hydrogen","symbol":"H","type":"other-nonmetal","number":"1","mass":"1.008","period":"1","group":"1","melting":"14.01","boiling":"20.28","density":"0.00008988","electronegativity":"2.20","radius":"25","valence":"1","specificheat":"14.304","comment":""},"He": {  "name":"helium","symbol":"He","type":"noble-gas","number":"2","mass":"4.003","period":"1","group":"18","melting":"0.95","boiling":"4.22","density":"0.0001785","electronegativity":"","radius":"31","valence":"2","specificheat":"5.193","comment":""},"Li": {  "name":"lithium","symbol":"Li","type":"alkali-metal","number":"3","mass":"6.941","period":"2","group":"1","melting":"453.69","boiling":"1560","density":"0.534","electronegativity":"0.98","radius":"145","valence":"1","specificheat":"3.582","comment":""},"Be": {  "name":"beryllium","symbol":"Be","type":"alkaline-earth","number":"4","mass":"9.012","period":"2","group":"2","melting":"1560","boiling":"2742","density":"1.85","electronegativity":"1.57","radius":"105","valence":"2","specificheat":"1.825","comment":""},"B": {  "name":"boron","symbol":"B","type":"metalloid","number":"5","mass":"10.81","period":"2","group":"13","melting":"2349","boiling":"4200","density":"2.34","electronegativity":"2.04","radius":"","valence":"","specificheat":"1.026","comment":""},"C": {  "name":"carbon","symbol":"C","type":"other-nonmetal","number":"6","mass":"12.011","period":"2","group":"14","melting":"3800","boiling":"4300","density":"2.267","electronegativity":"2.55","radius":"","valence":"","specificheat":"0.709","comment":""},"N": {  "name":"nitrogen","symbol":"N","type":"other-nonmetal","number":"7","mass":"14.007","period":"2","group":"15","melting":"63.15","boiling":"77.36","density":"0.0012506","electronegativity":"3.04","radius":"","valence":"","specificheat":"1.04","comment":""},"O": {  "name":"oxygen","symbol":"O","type":"other-nonmetal","number":"8","mass":"15.9999","period":"2","group":"16","melting":"54.36","boiling":"90.20","density":"0.001429","electronegativity":"3.44","radius":"","valence":"","specificheat":"0.918","comment":""},"F": {  "name":"fluorine","symbol":"F","type":"halogen","number":"9","mass":"18.998","period":"2","group":"17","melting":"53.53","boiling":"85.03","density":"0.001696","electronegativity":"3.98","radius":"","valence":"","specificheat":"0.824","comment":""},"Ne": {  "name":"neon","symbol":"Ne","type":"noble-gas","number":"10","mass":"20.1797","period":"2","group":"18","melting":"24.56","boiling":"27.07","density":"0.0008999","electronegativity":"","radius":"","valence":"","specificheat":"1.03","comment":""},"Na": {  "name":"sodium","symbol":"Na","type":"alkali-metal","number":"11","mass":"22.9898","period":"3","group":"1","melting":"370.87","boiling":"1156","density":"0.971","electronegativity":"0.93","radius":"","valence":"","specificheat":"1.228","comment":""},"Mg": {  "name":"magnesium","symbol":"Mg","type":"alkaline-earth","number":"12","mass":"24.305","period":"3","group":"2","melting":"923","boiling":"1363","density":"1.738","electronegativity":"1.31","radius":"","valence":"","specificheat":"1.023","comment":""},"Al": {  "name":"aluminium","symbol":"Al","type":"post-transition-metal","number":"13","mass":"26.982","period":"3","group":"13","melting":"933.47","boiling":"2792","density":"2.698","electronegativity":"1.61","radius":"","valence":"","specificheat":"0.897","comment":""},"Si": {  "name":"silicon","symbol":"Si","type":"metalloid","number":"14","mass":"28.085","period":"3","group":"14","melting":"1687","boiling":"3538","density":"2.3296","electronegativity":"1.9","radius":"","valence":"","specificheat":"0.705","comment":""},"P": {  "name":"phosphorus","symbol":"P","type":"other-nonmetal","number":"15","mass":"30.974","period":"3","group":"15","melting":"317.30","boiling":"550","density":"1.82","electronegativity":"2.19","radius":"","valence":"","specificheat":"0.769","comment":""},"S": {  "name":"sulfur","symbol":"S","type":"other-nonmetal","number":"16","mass":"32.06","period":"3","group":"16","melting":"388.36","boiling":"717.87","density":"2.067","electronegativity":"2.58","radius":"","valence":"","specificheat":"0.71","comment":""},"Cl": {  "name":"chlorine","symbol":"Cl","type":"halogen","number":"17","mass":"35.45","period":"3","group":"17","melting":"171.6","boiling":"239.11","density":"0.003214","electronegativity":"3.16","radius":"","valence":"","specificheat":"0.479","comment":""},"Ar": {  "name":"argon","symbol":"Ar","type":"noble-gas","number":"18","mass":"39.948","period":"3","group":"18","melting":"83.80","boiling":"87.30","density":"0.0017837","electronegativity":"","radius":"","valence":"","specificheat":"0.52","comment":""},"K": {  "name":"potassium","symbol":"K","type":"alkali-metal","number":"19","mass":"39.0983","period":"4","group":"1","melting":"336.53","boiling":"1032","density":"0.862","electronegativity":"0.82","radius":"","valence":"","specificheat":"0.757","comment":""},"Ca": {  "name":"calcium","symbol":"Ca","type":"alkaline-earth","number":"20","mass":"40.078","period":"4","group":"2","melting":"1115","boiling":"1757","density":"1.54","electronegativity":"1","radius":"","valence":"","specificheat":"0.647","comment":""},"Sc": {  "name":"scandium","symbol":"Sc","type":"transition-metal","number":"21","mass":"44.956","period":"4","group":"3","melting":"1814","boiling":"3109","density":"2.989","electronegativity":"1.36","radius":"","valence":"","specificheat":"0.568","comment":""},"Ti": {  "name":"titanium","symbol":"Ti","type":"transition-metal","number":"22","mass":"47.867","period":"4","group":"4","melting":"1941","boiling":"3560","density":"4.54","electronegativity":"1.54","radius":"","valence":"","specificheat":"0.523","comment":""},"V": {  "name":"vandium","symbol":"V","type":"transition-metal","number":"23","mass":"50.9415","period":"4","group":"5","melting":"2183","boiling":"3680","density":"6.11","electronegativity":"1.63","radius":"","valence":"","specificheat":"0.489","comment":""},"Cr": {  "name":"chromium","symbol":"Cr","type":"transition-metal","number":"24","mass":"51.9961","period":"4","group":"6","melting":"2180","boiling":"2944","density":"7.15","electronegativity":"1.66","radius":"","valence":"","specificheat":"0.449","comment":""},"Mn": {  "name":"manganese","symbol":"Mn","type":"transition-metal","number":"25","mass":"54.938","period":"4","group":"7","melting":"1519","boiling":"2334","density":"7.44","electronegativity":"1.55","radius":"","valence":"","specificheat":"0.479","comment":""},"Fe": {  "name":"iron","symbol":"Fe","type":"transition-metal","number":"26","mass":"55.845","period":"4","group":"8","melting":"1811","boiling":"3134","density":"7.874","electronegativity":"1.83","radius":"","valence":"","specificheat":"0.449","comment":""},"Co": {  "name":"cobalt","symbol":"Co","type":"transition-metal","number":"27","mass":"58.9332","period":"4","group":"9","melting":"1768","boiling":"3200","density":"8.86","electronegativity":"1.88","radius":"","valence":"","specificheat":"0.421","comment":""},"Ni": {  "name":"nickel","symbol":"Ni","type":"transition-metal","number":"28","mass":"58.6934","period":"4","group":"10","melting":"1728","boiling":"3186","density":"8.912","electronegativity":"1.91","radius":"","valence":"","specificheat":"0.444","comment":""},"Cu": {  "name":"copper","symbol":"Cu","type":"transition-metal","number":"29","mass":"63.546","period":"4","group":"11","melting":"1357.77","boiling":"2835","density":"8.96","electronegativity":"1.9","radius":"","valence":"","specificheat":"0.385","comment":""},"Zn": {  "name":"zinc","symbol":"Zn","type":"transition-metal","number":"30","mass":"65.38","period":"4","group":"12","melting":"692.88","boiling":"1180","density":"7.134","electronegativity":"1.65","radius":"","valence":"","specificheat":"0.388","comment":""},"Ga": {  "name":"gallium","symbol":"Ga","type":"post-transition-metal","number":"31","mass":"69.723","period":"4","group":"13","melting":"302.9146","boiling":"2477","density":"5.907","electronegativity":"1.81","radius":"","valence":"","specificheat":"0.371","comment":""},"Ge": {  "name":"germanium","symbol":"Ge","type":"metalloid","number":"32","mass":"72.630","period":"4","group":"14","melting":"1211.40","boiling":"3106","density":"5.323","electronegativity":"2.01","radius":"","valence":"","specificheat":"0.32","comment":""},"As": {  "name":"arsenic","symbol":"As","type":"metalloid","number":"33","mass":"74.92160","period":"4","group":"15","melting":"1090","boiling":"887","density":"5.776","electronegativity":"2.18","radius":"","valence":"","specificheat":"0.329","comment":""},"Se": {  "name":"selenium","symbol":"Se","type":"other-nonmetal","number":"34","mass":"78.96","period":"4","group":"16","melting":"453","boiling":"958","density":"4.809","electronegativity":"2.55","radius":"","valence":"","specificheat":"0.321","comment":""},"Br": {  "name":"bromine","symbol":"Br","type":"halogen","number":"35","mass":"79.904","period":"4","group":"17","melting":"265.8","boiling":"332.0","density":"3.122","electronegativity":"2.96","radius":"","valence":"","specificheat":"0.474","comment":""},"Kr": {  "name":"krypton","symbol":"Kr","type":"noble-gas","number":"36","mass":"83.798","period":"4","group":"18","melting":"115.79","boiling":"119.93","density":"0.003733","electronegativity":"3","radius":"","valence":"","specificheat":"0.248","comment":""},"Rb": {  "name":"rubidium","symbol":"Rb","type":"alkali-metal","number":"37","mass":"85.4678","period":"5","group":"1","melting":"312.46","boiling":"961","density":"1.532","electronegativity":"0.82","radius":"","valence":"","specificheat":"0.363","comment":""},"Sr": {  "name":"strontium","symbol":"Sr","type":"alkaline-earth","number":"38","mass":"87.62","period":"5","group":"2","melting":"1050","boiling":"1655","density":"2.64","electronegativity":"0.95","radius":"","valence":"","specificheat":"0.301","comment":""},"Y": {  "name":"yttrium","symbol":"Y","type":"transition-metal","number":"39","mass":"88.906","period":"5","group":"3","melting":"1799","boiling":"3609","density":"4.469","electronegativity":"1.22","radius":"","valence":"","specificheat":"0.298","comment":""},"Zr": {  "name":"zirconium","symbol":"Zr","type":"transition-metal","number":"40","mass":"91.224","period":"5","group":"4","melting":"2128","boiling":"4682","density":"6.506","electronegativity":"1.33","radius":"","valence":"","specificheat":"0.278","comment":""},"Nb": {  "name":"niobium","symbol":"Nb","type":"transition-metal","number":"41","mass":"92.90638","period":"5","group":"5","melting":"2750","boiling":"5017","density":"8.57","electronegativity":"1.6","radius":"","valence":"","specificheat":"0.265","comment":""},"Mo": {  "name":"molybdenum","symbol":"Mo","type":"transition-metal","number":"42","mass":"95.96","period":"5","group":"6","melting":"2896","boiling":"4912","density":"","electronegativity":"2.16","radius":"","valence":"","specificheat":"0.251","comment":""},"Tc": {  "name":"technetium","symbol":"Tc","type":"transition-metal","number":"43","mass":"98","period":"5","group":"7","melting":"2430","boiling":"4538","density":"11.5","electronegativity":"1.9","radius":"","valence":"","specificheat":"0.63","comment":""},"Ru": {  "name":"ruthenium","symbol":"Ru","type":"transition-metal","number":"44","mass":"101.07","period":"5","group":"8","melting":"2607","boiling":"4423","density":"12.37","electronegativity":"2.2","radius":"","valence":"","specificheat":"0.238","comment":""},"Rh": {  "name":"rhodium","symbol":"Rh","type":"transition-metal","number":"45","mass":"102.9055","period":"5","group":"9","melting":"2237","boiling":"3968","density":"12.41","electronegativity":"2.28","radius":"","valence":"","specificheat":"0.243","comment":""},"Pd": {  "name":"palladium","symbol":"Pd","type":"transition-metal","number":"46","mass":"106.42","period":"5","group":"10","melting":"1828.05","boiling":"3236","density":"12.02","electronegativity":"2.2","radius":"","valence":"","specificheat":"0.244","comment":""},"Ag": {  "name":"silver","symbol":"Ag","type":"transition-metal","number":"47","mass":"107.8682","period":"5","group":"11","melting":"1234.93","boiling":"2435","density":"10.501","electronegativity":"1.93","radius":"","valence":"","specificheat":"0.235","comment":""},"Cd": {  "name":"cadmium","symbol":"Cd","type":"transition-metal","number":"48","mass":"112.411","period":"5","group":"12","melting":"594.22","boiling":"1040","density":"8.69","electronegativity":"1.69","radius":"","valence":"","specificheat":"0.232","comment":""},"In": {  "name":"indium","symbol":"In","type":"post-transition-metal","number":"49","mass":"114.818","period":"5","group":"13","melting":"429.75","boiling":"2345","density":"7.31","electronegativity":"1.78","radius":"","valence":"","specificheat":"0.233","comment":""},"Sn": {  "name":"tin","symbol":"Sn","type":"post-transition-metal","number":"50","mass":"118.710","period":"5","group":"14","melting":"505.08","boiling":"2875","density":"7.287","electronegativity":"1.96","radius":"","valence":"","specificheat":"0.228","comment":""},"Sb": {  "name":"antimony","symbol":"Sb","type":"metalloid","number":"51","mass":"121.760","period":"5","group":"15","melting":"903.78","boiling":"1860","density":"6.685","electronegativity":"2.05","radius":"","valence":"","specificheat":"0.207","comment":""},"Te": {  "name":"tellurium","symbol":"Te","type":"metalloid","number":"52","mass":"127.6","period":"5","group":"16","melting":"722.66","boiling":"1261","density":"6.232","electronegativity":"2.1","radius":"","valence":"","specificheat":"0.202","comment":""},"I": {  "name":"iodine","symbol":"I","type":"halogen","number":"53","mass":"126.90447","period":"5","group":"17","melting":"386.85","boiling":"457.4","density":"4.93","electronegativity":"2.66","radius":"","valence":"","specificheat":"0.214","comment":""},"Xe": {  "name":"xenon","symbol":"Xe","type":"noble-gas","number":"54","mass":"131.293","period":"5","group":"18","melting":"161.4","boiling":"165.03","density":"0.005887","electronegativity":"2.6","radius":"","valence":"","specificheat":"0.158","comment":""},"Cs": {  "name":"caesium","symbol":"Cs","type":"alkali-metal","number":"55","mass":"132.9054","period":"6","group":"1","melting":"301.59","boiling":"944","density":"1.873","electronegativity":"0.79","radius":"","valence":"","specificheat":"0.242","comment":""},"Ba": {  "name":"barium","symbol":"Ba","type":"alkaline-earth","number":"56","mass":"137.327","period":"6","group":"2","melting":"1000","boiling":"2170","density":"3.594","electronegativity":"0.89","radius":"","valence":"","specificheat":"0.204","comment":""},"La": {  "name":"Lanthanum","symbol":"La","type":"lanthanoid","number":"57","mass":"138.90547","period":"6","group":"","melting":"1193","boiling":"3737","density":"6.145","electronegativity":"1.1","radius":"","valence":"","specificheat":"0.195","comment":""},"Ce": {  "name":"cerium","symbol":"Ce","type":"lanthanoid","number":"58","mass":"140.116","period":"6","group":"","melting":"1068","boiling":"3716","density":"6.77","electronegativity":"1.12","radius":"","valence":"","specificheat":"0.192","comment":""},"Pr": {  "name":"praseodymium","symbol":"Pr","type":"lanthanoid","number":"59","mass":"140.90765","period":"6","group":"","melting":"1208","boiling":"3793","density":"6.773","electronegativity":"1.13","radius":"","valence":"","specificheat":"0.193","comment":""},"Nd": {  "name":"neodymium","symbol":"Nd","type":"lanthanoid","number":"60","mass":"144.242","period":"6","group":"","melting":"1297","boiling":"3347","density":"7.007","electronegativity":"1.14","radius":"","valence":"","specificheat":"0.19","comment":""},"Pm": {  "name":"promethium","symbol":"Pm","type":"lanthanoid","number":"61","mass":"145","period":"6","group":"","melting":"1315","boiling":"3273","density":"7.26","electronegativity":"1.13","radius":"","valence":"","specificheat":"","comment":""},"Sm": {  "name":"samarium","symbol":"Sm","type":"lanthanoid","number":"62","mass":"150.36","period":"6","group":"","melting":"1345","boiling":"2067","density":"7.52","electronegativity":"1.17","radius":"","valence":"","specificheat":"0.197","comment":""},"Eu": {  "name":"europium","symbol":"Eu","type":"lanthanoid","number":"63","mass":"151.964","period":"6","group":"","melting":"1099","boiling":"1802","density":"5.243","electronegativity":"1.2","radius":"","valence":"","specificheat":"0.182","comment":""},"Gd": {  "name":"gadolinium","symbol":"Gd","type":"lanthanoid","number":"64","mass":"157.25","period":"6","group":"","melting":"1585","boiling":"3546","density":"7.895","electronegativity":"1.2","radius":"","valence":"","specificheat":"0.236","comment":""},"Tb": {  "name":"terbium","symbol":"Tb","type":"lanthanoid","number":"65","mass":"158.92535","period":"6","group":"","melting":"1629","boiling":"3503","density":"8.229","electronegativity":"1.2","radius":"","valence":"","specificheat":"0.182","comment":""},"Dy": {  "name":"dysprosium","symbol":"Dy","type":"lanthanoid","number":"66","mass":"162.500","period":"6","group":"","melting":"1680","boiling":"2840","density":"8.55","electronegativity":"1.22","radius":"","valence":"","specificheat":"0.17","comment":""},"Ho": {  "name":"holmium","symbol":"Ho","type":"lanthanoid","number":"67","mass":"164.93032","period":"6","group":"","melting":"1734","boiling":"2993","density":"8.795","electronegativity":"1.23","radius":"","valence":"","specificheat":"0.165","comment":""},"Er": {  "name":"erbium","symbol":"Er","type":"lanthanoid","number":"68","mass":"167.259","period":"6","group":"","melting":"1802","boiling":"3141","density":"9.066","electronegativity":"1.24","radius":"","valence":"","specificheat":"0.168","comment":""},"Tm": {  "name":"thulium","symbol":"Tm","type":"lanthanoid","number":"69","mass":"168.93421","period":"6","group":"","melting":"1818","boiling":"2223","density":"9.321","electronegativity":"1.25","radius":"","valence":"","specificheat":"0.16","comment":""},"Yb": {  "name":"ytterbium","symbol":"Yb","type":"lanthanoid","number":"70","mass":"173.054","period":"6","group":"","melting":"1097","boiling":"1469","density":"6.965","electronegativity":"1.1","radius":"","valence":"","specificheat":"0.155","comment":""},"Lu": {  "name":"lutetium","symbol":"Lu","type":"lanthanoid","number":"71","mass":"174.9668","period":"6","group":"3","melting":"1925","boiling":"3675","density":"9.84","electronegativity":"1.27","radius":"","valence":"","specificheat":"0.154","comment":""},"Hf": {  "name":"hafnium","symbol":"Hf","type":"transition-metal","number":"72","mass":"178.49","period":"6","group":"4","melting":"2506","boiling":"4876","density":"13.31","electronegativity":"1.3","radius":"","valence":"","specificheat":"0.1444","comment":""},"Ta": {  "name":"tantalum","symbol":"Ta","type":"transition-metal","number":"73","mass":"180.94788","period":"6","group":"5","melting":"3290","boiling":"5731","density":"16.654","electronegativity":"1.5","radius":"","valence":"","specificheat":"0.14","comment":""},"W": {  "name":"tungsten","symbol":"W","type":"transition-metal","number":"74","mass":"180.9478","period":"6","group":"6","melting":"3290","boiling":"5731","density":"16.654","electronegativity":"1.5","radius":"","valence":"","specificheat":"0.14","comment":""},"Re": {  "name":"rhenium","symbol":"Re","type":"transition-metal","number":"75","mass":"186.207","period":"6","group":"7","melting":"3459","boiling":"5869","density":"21.02","electronegativity":"1.9","radius":"","valence":"","specificheat":"1.37","comment":""},"Os": {  "name":"osmium","symbol":"Os","type":"transition-metal","number":"76","mass":"190.23","period":"6","group":"8","melting":"3306","boiling":"5285","density":"22.61","electronegativity":"2.2","radius":"","valence":"","specificheat":"0.13","comment":""},"Ir": {  "name":"iridium","symbol":"Ir","type":"transition-metal","number":"77","mass":"192.217","period":"6","group":"9","melting":"2719","boiling":"4701","density":"22.56","electronegativity":"2.2","radius":"","valence":"","specificheat":"0.131","comment":""},"Pt": {  "name":"platinum","symbol":"Pt","type":"transition-metal","number":"78","mass":"195.084","period":"6","group":"10","melting":"2041.4","boiling":"4098","density":"21.46","electronegativity":"2.28","radius":"","valence":"","specificheat":"0.133","comment":""},"Au": {  "name":"gold","symbol":"Au","type":"transition-metal","number":"79","mass":"196.966569","period":"6","group":"11","melting":"1337.33","boiling":"3129","density":"19.282","electronegativity":"2.54","radius":"","valence":"","specificheat":"0.129","comment":""},"Hg": {  "name":"mercury","symbol":"Hg","type":"transition-metal","number":"80","mass":"200.592","period":"6","group":"12","melting":"234.43","boiling":"629.88","density":"13.5336","electronegativity":"2","radius":"","valence":"","specificheat":"0.14","comment":""},"Tl": {  "name":"thalium","symbol":"Tl","type":"post-transition-metal","number":"81","mass":"204.38","period":"6","group":"13","melting":"577","boiling":"1746","density":"11.85","electronegativity":"1.62","radius":"","valence":"","specificheat":"0.129","comment":""},"Pb": {  "name":"lead","symbol":"Pb","type":"post-transition-metal","number":"82","mass":"207.2","period":"6","group":"14","melting":"600.61","boiling":"2022","density":"11.342","electronegativity":"1.87","radius":"","valence":"","specificheat":"0.129","comment":""},"Bi": {  "name":"bismuth","symbol":"Bi","type":"post-transition-metal","number":"83","mass":"208.98040","period":"6","group":"15","melting":"544.7","boiling":"1837","density":"9.807","electronegativity":"2.02","radius":"","valence":"","specificheat":"0.122","comment":""},"Po": {  "name":"polonium","symbol":"Po","type":"metalloid","number":"84","mass":"209","period":"6","group":"16","melting":"527","boiling":"1235","density":"9.32","electronegativity":"2.0","radius":"","valence":"","specificheat":"0.125","comment":""},"At": {  "name":"astatine","symbol":"At","type":"halogen","number":"85","mass":"210","period":"6","group":"17","melting":"575","boiling":"610","density":"7","electronegativity":"2.2","radius":"","valence":"","specificheat":"","comment":""},"Rn": {  "name":"radon","symbol":"Rn","type":"noble-gas","number":"86","mass":"222","period":"6","group":"18","melting":"202","boiling":"211.3","density":"0.00973","electronegativity":"2.2","radius":"","valence":"","specificheat":"0.094","comment":""},"Fr": {  "name":"francium","symbol":"Fr","type":"alkali-metal","number":"87","mass":"223","period":"7","group":"1","melting":"300","boiling":"950","density":"1.87","electronegativity":"0.7","radius":"","valence":"","specificheat":"","comment":""},"Ra": {  "name":"radium","symbol":"Ra","type":"alkaline-earth","number":"88","mass":"226","period":"7","group":"2","melting":"973","boiling":"2010","density":"5.5","electronegativity":"0.9","radius":"","valence":"","specificheat":"0.094","comment":""},"Ac": {  "name":"actinium","symbol":"Ac","type":"actinoid","number":"89","mass":"227","period":"7","group":"","melting":"1323","boiling":"3471","density":"10.07","electronegativity":"1.1","radius":"","valence":"","specificheat":"0.12","comment":""},"Th": {  "name":"thorium","symbol":"Th","type":"actinoid","number":"90","mass":"232.03806","period":"7","group":"","melting":"2115","boiling":"5061","density":"11.72","electronegativity":"1.3","radius":"","valence":"","specificheat":"0.113","comment":""},"Pa": {  "name":"protactinium","symbol":"Pa","type":"actinoid","number":"91","mass":"231.03588","period":"7","group":"","melting":"1841","boiling":"4300","density":"15.37","electronegativity":"1.5","radius":"","valence":"","specificheat":"","comment":""},"U": {  "name":"uranium","symbol":"U","type":"actinoid","number":"92","mass":"238.02891","period":"7","group":"","melting":"1405.3","boiling":"4404","density":"18.95","electronegativity":"1.38","radius":"","valence":"","specificheat":"0.116","comment":""},"Np": {  "name":"neptunium","symbol":"Np","type":"actinoid","number":"93","mass":"237","period":"7","group":"","melting":"917","boiling":"4273","density":"20.45","electronegativity":"1.36","radius":"","valence":"","specificheat":"","comment":""},"Pu": {  "name":"plutonium","symbol":"Pu","type":"actinoid","number":"94","mass":"244","period":"7","group":"","melting":"912.5","boiling":"3501","density":"19.84","electronegativity":"1.28","radius":"","valence":"","specificheat":"","comment":""},"Am": {  "name":"americium","symbol":"Am","type":"actinoid","number":"95","mass":"243","period":"7","group":"","melting":"1449","boiling":"2880","density":"13.69","electronegativity":"1.13","radius":"","valence":"","specificheat":"","comment":""},"Cm": {  "name":"curium","symbol":"Cm","type":"actinoid","number":"96","mass":"247","period":"7","group":"","melting":"1613","boiling":"3383","density":"13.51","electronegativity":"1.28","radius":"","valence":"","specificheat":"","comment":""},"Bk": {  "name":"berkelium","symbol":"Bk","type":"actinoid","number":"97","mass":"247","period":"7","group":"","melting":"1259","boiling":"2900","density":"14.79","electronegativity":"1.3","radius":"","valence":"","specificheat":"","comment":""},"Cf": {  "name":"californium","symbol":"Cf","type":"actinoid","number":"98","mass":"251","period":"7","group":"","melting":"1173","boiling":"1743","density":"15.1","electronegativity":"1.3","radius":"","valence":"","specificheat":"","comment":""},"Es": {  "name":"einsteinium","symbol":"Es","type":"actinoid","number":"99","mass":"252","period":"7","group":"","melting":"1133","boiling":"1269","density":"8.84","electronegativity":"1.3","radius":"","valence":"","specificheat":"","comment":""},"Fm": {  "name":"fermium","symbol":"Fm","type":"actinoid","number":"100","mass":"257","period":"7","group":"","melting":"1125","boiling":"","density":"","electronegativity":"1.3","radius":"","valence":"","specificheat":"","comment":""},"Md": {  "name":"mendelevium","symbol":"Md","type":"actinoid","number":"101","mass":"258","period":"7","group":"","melting":"1100","boiling":"","density":"","electronegativity":"1.3","radius":"","valence":"","specificheat":"","comment":""},"No": {  "name":"nobelium","symbol":"No","type":"actinoid","number":"102","mass":"259","period":"7","group":"","melting":"1100","boiling":"","density":"","electronegativity":"1.3","radius":"","valence":"","specificheat":"","comment":""},"Lr": {  "name":"lawrencium","symbol":"Lr","type":"actinoid","number":"103","mass":"266","period":"7","group":"3","melting":"1900","boiling":"","density":"","electronegativity":"1.3","radius":"","valence":"","specificheat":"","comment":""},"Rf": {  "name":"rutherforium","symbol":"Rf","type":"transition-metal","number":"104","mass":"267","period":"7","group":"4","melting":"2400","boiling":"5800","density":"23.2","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Db": {  "name":"dubnium","symbol":"Db","type":"transition-metal","number":"105","mass":"268","period":"7","group":"5","melting":"","boiling":"","density":"29.3","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Sg": {  "name":"seaborgium","symbol":"Sg","type":"transition-metal","number":"106","mass":"268","period":"7","group":"6","melting":"","boiling":"","density":"35","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Bh": {  "name":"bohrium","symbol":"Bh","type":"transition-metal","number":"107","mass":"270","period":"7","group":"7","melting":"","boiling":"","density":"37.1","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Hs": {  "name":"hassium","symbol":"Hs","type":"transition-metal","number":"108","mass":"269","period":"7","group":"8","melting":"","boiling":"","density":"40.7","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Mt": {  "name":"meitnerium","symbol":"Mt","type":"transition-metal","number":"109","mass":"278","period":"7","group":"9","melting":"","boiling":"","density":"37.4","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Ds": {  "name":"darmstadtium","symbol":"Ds","type":"transition-metal","number":"110","mass":"281","period":"7","group":"10","melting":"","boiling":"","density":"34.8","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Rg": {  "name":"roentgenium","symbol":"Rg","type":"transition-metal","number":"111","mass":"281","period":"7","group":"11","melting":"","boiling":"","density":"28.7","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Cn": {  "name":"copernicium","symbol":"Cn","type":"transition-metal","number":"112","mass":"285","period":"7","group":"12","melting":"","boiling":"357","density":"23.7","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Uut": {  "name":"ununtrium","symbol":"Uut","type":"post-transition-metal","number":"113","mass":"286","period":"7","group":"13","melting":"700","boiling":"1400","density":"16","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Fl": {  "name":"flerovium","symbol":"Fl","type":"post-transition-metal","number":"114","mass":"289","period":"7","group":"14","melting":"340","boiling":"420","density":"14","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Uup": {  "name":"ununpentium","symbol":"Uup","type":"post-transition-metal","number":"115","mass":"289","period":"7","group":"15","melting":"700","boiling":"1400","density":"13.5","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Lv": {  "name":"livermorium","symbol":"Lv","type":"post-transition-metal","number":"116","mass":"293","period":"7","group":"16","melting":"708.5","boiling":"1085","density":"12.9","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Uus": {  "name":"ununseptium","symbol":"Uus","type":"halogen","number":"117","mass":"294","period":"7","group":"17","melting":"673","boiling":"823","density":"7.2","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""},"Uuo": {  "name":"ununoctium","symbol":"Uuo","type":"noble-gas","number":"118","mass":"294","period":"7","group":"18","melting":"258","boiling":"263","density":"5","electronegativity":"","radius":"","valence":"","specificheat":"","comment":""}}');

var modes = [];
    modes['trad'] = true;
    modes['calc'] = false;

var typeColors = [];                   
typeColors['alkali-metal'] = chroma("#f4ee64");
typeColors['alkaline-earth'] = chroma('#fcc171');
typeColors['transition-metal'] = chroma('#ea93d9');
typeColors['post-transition-metal'] = chroma('#77f0b4');
typeColors['metalloid'] = chroma('#f58989');
typeColors['other-nonmetal'] = chroma('#8fc8f8');
typeColors['halogen'] = chroma('#9487f8');
typeColors['noble-gas'] = chroma('#85f780');
typeColors['lanthanoid'] = chroma('#c7c7c7');
typeColors['actinoid'] = chroma('#989898');
    
var ratios = {
	"td": {
		"height": 0.05416666666666667,
		"width": 0.05416666666666667
	}, 
    ".symbol": {
		"font-size": 0.02562225475841874
	}, 
	".mass": {
		"font-size": 0.01171303074670571,
		"width": 0.0527086383601757,
		"bottom": 0.0007320644216691069
	}, 
    ".number": {
		"font-size": 0.010248901903367497,
		"top": 0.0029282576866764276,
		"left": 0.0014641288433382138
	},
	".box-data": {
		"font-size": 0.013909224011713031
	},
	".box-col-1": {
		"left": 0.14641288433382138
	},
	".box-col-2": {
		"left": 0.3513909224011713
	},
	".box-row-1": {
		"top": 0.021961932650073207
	},
	".box-row-2": {
		"top": 0.043923865300146414
	},
	".box-row-3": {
		"top": 0.06588579795021962
	},
	".box-row-4": {
		"top": 0.08784773060029283
	},
	"#box-symbol": {
		"font-size": 0.06954612005856516,
		"bottom": 0.05124450951683748,
		"left": 0.007320644216691069
	},
	"#box-name": {
		"font-size": 0.043923865300146414,
		"bottom": 0.004392386530014641,
		"left": 0.010980966325036604
	},
	"#box-type": {
		"font-size": 0.020497803806734993,
		"right": 0.0036603221083455345,
		"bottom": 0.0036603221083455345
	}
}
;

  ////////////////////////////////////////////
 ///////  Initialization Functions  /////////
////////////////////////////////////////////

    
    
    for(ratioList in ratios){
        dynamicDimensions(ratioList, ratios[ratioList]);
    }

    colorElements();


  ////////////////////////////////////////////
 ////////////  Event Handlers  //////////////
////////////////////////////////////////////


$('#candy-wrapper').on('mouseover', '.element', function(){
        var $self = $(this);
        var elementID = getID($self);
        var color = typeColors[theElements[elementID].type];
        if(modes['trad']){
            hoverColor($self, color);
            writeToBox(elementID);
        } else if(modes['calc']){
            calcHoverColor($self, color);
        }

    })
                       .on('mouseout', '.element', function(){
        var $self = $(this);
        var elementID = getID($self);
        var color = typeColors[theElements[elementID].type];
        if(modes['trad']){
            unhoverColor($self, color);
            clearBox();
        } else if(modes['calc']){
            calcUnhoverColor($self, color, elementID);
        }
    })
                       .on('click', '#calc-button', toggleCalculator)


  ////////////////////////////////////////////
 ///////////  Styling Functions  ////////////
////////////////////////////////////////////

    function colorElements(){
        if(modes['trad']) forEachElement(colorfulElements);
        if(modes['calc']) forEachElement(grayElements);
    }

    function colorfulElements(elementID){
        if(typeof elementID == 'string') elementID = [elementID];
        for(var i=0; i<elementID.length; i++){
            color = typeColors[theElements[elementID].type];
            $('#'+elementID[i]).css('background-color', color.alpha(0.8).css());
        }
    }

    function grayElements(elementID){
        if(typeof elementID == 'string') elementID = [elementID];
        for(var i=0; i<elementID.length; i++){
            color = typeColors[theElements[elementID].type];
            $('#'+elementID[i]).css('background-color', grayscale(color).css());
        }
    }

    function grayscale(color, amount){
        if(!amount) var amount = 1;
        var color = color.rgba();
        // Luma Algorithm
        gray = color[0]*0.3+color[1]*0.59+color[2]*0.11;
        return chroma((color[0]*(1-amount))+gray*amount, (color[1]*(1-amount))+gray*amount, (color[2]*(1-amount))+gray*amount, color[3]);
    }
    
    function hoverColor(self, color){
        self.find('.symbol').css('color', 'white');
        $('.status').css('background-color', color.alpha(0.6).css())
                    .css('border-top', '1px solid black');
    }
    
    function unhoverColor(self, color){
        self.css('background-color', color.alpha(0.8).css());
        self.find('.symbol').css('color', '#3e3e3e');
        $('.status').css('background-color', 'transparent')
                    .css('border-top', 'none');
    }


    
  ////////////////////////////////////////////
 ///////////  Content Functions  ////////////
////////////////////////////////////////////
    
    forEachElement(writeToTable, ['number']);
    forEachElement(writeToTable, ['symbol']);
    forEachElement(writeToTable, ['mass']);

    function writeToTable(element, property){
        var value = theElements[element][property];
        if(property=='mass') value = Math.round(value * 100) / 100;
        $('#'+element+'>.'+property).html(value);
    }

    function writeToBox(elementID){
        dataDisplay(elementID, '#box-symbol', 'symbol', '', '');
        dataDisplay(elementID, '#box-name', 'name', '', '');
        dataDisplay(elementID, '#box-number', 'number', 'Number:', '');
        dataDisplay(elementID, '#box-mass', 'mass', 'Mass:', ' g/mol');
        dataDisplay(elementID, '#box-density', 'density', 'Density:', ' g/cm<sup>3</sup>');
        dataDisplay(elementID, '#box-electro', 'electronegativity', 'Electronegativity:', '');
        dataDisplay(elementID, '#box-melting', 'melting', 'Melting:', ' K');
        dataDisplay(elementID, '#box-boiling', 'boiling', 'Boiling:', ' K');
        dataDisplay(elementID, '#box-specific', 'specificheat', 'Specific:', ' J/g&#8226;K');
        dataDisplay(elementID, '#box-type', 'type', '', '');

    }

    function clearBox(){
        $('.mode').find('.box-data').html('');
    }

    function dataDisplay(elementID, selector, dataType, title, prefix){
        var data = theElements[elementID][dataType];
        if(data=='' || data== null) {
            data = '<span class="nodata">no data</span>'; 
            prefix = ''; }
        if(dataType == 'name') data = capitalize(data);
        if(dataType == 'mass') data = Math.round(data * 1000) / 1000;
        $(selector).html('<span class="data-title">'+title+'</span> '+data+prefix);
    }


   
  ////////////////////////////////////////////
 //////////  Dimension Functions  ///////////
////////////////////////////////////////////

    $(window).on('resize', function(){
        for(ratioList in ratios){
            dynamicDimensions(ratioList, ratios[ratioList]); 
        } 
    });

    function dynamicDimensions(selector, properties){
        var windowWidth = window.innerWidth;
        var theSelector = $(selector);
        for(property in properties){
            var style = property;
            var ratio = properties[property];
            newDimension = windowWidth*ratio
            theSelector.css(style, newDimension); 
        } 
    }
    

  ////////////////////////////////////////////
 ///////////  Utility Functions  ////////////
////////////////////////////////////////////

    function changeMode(newMode){
        for (mode in modes){
            if(mode==newMode){
                modes[mode] = true;
                $('#'+mode+'-mode').show();
            } 
            else {
                modes[mode] = false;
                $('#'+mode+'-mode').hide();
            }
        }
        colorElements();
    }

    function forEachElement(aFunction, arguments){
        if(!arguments) var arguments = [];
        for(element in theElements){
            aFunction.apply(this, [element].concat(arguments));
        }
    }
    
    function getID(element){
        return $(element).attr('id');
    }

    function capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
;

function toggleCalculator(){
        if(modes['calc']) {
            changeMode('trad');
            $('.status').css('background-color', 'transparent')
                        .css('border-top', 'none');
        }
        else {
            changeMode('calc');
            $('.status').css('background-color', typeColors['other-nonmetal'].alpha(0.6).css())
                        .css('border-top', '1px solid black');

        }
}

function calcHoverColor(self, color){
        self.css('background-color', color);
}

function calcUnhoverColor(self, color, elementID){
        grayElements(elementID);
}