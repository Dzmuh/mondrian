/*

  Preload new visitors' files with a sample file

*/

let demoFiles = {
  albq: `\
<svg id="main" width="800" height="470.59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:mondrian="http://mondrian.io/xml" viewbox="0 0 800 470.59" enable-background="new 0 0 800 470.59" style="width: 800px; height: 470.59px; -webkit-transform: scale(1);">
  <rect opacity="1" fill="rgb(199, 15, 46)" fill-opacity="1" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="4" stroke-dasharray="none" stroke-opacity="1" id="rect3491" width="800" height="470.58984" x="0" y="0.00015633789" >
  </rect>
  <path id="path3290" fill="rgb(245, 220, 15)" fill-rule="evenodd" stroke="none" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" fill-opacity="1" d="M394.625,383.43375 C381.16854,383.95982 376.92586,396.10106 374.875,403.46875 C372.73136,411.16976 373.54029,423.67459 382,423.7775 C385.09344,423.81513 388.0005,422.0739 390.09375,420.21875 L384.875,442.21875 L393.5,442.21875 L404.4375,395.78125 C404.95468,393.59667 404.72172,391.07616 403.75,388.875 C401.94548,384.78738 398.68662,383.27496 394.625,383.43375 M393.34375,389.78125 C395.26133,389.83533 397.13959,390.74597 396.53125,393.3125 L391.25,415.59375 C379.11731,421.56397 381.42886,411.35222 383.375,402.96875 C384.35154,398.76206 386.57754,392.68705 390.3125,390.4375 C391.02749,390.00687 392.1932,389.7488 393.34375,389.78125 M421.3125,384.09 L412.75,384.09 L407.9375,404.7775 C405.17878,416.63643 409.35555,423.26919 414.875,423.7775 C418.15997,424.08003 421.54456,422.35493 423.87944,419.06596 L422.75,423.09 L431.25,423.09 L440.5625,384.09 L432,384.09 L425.44194,411.70796 C423.41424,416.12473 419.5936,418.94076 416.3125,416.465 C413.65852,414.46243 415.31018,409.25358 416.4375,404.5275 L421.3125,384.09 M516.95447,383.43375 C503.49801,383.95982 499.25533,396.10106 497.20447,403.46875 C495.06083,411.16976 495.86976,423.67459 504.32947,423.7775 C507.42291,423.81513 510.32997,422.0739 512.42322,420.21875 L507.20447,442.21875 L515.82947,442.21875 L526.76697,395.78125 C527.28415,393.59667 527.05119,391.07616 526.07947,388.875 C524.27495,384.78738 521.01609,383.27496 516.95447,383.43375 M515.67322,389.78125 C517.5908,389.83533 519.46906,390.74597 518.86072,393.3125 L513.57947,415.59375 C501.44678,421.56397 503.75833,411.35222 505.70447,402.96875 C506.68101,398.76206 508.90701,392.68705 512.64197,390.4375 C513.35696,390.00687 514.52267,389.7488 515.67322,389.78125 M545.76329,384.09 L537.20079,384.09 L532.38829,404.7775 C529.62957,416.63643 533.80634,423.26919 539.32579,423.7775 C542.61076,424.08003 545.99535,422.35493 548.33023,419.06596 L547.20079,423.09 L555.70079,423.09 L565.01329,384.09 L556.45079,384.09 L549.89273,411.70796 C547.86503,416.12473 544.04439,418.94076 540.76329,416.465 C538.10931,414.46243 539.76097,409.25358 540.88829,404.5275 L545.76329,384.09 M463.125,383.40625 C455.93939,383.74932 452.75701,386.31345 449.25,390.09375 C444.85824,394.82776 442.19997,401.01352 441.375,408.21875 C440.52947,415.60356 444.72557,423.74517 451.375,423.78125 C456.75995,423.80993 461.45192,422.15464 465.5,416.34375 L463.05676,413.12906 C461.40372,415.01424 460.23986,415.98258 458.39644,416.78384 C455.27512,418.14056 451.48107,419.23399 449.73995,415.69399 C449.17445,414.54425 449.16151,412.84294 449.3125,410.71875 C463.67766,411.06162 470.27579,400.56019 471.13756,396.15181 C472.74417,387.93325 468.44611,383.1522 463.125,383.40625 M463.5,397.46875 C461.95149,401.52548 455.46221,405.30317 449.75628,405.35447 C450.96482,396.91546 454.90118,389.33747 459.875,388.96875 C465.30667,388.56609 464.31332,395.33803 463.5,397.46875 M587.92935,383.40625 C580.74374,383.74932 577.56136,386.31345 574.05435,390.09375 C569.66259,394.82776 567.00432,401.01352 566.17935,408.21875 C565.33382,415.60356 569.52992,423.74517 576.17935,423.78125 C581.5643,423.80993 586.25627,422.15464 590.30435,416.34375 L587.86111,413.12906 C586.20807,415.01424 585.04421,415.98258 583.20079,416.78384 C580.07947,418.14056 576.28542,419.23399 574.5443,415.69399 C573.9788,414.54425 573.96586,412.84294 574.11685,410.71875 C588.48201,411.06162 595.08014,400.56019 595.94191,396.15181 C597.54852,387.93325 593.25046,383.1522 587.92935,383.40625 M588.30435,397.46875 C586.75584,401.52548 580.26656,405.30317 574.56063,405.35447 C575.76917,396.91546 579.70553,389.33747 584.67935,388.96875 C590.11102,388.56609 589.11767,395.33803 588.30435,397.46875 M354.84446,384.09 L346.28196,384.09 L341.46946,404.7775 C338.71074,416.63643 342.88751,423.26919 348.40696,423.7775 C351.69193,424.08003 355.07652,422.35493 357.4114,419.06596 L356.28196,423.09 L364.78196,423.09 L374.09446,384.09 L365.53196,384.09 L358.9739,411.70796 C356.9462,416.12473 353.12556,418.94076 349.84446,416.465 C347.19048,414.46243 348.84214,409.25358 349.96946,404.5275 L354.84446,384.09 M315.37813,423.7775 C328.83459,423.25143 333.07727,411.11019 335.12813,403.7425 C337.27177,396.04149 336.46284,383.53666 328.00313,383.43375 C324.90969,383.39612 322.00263,385.13735 319.90938,386.9925 L326.25313,360.6175 L317.62813,360.6175 L306.19063,408.055 C304.45111,415.86104 306.38136,423.3441 315.37813,423.7775 M314.09688,410.52375 L318.75313,391.6175 C330.88582,385.64728 328.57427,395.85903 326.62813,404.2425 C325.65159,408.44919 323.42559,414.5242 319.69063,416.77375 C314.56894,418.67038 312.88313,415.66403 314.09688,410.52375 M287.15663,416.63765 L300.625,360.715 L309.25,360.715 L294.375,423.09 C289.83883,422.57067 288.15033,419.55539 287.15663,416.63765 M494.4375,384.09375 C491.55707,384.26624 488.73052,385.9659 486.6875,388.84375 L487.8125,384.8125 L479.3125,384.8125 L470,423.8125 L478.5625,423.8125 L485.125,396.1875 C488.08663,390.36739 493.58787,391.43816 496.71859,393.15257 L499.90625,386.03125 C498.68568,384.92568 497.25033,384.26893 495.6875,384.125 C495.27688,384.08718 494.84899,384.06911 494.4375,384.09375 M279.34375,353.0625 C275.35785,353.05705 272.13945,354.9123 269.75,357.34375 C276.33396,354.89877 284.97578,355.42612 282.125,367.09375 L275.375,394.6875 C267.83796,396.40612 261.51167,396.33588 255.90625,394.78125 C256.435,393.02259 256.96397,391.34882 257.5,389.84375 C262.21528,376.6043 269.37175,365.06154 275.5,359.34375 C275.25117,359.31468 275.00252,359.28736 274.75,359.28125 C266.9218,359.09196 257.68856,368.03927 250.5,385.34375 C247.42153,392.75433 246.52867,401.53171 246.90625,412.0625 C246.9977,414.61292 245.96073,415.84375 242.75,415.84375 L233.8125,415.84375 C230.06115,415.84375 227.31254,418.60908 225.40625,421.6875 C224.45847,423.21805 223.15246,423.71875 221.40625,423.71875 L211.03125,423.71875 C206.57801,423.71875 202.74003,429.12391 201.59375,431.6875 L215.4375,431.71875 C218.9619,431.7267 222.90385,430.22707 223.84375,427.28125 C224.45839,425.35484 225.23385,423.84375 227.1875,423.84375 L237.25,423.84375 C246.53998,423.84375 250.83126,411.82928 254.15625,400.71875 C259.90669,403.23586 266.88029,402.82892 273.59375,401.96875 L270,416.71875 C270.94199,419.86009 274.014,423.09375 277.25,423.09375 L289.625,371.21875 C291.17932,364.70318 292.03438,357.19937 285.25,354.34375 C283.12988,353.45137 281.15552,353.06498 279.34375,353.0625 M243.78125,404.53125 C244.30746,389.04608 250.37557,371.20112 262.15257,362.43138 C242.39633,365.95552 238.5331,389.72437 243.78125,404.53125z" >
  </path>
  <path opacity="1" fill="rgb(245, 220, 15)" fill-opacity="1" fill-rule="evenodd" stroke="none" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" d="M140.80512,124.44307 C140.48954,116.8959 137.95674,109.29261 133.84446,102.14704 C145.40584,83.622779 143.15705,58.912707 127.06066,42.816361 C120.00663,35.762334 111.31952,31.366697 102.20147,29.624435 C104.88234,31.270212 107.41539,33.247368 109.73654,35.568516 C122.55956,48.391552 125.06105,67.622572 117.27168,82.966804 C109.71805,77.067306 100.88709,72.515567 91.572737,67.697681 C84.623787,64.10338 79.717594,57.217864 77.806247,40.45197 C71.216273,40.15034 66.12818,42.142295 62.316259,45.954216 C58.504317,49.766157 56.512369,54.854243 56.814014,61.444203 C73.579929,63.355529 80.465367,68.261662 84.059727,75.210691 C88.877607,84.525041 93.429347,93.356005 99.328847,100.90964 C83.984607,108.69901 64.753659,106.19759 51.930561,93.374496 C49.609412,91.053347 47.632256,88.520293 45.98648,85.839425 C47.728734,94.957482 52.124456,103.64465 59.178405,110.69861 C75.274701,126.79491 99.984907,129.04385 118.50909,117.48242 C125.65466,121.59469 133.25786,124.12744 140.80512,124.44307z" id="path3404" >
  </path>
  <path opacity="1" fill="rgb(245, 220, 15)" fill-opacity="1" stroke="none" stroke-width="11.78761100999999900" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="4" stroke-dasharray="none" stroke-opacity="1" d="M384.15625,22.34375 L384.15625,129.125 C381.52847,129.81543 378.98223,130.67432 376.5,131.6875 L376.5,46.03125 L364.5,46.03125 L364.5,138.1875 C358.29317,142.49038 352.89663,147.88692 348.59375,154.09375 L256.4375,154.09375 L256.4375,166.09375 L342.09375,166.09375 C341.08057,168.57598 340.22168,171.12222 339.53125,173.75 L232.75,173.75 L232.75,185.75 L337.625,185.5 C337.53694,186.85258 337.5,188.21954 337.5,189.59375 C337.5,190.96796 337.53694,192.33501 337.625,193.6875 L232.75,193.4375 L232.75,205.4375 L339.53125,205.4375 C340.22168,208.06458 341.08057,210.61248 342.09375,213.09375 L256.4375,213.09375 L256.4375,225.09375 L348.625,225.09375 C352.92561,231.28867 358.29982,236.67401 364.5,240.96875 L364.5,333.15625 L376.5,333.15625 L376.5,247.46875 C378.98223,248.48097 381.52847,249.34152 384.15625,250.03125 L384.15625,356.84375 L396.15625,356.84375 L395.90625,251.9375 C397.25883,252.02546 398.62579,252.0625 400,252.0625 C401.37421,252.0625 402.74117,252.02546 404.09375,251.9375 L403.84375,356.84375 L415.84375,356.84375 L415.84375,250.03125 C418.47153,249.34152 421.01777,248.48097 423.5,247.46875 L423.5,333.15625 L435.5,333.15625 L435.5,240.96875 C441.70018,236.67401 447.07439,231.28867 451.375,225.09375 L543.5625,225.09375 L543.5625,213.09375 L457.90625,213.09375 C458.91943,210.61248 459.77832,208.06458 460.46875,205.4375 L567.25,205.4375 L567.25,193.4375 L462.375,193.6875 C462.46306,192.33501 462.5,190.96796 462.5,189.59375 C462.5,188.21954 462.46306,186.85258 462.375,185.5 L567.25,185.75 L567.25,173.75 L460.46875,173.75 C459.77832,171.12222 458.91943,168.57598 457.90625,166.09375 L543.5625,166.09375 L543.5625,154.09375 L451.40625,154.09375 C447.10337,147.88692 441.70683,142.49038 435.5,138.1875 L435.5,46.03125 L423.5,46.03125 L423.5,131.6875 C421.01777,130.67432 418.47153,129.81543 415.84375,129.125 L415.84375,22.34375 L403.84375,22.34375 L404.09375,127.21875 C402.74117,127.13069 401.37421,127.09375 400,127.09375 C398.62579,127.09375 397.25883,127.13069 395.90625,127.21875 L396.15625,22.34375 L384.15625,22.34375 M400,139.0625 C427.94161,139.06249 450.5,161.65213 450.5,189.59375 C450.49998,217.53538 427.94162,240.09375 400,240.09375 C372.05837,240.09374 349.5,217.53538 349.5,189.59375 C349.5,161.65213 372.05838,139.0625 400,139.0625" id="path3423" >
  </path>
  <path id="path3458" fill="rgb(245, 220, 15)" fill-rule="evenodd" stroke="none" stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" fill-opacity="1" d="M371.23106,205.77851 C369.29484,210.95758 371.19003,215.67896 374.7666,218.15287 C381.53891,197.75345 387.50725,184.36933 394.74236,171.83738 L376.00403,171.83738 L370.87751,180.49944 L384.48931,180.49944 C380.0699,188.19847 375.31518,194.85415 371.23106,205.77851 M404.21875,170.25 C397.53833,170.25 391.24637,178.65645 390.15625,189 C389.06613,199.34356 393.60084,207.71874 400.28125,207.71875 C406.96167,207.71875 413.25362,199.34356 414.34375,189 C415.43387,178.65644 410.89917,170.25 404.21875,170.25 M401.46875,177.84375 C405.06775,177.84375 408.34127,182.85241 408.78125,189 C409.22124,195.14759 406.66151,200.125 403.0625,200.125 C399.46349,200.125 396.18998,195.14759 395.75,189 C395.31003,182.85241 397.86974,177.84375 401.46875,177.84375 M438.125,159.96875 C428.35549,167.45602 419.05386,175.60093 417.5,188.09375 C416.47978,196.29615 419.06754,207.70302 427.25,207.71875 C431.87039,207.72763 438.82592,205.12517 441.625,189.96875 C443.62668,179.13008 438.156,171.79085 433.375,170.46875 C435.93931,167.09182 437.87506,165.38544 441,162.84375 L438.125,159.96875 M436.25,189.90625 C436.83451,197.46827 431.6068,203.1044 427.125,198.53125 C423.58711,194.92125 421.24957,186.94715 428,177.96875 C434.44668,178.06469 435.85259,184.76478 436.25,189.90625 M362.83417,206.83917 L369.3749,171.92577 L362.21545,171.92577 L356.90518,199.89321 C355.86506,205.37119 359.31092,206.83917 362.83417,206.83917z" >
  </path>
</svg>\
`
};

