const API = {
  URL: 'https://api.openweathermap.org/data/2.5/weather',
  KEY: '&lang=kr&appid=8d0fba684264cc55f9b735566611ac78'
};

const CITIES = {
  seoul: '서울',
  incheon: '인천',
  busan: '부산',
  daegu: '대구',
  gwangju: '광주',
  daejeon: '대전',
  ulsan: '울산',
  gapyeong: '가평군',
  goyang: '고양시',
  gwacheon: '과천시',
  kwangmyong: '광명시',
  guri: '구리시',
  gunpo: '군포시',
  gimpo: '김포시',
  namyangju: '남양주시',
  dongducheon: '동두천시',
  bucheon: '부천시',
  seongnam: '성남시',
  suwon: '수원시',
  siheung: '시흥시',
  ansan: '안산시',
  anseong: '안성시',
  anyang: '안양시',
  yangju: '양주군',
  yangpyeong: '양평군',
  yeoju: '여주군',
  yeoncheon: '연천군',
  osan: '오산시',
  yongin: '용인시',
  uiwang: '의왕시',
  uijeongbu: '의정부시',
  icheon: '이천시',
  paju: '파주시',
  pyeongtaek: '평택시',
  pocheon: '포천군',
  hanam: '하남시',
  hwaseong: '화성시',
  gangneung: '강릉시',
  goseong: '고성군',
  donghae: '동해시',
  samcheok: '삼척시',
  sokcho: '속초시',
  yanggu: '양구군',
  yangyang: '양양군',
  yeongwol: '영월군',
  wonju: '원주시',
  inje: '인제군',
  jeongseon: '정선군',
  chuncheon: '춘천시',
  taebaek: '태백시',
  pyeongchang: '평창군',
  hongcheon: '홍천군',
  hwacheon: '화천군',
  hoengseong: '횡성군',
  geoje: '거제시',
  geochang: '거창군',
  gimhae: '김해시',
  namhae: '남해군',
  masan: '마산시',
  miryang: '밀양시',
  sacheon: '사천시',
  sancheong: '산청군',
  yangsan: '양산시',
  uiryeong: '의령군',
  jinju: '진주시',
  jinhae: '진해시',
  changnyeong: '창녕군',
  changwon: '창원시',
  tongyeong: '통영시',
  hadong: '하동군',
  haman: '함안군',
  hamyang: '함양군',
  hapcheon: '합천군',
  gyeongsan: '경산시',
  gyeongju: '경주시',
  goreong: '고령군',
  gumi: '구미시',
  gunwi: '군위군',
  gimcheon: '김천시',
  mungyeong: '문경시',
  bonghwa: '봉화군',
  sangju: '상주시',
  seongju: '성주군',
  andong: '안동시',
  yeongdeok: '영덕군',
  yeongyang: '영양군',
  yeongju: '영주시',
  yeongcheon: '영천시',
  yecheon: '예천군',
  uiseong: '의성군',
  cheongdo: '청도군',
  cheongsong: '청송군',
  chilgok: '칠곡군',
  pohang: '포항시',
  gangjin: '강진군',
  goheung: '고흥군',
  gokseong: '곡성군',
  gwangyang: '광양시',
  gurye: '구례군',
  naju: '나주시',
  damyang: '담양군',
  mokpo: '목포시',
  muan: '무안군',
  boseong: '보성군',
  suncheon: '순천시',
  shinan: '신안군',
  yeosu: '여수시',
  yeonggwang: '영광군',
  jangseong: '장성군',
  jangheung: '장흥군',
  jindo: '진도군',
  hampyeong: '함평군',
  haenam: '해남군',
  hwansun: '화순군',
  gochang: '고창군',
  gunsan: '군산시',
  gimje: '김제시',
  namwon: '남원시',
  muju: '무주군',
  buan: '부안군',
  sunchang: '순창군',
  wanju: '완주군',
  iksan: '익산시',
  jangsu: '장수군',
  jeonju: '전주시',
  jeongeup: '정읍시',
  jinan: '진안군',
  gongju: '공주시',
  geumsan: '금산군',
  nonsan: '논산시',
  dangjin: '당진군',
  boryung: '보령시',
  buyeo: '부여군',
  seosan: '서산시',
  asan: '아산시',
  yeongi: '연기군',
  yesan: '예산군',
  cheonan: '천안시',
  cheongyang: '청양군',
  taean: '태안군',
  hongseong: '홍성군',
  gwoisan: '괴산군',
  danyang: '단양군',
  yeongdong: '영동군',
  okcheon: '옥천군',
  umseong: '음성군',
  jecheon: '제천시',
  jincheon: '진천군',
  cheongwon: '청원군',
  cheongju: '청주시',
  chungju: '충주시',
  jeju: '제주시'
};

