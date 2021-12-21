dataSetVersion = "2021-12-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by generation",
    key: "generation",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "Hololive 0th Generation", key: "0th" },
      { name: "Hololive 1st Generation", key: "1st" },
      { name: "Hololive 2nd Generation", key: "2nd" },
      { name: "Hololive GAMERS", key: "GAMERS" },
      { name: "Hololive 3rd Generation", key: "3rd" },
      { name: "Hololive 4th Generation", key: "4th" },
      { name: "Hololive 5th Generation", key: "5th" },
      { name: "Holostars", key: "holostars" },
      { name: "Hololive Indonesia", key: "indonesia" },
      { name: "Hololive English", key: "english" },
      { name: "Hololive China", key: "china" },
    ]
  },
  {
    name: "Remove Collab Songs",
    key: "collab",
    tooltip: "Check this to remove songs that include more than 1 member.",
    checked: false,
  },
  {
    name: "Remove Solo Songs",
    key: "solo",
    tooltip: "Check this to remove solo songs.",
    checked: false,
  },
  {
    name: "Remove Non-Girls' Songs",
    key: "notgirl",
    tooltip: "Check this to remove all songs from non-girl members.",
    checked: true
  },
  {
    name: "Remove Non-JP Members' Songs",
    key: "nonjp",
    tooltip: "Check this to remove all songs from non-jp members.",
    checked: false
  },
  {
    name: "Remove Former Members' Songs",
    key: "former",
    tooltip: "Check this to remove all songs from former members",
    checked: false
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Airani Iofifteen- Bersama Ioforia",
    img: "https://i.imgur.com/U5jfmrV.jpg",
    opts: {
      solo: true ,
      nonjp: true ,
      generation: ["indonesia"]
    }
  },
  {
    name: "Akai Haato - RED HEART",
    img: "https://i.imgur.com/MN2R9kD.jpg",
    opts: {
      solo: true ,
      generation: ["1st"]
    }
  },
  {
    name: "Akai Haato - Infinity",
    img: "https://i.imgur.com/JBFEP8D.jpg",
    opts: {
      solo: true ,
      generation: ["1st"]
    },
  },
  {
    name: "Aki Rosenthal - Nekoze Punch!!",
    img: "https://i.imgur.com/kCiBo1a.jpg",
    opts: {
      solo: true ,
      generation: ["1st"]
    }
  },
  {
    name: "Aki Rosenthal - Chocolate Pandemic",
    img: "https://i.imgur.com/HWJW46e.jpg",
    opts: {
      solo: true ,
      generation: ["1st"]
    }
  },
  {
    name: "Aki Rosenthal - SHALLYS",
    img: "https://i.imgur.com/ii4QTD0.jpg",
    opts: {
      solo: true ,
      generation: ["1st"]
    }
  },
  {
    name: "Aki Rosenthal - Heroine Audition",
    img: "",
    opts: {
      solo: true ,
      generation: ["1st"]
    }
  },
  {
    name: "Amane Kanata - Tokusya-Seizon Wonder-la-der!!",
    img: "",
    opts: {
      solo: true ,
      generation: ["4th"]
    }
  },
  {
    name: "Arurandeisu - W.I.M",
    img: "",
    opts: {
      solo: true ,
      notgirl: true ,
      generation: ["holostars"]
    }
  },
  {
    name: "Astel Leda - Mirai Ginga to Kiteki no Melody",
    img: "",
    opts: {
      solo: true ,
      notgirl: true ,
      generation: ["holostars"]
    }
  },
  {
    name: "AZKi - Creating world",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - RealMelancholy",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Felicia",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - I can't control myself",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Hikari no Machi",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Starry Regrets",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Fake.Fake.Fake",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Inochi",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Shit Days",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Sayonara Hero",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Heartbeat",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - ERROR",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - from A to Z",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - LiE, LiE, LiE, LiE",
    img: "6KyhLqE.png",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Sekai wa Meguri, Yagate Kimi No Mono ni Aru",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Frontier Locus",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Chiisana Kokoro ga Kimeta Koto",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - without U",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Midnight Song",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Ziko Allergies",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Nonbiri to,",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Reflection",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Niji wo Kakenukete",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - kotonoha",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Kurogane no Moribito",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Eternity Bright",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Hikari",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Nero Naraba Ikeru",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Intersection",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Take me to Heaven",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Aoi Yume",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - in this world",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Hakkotai Solar Cycle",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Yamanai Ame",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Rotate Repeated",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - petal dance",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Unmei no Arika",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Saikyo x Saijaku Girl",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - nanawari enemy",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "AZKi - Gamen no nakano kimi ga suki",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Civia - Lonely Christmas",
    img: "",
    opts: {
      former: true ,
      nonjp: true ,
      solo: true ,
      generation: ["china"]
    }
  },
  {
    name: "Gawr Gura - REFLECT",
    img: "",
    opts: {
      solo: true ,
      nonjp: true ,
      generation: ["english"]
    }
  },
  {
    name: "Hoshimachi Suisei - comet",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Tenkyuu, Suisei wa yoru wo mataide",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - NEXT COLOR PLANET",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - GHOST",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Bluerose",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Kakero",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Jibunkatte Dazzling",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Bye Bye Rainy",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Stellar Stellar",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Andromeda",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Je t'aime",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Hoshimachi Suisei - Starry Jet",
    img: "",
    opts: {
      solo: true ,
      generation: ["0th"]
    }
  },
  {
    name: "Houshou Marine - Ahoy!! Warera Houshou Kaizoku-dan☆",
    img: "",
    opts: {
      solo: true ,
      generation: ["3rd"]
    }
  },
  {
    name: "Houshou Marine - Unison",
    img: "",
    opts: {
      solo: true ,
      generation: ["3rd"]
    }
  },
  {
    name: "Inugami Korone - Saikyo Tensai★Wonderful♡World of Korone ",
    img: "",
    opts: {
      solo: true ,
      generation: ["GAMERS"]
    }
  },
  {
    name: "IRyS - Caesura of Despair",
    img: "",
    opts: {
      solo: true ,
      nonjp: true ,
      generation: ["english"]
    }
  },
  {
    name: "IRyS - diorama",
    img: "",
    opts: {
      solo: true ,
      nonjp: true ,
      generation: ["english"]
    } 
  },
  {
    name: "IRyS - HERE COMES HOPE",
    img: "",
    opts: {
      solo: true ,
      nonjp: true ,
      generation: ["english"]
    } 
  },
  {
    name: "Kanade Izuru - Monologue in a Row",
    img: "",
    opts: {
      solo: true ,
      notgirl: true ,
      generation: ["holostars"]
    }
  },
  {
    name: "Kanade Izuru - Crash!",
    img: "",
    opts: {
      solo: true ,
      notgirl: true ,
      generation: ["holostars"]
    }
  },
  {
    name: "Kiryu Coco - Weather Hackers☆",
    img: "",
    opts: {
      solo: true ,
      former: true ,
      generation: ["4th"]
    }
  },
  {
    name: "Kishido Temma - ShootingStar",
    img: "",
    opts: {
      solo: true ,
      notgirl: true ,
      generation: ["holostars"]
    }
  },
  {
    name: "Kureiji Ollie - Aniki he",
    img: "",
    opts: {
      solo: true ,
      nonjp: true ,
      generation: ["indonesia"]
    }
  },
  {
    name: "Minato Aqua - For The Win",
    img: "",
    opts: {
      solo: true ,
      generation: ["2nd"]
    }
  },
  {
    name: "Minato Aqua - #AquaIroPalette",
    img: "",
    opts: {
      solo: true ,
      generation: ["2nd"]
    }
  },
  {
    name: "Minato Aqua - Youkoso! Sweet Carnival",
    img: "",
    opts: {
      solo: true ,
      generation: ["2nd"]
    }
  },
  {
    name: "Minato Aqua - Kaisou Ressha",
    img: "",
    opts: {
      solo: true ,
      generation: ["2nd"]
    }
  },
  {
    name: "Minato Aqua - aqua iro palette",
    img: "",
    opts: {
      solo: true ,
      generation: ["2nd"]
    }
  },
  {
    name: "Minato Aqua - Kira Kira",
    img: "",
    opts: {
      solo: true ,
      generation: ["2nd"]
    }
  },
  {
    name: "Momosuzu Nene - NENENENENENENENE! DAIBAKUSOU",
    img: "",
    opts: {
      solo: true ,
      generation: ["5th"]
    }
  },
  {
    name: "Momosuzu Nene - Lunch with me",
    img: "",
    opts: {
      solo: true ,
      generation: ["5th"]
    }
  },
  {
    name: "Momosuzu Nene - momonone",
    img: "",
    opts: {
      solo: true ,
      generation: ["5th"]
    }
  },
  {
    name: "Moona Hoshinova - Ai no Chiisana Uta",
    img: "",
    opts: {
      solo: true ,
      nonjp: true ,
      generation: ["indonesia"]
    }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: {
      series: ["LoLK", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Eternity Larva",
    img: "ql5KxJH.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Sakata Nemuno",
    img: "gYFhJ3Y.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Komano Aunn",
    img: "wWUStkF.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st3"]
    }
  },
  {
    name: "Yatadera Narumi",
    img: "wrPVhAo.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Nishida Satono",
    img: "8w9gAy2.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Teireida Mai",
    img: "DesAqAC.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Matara Okina",
    img: "icWvMyo.png",
    opts: {
      series: ["HSiFS", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Yorigami Shion",
    img: "LenxXR4.png",
    opts: {
      series: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Yorigami Joon",
    img: "V9OznT1.png",
    opts: {
      series: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Ebisu Eika",
    img: "Ke3316E.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st1"]
    }
  },
  {
    name: "Ushizaki Urumi",
    img: "ru2vIIW.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st2"]
    }
  },
  {
    name: "Niwatari Kutaka",
    img: "QTQt0ZL.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st3"]
    }
  },
  {
    name: "Kicchou Yachie",
    img: "CzcIMxF.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st4"]
    }
  },
  {
    name: "Joutouguu Mayumi",
    img: "GxeziYO.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st5"]
    }
  },
  {
    name: "Haniyasushin Keiki",
    img: "Z4jclTi.png",
    opts: {
      series: ["WBaWC"],
      stage: ["st6"]
    }
  },
  {
    name: "Kurokoma Saki",
    img: "H2v2GPy.png",
    opts: {
      series: ["WBaWC"],
      stage: ["ex"]
    }
  },
  {
    name: "Goutokuji Mike",
    img: "FltSdtv.png",
    opts: {
      series: ["UM"],
      stage: ["st1"]
    }
  },
  {
    name: "Yamashiro Takane",
    img: "Aaq99GQ.png",
    opts: {
      series: ["UM"],
      stage: ["st2"]
    }
  },
  {
    name: "Komakusa Sannyo",
    img: "DKupiv1.png",
    opts: {
      series: ["UM"],
      stage: ["st3"]
    }
  },
  {
    name: "Tamatsukuri Misumaru",
    img: "BHwfCAQ.png",
    opts: {
      series: ["UM"],
      stage: ["st4"]
    }
  },
  {
    name: "Kudamaki Tsukasa",
    img: "KNy3FZq.png",
    opts: {
      series: ["UM"],
      stage: ["st5", "st6", "ex"]
    }
  },
  {
    name: "Iizunamaru Megumu",
    img: "QA63m27.png",
    opts: {
      series: ["UM"],
      stage: ["st5"]
    }
  },
  {
    name: "Tenkyuu Chimata",
    img: "Ga4AYtv.png",
    opts: {
      series: ["UM"],
      stage: ["st6"]
    }
  },
  {
    name: "Himemushi Momoyo",
    img: "iH2wqbd.png",
    opts: {
      series: ["UM"],
      stage: ["ex"]
    }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    img: "Y4maOc8.png", 
    opts: {
      series: ["book"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Reisen (Manga)",
    img: "cWjCo2j.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: {
      series: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Okunoda Miyoi",
    img: "a5V63gx.png",
    opts: {
      series: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      series: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: {
      series: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: {
      series: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: {
      series: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: {
      series: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: {
      series: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: {
      series: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: {
      series: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: {
      series: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: {
      series: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: {
      series: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: {
      series: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: {
      series: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: {
      series: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: {
      series: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: {
      series: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: {
      series: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: {
      series: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: {
      series: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: {
      series: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: {
      series: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      series: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: {
      series: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: {
      series: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: {
      series: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: {
      series: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: {
      series: ["SoEW"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: {
      series: ["soku", "AoCF"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      series: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: {
      series: ["book"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      series: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
