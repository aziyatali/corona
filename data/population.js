var svgMapDataPopulation = {
  data: {
    died: {
      name: 'Каза болду:',
      thousandSeparator: ','
    },
    infected: {
      name: 'Ооруп жатат:',
      thousandSeparator: ','
    },
    cured: {
      name: 'Даарыланды:',
      thousandSeparator: ',',
      thresholdMax: 280,
      thresholdMin: 20
    }
  },
  applyData: 'cured',
  viewData: 'died',
  view2Data: 'infected',
  values: {
    AF: {died: 0, infected: 0, cured: 0},
    AX: {died: 0, infected: 0, cured: 0},
    AL: {died: 0, infected: 0, cured: 0},
    DZ: {died: 0, infected: 0, cured: 0},
    AS: {died: 0, infected: 0, cured: 0},
    AD: {died: 0, infected: 0, cured: 0},
    AO: {died: 1246700, infected: 29250009, cured: 23},
    AI: {died: 96, infected: 13452, cured: 140},
    AQ: {died: 14000000, infected: 1106, cured: 0.00008},
    AG: {died: 442, infected: 86295, cured: 195},
    AR: {died: 0, infected: 0, cured: 0},
    AM: {died: 29743, infected: 2969800, cured: 100},
    AW: {died: 180, infected: 105668, cured: 587},
    AU: {died: 7692024, infected: 25119327, cured: 3},
    AT: {died: 83879, infected: 8857960, cured: 106},
    AZ: {died: 86600, infected: 9943226, cured: 115},
    BS: {died: 13940, infected: 386870, cured: 28},
    BH: {died: 778, infected: 1566993, cured: 2013},
    BD: {died: 143998, infected: 165508286, cured: 1149},
    BB: {died: 430, infected: 286388, cured: 666},
    BY: {died: 207600, infected: 9477100, cured: 46},
    BE: {died: 30528, infected: 11428164, cured: 374},
    BZ: {died: 22965, infected: 398050, cured: 17},
    BJ: {died: 112622, infected: 11362269, cured: 101},
    BM: {died: 52, infected: 63779, cured: 1227},
    BT: {died: 38394, infected: 806364, cured: 21},
    BO: {died: 1098581, infected: 11307314, cured: 10},
    BA: {died: 51209, infected: 3511372, cured: 69},
    BW: {died: 581730, infected: 2024904, cured: 3.5},
    BR: {died: 8515767, infected: 209828546, cured: 25},
    IO: {died: 60, infected: 2500, cured: 41},
    VG: {died: 151, infected: 29537, cured: 196},
    BN: {died: 5765, infected: 421300, cured: 73},
    BG: {died: 111002, infected: 7050034, cured: 64},
    BF: {died: 270764, infected: 20244080, cured: 75},
    BI: {died: 27816, infected: 10681186, cured: 384},
    KH: {died: 181035, infected: 16316136, cured: 90},
    CM: {died: 466050, infected: 23794164, cured: 51},
    CA: {died: 9984670, infected: 37279841, cured: 4},
    CV: {died: 4033, infected: 544081, cured: 133},
    BQ: {died: 322, infected: 24593, cured: 76},
    KY: {died: 259, infected: 55456, cured: 214},
    CF: {died: 622436, infected: 4737423, cured: 8},
    TD: {died: 1284000, infected: 14900000, cured: 12},
    CL: {died: 756096, infected: 17373831, cured: 23},
    CN: {died: 9640821, infected: 1395098219, cured: 145},
    CX: {died: 137, infected: 2072, cured: 15},
    CC: {died: 14, infected: 544, cured: 39},
    CO: {died: 1141748, infected: 50030989, cured: 44},
    KM: {died: 1861, infected: 850688, cured: 457},
    CG: {died: 342000, infected: 5399895, cured: 16},
    CK: {died: 237, infected: 15200, cured: 64},
    CR: {died: 51100, infected: 5003393, cured: 98},
    HR: {died: 56542, infected: 4105493, cured: 73},
    CU: {died: 109884, infected: 11221060, cured: 102},
    CW: {died: 363.91, infected: 161573, cured: 444},
    CY: {died: 5896, infected: 854800, cured: 145},
    CZ: {died: 78867, infected: 10625449, cured: 135},
    CD: {died: 2345095, infected: 84004989, cured: 36},
    DK: {died: 43098, infected: 5806015, cured: 135},
    DJ: {died: 23000, infected: 1049001, cured: 46},
    DM: {died: 739, infected: 71293, cured: 96},
    DO: {died: 47875, infected: 10266149, cured: 214},
    EC: {died: 276841, infected: 17111861, cured: 62},
    EG: {died: 1002450, infected: 97869192, cured: 98},
    SV: {died: 21040, infected: 6643359, cured: 316},
    GQ: {died: 28051, infected: 1222442, cured: 44},
    ER: {died: 121100, infected: 5187948, cured: 43},
    EE: {died: 45339, infected: 1315635, cured: 29},
    ET: {died: 1063652, infected: 107534882, cured: 101},
    FK: {died: 12173, infected: 2563, cured: 0.2},
    FO: {died: 1399, infected: 50844, cured: 34},
    FM: {died: 701, infected: 105300, cured: 150},
    FJ: {died: 18333, infected: 884887, cured: 48},
    FI: {died: 338424, infected: 5520535, cured: 16},
    FR: {died: 543965, infected: 67348000, cured: 124},
    GF: {died: 86504, infected: 244118, cured: 2.8},
    PF: {died: 3521, infected: 277100, cured: 79},
    TF: {died: 7829, infected: 310, cured: 0.04},
    GA: {died: 267667, infected: 2067561, cured: 8},
    GM: {died: 10690, infected: 2163765, cured: 202},
    GE: {died: 69700, infected: 3729600, cured: 54},
    DE: {died: 357168, infected: 82793800, cured: 232},
    GH: {died: 238533, infected: 29614337, cured: 124},
    GI: {died: 6.8, infected: 33140, cured: 4874},
    GR: {died: 131957, infected: 10768193, cured: 82},
    GL: {died: 2166000, infected: 55877, cured: 0.03},
    GD: {died: 344, infected: 103328, cured: 300},
    GP: {died: 1628.4, infected: 395725, cured: 243},
    GU: {died: 541, infected: 172400, cured: 319},
    GT: {died: 108889, infected: 17302084, cured: 159},
    GN: {died: 245857, infected: 11883516, cured: 48},
    GW: {died: 36125, infected: 1553822, cured: 43},
    GY: {died: 214999, infected: 782225, cured: 4},
    HT: {died: 27065, infected: 11112945, cured: 411},
    HN: {died: 112492, infected: 9012229, cured: 80},
    HK: {died: 1106.4, infected: 7448900, cured: 6732},
    HU: {died: 93029, infected: 9771000, cured: 105},
    IS: {died: 102775, infected: 353070, cured: 3.4},
    IN: {died: 3287240, infected: 1339374357, cured: 407},
    ID: {died: 1904569, infected: 265015300, cured: 139},
    IR: {died: 1648195, infected: 81942410, cured: 50},
    IQ: {died: 387267, infected: 34255250, cured: 88},
    IE: {died: 70273, infected: 4792500, cured: 68},
    IM: {died: 572, infected: 83314, cured: 146},
    IL: {died: 22072, infected: 8944395, cured: 405},
    IT: {died: 301308, infected: 60404843, cured: 200},
    CI: {died: 322921, infected: 24295000, cured: 75},
    JM: {died: 10991, infected: 2730894, cured: 248},
    JP: {died: 377944, infected: 126440000, cured: 335},
    JE: {died: 116, infected: 104200, cured: 898},
    JO: {died: 89342, infected: 10280040, cured: 115},
    KZ: {died: 2724900, infected: 18311700, cured: 7},
    KE: {died: 581834, infected: 50950879, cured: 88},
    KI: {died: 811, infected: 120100, cured: 148},
    KW: {died: 17818, infected: 4007000, cured: 225},
    KG: {died: 199945, infected: 6309300, cured: 32},
    LA: {died: 236800, infected: 6492400, cured: 27},
    LV: {died: 64562, infected: 1922600, cured: 30},
    LB: {died: 10452, infected: 6093509, cured: 597},
    LS: {died: 30355, infected: 2263010, cured: 75},
    LR: {died: 97036, infected: 4382387, cured: 45},
    LY: {died: 1770060, infected: 6470956, cured: 4},
    LI: {died: 160, infected: 38111, cured: 238},
    LT: {died: 65300, infected: 2797184, cured: 43},
    LU: {died: 2586, infected: 602005, cured: 233},
    MO: {died: 32.9, infected: 658900, cured: 20027},
    MK: {died: 25713, infected: 2075301, cured: 81},
    MG: {died: 587041, infected: 26262810, cured: 45},
    MW: {died: 118484, infected: 19164728, cured: 162},
    MY: {died: 330803, infected: 32529280, cured: 98},
    MV: {died: 298, infected: 378114, cured: 1269},
    ML: {died: 1248574, infected: 19107706, cured: 15},
    MT: {died: 315, infected: 475701, cured: 1510},
    MH: {died: 181, infected: 55500, cured: 307},
    MQ: {died: 1128, infected: 376847, cured: 334},
    MR: {died: 1030700, infected: 3461041, cured: 3.4},
    MU: {died: 2040, infected: 1265577, cured: 620},
    YT: {died: 374, infected: 256518, cured: 686},
    MX: {died: 1967138, infected: 124737789, cured: 63},
    MD: {died: 33843, infected: 3547539, cured: 105},
    MC: {died: 2.02, infected: 38300, cured: 18960},
    MN: {died: 1564100, infected: 3000000, cured: 1.9},
    ME: {died: 13812, infected: 622387, cured: 45},
    MS: {died: 102, infected: 4922, cured: 48},
    MA: {died: 446550, infected: 34840130, cured: 78},
    MZ: {died: 799380, infected: 28861863, cured: 36},
    MM: {died: 676577, infected: 53862731, cured: 80},
    NA: {died: 825118, infected: 2413643, cured: 2.9},
    NR: {died: 21, infected: 11000, cured: 524},
    NP: {died: 147181, infected: 29218867, cured: 199},
    NL: {died: 41526, infected: 17269908, cured: 416},
    NC: {died: 18575, infected: 258958, cured: 14},
    NZ: {died: 270467, infected: 4917617, cured: 18},
    NI: {died: 121428, infected: 6262703, cured: 52},
    NE: {died: 1186408, infected: 21466863, cured: 18},
    NG: {died: 923768, infected: 195875237, cured: 212},
    NU: {died: 261, infected: 1613, cured: 6},
    NF: {died: 34.6, infected: 1748, cured: 50},
    KP: {died: 120540, infected: 25610672, cured: 212},
    MP: {died: 457, infected: 53883, cured: 118},
    NO: {died: 323782, infected: 5312343, cured: 16},
    OM: {died: 309500, infected: 4183841, cured: 14},
    PK: {died: 803940, infected: 202620217, cured: 252},
    PW: {died: 488, infected: 20901, cured: 43},
    PS: {died: 6020, infected: 4816503, cured: 800},
    PA: {died: 74177, infected: 4158783, cured: 56},
    PG: {died: 462840, infected: 8558800, cured: 18},
    PY: {died: 406752, infected: 7052983, cured: 17},
    PE: {died: 1285216, infected: 32162184, cured: 25},
    PH: {died: 300000, infected: 106738440, cured: 356},
    PN: {died: 47.3, infected: 56, cured: 1.2},
    PL: {died: 312685, infected: 38433600, cured: 123},
    PT: {died: 92090, infected: 10291027, cured: 112},
    PR: {died: 8868, infected: 3337177, cured: 376},
    QA: {died: 11571, infected: 2700390, cured: 233},
    RE: {died: 2503.7, infected: 850996, cured: 340},
    RO: {died: 238391, infected: 19524000, cured: 82},
    RU: {died: 17125242, infected: 146877088, cured: 9},
    RW: {died: 26338, infected: 12001136, cured: 456},
    SH: {died: 122, infected: 4534, cured: 37},
    KN: {died: 270, infected: 51970, cured: 192},
    LC: {died: 617, infected: 179667, cured: 291},
    PM: {died: 242, infected: 6081, cured: 25},
    VC: {died: 389, infected: 109557, cured: 282},
    WS: {died: 2831, infected: 199052, cured: 70},
    SM: {died: 61, infected: 33326, cured: 546},
    ST: {died: 1001, infected: 187356, cured: 187},
    SA: {died: 2149690, infected: 33413660, cured: 16},
    SN: {died: 196722, infected: 15726037, cured: 80},
    RS: {died: 77474, infected: 6925188, cured: 89},
    SC: {died: 455, infected: 95821, cured: 211},
    SL: {died: 71740, infected: 7075641, cured: 99},
    SG: {died: 719.9, infected: 5612300, cured: 7796},
    SX: {died: 34, infected: 40535, cured: 1192},
    SK: {died: 49036, infected: 5443120, cured: 111},
    SI: {died: 20273, infected: 2066880, cured: 102},
    SB: {died: 28370, infected: 682500, cured: 24},
    SO: {died: 461537, infected: 11234820, cured: 24},
    ZA: {died: 1220813, infected: 57725600, cured: 47},
    GS: {died: 3903, infected: 35, cured: 0.009},
    KR: {died: 100210, infected: 51635256, cured: 515},
    SS: {died: 644329, infected: 12575714, cured: 20},
    ES: {died: 505990, infected: 46659302, cured: 92},
    LK: {died: 65610, infected: 21670000, cured: 330},
    SD: {died: 1839542, infected: 40782742, cured: 22},
    SR: {died: 163820, infected: 568301, cured: 3.5},
    SJ: {died: 61399, infected: 2655, cured: 0.04},
    SZ: {died: 17364, infected: 1159250, cured: 67},
    SE: {died: 450295, infected: 10211424, cured: 23},
    CH: {died: 41285, infected: 8508904, cured: 206},
    SY: {died: 185180, infected: 18284407, cured: 99},
    TW: {died: 36197, infected: 23577271, cured: 651},
    TJ: {died: 143100, infected: 8931000, cured: 62},
    TZ: {died: 881288, infected: 54199163, cured: 61},
    TH: {died: 513120, infected: 69183173, cured: 135},
    TL: {died: 14919, infected: 1167242, cured: 78},
    TG: {died: 56600, infected: 7352000, cured: 130},
    TK: {died: 10, infected: 1499, cured: 150},
    TO: {died: 720, infected: 100651, cured: 140},
    TT: {died: 5155, infected: 1359193, cured: 264},
    TN: {died: 163610, infected: 11446300, cured: 70},
    TR: {died: 783562, infected: 80810525, cured: 103},
    TM: {died: 491210, infected: 5758000, cured: 12},
    TC: {died: 497, infected: 37910, cured: 76},
    TV: {died: 26, infected: 10200, cured: 392},
    UG: {died: 241551, infected: 38823100, cured: 161},
    UA: {died: 603000, infected: 42234014, cured: 70},
    AE: {died: 83600, infected: 9541615, cured: 114},
    GB: {died: 242910, infected: 66040229, cured: 272},
    US: {died: 9833517, infected: 328150370, cured: 33},
    UM: {died: 34.2, infected: 300, cured: 8.8},
    VI: {died: 352, infected: 106405, cured: 302},
    UY: {died: 176215, infected: 2990452, cured: 17},
    UZ: {died: 447400, infected: 32653900, cured: 73},
    VU: {died: 12281, infected: 304500, cured: 25},
    VA: {died: 0.44, infected: 1000, cured: 2273},
    VE: {died: 916445, infected: 31828110, cured: 35},
    VN: {died: 331212, infected: 94660000, cured: 286},
    WF: {died: 274, infected: 13135, cured: 48},
    EH: {died: 252120, infected: 567421, cured: 2.3},
    YE: {died: 455000, infected: 28915284, cured: 64},
    ZM: {died: 752612, infected: 16405229, cured: 22},
    ZW: {died: 390757, infected: 14848905, cured: 38}
  }
}