const FIRST_KEY = {
  ㄱ: 'KR_1100',
  ㄴ: 'KR_1102',
  ㄷ: 'KR_1103',
  ㅁ: 'KR_1106',
  ㅂ: 'KR_1107',
  ㅅ: 'KR_1109',
  ㅇ: 'KR_110B',
  ㅈ: 'KR_110C',
  ㅊ: 'KR_110E',
  ㅌ: 'KR_1110',
  ㅍ: 'KR_1111',
  ㅎ: 'KR_1112'
};

const FIRST_KEY_CITIES = {
  KR_1100: {
    gwangju: '광주',
    gapyeong: '가평군',
    goyang: '고양시',
    gwacheon: '과천시',
    gwangmyeong: '광명시',
    guri: '구리시',
    gunpo: '군포시',
    gimpo: '김포시',
    gangneung: '강릉시',
    goseong: '고성군',
    geoje: '거제시',
    geochang: '거창군',
    gimhae: '김해시',
    gumi: '구미시',
    gunwi: '군위군',
    gimcheon: '김천시',
    gangjin: '강진군',
    goheung: '고흥군',
    gokseong: '곡성군',
    gwangyang: '광양시',
    gurye: '구례군',
    gochang: '고창군',
    gunsan: '군산시',
    gimje: '김제시',
    gongju: '공주시',
    geumsan: '금산군',
    gwoisan: '괴산군'
  },
  KR_1102: {
    namyangju: '남양주시',
    namhae: '남해군',
    naju: '나주시',
    namwon: '남원시',
    nonsan: '논산시'
  },
  KR_1103: {
    daegu: '대구',
    daejeon: '대전',
    dongducheon: '동두천시',
    donghae: '동해시',
    damyang: '담양군',
    dangjin: '당진군'
  },
  KR_1106: {
    masan: '마산시',
    mungyeong: '문경시',
    miryang: '밀양시',
    mokpo: '목포시',
    muan: '무안군',
    muju: '무주군'
  },
  KR_1107: {
    busan: '부산',
    bucheon: '부천시',
    bonghwa: '봉화군',
    boseong: '보성군',
    buan: '부안군',
    buyeo: '부여군'
  },
  KR_1109: {
    seoul: '서울',
    suwon: '수원시',
    siheung: '시흥시',
    samcheok: '삼척시',
    sokcho: '속초시',
    sacheon: '사천시',
    sancheong: '산청군',
    sangju: '상주시',
    seongju: '성주군',
    suncheon: '순천시',
    shinan: '신안군',
    sunchang: '순창군',
    seosan: '서산시'
  },
  KR_110B: {
    incheon: '인천',
    ulsan: '울산',
    ansan: '안산시',
    anseong: '안성시',
    anyang: '안양시',
    yangju: '양주군',
    yangpyeong: '양평군',
    yeoju: '여주군',
    yeoncheon: '연천군',
    osan: '오산시',
    yongin: '용인시',
    uiwang: '의왕시',
    uijeongbu: '의정부시',
    icheon: '이천시',
    yanggu: '양구군',
    yangyang: '양양군',
    yeongwol: '영월군',
    wonju: '원주시',
    inje: '인제군',
    yangsan: '양산시',
    uiryeong: '의령군',
    andong: '안동시',
    yeongdeok: '영덕군',
    yeongyang: '영양군',
    yeongju: '영주시',
    yeongcheon: '영천시',
    yecheon: '예천군',
    uiseong: '의성군',
    yeosu: '여수시',
    yeonggwang: '영광군',
    wanju: '완주군',
    iksan: '익산시',
    asan: '아산시',
    yeongi: '연기군',
    yesan: '예산군',
    yeongdong: '영동군',
    okcheon: '옥천군',
    umseong: '음성군'
  },
  KR_110C: {
    jeongseon: '정선군',
    jinju: '진주시',
    jinhae: '진해시',
    jangseong: '장성군',
    jangheung: '장흥군',
    jindo: '진도군',
    jangsu: '장수군',
    jeonju: '전주시',
    jeongeup: '정읍시',
    jinan: '진안군'
  },
  KR_110E: {
    chuncheon: '춘천시',
    changnyeong: '창녕군',
    changwon: '창원시',
    cheongdo: '청도군',
    cheongsong: '청송군',
    chilgok: '칠곡군',
    cheonan: '천안시',
    cheongyang: '청양군',
    cheongwon: '청원군',
    cheongju: '청주시',
    chungju: '충주시'
  },
  KR_1110: {
    taebaek: '태백시',
    tongyeong: '통영시',
    taean: '태안군'
  },
  KR_1111: {
    paju: '파주시',
    pyeongtaek: '평택시',
    pocheon: '포천군',
    pohang: '포항시'
  },
  KR_1112: {
    hanam: '하남시',
    hwaseong: '화성시',
    hongcheon: '홍천군',
    hwacheon: '화천군',
    hoengseong: '횡성군',
    hadong: '하동군',
    haman: '함안군',
    hamyang: '함양군',
    hapcheon: '합천군',
    hwansun: '화순군',
    hongseong: '홍성군'
  }
}

const TIME_TEXT = {
  MORNING: ['오전', '아침'],
  AFTERNOON: ['오후', '점심'],
  DINNER: '저녁',
  NIGHT: '밤',
  DAWN: '새벽'
};

const TEMP = {
  ABSOLUTE: 273
};

const CLOTHING = {
  5: [
    {TEMP: 'FREEZING'},
    {CLOTHES: ['야상', '패딩', '목도리', '누빔옷', '두꺼운 코트', '기모']}
  ],
  9: [
    {TEMP: 'COLD'},
    {CLOTHES: ['코트', '가죽자켓', '히트텍', '기모']}
  ],
  11: [
    {TEMP: 'CHILLY'},
    {CLOTHES: ['트렌치코트', '간절기 야상', '여러겹 껴입기', '기모바지']}
  ],
  16: [
    {TEMP: 'COOL'},
    {CLOTHES: ['자켓', '가디건', '청자켓', '니트', '스타킹', '청바지']}
  ],
  19: [
    {TEMP: 'MILD'},
    {CLOTHES: ['얇은 가디건', '얇은 니트', '맨투맨', '후드', '면바지', '청바지', '슬랙스']}
  ],
  22: [
    {TEMP: 'COZY'},
    {CLOTHES: ['긴팔티', '블라우스', '면바지', '슬랙스']}
  ],
  27: [
    {TEMP: 'WARM'},
    {CLOTHES: ['반팔', '얇은 셔츠', '반바지', '면바지']}
  ],
  Infinity: [
    {TEMP: 'HOT'},
    {CLOTHES: ['민소매', '반팔', '반바지', '짧은 치마', '린넨소재 옷']}
  ]
};

const TITLE = {
  SUMMER: '여름',
  MIDDLE: '봄/가을',
  WINTER: '겨울'
};

const INITIAL_DASH = {
  DOUBLE: '--',
  QUARTER: '----'
};

const INITIAL_WEATHER = {
  TEMPS: {
    NOW: '',
    MIN: '',
    MAX: ''
  },
  LOCATION: 'seoul',
  WEATHER: ''
};

const INITIAL_TIME = {
  hour: '',
  minute: ''
}

export {
  API,
  CITIES,
  FIRST_KEY,
  FIRST_KEY_CITIES,
  TIME_TEXT,
  TEMP,
  CLOTHING,
  TITLE,
  INITIAL_DASH,
  INITIAL_WEATHER,
  INITIAL_TIME
}