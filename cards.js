    // 🎴 KART VERİ HAVUZU
    const ALL_CARDS = [
  {
    "id": 1,
    "kelime": "ALIŞVERİŞ LİSTESİ",
    "yasakli_kelimeler": [
      "MARKET",
      "YAZMAK",
      "EKSİK",
      "ALMAK",
      "KAĞIT"
    ]
  },
  {
    "id": 2,
    "kelime": "FENOMEN",
    "yasakli_kelimeler": [
      "İNTERNET",
      "ÜNLÜ",
      "TAKİPÇİ",
      "VİDEO",
      "POPÜLER"
    ]
  },
  {
    "id": 3,
    "kelime": "BURNU BÜYÜMEK",
    "yasakli_kelimeler": [
      "KİBİR",
      "GURUR",
      "KENDİNİ BEĞENMEK",
      "ŞIMARMAK",
      "BÖBÜRLENMEK"
    ]
  },
  {
    "id": 4,
    "kelime": "ÇAMAŞIR YIKAMAK",
    "yasakli_kelimeler": [
      "MAKİNE",
      "DETERJAN",
      "KİRLİ",
      "TEMİZ",
      "KURUTMAK"
    ]
  },
  {
    "id": 5,
    "kelime": "SPOİLER",
    "yasakli_kelimeler": [
      "DİZİ",
      "FİLM",
      "SONUÇ",
      "BOZMAK",
      "SÖYLEMEK"
    ]
  },
  {
    "id": 6,
    "kelime": "AYAĞI KAYMAK",
    "yasakli_kelimeler": [
      "DENGE",
      "DÜŞMEK",
      "HATA",
      "YANLIŞ",
      "SÜRÇMEK"
    ]
  },
  {
    "id": 7,
    "kelime": "BULAŞIK YIKAMAK",
    "yasakli_kelimeler": [
      "TABAK",
      "LAVABO",
      "SÜNGER",
      "DETERJAN",
      "MUTFAK"
    ]
  },
  {
    "id": 8,
    "kelime": "DİZİ MARATONU",
    "yasakli_kelimeler": [
      "BÖLÜM",
      "GECE",
      "UYKU",
      "BİTİRMEK",
      "EKRAN"
    ]
  },
  {
    "id": 9,
    "kelime": "GÖZÜ TUTMAK",
    "yasakli_kelimeler": [
      "BEĞENMEK",
      "SEVMEK",
      "BAKIŞ",
      "SEÇMEK",
      "HOŞLANMAK"
    ]
  },
  {
    "id": 10,
    "kelime": "TOZ ALMAK",
    "yasakli_kelimeler": [
      "TEMİZLİK",
      "BEZ",
      "MOBİLYA",
      "EV",
      "KİR"
    ]
  },
  {
    "id": 11,
    "kelime": "FRAGMAN",
    "yasakli_kelimeler": [
      "FİLM",
      "ÖNCESİ",
      "SİNEMA",
      "TANITIM",
      "SAHNE"
    ]
  },
  {
    "id": 12,
    "kelime": "İÇİ RAHATLAMAK",
    "yasakli_kelimeler": [
      "HUZUR",
      "FERAHLAMAK",
      "SAKİNLEŞMEK",
      "ENDİŞE",
      "NEFES"
    ]
  },
  {
    "id": 13,
    "kelime": "ÇÖP ATMAK",
    "yasakli_kelimeler": [
      "POŞET",
      "KOVA",
      "DIŞARI",
      "KOKU",
      "ATIK"
    ]
  },
  {
    "id": 14,
    "kelime": "UNUTULMAZ SAHNE",
    "yasakli_kelimeler": [
      "FİLM",
      "AĞLAMAK",
      "FİNAL",
      "KARE",
      "DİZİ"
    ]
  },
  {
    "id": 15,
    "kelime": "DİLİNE DOLAMAK",
    "yasakli_kelimeler": [
      "DEDİKODU",
      "KONUŞMAK",
      "SÜREKLİ",
      "AD",
      "BAHSETMEK"
    ]
  },
  {
    "id": 16,
    "kelime": "SU FATURASI",
    "yasakli_kelimeler": [
      "ÖDEMEK",
      "AY",
      "SAYAÇ",
      "MİKTAR",
      "BORU"
    ]
  },
  {
    "id": 17,
    "kelime": "GÜNDEM",
    "yasakli_kelimeler": [
      "SON DAKİKA",
      "TWİTTER",
      "KONUŞULAN",
      "ETİKET",
      "POPÜLER"
    ]
  },
  {
    "id": 18,
    "kelime": "KAFAYI TAKMAK",
    "yasakli_kelimeler": [
      "SAPLANTI",
      "DÜŞÜNMEK",
      "SÜREKLİ",
      "ODAKLANMAK",
      "UNUTAMAMAK"
    ]
  },
  {
    "id": 19,
    "kelime": "MARKETE GİTMEK",
    "yasakli_kelimeler": [
      "ALIŞVERİŞ",
      "SEPET",
      "KASA",
      "ÜRÜN",
      "PARA"
    ]
  },
  {
    "id": 20,
    "kelime": "PODCAST",
    "yasakli_kelimeler": [
      "SES",
      "KAYIT",
      "KONUŞMA",
      "MİKROFON",
      "DİNLEMEK"
    ]
  },
  {
    "id": 21,
    "kelime": "GÖZ KIRPMAMAK",
    "yasakli_kelimeler": [
      "UYUMAMAK",
      "UYANIK",
      "GECE",
      "DİKKATLİ",
      "SABAH"
    ]
  },
  {
    "id": 22,
    "kelime": "TRAFİKTE KALMAK",
    "yasakli_kelimeler": [
      "ARABA",
      "YOL",
      "SIKIŞMAK",
      "BEKLEMEK",
      "YAVAŞ"
    ]
  },
  {
    "id": 23,
    "kelime": "YOUTUBER",
    "yasakli_kelimeler": [
      "VİDEO",
      "KANAL",
      "ABONE",
      "KAMERA",
      "PAYLAŞMAK"
    ]
  },
  {
    "id": 24,
    "kelime": "KULAK ASMAMAK",
    "yasakli_kelimeler": [
      "DİNLEMEMEK",
      "ÖNEMSEMEMEK",
      "GÖRMEZDEN",
      "UMURSAMAMAK",
      "DİKKAT"
    ]
  },
  {
    "id": 25,
    "kelime": "OTOBÜS DURAĞI",
    "yasakli_kelimeler": [
      "BEKLEMEK",
      "TOPLU TAŞIMA",
      "YOLCU",
      "KART",
      "SIRA"
    ]
  },
  {
    "id": 26,
    "kelime": "CANLI YAYIN",
    "yasakli_kelimeler": [
      "İZLEYİCİ",
      "EKRAN",
      "ANLIK",
      "YORUM",
      "ÜNLÜ"
    ]
  },
  {
    "id": 27,
    "kelime": "İÇİNE ATMAK",
    "yasakli_kelimeler": [
      "SÖYLEMEMEK",
      "SAKLAMAK",
      "DUYGU",
      "SESSİZ",
      "BASTIRMAK"
    ]
  },
  {
    "id": 28,
    "kelime": "SABAH KAHVALTISI",
    "yasakli_kelimeler": [
      "YEMEK",
      "ÇAY",
      "TABAK",
      "MASA",
      "EKMEK"
    ]
  },
  {
    "id": 29,
    "kelime": "ALGORİTMA",
    "yasakli_kelimeler": [
      "ÖNERİ",
      "UYGULAMA",
      "SİSTEM",
      "VERİ",
      "HESAPLAMA"
    ]
  },
  {
    "id": 30,
    "kelime": "AKLINA ESMEK",
    "yasakli_kelimeler": [
      "ANLIK",
      "KARAR",
      "DÜŞÜNCE",
      "ANİDEN",
      "İSTEK"
    ]
  },
  {
    "id": 31,
    "kelime": "UYKU DÜZENİ",
    "yasakli_kelimeler": [
      "SAAT",
      "YATMAK",
      "ERKEN",
      "DİNLENMEK",
      "PROGRAM"
    ]
  },
  {
    "id": 32,
    "kelime": "YÜZ FİLTRESİ",
    "yasakli_kelimeler": [
      "KAMERA",
      "GÜZELLEŞTİRMEK",
      "FOTOĞRAF",
      "UYGULAMA",
      "CİLT"
    ]
  },
  {
    "id": 33,
    "kelime": "KAFASI KARIŞMAK",
    "yasakli_kelimeler": [
      "ŞAŞIRMAK",
      "ANLAYAMAMAK",
      "ZİHİN",
      "DÜŞÜNCE",
      "BULANIK"
    ]
  },
  {
    "id": 34,
    "kelime": "ALARM KURMAK",
    "yasakli_kelimeler": [
      "SAAT",
      "UYANMAK",
      "SES",
      "TELEFON",
      "SABAH"
    ]
  },
  {
    "id": 35,
    "kelime": "HİKAYE PAYLAŞIMI",
    "yasakli_kelimeler": [
      "İNSTAGRAM",
      "GÖNDERMEK",
      "ANLIK",
      "KAYBOLAN",
      "FOTOĞRAF"
    ]
  },
  {
    "id": 36,
    "kelime": "DİLİ TUTULMAK",
    "yasakli_kelimeler": [
      "ŞAŞIRMAK",
      "KONUŞAMAMAK",
      "SESSİZ",
      "ŞOK",
      "DONMAK"
    ]
  },
  {
    "id": 37,
    "kelime": "DİŞ FIRÇALAMAK",
    "yasakli_kelimeler": [
      "MACUN",
      "AĞIZ",
      "BANYO",
      "SABAH",
      "KÖPÜK"
    ]
  },
  {
    "id": 38,
    "kelime": "ÜNLÜ OLMAK",
    "yasakli_kelimeler": [
      "ŞÖHRET",
      "TANINMAK",
      "KAMERA",
      "MAGAZİN",
      "TAKİPÇİ"
    ]
  },
  {
    "id": 39,
    "kelime": "GÖNLÜ OLMAK",
    "yasakli_kelimeler": [
      "RAZI",
      "KABUL",
      "İSTEMEK",
      "ONAY",
      "RIZA"
    ]
  },
  {
    "id": 40,
    "kelime": "YATAK TOPLAMAK",
    "yasakli_kelimeler": [
      "YORGAN",
      "DÜZENLİ",
      "SABAH",
      "ODA",
      "ÇARŞAF"
    ]
  },
  {
    "id": 41,
    "kelime": "KIRMIZI HALI",
    "yasakli_kelimeler": [
      "ÜNLÜ",
      "ÖDÜL",
      "GECE",
      "ELBİSE",
      "KAMERA"
    ]
  },
  {
    "id": 42,
    "kelime": "GÖZÜ KARARMAK",
    "yasakli_kelimeler": [
      "BAYILMAK",
      "SİNİR",
      "ÖFKE",
      "FENALAŞMAK",
      "BAŞ DÖNMESİ"
    ]
  },
  {
    "id": 43,
    "kelime": "ÜTÜ YAPMAK",
    "yasakli_kelimeler": [
      "KIYAFET",
      "SICAK",
      "KIRIŞMAK",
      "DÜZELTMEK",
      "MASA"
    ]
  },
  {
    "id": 44,
    "kelime": "ÖDÜL TÖRENİ",
    "yasakli_kelimeler": [
      "GECE",
      "FİLM",
      "SAHNE",
      "KAZANMAK",
      "SUNUM"
    ]
  },
  {
    "id": 45,
    "kelime": "BAŞI DÖNMEK",
    "yasakli_kelimeler": [
      "SERSEMLİK",
      "DENGE",
      "BAYILMAK",
      "SARSINTI",
      "FENALIK"
    ]
  },
  {
    "id": 46,
    "kelime": "FATURA ÖDEMEK",
    "yasakli_kelimeler": [
      "PARA",
      "AY",
      "BANKA",
      "ELEKTRİK",
      "BORÇ"
    ]
  },
  {
    "id": 47,
    "kelime": "DİZİ FİNALİ",
    "yasakli_kelimeler": [
      "SON",
      "BÖLÜM",
      "BEKLEME",
      "MERAK",
      "BİTİŞ"
    ]
  },
  {
    "id": 48,
    "kelime": "KAFAYI YEMEK",
    "yasakli_kelimeler": [
      "YILDIRMAK",
      "DELİ",
      "SİNİR",
      "KONTROL",
      "BUNALMAK"
    ]
  },
  {
    "id": 49,
    "kelime": "RANDEVU ALMAK",
    "yasakli_kelimeler": [
      "DOKTOR",
      "SAAT",
      "BEKLEMEK",
      "TELEFON",
      "SIRA"
    ]
  },
  {
    "id": 50,
    "kelime": "UYARLAMA",
    "yasakli_kelimeler": [
      "KİTAP",
      "FİLM",
      "ROMAN",
      "SAHNE",
      "SENARYO"
    ]
  },
  {
    "id": 51,
    "kelime": "KULAKTAN DOLMA",
    "yasakli_kelimeler": [
      "YANLIŞ",
      "DUYUM",
      "BİLGİ",
      "DOĞRULANMAMIŞ",
      "SÖYLENTİ"
    ]
  },
  {
    "id": 52,
    "kelime": "TOPLU TAŞIMA",
    "yasakli_kelimeler": [
      "OTOBÜS",
      "METRO",
      "KART",
      "YOLCU",
      "ŞEHİR"
    ]
  },
  {
    "id": 53,
    "kelime": "FANTEZİ EVRENİ",
    "yasakli_kelimeler": [
      "BÜYÜ",
      "KARAKTER",
      "KURGU",
      "DÜNYA",
      "YARATIK"
    ]
  },
  {
    "id": 54,
    "kelime": "İÇİ YANMAK",
    "yasakli_kelimeler": [
      "ÜZÜLMEK",
      "ACIMAK",
      "MERHAMET",
      "SIKINTI",
      "VİCDAN"
    ]
  },
  {
    "id": 55,
    "kelime": "TRAFİK IŞIĞI",
    "yasakli_kelimeler": [
      "KIRMIZI",
      "YEŞİL",
      "YOL",
      "DURMAK",
      "GEÇMEK"
    ]
  },
  {
    "id": 56,
    "kelime": "SÜPER KAHRAMAN",
    "yasakli_kelimeler": [
      "PELERİN",
      "GÜÇ",
      "MASKE",
      "KÖTÜ",
      "KURTARMAK"
    ]
  },
  {
    "id": 57,
    "kelime": "AYAĞI ALIŞMAK",
    "yasakli_kelimeler": [
      "SIK GELMEK",
      "ALIŞKANLIK",
      "ZİYARET",
      "TEKRAR",
      "YER"
    ]
  },
  {
    "id": 58,
    "kelime": "YEMEK PİŞİRMEK",
    "yasakli_kelimeler": [
      "TENCERE",
      "MUTFAK",
      "OCAK",
      "MALZEME",
      "TARİF"
    ]
  },
  {
    "id": 59,
    "kelime": "ÇİZGİ ROMAN",
    "yasakli_kelimeler": [
      "KAHRAMAN",
      "SAYFA",
      "BALON",
      "KARAKTER",
      "HİKAYE"
    ]
  },
  {
    "id": 60,
    "kelime": "GÖZÜNÜ KIRPMADAN",
    "yasakli_kelimeler": [
      "KORKUSUZCA",
      "CESARET",
      "DURAKSAMADAN",
      "HIZLI",
      "TEREDDÜTSÜZ"
    ]
  },
  {
    "id": 61,
    "kelime": "SU İÇMEK",
    "yasakli_kelimeler": [
      "BARDAK",
      "SUSAMAK",
      "ŞİŞE",
      "SAĞLIK",
      "SERİNLEMEK"
    ]
  },
  {
    "id": 62,
    "kelime": "ANİME",
    "yasakli_kelimeler": [
      "JAPON",
      "ÇİZİM",
      "KARAKTER",
      "DİZİ",
      "MANGA"
    ]
  },
  {
    "id": 63,
    "kelime": "KAFA YORMAK",
    "yasakli_kelimeler": [
      "DÜŞÜNMEK",
      "ÇÖZMEK",
      "UĞRAŞMAK",
      "ZİHİN",
      "EMEK"
    ]
  },
  {
    "id": 64,
    "kelime": "KAHVE MOLASI",
    "yasakli_kelimeler": [
      "DİNLENMEK",
      "İŞ",
      "İÇMEK",
      "ARA",
      "FİNCAN"
    ]
  },
  {
    "id": 65,
    "kelime": "KOSTÜM YARIŞMASI",
    "yasakli_kelimeler": [
      "KARAKTER",
      "KIYAFET",
      "KILIK",
      "TAKLİT",
      "GİYMEK"
    ]
  },
  {
    "id": 66,
    "kelime": "GÖNÜL ALMAK",
    "yasakli_kelimeler": [
      "BARIŞMAK",
      "ÖZÜR",
      "HOŞNUT",
      "MEMNUN",
      "TELAFİ"
    ]
  },
  {
    "id": 67,
    "kelime": "ÖĞLE ARASI",
    "yasakli_kelimeler": [
      "İŞ",
      "YEMEK",
      "DİNLENMEK",
      "SAAT",
      "MOLA"
    ]
  },
  {
    "id": 68,
    "kelime": "FANTASTİK",
    "yasakli_kelimeler": [
      "BÜYÜ",
      "EJDERHA",
      "KURGU",
      "MASAL",
      "EFSANE"
    ]
  },
  {
    "id": 69,
    "kelime": "İÇİNİ DÖKMEK",
    "yasakli_kelimeler": [
      "ANLATMAK",
      "PAYLAŞMAK",
      "DERT",
      "AÇILMAK",
      "KONUŞMAK"
    ]
  },
  {
    "id": 70,
    "kelime": "GÜNLÜK RUTİN",
    "yasakli_kelimeler": [
      "ALIŞKANLIK",
      "TEKRAR",
      "PROGRAM",
      "HER GÜN",
      "DÜZEN"
    ]
  },
  {
    "id": 71,
    "kelime": "YARIŞMA PROGRAMI",
    "yasakli_kelimeler": [
      "KAMERA",
      "JÜRİ",
      "ELENME",
      "EKRAN",
      "İZLEYİCİ"
    ]
  },
  {
    "id": 72,
    "kelime": "AĞZINDAN KAÇIRMAK",
    "yasakli_kelimeler": [
      "SIR",
      "İSTEMEDEN",
      "SÖYLEMEK",
      "YANLIŞLIKLA",
      "AÇIĞA"
    ]
  },
  {
    "id": 73,
    "kelime": "ERKEN KALKMAK",
    "yasakli_kelimeler": [
      "SABAH",
      "UYKU",
      "SAAT",
      "ALARM",
      "YORGUN"
    ]
  },
  {
    "id": 74,
    "kelime": "YETENEK YARIŞMASI",
    "yasakli_kelimeler": [
      "SAHNE",
      "JÜRİ",
      "PERFORMANS",
      "ALKIŞ",
      "ELENME"
    ]
  },
  {
    "id": 75,
    "kelime": "GÖZDEN DÜŞMEK",
    "yasakli_kelimeler": [
      "İTİBAR",
      "KAYBETMEK",
      "DEĞER",
      "SEVİLMEMEK",
      "KÜÇÜLMEK"
    ]
  },
  {
    "id": 76,
    "kelime": "GEÇ YATMAK",
    "yasakli_kelimeler": [
      "UYKU",
      "SAAT",
      "GECE",
      "YORGUNLUK",
      "UYANMAK"
    ]
  },
  {
    "id": 77,
    "kelime": "FİLM MÜZİĞİ",
    "yasakli_kelimeler": [
      "SİNEMA",
      "SAHNE",
      "DUYGUSAL",
      "SES",
      "BESTE"
    ]
  },
  {
    "id": 78,
    "kelime": "DİL DÖKMEK",
    "yasakli_kelimeler": [
      "İKNA",
      "YALVARMAK",
      "KONUŞMAK",
      "ISRAR",
      "ANLATMAK"
    ]
  },
  {
    "id": 79,
    "kelime": "TOPLANTI",
    "yasakli_kelimeler": [
      "İŞ",
      "KONUŞMAK",
      "MASA",
      "SUNUM",
      "OFİS"
    ]
  },
  {
    "id": 80,
    "kelime": "UNUTULMAZ REPLİK",
    "yasakli_kelimeler": [
      "FİLM",
      "SÖZ",
      "KARAKTER",
      "SAHNE",
      "EZBER"
    ]
  },
  {
    "id": 81,
    "kelime": "KAFA TUTMAK",
    "yasakli_kelimeler": [
      "KARŞI GELMEK",
      "İSYAN",
      "DİRENMEK",
      "MEYDAN",
      "İTAATSİZLİK"
    ]
  },
  {
    "id": 82,
    "kelime": "TATİL PLANI",
    "yasakli_kelimeler": [
      "YER",
      "GİTMEK",
      "REZERVASYON",
      "BİLET",
      "GEZMEK"
    ]
  },
  {
    "id": 83,
    "kelime": "GİŞE REKORU",
    "yasakli_kelimeler": [
      "FİLM",
      "BİLET",
      "SİNEMA",
      "KAZANÇ",
      "SEYİRCİ"
    ]
  },
  {
    "id": 84,
    "kelime": "DİLE GETİRMEK",
    "yasakli_kelimeler": [
      "SÖYLEMEK",
      "İFADE",
      "BELİRTMEK",
      "AÇIKLAMAK",
      "KONUŞMAK"
    ]
  },
  {
    "id": 85,
    "kelime": "PARK ETMEK",
    "yasakli_kelimeler": [
      "ARABA",
      "YER",
      "BULMAK",
      "CADDE",
      "DURMAK"
    ]
  },
  {
    "id": 86,
    "kelime": "MODA AKIMI",
    "yasakli_kelimeler": [
      "STİL",
      "TREND",
      "KIYAFET",
      "POPÜLER",
      "YAYILMAK"
    ]
  },
  {
    "id": 87,
    "kelime": "İÇİ GEÇMEK",
    "yasakli_kelimeler": [
      "UYUKLAMAK",
      "UYKU",
      "DALMAK",
      "YORGUNLUK",
      "KESTİRMEK"
    ]
  },
  {
    "id": 88,
    "kelime": "BENZİN ALMAK",
    "yasakli_kelimeler": [
      "ARABA",
      "YAKIT",
      "İSTASYON",
      "DEPO",
      "DOLDURMAK"
    ]
  },
  {
    "id": 89,
    "kelime": "VİRAL OLMAK",
    "yasakli_kelimeler": [
      "PAYLAŞIM",
      "YAYILMAK",
      "İNTERNET",
      "HIZLI",
      "HERKES"
    ]
  },
  {
    "id": 90,
    "kelime": "AYAĞA KALKMAK",
    "yasakli_kelimeler": [
      "TOPARLANMAK",
      "İYİLEŞMEK",
      "KALKINMAK",
      "DÜZELMEK",
      "GÜÇLENMEK"
    ]
  },
  {
    "id": 91,
    "kelime": "TRAFİK CEZASI",
    "yasakli_kelimeler": [
      "ARABA",
      "POLİS",
      "ÖDEMEK",
      "HIZ",
      "KURAL"
    ]
  },
  {
    "id": 92,
    "kelime": "DOĞAL GÖRÜNÜM",
    "yasakli_kelimeler": [
      "FOTOĞRAF",
      "YÜZ",
      "RÖTUŞ",
      "FİLTRE",
      "GERÇEK"
    ]
  },
  {
    "id": 93,
    "kelime": "GÖZÜ AÇILMAK",
    "yasakli_kelimeler": [
      "FARKINA VARMAK",
      "ANLAMAK",
      "UYANMAK",
      "GERÇEK",
      "İDRAK"
    ]
  },
  {
    "id": 94,
    "kelime": "ASANSÖR BEKLEMEK",
    "yasakli_kelimeler": [
      "KAT",
      "BUTON",
      "BİNA",
      "KAPI",
      "İNMEK"
    ]
  },
  {
    "id": 95,
    "kelime": "FOTOĞRAF RÖTUŞU",
    "yasakli_kelimeler": [
      "DÜZELTME",
      "PROGRAM",
      "YÜZ",
      "GÜZELLEŞTİRME",
      "RESİM"
    ]
  },
  {
    "id": 96,
    "kelime": "DİLİ DÖNMEMEK",
    "yasakli_kelimeler": [
      "SÖYLEYEMEMEK",
      "ZOR",
      "TELAFFUZ",
      "KONUŞAMAMAK",
      "YABANCI"
    ]
  },
  {
    "id": 97,
    "kelime": "MERDİVEN ÇIKMAK",
    "yasakli_kelimeler": [
      "KAT",
      "YORULMAK",
      "BASAMAK",
      "YUKARI",
      "BİNA"
    ]
  },
  {
    "id": 98,
    "kelime": "HAYRAN KULÜBÜ",
    "yasakli_kelimeler": [
      "ÜNLÜ",
      "TAKİPÇİ",
      "SEVGİ",
      "GRUP",
      "DESTEK"
    ]
  },
  {
    "id": 99,
    "kelime": "AYAK UYDURMAK",
    "yasakli_kelimeler": [
      "ADAPTE",
      "UYUM",
      "KATILMAK",
      "DEĞİŞİM",
      "TAKİP"
    ]
  },
  {
    "id": 100,
    "kelime": "KAPICI",
    "yasakli_kelimeler": [
      "BİNA",
      "ÇÖP",
      "YARDIM",
      "GÖREVLİ",
      "APARTMAN"
    ]
  },
  {
    "id": 101,
    "kelime": "İMZA GÜNÜ",
    "yasakli_kelimeler": [
      "KİTAP",
      "YAZAR",
      "KUYRUK",
      "KALEM",
      "HAYRAN"
    ]
  },
  {
    "id": 102,
    "kelime": "GÖZ BOYAMAK",
    "yasakli_kelimeler": [
      "ALDATMAK",
      "KANDIRMAK",
      "GÖSTERİŞ",
      "SAHTE",
      "YANILTMAK"
    ]
  },
  {
    "id": 103,
    "kelime": "KOMŞU ZİYARETİ",
    "yasakli_kelimeler": [
      "EV",
      "KAPI",
      "ÇAY",
      "SOHBET",
      "MİSAFİRLİK"
    ]
  },
  {
    "id": 104,
    "kelime": "KONSER TURNESİ",
    "yasakli_kelimeler": [
      "ŞARKICI",
      "SAHNE",
      "ŞEHİR",
      "BİLET",
      "MÜZİK"
    ]
  },
  {
    "id": 105,
    "kelime": "KAFA PATLATMAK",
    "yasakli_kelimeler": [
      "DÜŞÜNMEK",
      "ZORLAMAK",
      "ÇÖZMEK",
      "YORMAK",
      "UĞRAŞMAK"
    ]
  },
  {
    "id": 106,
    "kelime": "MİSAFİR AĞIRLAMAK",
    "yasakli_kelimeler": [
      "EV",
      "YEMEK",
      "İKRAM",
      "KONUK",
      "SOHBET"
    ]
  },
  {
    "id": 107,
    "kelime": "ALBÜM ÇIKIŞI",
    "yasakli_kelimeler": [
      "ŞARKICI",
      "MÜZİK",
      "ŞARKI",
      "DİNLEYİCİ",
      "YENİ"
    ]
  },
  {
    "id": 108,
    "kelime": "ÖZGÜRLÜK",
    "yasakli_kelimeler": [
      "BAĞIMSIZLIK",
      "SERBEST",
      "HAK",
      "KISITLAMA",
      "ZİNCİR"
    ]
  },
  {
    "id": 109,
    "kelime": "ÇEYİZ HAZIRLAMAK",
    "yasakli_kelimeler": [
      "EV",
      "EŞYA",
      "EVLİLİK",
      "SANDIK",
      "BAVUL"
    ]
  },
  {
    "id": 110,
    "kelime": "ŞARKI SÖZÜ",
    "yasakli_kelimeler": [
      "MELODİ",
      "EZGİ",
      "YAZMAK",
      "ANLAM",
      "NAKARAT"
    ]
  },
  {
    "id": 111,
    "kelime": "ADALET",
    "yasakli_kelimeler": [
      "HAK",
      "MAHKEME",
      "EŞİTLİK",
      "HUKUK",
      "DOĞRU"
    ]
  },
  {
    "id": 112,
    "kelime": "EV TEMİZLİĞİ",
    "yasakli_kelimeler": [
      "SÜPÜRMEK",
      "TOZ",
      "BEZ",
      "DÜZEN",
      "PARLAK"
    ]
  },
  {
    "id": 113,
    "kelime": "NAKARAT",
    "yasakli_kelimeler": [
      "ŞARKI",
      "TEKRAR",
      "MELODİ",
      "EZBER",
      "BÖLÜM"
    ]
  },
  {
    "id": 114,
    "kelime": "SABIR",
    "yasakli_kelimeler": [
      "BEKLEMEK",
      "DAYANMAK",
      "SAKİN",
      "ZAMAN",
      "TAHAMMÜL"
    ]
  },
  {
    "id": 115,
    "kelime": "ÇAMAŞIR ASMAK",
    "yasakli_kelimeler": [
      "İP",
      "MANDAL",
      "KURUTMAK",
      "BALKON",
      "ISLAK"
    ]
  },
  {
    "id": 116,
    "kelime": "REMİX",
    "yasakli_kelimeler": [
      "ŞARKI",
      "YENİDEN",
      "MÜZİK",
      "DJ",
      "DÜZENLEME"
    ]
  },
  {
    "id": 117,
    "kelime": "CESARET",
    "yasakli_kelimeler": [
      "KORKUSUZLUK",
      "KAHRAMAN",
      "RİSK",
      "GÜÇ",
      "YÜREKLİLİK"
    ]
  },
  {
    "id": 118,
    "kelime": "YEMEK SİPARİŞİ",
    "yasakli_kelimeler": [
      "TELEFON",
      "UYGULAMA",
      "KURYE",
      "RESTORAN",
      "PAKET"
    ]
  },
  {
    "id": 119,
    "kelime": "DANS AKIMI",
    "yasakli_kelimeler": [
      "VİDEO",
      "HAREKET",
      "MÜZİK",
      "TAKLİT",
      "POPÜLER"
    ]
  },
  {
    "id": 120,
    "kelime": "UMUT",
    "yasakli_kelimeler": [
      "BEKLENTİ",
      "İNANÇ",
      "GELECEK",
      "İYİMSERLİK",
      "İŞİK"
    ]
  },
  {
    "id": 121,
    "kelime": "KURYE BEKLEMEK",
    "yasakli_kelimeler": [
      "PAKET",
      "KAPI",
      "SİPARİŞ",
      "TESLİMAT",
      "ZİL"
    ]
  },
  {
    "id": 122,
    "kelime": "MEYDAN OKUMA",
    "yasakli_kelimeler": [
      "SOSYAL MEDYA",
      "VİDEO",
      "KATILMAK",
      "YARIŞ",
      "TREND"
    ]
  },
  {
    "id": 123,
    "kelime": "KISKANÇLIK",
    "yasakli_kelimeler": [
      "HASET",
      "REKABET",
      "SEVGİLİ",
      "SAHİPLENME",
      "ÖFKE"
    ]
  },
  {
    "id": 124,
    "kelime": "ELEKTRİK KESİNTİSİ",
    "yasakli_kelimeler": [
      "KARANLIK",
      "MUM",
      "ANİ",
      "EV",
      "BEKLEME"
    ]
  },
  {
    "id": 125,
    "kelime": "ETİKETLEMEK",
    "yasakli_kelimeler": [
      "PAYLAŞIM",
      "İSİM",
      "ARKADAŞ",
      "SOSYAL MEDYA",
      "İŞARETLEMEK"
    ]
  },
  {
    "id": 126,
    "kelime": "GURUR",
    "yasakli_kelimeler": [
      "ONUR",
      "KİBİR",
      "BAŞARI",
      "DEĞER",
      "KENDİNİ BEĞENME"
    ]
  },
  {
    "id": 127,
    "kelime": "SU KESİNTİSİ",
    "yasakli_kelimeler": [
      "MUSLUK",
      "EV",
      "BEKLEME",
      "DEPO",
      "AKMAMAK"
    ]
  },
  {
    "id": 128,
    "kelime": "BEĞENİ",
    "yasakli_kelimeler": [
      "KALP",
      "SOSYAL MEDYA",
      "PAYLAŞIM",
      "ONAY",
      "BUTON"
    ]
  },
  {
    "id": 129,
    "kelime": "VİCDAN",
    "yasakli_kelimeler": [
      "SUÇLULUK",
      "AHLAK",
      "İÇ SES",
      "DOĞRU",
      "YANLIŞ"
    ]
  },
  {
    "id": 130,
    "kelime": "GÜNDELİK KIYAFET",
    "yasakli_kelimeler": [
      "GİYİM",
      "RAHAT",
      "EV",
      "BASİT",
      "DOLAP"
    ]
  },
  {
    "id": 131,
    "kelime": "TAKİPÇİ SAYISI",
    "yasakli_kelimeler": [
      "SOSYAL MEDYA",
      "HESAP",
      "POPÜLER",
      "ARTMAK",
      "PROFİL"
    ]
  },
  {
    "id": 132,
    "kelime": "SADAKAT",
    "yasakli_kelimeler": [
      "BAĞLILIK",
      "GÜVEN",
      "VEFA",
      "İHANET",
      "SÖZÜNDE DURMAK"
    ]
  },
  {
    "id": 133,
    "kelime": "ÇAMAŞIR MAKİNESİ",
    "yasakli_kelimeler": [
      "DETERJAN",
      "KİRLİ",
      "YIKAMAK",
      "PROGRAM",
      "KURUTMAK"
    ]
  },
  {
    "id": 134,
    "kelime": "GÖNDERİ",
    "yasakli_kelimeler": [
      "PAYLAŞMAK",
      "SOSYAL MEDYA",
      "FOTOĞRAF",
      "YAZI",
      "HESAP"
    ]
  },
  {
    "id": 135,
    "kelime": "BAĞIMLILIK",
    "yasakli_kelimeler": [
      "ALIŞKANLIK",
      "KONTROL EDEMEME",
      "MADDE",
      "İHTİYAÇ",
      "TUTKU"
    ]
  },
  {
    "id": 136,
    "kelime": "BULAŞIK MAKİNESİ",
    "yasakli_kelimeler": [
      "TABAK",
      "YIKAMAK",
      "MUTFAK",
      "DETERJAN",
      "PROGRAM"
    ]
  },
  {
    "id": 137,
    "kelime": "HESAP KAPATMAK",
    "yasakli_kelimeler": [
      "SOSYAL MEDYA",
      "PROFİL",
      "ARA VERMEK",
      "SİLMEK",
      "DONDURMAK"
    ]
  },
  {
    "id": 138,
    "kelime": "YALNIZLIK",
    "yasakli_kelimeler": [
      "TEK BAŞINA",
      "KİMSESİZLİK",
      "BOŞLUK",
      "SESSİZLİK",
      "İZOLE"
    ]
  },
  {
    "id": 139,
    "kelime": "SÜPERMARKET KUYRUĞU",
    "yasakli_kelimeler": [
      "KASA",
      "BEKLEMEK",
      "SIRA",
      "ÜRÜN",
      "ALIŞVERİŞ"
    ]
  },
  {
    "id": 140,
    "kelime": "DİJİTAL DETOKS",
    "yasakli_kelimeler": [
      "TELEFON",
      "UZAKLAŞMAK",
      "SOSYAL MEDYA",
      "DİNLENMEK",
      "BAĞIMLILIK"
    ]
  },
  {
    "id": 141,
    "kelime": "MOTİVASYON",
    "yasakli_kelimeler": [
      "İSTEK",
      "ŞEVK",
      "HEDEF",
      "ENERJİ",
      "AZİM"
    ]
  },
  {
    "id": 142,
    "kelime": "İNDİRİM GÜNÜ",
    "yasakli_kelimeler": [
      "MARKET",
      "UCUZ",
      "FİYAT",
      "KAMPANYA",
      "ALIŞVERİŞ"
    ]
  },
  {
    "id": 143,
    "kelime": "EKRAN SÜRESİ",
    "yasakli_kelimeler": [
      "TELEFON",
      "KONTROL EDEMEMEK",
      "UZUN",
      "BAĞIMLI",
      "UYGULAMA"
    ]
  },
  {
    "id": 144,
    "kelime": "EMPATİ",
    "yasakli_kelimeler": [
      "ANLAYIŞ",
      "KENDİNİ YERİNE KOYMAK",
      "DUYGU",
      "HİSSETMEK",
      "ŞEFKAT"
    ]
  },
  {
    "id": 145,
    "kelime": "ETİKET FİYATI",
    "yasakli_kelimeler": [
      "ÜRÜN",
      "MARKET",
      "PARA",
      "YAZI",
      "DEĞER"
    ]
  },
  {
    "id": 146,
    "kelime": "E-SPOR",
    "yasakli_kelimeler": [
      "OYUN",
      "YARIŞMA",
      "TAKIM",
      "TURNUVA",
      "BİLGİSAYAR"
    ]
  },
  {
    "id": 147,
    "kelime": "HIRS",
    "yasakli_kelimeler": [
      "İSTEK",
      "TUTKU",
      "KAZANMA",
      "AMAÇ",
      "DOYMAMAK"
    ]
  },
  {
    "id": 148,
    "kelime": "TATİL VALİZİ",
    "yasakli_kelimeler": [
      "BAVUL",
      "EŞYA",
      "TOPLAMAK",
      "GİTMEK",
      "SEYAHAT"
    ]
  },
  {
    "id": 149,
    "kelime": "YAYINCI",
    "yasakli_kelimeler": [
      "CANLI",
      "OYUN",
      "İZLEYİCİ",
      "EKRAN",
      "YORUM"
    ]
  },
  {
    "id": 150,
    "kelime": "TEVAZU",
    "yasakli_kelimeler": [
      "ALÇAKGÖNÜLLÜLÜK",
      "BASİT",
      "GÖSTERİŞSİZ",
      "SADE",
      "KİBİRSİZ"
    ]
  },
  {
    "id": 151,
    "kelime": "UÇAK BİLETİ",
    "yasakli_kelimeler": [
      "SEYAHAT",
      "HAVALİMANI",
      "REZERVASYON",
      "PİLOT",
      "YOLCULUK"
    ]
  },
  {
    "id": 152,
    "kelime": "AVATAR",
    "yasakli_kelimeler": [
      "KARAKTER",
      "PROFİL",
      "GÖRSEL",
      "TEMSİL",
      "OYUN"
    ]
  },
  {
    "id": 153,
    "kelime": "DÜRÜSTLÜK",
    "yasakli_kelimeler": [
      "DOĞRU",
      "YALAN SÖYLEMEMEK",
      "SAMİMİ",
      "GÜVEN",
      "AÇIK"
    ]
  },
  {
    "id": 154,
    "kelime": "HAVALİMANI",
    "yasakli_kelimeler": [
      "UÇAK",
      "VALİZ",
      "BAVUL",
      "YOLCU",
      "X-RAY"
    ]
  },
  {
    "id": 155,
    "kelime": "SANAL GERÇEKLİK",
    "yasakli_kelimeler": [
      "GÖZLÜK",
      "TEKNOLOJİ",
      "ORTAM",
      "DENEYİM",
      "SİMÜLASYON"
    ]
  },
  {
    "id": 156,
    "kelime": "ÖNSEZİ",
    "yasakli_kelimeler": [
      "SEZGİ",
      "HİSSETMEK",
      "TAHMİN",
      "İÇGÜDÜ",
      "FARK"
    ]
  },
  {
    "id": 157,
    "kelime": "TREN GARI",
    "yasakli_kelimeler": [
      "PERON",
      "BİLET",
      "YOLCU",
      "RAY",
      "BEKLEMEK"
    ]
  },
  {
    "id": 158,
    "kelime": "SANAL EVREN",
    "yasakli_kelimeler": [
      "DİJİTAL",
      "DÜNYA",
      "TEKNOLOJİ",
      "KARAKTER",
      "PLATFORM"
    ]
  },
  {
    "id": 159,
    "kelime": "HAYAL KIRIKLIĞI",
    "yasakli_kelimeler": [
      "ÜZÜNTÜ",
      "BEKLENTİ",
      "BOŞA ÇIKMA",
      "UMUTSUZLUK",
      "DÜŞ"
    ]
  },
  {
    "id": 160,
    "kelime": "OKUL SERVİSİ",
    "yasakli_kelimeler": [
      "ÖĞRENCİ",
      "ARAÇ",
      "SABAH",
      "TAŞIMAK",
      "ŞOFÖR"
    ]
  },
  {
    "id": 161,
    "kelime": "BLENDER",
    "yasakli_kelimeler": [
      "DOĞRAMAK",
      "KÜÇÜLTMEK",
      "MUTFAK",
      "YEMEK",
      "KESKİN"
    ]
  },
  {
    "id": 162,
    "kelime": "ÖZGÜVEN",
    "yasakli_kelimeler": [
      "KENDİNE İNANMA",
      "CESARET",
      "RAHATLIK",
      "EMİN",
      "KARARLILIK"
    ]
  },
  {
    "id": 163,
    "kelime": "ÖDEV YAPMAK",
    "yasakli_kelimeler": [
      "OKUL",
      "DEFTER",
      "ÖĞRENCİ",
      "DERS",
      "YAZMAK"
    ]
  },
  {
    "id": 164,
    "kelime": "YAPAY GÖRÜNTÜ",
    "yasakli_kelimeler": [
      "VİDEO",
      "YÜZ",
      "SAHTE",
      "TEKNOLOJİ",
      "GERÇEK"
    ]
  },
  {
    "id": 165,
    "kelime": "KARARSIZLIK",
    "yasakli_kelimeler": [
      "TEREDDÜT",
      "SEÇİM",
      "BOCALAMAK",
      "İKİLEM",
      "DÜŞÜNMEK"
    ]
  },
  {
    "id": 166,
    "kelime": "SINAVA GİRMEK",
    "yasakli_kelimeler": [
      "OKUL",
      "KAĞIT",
      "SORU",
      "CEVAP",
      "STRES"
    ]
  },
  {
    "id": 167,
    "kelime": "YETENEK AVCISI",
    "yasakli_kelimeler": [
      "KEŞFETMEK",
      "SAHNE",
      "YILDIZ",
      "BULMAK",
      "MENAJER"
    ]
  },
  {
    "id": 168,
    "kelime": "MERAK",
    "yasakli_kelimeler": [
      "İLGİ",
      "ÖĞRENMEK",
      "SORU",
      "BİLİNMEZLİK",
      "ARAŞTIRMAK"
    ]
  },
  {
    "id": 169,
    "kelime": "DERS ÇALIŞMAK",
    "yasakli_kelimeler": [
      "KİTAP",
      "SINAV",
      "OKUL",
      "ÖĞRENMEK",
      "MASA"
    ]
  },
  {
    "id": 170,
    "kelime": "KIYAFET TRENDİ",
    "yasakli_kelimeler": [
      "MODA",
      "GİYMEK",
      "POPÜLER",
      "STİL",
      "AKIM"
    ]
  },
  {
    "id": 171,
    "kelime": "TAKINTI",
    "yasakli_kelimeler": [
      "SAPLANTI",
      "SÜREKLİ",
      "DÜŞÜNCE",
      "ODAK",
      "VAZGEÇEMEMEK"
    ]
  },
  {
    "id": 172,
    "kelime": "TATİL DÖNÜŞÜ",
    "yasakli_kelimeler": [
      "EVE",
      "YORGUNLUK",
      "VALİZ",
      "BİTMEK",
      "SEYAHAT"
    ]
  },
  {
    "id": 173,
    "kelime": "NOSTALJİ",
    "yasakli_kelimeler": [
      "ESKİ",
      "ÖZLEM",
      "ANI",
      "GEÇMİŞ",
      "HATIRLAMAK"
    ]
  },
  {
    "id": 174,
    "kelime": "HUZUR",
    "yasakli_kelimeler": [
      "SAKİNLİK",
      "RAHATLIK",
      "DİNGİNLİK",
      "SESSİZLİK",
      "BARIŞ"
    ]
  },
  {
    "id": 175,
    "kelime": "MENEMEN",
    "yasakli_kelimeler": [
      "YUMURTA",
      "DOMATES",
      "BİBER",
      "KAHVALTI",
      "TAVA"
    ]
  },
  {
    "id": 176,
    "kelime": "YAPAY ZEKA",
    "yasakli_kelimeler": [
      "ROBOT",
      "BİLGİSAYAR",
      "ALGORİTMA",
      "PROGRAM",
      "MAKİNE"
    ]
  },
  {
    "id": 177,
    "kelime": "STRES",
    "yasakli_kelimeler": [
      "GERGİNLİK",
      "BASKI",
      "KAYGI",
      "SİNİR",
      "YORGUNLUK"
    ]
  },
  {
    "id": 178,
    "kelime": "LAHMACUN",
    "yasakli_kelimeler": [
      "HAMUR",
      "KIYMA",
      "İNCE",
      "FIRIN",
      "RULO"
    ]
  },
  {
    "id": 179,
    "kelime": "AKILLI TELEFON",
    "yasakli_kelimeler": [
      "EKRAN",
      "UYGULAMA",
      "ARAMA",
      "CEP",
      "İNTERNET"
    ]
  },
  {
    "id": 180,
    "kelime": "ÖZLEM",
    "yasakli_kelimeler": [
      "HASRET",
      "UZAKLIK",
      "ANI",
      "İSTEK",
      "GÖRMEK"
    ]
  },
  {
    "id": 181,
    "kelime": "BAKLAVA",
    "yasakli_kelimeler": [
      "ŞERBET",
      "FISTIK",
      "TATLI",
      "YUFKA",
      "FIRIN"
    ]
  },
  {
    "id": 182,
    "kelime": "ŞARJ ALETİ",
    "yasakli_kelimeler": [
      "KABLO",
      "PİL",
      "PRİZ",
      "DOLDURMAK",
      "ELEKTRİK"
    ]
  },
  {
    "id": 183,
    "kelime": "PİŞMANLIK",
    "yasakli_kelimeler": [
      "KEŞKE",
      "HATA",
      "ÜZÜNTÜ",
      "GEÇMİŞ",
      "SUÇLULUK"
    ]
  },
  {
    "id": 184,
    "kelime": "KAHVALTI TABAĞI",
    "yasakli_kelimeler": [
      "PEYNİR",
      "ZEYTİN",
      "EKMEK",
      "REÇEL",
      "SABAH"
    ]
  },
  {
    "id": 185,
    "kelime": "BLUETOOTH",
    "yasakli_kelimeler": [
      "KABLOSUZ",
      "BAĞLANTI",
      "KULAKLIK",
      "EŞLEŞTİRME",
      "SİNYAL"
    ]
  },
  {
    "id": 186,
    "kelime": "MİNNETTARLIK",
    "yasakli_kelimeler": [
      "TEŞEKKÜR",
      "DEĞER",
      "ŞÜKÜR",
      "BORÇLULUK",
      "İYİLİK"
    ]
  },
  {
    "id": 187,
    "kelime": "ÇİĞ KÖFTE",
    "yasakli_kelimeler": [
      "BULGUR",
      "BAHARAT",
      "YOĞURMA",
      "EL",
      "YUFKA"
    ]
  },
  {
    "id": 188,
    "kelime": "WIFI",
    "yasakli_kelimeler": [
      "İNTERNET",
      "ŞİFRE",
      "BAĞLANTI",
      "SİNYAL",
      "KABLOSUZ"
    ]
  },
  {
    "id": 189,
    "kelime": "AFFETMEK",
    "yasakli_kelimeler": [
      "BAĞIŞLAMAK",
      "HATA",
      "KİN",
      "BARIŞ",
      "UNUTMAK"
    ]
  },
  {
    "id": 190,
    "kelime": "MANTI",
    "yasakli_kelimeler": [
      "HAMUR",
      "YOĞURT",
      "SARIMSAK",
      "KIYMA",
      "KÜÇÜK"
    ]
  },
  {
    "id": 191,
    "kelime": "BULUT DEPOLAMA",
    "yasakli_kelimeler": [
      "DOSYA",
      "İNTERNET",
      "YEDEKLEME",
      "SUNUCU",
      "KAYDETMEK"
    ]
  },
  {
    "id": 192,
    "kelime": "İNTİKAM",
    "yasakli_kelimeler": [
      "ÖÇ",
      "HINÇ",
      "KİN",
      "KARŞILIK",
      "ÖFKE"
    ]
  },
  {
    "id": 193,
    "kelime": "İSKENDER",
    "yasakli_kelimeler": [
      "DÖNER",
      "TEREYAĞ",
      "YOĞURT",
      "DOMATES",
      "EKMEK"
    ]
  },
  {
    "id": 194,
    "kelime": "UYGULAMA MAĞAZASI",
    "yasakli_kelimeler": [
      "TELEFON",
      "İNDİRMEK",
      "PROGRAM",
      "SİMGE",
      "YÜKLEME"
    ]
  },
  {
    "id": 195,
    "kelime": "ÖNYARGI",
    "yasakli_kelimeler": [
      "PEŞİN HÜKÜM",
      "YANLIŞ",
      "DÜŞÜNCE",
      "ETİKETLEME",
      "TARAFSIZ"
    ]
  },
  {
    "id": 196,
    "kelime": "SİMİT",
    "yasakli_kelimeler": [
      "SUSAM",
      "HALKA",
      "FIRIN",
      "ÇAY",
      "SOKAK"
    ]
  },
  {
    "id": 197,
    "kelime": "GÜNCELLEME",
    "yasakli_kelimeler": [
      "YAZILIM",
      "YENİ",
      "SÜRÜM",
      "YÜKLEME",
      "SİSTEM"
    ]
  },
  {
    "id": 198,
    "kelime": "SORUMLULUK",
    "yasakli_kelimeler": [
      "GÖREV",
      "YÜKÜMLÜLÜK",
      "BİLİNÇ",
      "ÜSTLENMEK",
      "YÜK"
    ]
  },
  {
    "id": 199,
    "kelime": "AYRAN",
    "yasakli_kelimeler": [
      "YOĞURT",
      "SU",
      "TUZ",
      "İÇECEK",
      "SOĞUK"
    ]
  },
  {
    "id": 200,
    "kelime": "ŞİFRE",
    "yasakli_kelimeler": [
      "GİZLİ",
      "HESAP",
      "GİRİŞ",
      "GÜVENLİK",
      "KOD"
    ]
  },
  {
    "id": 201,
    "kelime": "KAYGI",
    "yasakli_kelimeler": [
      "ENDİŞE",
      "TEDİRGİNLİK",
      "KORKU",
      "STRES",
      "HUZURSUZLUK"
    ]
  },
  {
    "id": 202,
    "kelime": "TURŞU",
    "yasakli_kelimeler": [
      "SİRKE",
      "KAVANOZ",
      "EKŞİ",
      "SEBZE",
      "SALAMURA"
    ]
  },
  {
    "id": 203,
    "kelime": "YÜZ TANIMA",
    "yasakli_kelimeler": [
      "KAMERA",
      "KİLİT",
      "GÜVENLİK",
      "TELEFON",
      "AÇMAK"
    ]
  },
  {
    "id": 204,
    "kelime": "TÜKENMİŞLİK",
    "yasakli_kelimeler": [
      "YORGUNLUK",
      "BIKKINLIK",
      "ENERJİ",
      "MOTİVASYONSUZLUK",
      "BİTKİNLİK"
    ]
  },
  {
    "id": 205,
    "kelime": "PİDE",
    "yasakli_kelimeler": [
      "FIRIN",
      "HAMUR",
      "KIYMA",
      "PEYNİR",
      "UZUN"
    ]
  },
  {
    "id": 206,
    "kelime": "DRONE",
    "yasakli_kelimeler": [
      "UÇMAK",
      "KAMERA",
      "HAVA",
      "UZAKTAN",
      "PERVANE"
    ]
  },
  {
    "id": 207,
    "kelime": "ÖZGÜNLÜK",
    "yasakli_kelimeler": [
      "FARKLILIK",
      "TAKLİT",
      "KOPYA",
      "YARATICILIK",
      "BENZERSİZ"
    ]
  },
  {
    "id": 208,
    "kelime": "KEBAP",
    "yasakli_kelimeler": [
      "ŞİŞ",
      "ET",
      "MANGAL",
      "KÖZLEMEK",
      "BAHARAT"
    ]
  },
  {
    "id": 209,
    "kelime": "AKILLI SAAT",
    "yasakli_kelimeler": [
      "BİLEK",
      "NABIZ",
      "EKRAN",
      "BİLDİRİM",
      "TELEFON"
    ]
  },
  {
    "id": 210,
    "kelime": "TUTARLILIK",
    "yasakli_kelimeler": [
      "İSTİKRAR",
      "DEĞİŞMEMEK",
      "KARARLILIK",
      "SÖZÜNDE DURMAK",
      "DENGE"
    ]
  },
  {
    "id": 211,
    "kelime": "DÖNER",
    "yasakli_kelimeler": [
      "ET",
      "EKMEK",
      "ŞİŞ",
      "TEZGAH",
      "KESMEK"
    ]
  },
  {
    "id": 212,
    "kelime": "KABLOSUZ KULAKLIK",
    "yasakli_kelimeler": [
      "MÜZİK",
      "TAKMAK",
      "BLUETOOTH",
      "ŞARJ",
      "SES"
    ]
  },
  {
    "id": 213,
    "kelime": "ESNEKLİK",
    "yasakli_kelimeler": [
      "UYUM",
      "DEĞİŞİM",
      "ADAPTE",
      "KATI OLMAMA",
      "KOLAYLIK"
    ]
  },
  {
    "id": 214,
    "kelime": "TAVUK IZGARA",
    "yasakli_kelimeler": [
      "MANGAL",
      "ET",
      "BAHARAT",
      "KÖZLEMEK",
      "KIZARMIŞ"
    ]
  },
  {
    "id": 215,
    "kelime": "SANAL ASİSTAN",
    "yasakli_kelimeler": [
      "SES",
      "KOMUT",
      "TELEFON",
      "YAPAY ZEKA",
      "CEVAP"
    ]
  },
  {
    "id": 216,
    "kelime": "FARKINDALIK",
    "yasakli_kelimeler": [
      "BİLİNÇ",
      "DİKKAT",
      "ANLAYIŞ",
      "GÖRMEK",
      "ALGI"
    ]
  },
  {
    "id": 217,
    "kelime": "BALIK EKMEK",
    "yasakli_kelimeler": [
      "SANDVİÇ",
      "LİMON",
      "SOĞAN",
      "TEKNE",
      "DENİZ"
    ]
  },
  {
    "id": 218,
    "kelime": "E-TİCARET",
    "yasakli_kelimeler": [
      "ALIŞVERİŞ",
      "İNTERNET",
      "SİPARİŞ",
      "ONLİNE",
      "ÖDEME"
    ]
  },
  {
    "id": 219,
    "kelime": "HAYAL GÜCÜ",
    "yasakli_kelimeler": [
      "YARATICILIK",
      "DÜŞÜNMEK",
      "ZİHİN",
      "FANTEZİ",
      "KURGU"
    ]
  },
  {
    "id": 220,
    "kelime": "PİLAV",
    "yasakli_kelimeler": [
      "PİRİNÇ",
      "TEREYAĞ",
      "TENCERE",
      "YEMEK",
      "YANINDA"
    ]
  },
  {
    "id": 221,
    "kelime": "KARGO TAKİP",
    "yasakli_kelimeler": [
      "SİPARİŞ",
      "NUMARA",
      "ULAŞIM",
      "PAKET",
      "İNTERNET"
    ]
  },
  {
    "id": 222,
    "kelime": "YARATICILIK",
    "yasakli_kelimeler": [
      "ÖZGÜNLÜK",
      "FİKİR",
      "SANAT",
      "BULUŞ",
      "HAYAL"
    ]
  },
  {
    "id": 223,
    "kelime": "MERCİMEK ÇORBASI",
    "yasakli_kelimeler": [
      "KIRMIZI",
      "KAŞIK",
      "SICAK",
      "TENCERE",
      "BAHARAT"
    ]
  },
  {
    "id": 224,
    "kelime": "ONLINE ÖDEME",
    "yasakli_kelimeler": [
      "KART",
      "İNTERNET",
      "ALIŞVERİŞ",
      "ŞİFRE",
      "HESAP"
    ]
  },
  {
    "id": 225,
    "kelime": "TUTKU",
    "yasakli_kelimeler": [
      "İSTEK",
      "SEVGİ",
      "HIRS",
      "COŞKU",
      "BAĞLILIK"
    ]
  },
  {
    "id": 226,
    "kelime": "YAYLA ÇORBASI",
    "yasakli_kelimeler": [
      "YOĞURT",
      "NANE",
      "SICAK",
      "KAŞIK",
      "UN"
    ]
  },
  {
    "id": 227,
    "kelime": "DİJİTAL CÜZDAN",
    "yasakli_kelimeler": [
      "KART",
      "TELEFON",
      "PARA",
      "ÖDEME",
      "UYGULAMA"
    ]
  },
  {
    "id": 228,
    "kelime": "DENGE",
    "yasakli_kelimeler": [
      "UYUM",
      "ÖLÇÜ",
      "ORTA",
      "KARARLILIK",
      "STABİLİTE"
    ]
  },
  {
    "id": 229,
    "kelime": "KURU FASULYE",
    "yasakli_kelimeler": [
      "TENCERE",
      "PİLAV",
      "ET",
      "YEMEK",
      "SOS"
    ]
  },
  {
    "id": 230,
    "kelime": "QR KOD",
    "yasakli_kelimeler": [
      "TARAMAK",
      "KARE",
      "TELEFON",
      "BAĞLANTI",
      "KAMERA"
    ]
  },
  {
    "id": 231,
    "kelime": "GÜVEN",
    "yasakli_kelimeler": [
      "İNANMAK",
      "EMİN",
      "İLİŞKİ",
      "SADAKAT",
      "ŞÜPHE"
    ]
  },
  {
    "id": 232,
    "kelime": "KADAYIF",
    "yasakli_kelimeler": [
      "TEL",
      "ŞERBET",
      "TATLI",
      "FIRIN",
      "FISTIK"
    ]
  },
  {
    "id": 233,
    "kelime": "UYARI MESAJI",
    "yasakli_kelimeler": [
      "TELEFON",
      "EKRAN",
      "SES",
      "UYGULAMA",
      "ANLIK"
    ]
  },
  {
    "id": 234,
    "kelime": "ŞÜPHE",
    "yasakli_kelimeler": [
      "KUŞKU",
      "EMİN OLMAMA",
      "GÜVENSİZLİK",
      "SORU İŞARETİ",
      "TEREDDÜT"
    ]
  },
  {
    "id": 235,
    "kelime": "SÜTLAÇ",
    "yasakli_kelimeler": [
      "PİRİNÇ",
      "TATLI",
      "FIRIN",
      "KASE",
      "TARÇIN"
    ]
  },
  {
    "id": 236,
    "kelime": "EKRAN GÖRÜNTÜSÜ",
    "yasakli_kelimeler": [
      "TELEFON",
      "KAYDETMEK",
      "CİHAZ",
      "PAYLAŞMAK",
      "FOTOĞRAF"
    ]
  },
  {
    "id": 237,
    "kelime": "KIYASLAMA",
    "yasakli_kelimeler": [
      "KARŞILAŞTIRMA",
      "ORAN",
      "FARKLAR",
      "DEĞERLENDİRME",
      "ÖLÇMEK"
    ]
  },
  {
    "id": 238,
    "kelime": "AŞURE",
    "yasakli_kelimeler": [
      "TAHIL",
      "TATLI",
      "KASE",
      "KURUYEMİŞ",
      "KARIŞIM"
    ]
  },
  {
    "id": 239,
    "kelime": "YAZILIM HATASI",
    "yasakli_kelimeler": [
      "PROGRAM",
      "BİLGİSAYAR",
      "ÇÖKMEK",
      "KOD",
      "SORUN"
    ]
  },
  {
    "id": 240,
    "kelime": "ÖNEMSEME",
    "yasakli_kelimeler": [
      "İLGİ",
      "DEĞER VERME",
      "DİKKAT",
      "SAHİPLENME",
      "KAYGI"
    ]
  },
  {
    "id": 241,
    "kelime": "HAMSİ TAVA",
    "yasakli_kelimeler": [
      "BALIK",
      "KIZARTMA",
      "MISIR UNU",
      "YAĞ",
      "DENİZ"
    ]
  },
  {
    "id": 242,
    "kelime": "VİRÜS",
    "yasakli_kelimeler": [
      "BİLGİSAYAR",
      "ZARARLI",
      "PROGRAM",
      "BULAŞMAK",
      "DOSYA"
    ]
  },
  {
    "id": 243,
    "kelime": "BAĞLILIK",
    "yasakli_kelimeler": [
      "SADAKAT",
      "VEFA",
      "İLİŞKİ",
      "GÜVEN",
      "SIKI"
    ]
  },
  {
    "id": 244,
    "kelime": "KUMPİR",
    "yasakli_kelimeler": [
      "PATATES",
      "FIRIN",
      "MALZEME",
      "DOLDURMAK",
      "SOKAK"
    ]
  },
  {
    "id": 245,
    "kelime": "GÜVENLİK DUVARI",
    "yasakli_kelimeler": [
      "BİLGİSAYAR",
      "KORUMA",
      "PROGRAM",
      "AĞ",
      "ENGELLEMEK"
    ]
  },
  {
    "id": 246,
    "kelime": "UYUM",
    "yasakli_kelimeler": [
      "DENGE",
      "ANLAŞMA",
      "BİRLİK",
      "AHENK",
      "BARIŞ"
    ]
  },
  {
    "id": 247,
    "kelime": "GÖZLEME",
    "yasakli_kelimeler": [
      "YUFKA",
      "PEYNİR",
      "SAC",
      "İNCE",
      "KATLAMAK"
    ]
  },
  {
    "id": 248,
    "kelime": "VERİ TABANI",
    "yasakli_kelimeler": [
      "BİLGİ",
      "BİLGİSAYAR",
      "KAYIT",
      "SİSTEM",
      "DEPOLAMA"
    ]
  },
  {
    "id": 249,
    "kelime": "ÇATIŞMA",
    "yasakli_kelimeler": [
      "KAVGA",
      "ANLAŞMAZLIK",
      "GERGİNLİK",
      "SAVAŞ",
      "UYUMSUZLUK"
    ]
  },
  {
    "id": 250,
    "kelime": "BÖREK",
    "yasakli_kelimeler": [
      "YUFKA",
      "PEYNİR",
      "FIRIN",
      "KATMAN",
      "HAMUR"
    ]
  },
  {
    "id": 251,
    "kelime": "TERCÜME UYGULAMASI",
    "yasakli_kelimeler": [
      "DİL",
      "ÇEVİRİ",
      "TELEFON",
      "KELİME",
      "PROGRAM"
    ]
  },
  {
    "id": 252,
    "kelime": "UZLAŞMA",
    "yasakli_kelimeler": [
      "ANLAŞMA",
      "ORTAK NOKTA",
      "ÇÖZÜM",
      "BARIŞ",
      "FİKİR"
    ]
  },
  {
    "id": 253,
    "kelime": "ÇORBA İÇMEK",
    "yasakli_kelimeler": [
      "KAŞIK",
      "SICAK",
      "TABAK",
      "TUZ",
      "İLK"
    ]
  },
  {
    "id": 254,
    "kelime": "SESLİ KOMUT",
    "yasakli_kelimeler": [
      "KONUŞMAK",
      "TELEFON",
      "ASİSTAN",
      "EMRETMEK",
      "MİKROFON"
    ]
  },
  {
    "id": 255,
    "kelime": "KARARLILIK",
    "yasakli_kelimeler": [
      "AZİM",
      "İSTİKRAR",
      "VAZGEÇMEMEK",
      "DİRENÇ",
      "SEBAT"
    ]
  },
  {
    "id": 256,
    "kelime": "PROFİTEROL",
    "yasakli_kelimeler": [
      "KREMA",
      "ÇİKOLATA",
      "HAMUR",
      "TATLI",
      "TOP"
    ]
  },
  {
    "id": 257,
    "kelime": "DOKUNMATİK EKRAN",
    "yasakli_kelimeler": [
      "PARMAK",
      "TELEFON",
      "CAM",
      "DOKUNMAK",
      "KAYDIRMAK"
    ]
  },
  {
    "id": 258,
    "kelime": "AZİM",
    "yasakli_kelimeler": [
      "KARARLILIK",
      "ÇABA",
      "VAZGEÇMEMEK",
      "HEDEF",
      "DİRENÇ"
    ]
  },
  {
    "id": 259,
    "kelime": "MEZE TABAĞI",
    "yasakli_kelimeler": [
      "ZEYTİN",
      "KÜÇÜK",
      "ÇEŞİT",
      "BAŞLANGIÇ",
      "SOFRA"
    ]
  },
  {
    "id": 260,
    "kelime": "PİL ÖMRÜ",
    "yasakli_kelimeler": [
      "TELEFON",
      "ŞARJ",
      "BİTMEK",
      "SÜRE",
      "BATARYA"
    ]
  },
  {
    "id": 261,
    "kelime": "İRADE",
    "yasakli_kelimeler": [
      "KARARLILIK",
      "GÜÇ",
      "KONTROL",
      "İSTEK",
      "DİRENÇ"
    ]
  },
  {
    "id": 262,
    "kelime": "KAHVE FALI",
    "yasakli_kelimeler": [
      "FİNCAN",
      "TABAK",
      "GELECEK",
      "BAKMAK",
      "TELVE"
    ]
  },
  {
    "id": 263,
    "kelime": "GPS",
    "yasakli_kelimeler": [
      "KONUM",
      "HARİTA",
      "UYDU",
      "YOL",
      "NAVİGASYON"
    ]
  },
  {
    "id": 264,
    "kelime": "SEZGİ",
    "yasakli_kelimeler": [
      "ÖNSEZİ",
      "HİSSETMEK",
      "İÇGÜDÜ",
      "TAHMİN",
      "FARK ETMEK"
    ]
  },
  {
    "id": 265,
    "kelime": "TÜRK KAHVESİ",
    "yasakli_kelimeler": [
      "FİNCAN",
      "KÖPÜK",
      "CEZVE",
      "ŞEKER",
      "TELVE"
    ]
  },
  {
    "id": 266,
    "kelime": "NAVİGASYON",
    "yasakli_kelimeler": [
      "YOL",
      "HARİTA",
      "KONUM",
      "SES",
      "TARİF"
    ]
  },
  {
    "id": 267,
    "kelime": "BİLİNÇALTI",
    "yasakli_kelimeler": [
      "ZİHİN",
      "FARKINDA OLMAMA",
      "RÜYA",
      "DERİN",
      "DÜŞÜNCE"
    ]
  },
  {
    "id": 268,
    "kelime": "ÇAY BARDAĞI",
    "yasakli_kelimeler": [
      "İNCE BELLİ",
      "SICAK",
      "DEMLİK",
      "ŞEKER",
      "İÇMEK"
    ]
  },
  {
    "id": 269,
    "kelime": "BULUT SUNUCU",
    "yasakli_kelimeler": [
      "VERİ",
      "İNTERNET",
      "DEPOLAMA",
      "BİLGİSAYAR",
      "UZAK"
    ]
  },
  {
    "id": 270,
    "kelime": "ÖZDENETİM",
    "yasakli_kelimeler": [
      "KONTROL",
      "İRADE",
      "KENDİNİ TUTMAK",
      "DİSİPLİN",
      "SINIR"
    ]
  },
  {
    "id": 271,
    "kelime": "LOKUM",
    "yasakli_kelimeler": [
      "ŞEKER",
      "NİŞASTA",
      "KÜÇÜK",
      "KUTU",
      "TATLI"
    ]
  },
  {
    "id": 272,
    "kelime": "SİBER SALDIRI",
    "yasakli_kelimeler": [
      "HACKER",
      "BİLGİSAYAR",
      "GÜVENLİK",
      "İZİNSİZ",
      "VERİ"
    ]
  },
  {
    "id": 273,
    "kelime": "DİSİPLİN",
    "yasakli_kelimeler": [
      "DÜZEN",
      "KURAL",
      "KENDİNİ KONTROL",
      "PROGRAM",
      "İSTİKRAR"
    ]
  },
  {
    "id": 274,
    "kelime": "HELVA",
    "yasakli_kelimeler": [
      "UN",
      "ŞEKER",
      "TAHİN",
      "TATLI",
      "TENCERE"
    ]
  },
  {
    "id": 275,
    "kelime": "HACKER",
    "yasakli_kelimeler": [
      "BİLGİSAYAR",
      "ŞİFRE",
      "GİRMEK",
      "SALDIRI",
      "SİSTEM"
    ]
  },
  {
    "id": 276,
    "kelime": "ADAPTASYON",
    "yasakli_kelimeler": [
      "UYUM",
      "DEĞİŞİM",
      "ALIŞMAK",
      "ESNEKLİK",
      "ORTAM"
    ]
  },
  {
    "id": 277,
    "kelime": "SALEP",
    "yasakli_kelimeler": [
      "SICAK",
      "TARÇIN",
      "SÜT",
      "KIŞ",
      "İÇECEK"
    ]
  },
  {
    "id": 278,
    "kelime": "VPN",
    "yasakli_kelimeler": [
      "BAĞLANTI",
      "GİZLİLİK",
      "İNTERNET",
      "GÜVENLİK",
      "SANAL"
    ]
  },
  {
    "id": 279,
    "kelime": "REKABET",
    "yasakli_kelimeler": [
      "YARIŞ",
      "KAZANMAK",
      "KARŞILAŞTIRMA",
      "MÜCADELE",
      "RAKİP"
    ]
  },
  {
    "id": 280,
    "kelime": "TOST MAKİNESİ",
    "yasakli_kelimeler": [
      "EKMEK",
      "PEYNİR",
      "KIZARTMA",
      "SANDVİÇ",
      "SICAK"
    ]
  },
  {
    "id": 281,
    "kelime": "EKRAN KORUYUCU",
    "yasakli_kelimeler": [
      "TELEFON",
      "CAM",
      "ÇİZİK",
      "KIRILMAK",
      "KAPLAMA"
    ]
  },
  {
    "id": 282,
    "kelime": "İŞBİRLİĞİ",
    "yasakli_kelimeler": [
      "ORTAKLIK",
      "BERABER",
      "YARDIMLAŞMA",
      "EKİP",
      "DESTEK"
    ]
  },
  {
    "id": 283,
    "kelime": "PİZZA DİLİMİ",
    "yasakli_kelimeler": [
      "HAMUR",
      "PEYNİR",
      "FIRIN",
      "İTALYAN",
      "SOS"
    ]
  },
  {
    "id": 284,
    "kelime": "KABLOSUZ ŞARJ",
    "yasakli_kelimeler": [
      "TELEFON",
      "PRİZ",
      "PİL",
      "YÜZEY",
      "ELEKTRİK"
    ]
  },
  {
    "id": 285,
    "kelime": "ÖZERKLİK",
    "yasakli_kelimeler": [
      "BAĞIMSIZLIK",
      "KENDİ KARARI",
      "SERBESTLİK",
      "KONTROL",
      "OTONOM"
    ]
  },
  {
    "id": 286,
    "kelime": "HAMBURGER",
    "yasakli_kelimeler": [
      "EKMEK",
      "KÖFTE",
      "PEYNİR",
      "SOS",
      "KETÇAP"
    ]
  },
  {
    "id": 287,
    "kelime": "AKILLI EV",
    "yasakli_kelimeler": [
      "SİSTEM",
      "KONTROL",
      "UYGULAMA",
      "IŞIK",
      "UZAKTAN"
    ]
  },
  {
    "id": 288,
    "kelime": "ŞİFREMİ UNUTTUM",
    "yasakli_kelimeler": [
      "HESAP",
      "SIFIRLAMA",
      "GİRİŞ",
      "MAİL",
      "KOD"
    ]
  },
  {
    "id": 289,
    "kelime": "DONDURMA KONİSİ",
    "yasakli_kelimeler": [
      "KÜLAH",
      "SOĞUK",
      "YAZ",
      "TOP",
      "VANİLYA"
    ]
  },
  {
    "id": 290,
    "kelime": "ROBOT SÜPÜRGE",
    "yasakli_kelimeler": [
      "EV",
      "TEMİZLİK",
      "OTOMATİK",
      "TOZ",
      "UZAKTAN"
    ]
  },
  {
    "id": 291,
    "kelime": "UYGULAMA İNDİRMEK",
    "yasakli_kelimeler": [
      "TELEFON",
      "MAĞAZA",
      "YÜKLEMEK",
      "PROGRAM",
      "KURMAK"
    ]
  },
  {
    "id": 292,
    "kelime": "DİŞ HEKİMİ",
    "yasakli_kelimeler": [
      "MUAYENE",
      "AĞIZ",
      "KLİNİK",
      "HASTANE",
      "FIRÇA"
    ]
  },
  {
    "id": 293,
    "kelime": "OYUN KONSOLU",
    "yasakli_kelimeler": [
      "EKRAN",
      "KUMANDA",
      "TELEVİZYON",
      "CİHAZ",
      "DİJİTAL"
    ]
  },
  {
    "id": 294,
    "kelime": "BAĞLANTI PAYLAŞMAK",
    "yasakli_kelimeler": [
      "ADRES",
      "SOSYAL MEDYA",
      "GÖNDERME",
      "SİTE",
      "TIKLAMA"
    ]
  },
  {
    "id": 295,
    "kelime": "AŞÇI",
    "yasakli_kelimeler": [
      "MUTFAK",
      "YEMEK",
      "PİŞİRMEK",
      "TENCERE",
      "RESTORAN"
    ]
  },
  {
    "id": 296,
    "kelime": "YAYIN PLATFORMU",
    "yasakli_kelimeler": [
      "DİZİ",
      "FİLM",
      "ABONELİK",
      "İZLEMEK",
      "UYGULAMA"
    ]
  },
  {
    "id": 297,
    "kelime": "EKRANDA GEZİNMEK",
    "yasakli_kelimeler": [
      "TELEFON",
      "AŞAĞI",
      "KAYDIRMAK",
      "PARMAK",
      "SOSYAL MEDYA"
    ]
  },
  {
    "id": 298,
    "kelime": "BERBER",
    "yasakli_kelimeler": [
      "SAÇ",
      "MAKAS",
      "TIRAŞ",
      "SALON",
      "AYNA"
    ]
  },
  {
    "id": 299,
    "kelime": "ABONELİK",
    "yasakli_kelimeler": [
      "AYLIK",
      "ÖDEME",
      "ÜYELİK",
      "UYGULAMA",
      "ÜCRET"
    ]
  },
  {
    "id": 300,
    "kelime": "SESSİZE ALMAK",
    "yasakli_kelimeler": [
      "BİLDİRİM",
      "TELEFON",
      "KAPATMAK",
      "MESAJ",
      "RAHATSIZ"
    ]
  },
  {
    "id": 301,
    "kelime": "TERZİ",
    "yasakli_kelimeler": [
      "KUMAŞ",
      "DİKİŞ",
      "MAKAS",
      "ELBİSE",
      "İĞNE"
    ]
  },
  {
    "id": 302,
    "kelime": "REKLAM ENGELLEYİCİ",
    "yasakli_kelimeler": [
      "TARAYICI",
      "İNTERNET",
      "PROGRAM",
      "SİTE",
      "UYGULAMA"
    ]
  },
  {
    "id": 303,
    "kelime": "ÇEVRİMİÇİ ARKADAŞ",
    "yasakli_kelimeler": [
      "İNTERNET",
      "TANIŞMAK",
      "OYUN",
      "SOSYAL MEDYA",
      "SANAL"
    ]
  },
  {
    "id": 304,
    "kelime": "ECZACI",
    "yasakli_kelimeler": [
      "İLAÇ",
      "REÇETE",
      "KUTU",
      "DOKTOR",
      "RAF"
    ]
  },
  {
    "id": 305,
    "kelime": "TARAYICI",
    "yasakli_kelimeler": [
      "İNTERNET",
      "SEKME",
      "SİTE",
      "PROGRAM",
      "ARAMA"
    ]
  },
  {
    "id": 306,
    "kelime": "İÇERİK ÜRETİCİSİ",
    "yasakli_kelimeler": [
      "VİDEO",
      "PAYLAŞIM",
      "SOSYAL MEDYA",
      "TAKİPÇİ",
      "KANAL"
    ]
  },
  {
    "id": 307,
    "kelime": "MİMAR",
    "yasakli_kelimeler": [
      "BİNA",
      "ÇİZİM",
      "PLAN",
      "İNŞAAT",
      "TASARIM"
    ]
  },
  {
    "id": 308,
    "kelime": "ARAMA MOTORU",
    "yasakli_kelimeler": [
      "İNTERNET",
      "SONUÇ",
      "GOOGLE",
      "SORGU",
      "SİTE"
    ]
  },
  {
    "id": 309,
    "kelime": "KONSER",
    "yasakli_kelimeler": [
      "SAHNE",
      "ŞARKICI",
      "BİLET",
      "IŞIK",
      "KALABALIK"
    ]
  },
  {
    "id": 310,
    "kelime": "MÜHENDİS",
    "yasakli_kelimeler": [
      "HESAP",
      "PROJE",
      "TEKNİK",
      "PLAN",
      "YAPI"
    ]
  },
  {
    "id": 311,
    "kelime": "E-POSTA",
    "yasakli_kelimeler": [
      "MESAJ",
      "GÖNDERME",
      "İNTERNET",
      "YAZIŞMA",
      "HESAP"
    ]
  },
  {
    "id": 312,
    "kelime": "GİTAR",
    "yasakli_kelimeler": [
      "TEL",
      "ÇALMAK",
      "MÜZİK ALETİ",
      "AKOR",
      "PARMAK"
    ]
  },
  {
    "id": 313,
    "kelime": "PİLOT",
    "yasakli_kelimeler": [
      "UÇAK",
      "KOKPİT",
      "UÇMAK",
      "GÖKYÜZÜ",
      "YOLCU"
    ]
  },
  {
    "id": 314,
    "kelime": "EK DOSYA",
    "yasakli_kelimeler": [
      "MAİL",
      "GÖNDERMEK",
      "BELGE",
      "İLİŞTİRMEK",
      "KLASÖR"
    ]
  },
  {
    "id": 315,
    "kelime": "PİYANO",
    "yasakli_kelimeler": [
      "TUŞ",
      "ÇALMAK",
      "MÜZİK ALETİ",
      "NOTA",
      "PEDAL"
    ]
  },
  {
    "id": 316,
    "kelime": "HEMŞİRE",
    "yasakli_kelimeler": [
      "HASTANE",
      "İĞNE",
      "DOKTOR",
      "BAKIM",
      "BEYAZ"
    ]
  },
  {
    "id": 317,
    "kelime": "BİLDİRİM SESİ",
    "yasakli_kelimeler": [
      "TELEFON",
      "UYARI",
      "EKRAN",
      "MESAJ",
      "TİTREŞİM"
    ]
  },
  {
    "id": 318,
    "kelime": "DAVUL",
    "yasakli_kelimeler": [
      "VURMAK",
      "RİTİM",
      "BAGET",
      "MÜZİK ALETİ",
      "SES"
    ]
  },
  {
    "id": 319,
    "kelime": "VETERİNER",
    "yasakli_kelimeler": [
      "HAYVAN",
      "MUAYENE",
      "KLİNİK",
      "TEDAVİ",
      "AŞI"
    ]
  },
  {
    "id": 320,
    "kelime": "UÇAK MODU",
    "yasakli_kelimeler": [
      "TELEFON",
      "SİNYAL",
      "KAPATMAK",
      "HAVAALANI",
      "BAĞLANTI"
    ]
  },
  {
    "id": 321,
    "kelime": "KEMAN",
    "yasakli_kelimeler": [
      "YAY",
      "TEL",
      "ÇALMAK",
      "MÜZİK ALETİ",
      "ÇENE"
    ]
  },
  {
    "id": 322,
    "kelime": "AVUKAT",
    "yasakli_kelimeler": [
      "MAHKEME",
      "DAVA",
      "HUKUK",
      "SAVUNMA",
      "YASA"
    ]
  },
  {
    "id": 323,
    "kelime": "TİTREŞİM",
    "yasakli_kelimeler": [
      "TELEFON",
      "SESSİZ",
      "UYARI",
      "SARSINTI",
      "MOD"
    ]
  },
  {
    "id": 324,
    "kelime": "BAĞLAMA",
    "yasakli_kelimeler": [
      "TEL",
      "NEŞET ERTAŞ",
      "TÜRK",
      "ÇALMAK",
      "MÜZİK ALETİ"
    ]
  },
  {
    "id": 325,
    "kelime": "HAKİM",
    "yasakli_kelimeler": [
      "MAHKEME",
      "KARAR",
      "ADALET",
      "DAVA",
      "YASA"
    ]
  },
  {
    "id": 326,
    "kelime": "PİKSEL",
    "yasakli_kelimeler": [
      "EKRAN",
      "GÖRÜNTÜ",
      "NOKTA",
      "KALİTE",
      "RENK"
    ]
  },
  {
    "id": 327,
    "kelime": "MELODİ",
    "yasakli_kelimeler": [
      "EZGİ",
      "SES",
      "ŞARKI",
      "MÜZİK",
      "NOTA"
    ]
  },
  {
    "id": 328,
    "kelime": "POLİS MEMURU",
    "yasakli_kelimeler": [
      "ÜNİFORMA",
      "KANUN",
      "SUÇ",
      "DEVRİYE",
      "DÜDÜK"
    ]
  },
  {
    "id": 329,
    "kelime": "ÇÖZÜNÜRLÜK",
    "yasakli_kelimeler": [
      "EKRAN",
      "GÖRÜNTÜ",
      "NETLİK",
      "KALİTE",
      "PİKSEL"
    ]
  },
  {
    "id": 330,
    "kelime": "RİTİM",
    "yasakli_kelimeler": [
      "TEMPO",
      "VURUŞ",
      "MÜZİK",
      "DANS",
      "DAVUL"
    ]
  },
  {
    "id": 331,
    "kelime": "İTFAİYECİ",
    "yasakli_kelimeler": [
      "YANGIN",
      "HORTUM",
      "KAMYON",
      "SÖNDÜRMEK",
      "ALEV"
    ]
  },
  {
    "id": 332,
    "kelime": "İŞLEMCİ",
    "yasakli_kelimeler": [
      "BİLGİSAYAR",
      "HIZ",
      "ÇİP",
      "PERFORMANS",
      "BEYİN"
    ]
  },
  {
    "id": 333,
    "kelime": "BESTECİ",
    "yasakli_kelimeler": [
      "MÜZİK",
      "YAZMAK",
      "NOTA",
      "ŞARKI",
      "SANATÇI"
    ]
  },
  {
    "id": 334,
    "kelime": "ÖĞRETMEN",
    "yasakli_kelimeler": [
      "OKUL",
      "DERS",
      "TAHTA",
      "ÖĞRENCİ",
      "SINIF"
    ]
  },
  {
    "id": 335,
    "kelime": "EKRAN KARTI",
    "yasakli_kelimeler": [
      "BİLGİSAYAR",
      "OYUN",
      "GRAFİK",
      "GÖRÜNTÜ",
      "PERFORMANS"
    ]
  },
  {
    "id": 336,
    "kelime": "SÖZ YAZARI",
    "yasakli_kelimeler": [
      "ŞARKI",
      "KELİME",
      "MELODİ",
      "ANLAM",
      "NAKARAT"
    ]
  },
  {
    "id": 337,
    "kelime": "MUHASEBECİ",
    "yasakli_kelimeler": [
      "HESAP",
      "PARA",
      "ŞİRKET",
      "FATURA",
      "RAPOR"
    ]
  },
  {
    "id": 338,
    "kelime": "SUNUCU ÇÖKMESİ",
    "yasakli_kelimeler": [
      "İNTERNET",
      "BAĞLANTI",
      "OYUN",
      "ERİŞİLEMEMEK",
      "YOĞUNLUK"
    ]
  },
  {
    "id": 339,
    "kelime": "ORKESTRA",
    "yasakli_kelimeler": [
      "MÜZİK",
      "ŞEF",
      "ENSTRÜMAN",
      "SALON",
      "TOPLULUK"
    ]
  },
  {
    "id": 340,
    "kelime": "GAZETECİ",
    "yasakli_kelimeler": [
      "HABER",
      "YAZMAK",
      "RÖPORTAJ",
      "BASIN",
      "KAMERA"
    ]
  },
  {
    "id": 341,
    "kelime": "BAĞLANTI HIZI",
    "yasakli_kelimeler": [
      "İNTERNET",
      "YAVAŞ",
      "VERİ",
      "İNDİRME",
      "SİNYAL"
    ]
  },
  {
    "id": 342,
    "kelime": "KORO",
    "yasakli_kelimeler": [
      "ŞARKI",
      "GRUP",
      "SES",
      "BİRLİKTE",
      "SÖYLEMEK"
    ]
  },
  {
    "id": 343,
    "kelime": "FOTOĞRAFÇI",
    "yasakli_kelimeler": [
      "KAMERA",
      "POZ",
      "ÇEKİM",
      "IŞIK",
      "OBJEKTİF"
    ]
  },
  {
    "id": 344,
    "kelime": "AKILLI HOPARLÖR",
    "yasakli_kelimeler": [
      "SES",
      "EV",
      "ASİSTAN",
      "MÜZİK",
      "KOMUT"
    ]
  },
  {
    "id": 345,
    "kelime": "KULAKLIK",
    "yasakli_kelimeler": [
      "MÜZİK",
      "TAKMAK",
      "DİNLEMEK",
      "SES",
      "KABLO"
    ]
  },
  {
    "id": 346,
    "kelime": "GRAFİK TASARIMCI",
    "yasakli_kelimeler": [
      "BİLGİSAYAR",
      "RENK",
      "GÖRSEL",
      "PROGRAM",
      "LOGO"
    ]
  },
  {
    "id": 347,
    "kelime": "PENALTI",
    "yasakli_kelimeler": [
      "FUTBOL",
      "KALECİ",
      "VURUŞ",
      "CEZA SAHASI",
      "TOP"
    ]
  },
  {
    "id": 348,
    "kelime": "ÇALGI",
    "yasakli_kelimeler": [
      "ENSTRÜMAN",
      "MÜZİK",
      "SES",
      "NOTA",
      "ALET"
    ]
  },
  {
    "id": 349,
    "kelime": "YAZILIMCI",
    "yasakli_kelimeler": [
      "KOD",
      "BİLGİSAYAR",
      "PROGRAM",
      "GELİŞTİRMEK",
      "EKRAN"
    ]
  },
  {
    "id": 350,
    "kelime": "OFSAYT",
    "yasakli_kelimeler": [
      "FUTBOL",
      "KURAL",
      "HAKEM",
      "POZİSYON",
      "BAYRAK"
    ]
  },
  {
    "id": 351,
    "kelime": "NOTA",
    "yasakli_kelimeler": [
      "MÜZİK",
      "YAZI",
      "SES",
      "PERDE",
      "BESTE"
    ]
  },
  {
    "id": 352,
    "kelime": "ELEKTRİKÇİ",
    "yasakli_kelimeler": [
      "KABLO",
      "TAMİR",
      "SİGORTA",
      "PRİZ",
      "TORNAVİDA"
    ]
  },
  {
    "id": 353,
    "kelime": "KIRMIZI KART",
    "yasakli_kelimeler": [
      "HAKEM",
      "FAUL",
      "OYUNCU",
      "CEZA",
      "FUTBOL"
    ]
  },
  {
    "id": 354,
    "kelime": "AKOR",
    "yasakli_kelimeler": [
      "GİTAR",
      "MÜZİK",
      "NOTA",
      "ÇALMAK",
      "PARMAK"
    ]
  },
  {
    "id": 355,
    "kelime": "TESİSATÇI",
    "yasakli_kelimeler": [
      "SU",
      "BORU",
      "TAMİR",
      "MUSLUK",
      "TIKANIKLIK"
    ]
  },
  {
    "id": 356,
    "kelime": "SARI KART",
    "yasakli_kelimeler": [
      "HAKEM",
      "UYARI",
      "FAUL",
      "FUTBOL",
      "OYUNCU"
    ]
  },
  {
    "id": 357,
    "kelime": "TURNE",
    "yasakli_kelimeler": [
      "KONSER",
      "ŞEHİR",
      "SAHNE",
      "ŞARKICI",
      "GEZMEK"
    ]
  },
  {
    "id": 358,
    "kelime": "KUAFÖR",
    "yasakli_kelimeler": [
      "SAÇ",
      "SALON",
      "FÖN",
      "BOYA",
      "MAKAS"
    ]
  },
  {
    "id": 359,
    "kelime": "TEZAHÜRAT",
    "yasakli_kelimeler": [
      "STADYUM",
      "BAĞIRMAK",
      "DESTEK",
      "ŞARKI",
      "TAKIM"
    ]
  },
  {
    "id": 360,
    "kelime": "STÜDYO KAYDI",
    "yasakli_kelimeler": [
      "MÜZİK",
      "SES",
      "PRODÜKTÖR",
      "ŞARKICI",
      "MİKROFON"
    ]
  },
  {
    "id": 361,
    "kelime": "ŞOFÖR",
    "yasakli_kelimeler": [
      "ARAÇ",
      "DİREKSİYON",
      "YOL",
      "SÜRMEK",
      "YOLCU"
    ]
  },
  {
    "id": 362,
    "kelime": "KUPA",
    "yasakli_kelimeler": [
      "KAZANMAK",
      "TAKIM",
      "ÖDÜL",
      "FİNAL",
      "ZAFER"
    ]
  },
  {
    "id": 363,
    "kelime": "MİKROFON",
    "yasakli_kelimeler": [
      "SES",
      "KONSER",
      "SAHNE",
      "ŞARKICI",
      "KONUŞMAK"
    ]
  },
  {
    "id": 364,
    "kelime": "PASTA ŞEFİ",
    "yasakli_kelimeler": [
      "FIRIN",
      "KREMA",
      "TATLI",
      "HAMUR",
      "SÜSLEME"
    ]
  },
  {
    "id": 365,
    "kelime": "SAKATLIK GEÇİRMEK",
    "yasakli_kelimeler": [
      "SPORCU",
      "YARALANMAK",
      "KAS",
      "AĞRI",
      "OYUN DIŞI"
    ]
  },
  {
    "id": 366,
    "kelime": "PLAK",
    "yasakli_kelimeler": [
      "MÜZİK",
      "ESKİ",
      "DÖNER",
      "SES",
      "VİNİL"
    ]
  },
  {
    "id": 367,
    "kelime": "ÇİFTÇİ",
    "yasakli_kelimeler": [
      "TOPRAK",
      "TARLA",
      "EKİN",
      "HASAT",
      "TRAKTÖR"
    ]
  },
  {
    "id": 368,
    "kelime": "ANTRENMAN PROGRAMI",
    "yasakli_kelimeler": [
      "SPOR",
      "ÇALIŞMAK",
      "KAS",
      "EGZERSİZ",
      "KOÇ"
    ]
  },
  {
    "id": 369,
    "kelime": "DJ",
    "yasakli_kelimeler": [
      "MÜZİK",
      "KARIŞTIRMAK",
      "KULÜP",
      "SES",
      "PLAK"
    ]
  },
  {
    "id": 370,
    "kelime": "BALIKÇI",
    "yasakli_kelimeler": [
      "DENİZ",
      "AĞ",
      "OLTA",
      "TEKNE",
      "LİMAN"
    ]
  },
  {
    "id": 371,
    "kelime": "TAKIM KAPTANI",
    "yasakli_kelimeler": [
      "FUTBOL",
      "KOLLUK",
      "LİDER",
      "OYUNCU",
      "PAZUBANT"
    ]
  },
  {
    "id": 372,
    "kelime": "AKUSTİK",
    "yasakli_kelimeler": [
      "GİTAR",
      "SES",
      "YALIN",
      "MÜZİK",
      "SAHNE"
    ]
  },
  {
    "id": 373,
    "kelime": "MARANGOZ",
    "yasakli_kelimeler": [
      "AHŞAP",
      "TESTERE",
      "ÇEKİÇ",
      "TAHTA",
      "MOBİLYA"
    ]
  },
  {
    "id": 374,
    "kelime": "DEPLASMAN MAÇI",
    "yasakli_kelimeler": [
      "FUTBOL",
      "TAKIM",
      "ŞEHİR",
      "DIŞARIDA",
      "RAKİP"
    ]
  },
  {
    "id": 375,
    "kelime": "DÜET",
    "yasakli_kelimeler": [
      "İKİ KİŞİ",
      "ŞARKI",
      "BİRLİKTE",
      "SÖYLEMEK",
      "SAHNE"
    ]
  },
  {
    "id": 376,
    "kelime": "HEYKELTIRAŞ",
    "yasakli_kelimeler": [
      "TAŞ",
      "YONTMAK",
      "SANAT",
      "ŞEKİL",
      "ESER"
    ]
  },
  {
    "id": 377,
    "kelime": "KRAMPON",
    "yasakli_kelimeler": [
      "AYAKKABI",
      "FUTBOL",
      "ÇİM",
      "SAHA",
      "AYAK"
    ]
  },
  {
    "id": 378,
    "kelime": "SOLİST",
    "yasakli_kelimeler": [
      "ŞARKICI",
      "GRUP",
      "SES",
      "SAHNE",
      "BAŞ"
    ]
  },
  {
    "id": 379,
    "kelime": "ARKEOLOG",
    "yasakli_kelimeler": [
      "KAZI",
      "TARİH",
      "ESER",
      "TOPRAK",
      "ANTİK"
    ]
  },
  {
    "id": 380,
    "kelime": "BASKETBOL POTASI",
    "yasakli_kelimeler": [
      "TOP",
      "SKOR",
      "SAHA",
      "ATIŞ",
      "ÇEMBER"
    ]
  },
  {
    "id": 381,
    "kelime": "NOTA DEFTERİ",
    "yasakli_kelimeler": [
      "MÜZİK",
      "BESTE",
      "YAZMAK",
      "KAĞIT",
      "ÇİZGİ"
    ]
  },
  {
    "id": 382,
    "kelime": "ZÜRAFA",
    "yasakli_kelimeler": [
      "UZUN BOYUN",
      "AFRİKA",
      "LEKE",
      "YAPRAK",
      "SAVAN"
    ]
  },
  {
    "id": 383,
    "kelime": "SMAÇ",
    "yasakli_kelimeler": [
      "BASKETBOL",
      "POTA",
      "SIÇRAMAK",
      "TOP",
      "ÇEMBER"
    ]
  },
  {
    "id": 384,
    "kelime": "MÜZİK FESTİVALİ",
    "yasakli_kelimeler": [
      "SAHNE",
      "SANATÇI",
      "KALABALIK",
      "ALAN",
      "KONSER"
    ]
  },
  {
    "id": 385,
    "kelime": "PENGUEN",
    "yasakli_kelimeler": [
      "KUTUP",
      "YÜRÜYÜŞ",
      "BUZ",
      "BALIK",
      "SİYAH BEYAZ"
    ]
  },
  {
    "id": 386,
    "kelime": "SERVİS ATMAK",
    "yasakli_kelimeler": [
      "TOP",
      "VURUŞ",
      "OYUN",
      "BAŞLANGIÇ",
      "RAKET"
    ]
  },
  {
    "id": 387,
    "kelime": "ZİL SESİ",
    "yasakli_kelimeler": [
      "TELEFON",
      "MÜZİK",
      "ÇALMAK",
      "ARAMA",
      "MELODİ"
    ]
  },
  {
    "id": 388,
    "kelime": "KANGURU",
    "yasakli_kelimeler": [
      "AVUSTRALYA",
      "TORBA",
      "ZIPLAMAK",
      "KUYRUK",
      "YAVRU"
    ]
  },
  {
    "id": 389,
    "kelime": "SET SAYISI",
    "yasakli_kelimeler": [
      "VOLEYBOL",
      "TENİS",
      "OYUN",
      "KAZANMAK",
      "PUAN"
    ]
  },
  {
    "id": 390,
    "kelime": "BEATBOX",
    "yasakli_kelimeler": [
      "AĞIZ",
      "SES",
      "RİTİM",
      "MÜZİK",
      "TAKLİT"
    ]
  },
  {
    "id": 391,
    "kelime": "TİMSAH",
    "yasakli_kelimeler": [
      "NEHİR",
      "DİŞ",
      "SÜRÜNGEN",
      "BATAKLIK",
      "KUYRUK"
    ]
  },
  {
    "id": 392,
    "kelime": "MARATON KOŞUSU",
    "yasakli_kelimeler": [
      "UZUN",
      "NEFES",
      "YORULMAK",
      "KİLOMETRE",
      "YARIŞ"
    ]
  },
  {
    "id": 393,
    "kelime": "OPERA",
    "yasakli_kelimeler": [
      "SAHNE",
      "ŞARKI",
      "SES",
      "TİYATRO",
      "KLASİK"
    ]
  },
  {
    "id": 394,
    "kelime": "YUNUS",
    "yasakli_kelimeler": [
      "DENİZ",
      "ZEKİ",
      "YÜZMEK",
      "SIÇRAMAK",
      "SUDA"
    ]
  },
  {
    "id": 395,
    "kelime": "YÜZME YARIŞI",
    "yasakli_kelimeler": [
      "HAVUZ",
      "SU",
      "KULAÇ",
      "HIZ",
      "KÜREK"
    ]
  },
  {
    "id": 396,
    "kelime": "MARŞ",
    "yasakli_kelimeler": [
      "MÜZİK",
      "ULUSAL",
      "SÖYLEMEK",
      "TÖREN",
      "RİTİM"
    ]
  },
  {
    "id": 397,
    "kelime": "AHTAPOT",
    "yasakli_kelimeler": [
      "DENİZ",
      "KOL",
      "MÜREKKEP",
      "SUDA",
      "SEKİZ"
    ]
  },
  {
    "id": 398,
    "kelime": "TEKNİK DİREKTÖR",
    "yasakli_kelimeler": [
      "SPOR",
      "KOÇ",
      "TAKIM",
      "YÖNLENDİRMEK",
      "FUTBOL"
    ]
  },
  {
    "kelime": "YERÇEKİMİ",
    "yasakli_kelimeler": [
      "NEWTON",
      "ELMA",
      "DÜŞMEK",
      "KUVVET",
      "FİZİK"
    ],
    "id": 399
  },
  {
    "id": 400,
    "kelime": "KELEBEK",
    "yasakli_kelimeler": [
      "KANAT",
      "UÇMAK",
      "RENKLİ",
      "ÇİÇEK",
      "TIRTIL"
    ]
  },
  {
    "id": 401,
    "kelime": "HAKEM DÜDÜĞÜ",
    "yasakli_kelimeler": [
      "MAÇ",
      "SES",
      "DURDURMAK",
      "FAUL",
      "SAHA"
    ]
  },
  {
    "kelime": "MİKROSKOP",
    "yasakli_kelimeler": [
      "BÜYÜTEÇ",
      "HÜCRE",
      "BAKMAK",
      "LENS",
      "GÖZ"
    ],
    "id": 402
  },
  {
    "id": 403,
    "kelime": "BAYKUŞ",
    "yasakli_kelimeler": [
      "GECE",
      "KUŞ",
      "ÖTMEK",
      "AĞAÇ",
      "SES"
    ]
  },
  {
    "id": 404,
    "kelime": "ŞUT ÇEKMEK",
    "yasakli_kelimeler": [
      "FUTBOL",
      "TOP",
      "KALE",
      "VURUŞ",
      "GOL"
    ]
  },
  {
    "kelime": "GÖKKUŞAĞI",
    "yasakli_kelimeler": [
      "YAĞMUR",
      "GÜNEŞ",
      "RENK",
      "HAVA",
      "KAVİS"
    ],
    "id": 405
  },
  {
    "id": 406,
    "kelime": "TAVUS KUŞU",
    "yasakli_kelimeler": [
      "TÜY",
      "RENKLİ",
      "KUYRUK",
      "AÇMAK",
      "GÖRKEMLİ"
    ]
  },
  {
    "id": 407,
    "kelime": "GOL SEVİNCİ",
    "yasakli_kelimeler": [
      "FUTBOL",
      "KUTLAMA",
      "OYUNCU",
      "KOŞMAK",
      "SAHNE"
    ]
  },
  {
    "kelime": "PUSULA",
    "yasakli_kelimeler": [
      "YÖN",
      "KUZEY",
      "İBRE",
      "MANYETİK",
      "KAYBOLMAK"
    ],
    "id": 408
  },
  {
    "id": 409,
    "kelime": "ARI",
    "yasakli_kelimeler": [
      "BAL",
      "KOVAN",
      "VIZILDAMAK",
      "İĞNE",
      "ÇİÇEK"
    ]
  },
  {
    "id": 410,
    "kelime": "KALE DİREĞİ",
    "yasakli_kelimeler": [
      "FUTBOL",
      "TOP",
      "KALECİ",
      "ÇARPMAK",
      "METAL"
    ]
  },
  {
    "kelime": "ÇÖL",
    "yasakli_kelimeler": [
      "KUM",
      "SICAK",
      "DEVE",
      "SERAP",
      "SUSUZLUK"
    ],
    "id": 411
  },
  {
    "id": 412,
    "kelime": "KARINCA",
    "yasakli_kelimeler": [
      "YUVA",
      "KÜÇÜK",
      "ÇALIŞKAN",
      "KOLONİ",
      "TAŞIMAK"
    ]
  },
  {
    "id": 413,
    "kelime": "STADYUM ATMOSFERİ",
    "yasakli_kelimeler": [
      "TARAFTAR",
      "SES",
      "MAÇ",
      "COŞKU",
      "TRİBÜN"
    ]
  },
  {
    "kelime": "PİRAMİT",
    "yasakli_kelimeler": [
      "MISIR",
      "FİRAVUN",
      "ÜÇGEN",
      "MEZAR",
      "TARİH"
    ],
    "id": 414
  },
  {
    "id": 415,
    "kelime": "ÖRÜMCEK",
    "yasakli_kelimeler": [
      "AĞ",
      "SEKİZ BACAK",
      "BÖCEK",
      "ZEHİR",
      "KÖŞE"
    ]
  },
  {
    "id": 416,
    "kelime": "FUTBOLCU TRANSFERİ",
    "yasakli_kelimeler": [
      "OYUNCU",
      "TAKIM",
      "PARA",
      "İMZA",
      "KULÜP"
    ]
  },
  {
    "kelime": "MÜZE",
    "yasakli_kelimeler": [
      "TARİH",
      "ESER",
      "SANAT",
      "SERGİ",
      "GEZMEK"
    ],
    "id": 417
  },
  {
    "id": 418,
    "kelime": "YARASA",
    "yasakli_kelimeler": [
      "GECE",
      "UÇMAK",
      "MAĞARA",
      "TERS",
      "KANAT"
    ]
  },
  {
    "id": 419,
    "kelime": "LİG SIRALAMASI",
    "yasakli_kelimeler": [
      "PUAN",
      "TAKIM",
      "SEZON",
      "TABLO",
      "ŞAMPİYONLUK"
    ]
  },
  {
    "kelime": "RESSAM",
    "yasakli_kelimeler": [
      "FIRÇA",
      "TUVAL",
      "BOYA",
      "TABLO",
      "SANAT"
    ],
    "id": 420
  },
  {
    "id": 421,
    "kelime": "FİL",
    "yasakli_kelimeler": [
      "HORTUM",
      "BÜYÜK",
      "AFRİKA",
      "KULAK",
      "DİŞ"
    ]
  },
  {
    "id": 422,
    "kelime": "UZATMA DAKİKALARI",
    "yasakli_kelimeler": [
      "MAÇ",
      "SÜRE",
      "HAKEM",
      "GOL",
      "EK"
    ]
  },
  {
    "kelime": "HEYKEL",
    "yasakli_kelimeler": [
      "TAŞ",
      "YONTMAK",
      "SANAT",
      "ESER",
      "MERMER"
    ],
    "id": 423
  },
  {
    "id": 424,
    "kelime": "ASLAN",
    "yasakli_kelimeler": [
      "YELE",
      "KRAL",
      "SAVAN",
      "KÜKREMEK",
      "AVLANMAK"
    ]
  },
  {
    "id": 425,
    "kelime": "PENALTI ATIŞLARI",
    "yasakli_kelimeler": [
      "KALECİ",
      "VURUŞ",
      "BERABERLİK",
      "SERİ",
      "GOL"
    ]
  },
  {
    "kelime": "UZAYLI",
    "yasakli_kelimeler": [
      "UFO",
      "GEZEGEN",
      "DÜNYA DIŞI",
      "MARS",
      "YARATIK"
    ],
    "id": 426
  },
  {
    "id": 427,
    "kelime": "KAPLAN",
    "yasakli_kelimeler": [
      "ÇİZGİLİ",
      "TURUNCU",
      "ORMAN",
      "PENÇE",
      "AVCI"
    ]
  },
  {
    "id": 428,
    "kelime": "RİNG",
    "yasakli_kelimeler": [
      "YUMRUK",
      "DÖVÜŞ",
      "SPORCU",
      "BOKS",
      "HAKEM"
    ]
  },
  {
    "kelime": "ASTRONOT",
    "yasakli_kelimeler": [
      "UZAY",
      "MEKİK",
      "AY",
      "KIYAFET",
      "YERÇEKİMİ"
    ],
    "id": 429
  },
  {
    "id": 430,
    "kelime": "ZEBRA",
    "yasakli_kelimeler": [
      "ÇİZGİLİ",
      "SİYAH",
      "AFRİKA",
      "AT",
      "BEYAZ"
    ]
  },
  {
    "id": 431,
    "kelime": "GÜREŞ MİNDERİ",
    "yasakli_kelimeler": [
      "SPORCU",
      "YAĞ",
      "PEHLİVAN",
      "TUTMAK",
      "YENMEK"
    ]
  },
  {
    "kelime": "KARADELİK",
    "yasakli_kelimeler": [
      "UZAY",
      "YUTMAK",
      "GÜÇ",
      "YILDIZ",
      "BİLİM"
    ],
    "id": 432
  },
  {
    "id": 433,
    "kelime": "KOALA",
    "yasakli_kelimeler": [
      "AVUSTRALYA",
      "OKALİPTÜS",
      "AĞAÇ",
      "TEMBEL",
      "TORBA"
    ]
  },
  {
    "id": 434,
    "kelime": "HALTER KALDIRMAK",
    "yasakli_kelimeler": [
      "AĞIRLIK",
      "KAS",
      "SPOR",
      "SALON",
      "GÜÇ"
    ]
  },
  {
    "kelime": "FOSİL",
    "yasakli_kelimeler": [
      "DİNOZOR",
      "TAŞ",
      "KEMİK",
      "ARKEOLOG",
      "KAZI"
    ],
    "id": 435
  },
  {
    "id": 436,
    "kelime": "PANDA",
    "yasakli_kelimeler": [
      "SİYAH BEYAZ",
      "BAMBU",
      "ÇİN",
      "AYI",
      "TEMBEL"
    ]
  },
  {
    "id": 437,
    "kelime": "FİTNESS SALONU",
    "yasakli_kelimeler": [
      "KAS",
      "EGZERSİZ",
      "ALET",
      "SPOR",
      "TER"
    ]
  },
  {
    "kelime": "ŞÖVALYE",
    "yasakli_kelimeler": [
      "ZIRH",
      "KILIÇ",
      "ORTA ÇAĞ",
      "AT",
      "KRAL"
    ],
    "id": 438
  },
  {
    "id": 439,
    "kelime": "TAVŞAN",
    "yasakli_kelimeler": [
      "KULAK",
      "HAVUÇ",
      "ZIPLAMAK",
      "YUMUŞAK",
      "YUVA"
    ]
  },
  {
    "id": 440,
    "kelime": "KOŞU BANDI",
    "yasakli_kelimeler": [
      "SALON",
      "HIZ",
      "SPOR",
      "ALET",
      "TER"
    ]
  },
  {
    "kelime": "KALE",
    "yasakli_kelimeler": [
      "SURLAR",
      "KRAL",
      "ŞÖVALYE",
      "TAŞ",
      "KORUMA"
    ],
    "id": 441
  },
  {
    "id": 442,
    "kelime": "KURBAĞA",
    "yasakli_kelimeler": [
      "SU",
      "ZIPLAMAK",
      "YEŞİL",
      "NİLÜFER",
      "VIRAKLAMAK"
    ]
  },
  {
    "id": 443,
    "kelime": "PİLATES DERSİ",
    "yasakli_kelimeler": [
      "EGZERSİZ",
      "VÜCUT",
      "SALON",
      "ESNEME",
      "NEFES"
    ]
  },
  {
    "kelime": "GLADYATÖR",
    "yasakli_kelimeler": [
      "ARENA",
      "ROMA",
      "DÖVÜŞ",
      "KILIÇ",
      "SAVAŞÇI"
    ],
    "id": 444
  },
  {
    "id": 445,
    "kelime": "YENGEÇ",
    "yasakli_kelimeler": [
      "DENİZ",
      "KISKAÇ",
      "YAN YAN",
      "KABUK",
      "KUM"
    ]
  },
  {
    "id": 446,
    "kelime": "YOGA POZU",
    "yasakli_kelimeler": [
      "ESNEME",
      "NEFES",
      "DENGE",
      "VÜCUT",
      "SAKİNLİK"
    ]
  },
  {
    "kelime": "ŞELALE",
    "yasakli_kelimeler": [
      "SU",
      "YÜKSEK",
      "AKMAK",
      "DOĞA",
      "NEHİR"
    ],
    "id": 447
  },
  {
    "id": 448,
    "kelime": "İSTAKOZ",
    "yasakli_kelimeler": [
      "DENİZ",
      "KABUK",
      "KISKAÇ",
      "KIRMIختی",
      "YEMEK"
    ]
  },
  {
    "id": 449,
    "kelime": "BİSİKLET TURU",
    "yasakli_kelimeler": [
      "PEDAL",
      "YOL",
      "İKİ TEKER",
      "SÜRMEK",
      "EGZERSİZ"
    ]
  },
  {
    "kelime": "VOLKAN",
    "yasakli_kelimeler": [
      "LAV",
      "PATLAMA",
      "DAĞ",
      "KÜL",
      "MAGMA"
    ],
    "id": 450
  },
  {
    "id": 451,
    "kelime": "DENİZ ATI",
    "yasakli_kelimeler": [
      "OKYANUS",
      "KÜÇÜK",
      "KUYRUK",
      "YÜZMEK",
      "ŞEKİL"
    ]
  },
  {
    "id": 452,
    "kelime": "TENİS KORTU",
    "yasakli_kelimeler": [
      "RAKET",
      "TOP",
      "FİLELER",
      "SAHA",
      "VURUŞ"
    ]
  },
  {
    "kelime": "DEPREM",
    "yasakli_kelimeler": [
      "SARSINTI",
      "FAY",
      "YIKIM",
      "AFET",
      "SALLANMAK"
    ],
    "id": 453
  },
  {
    "id": 454,
    "kelime": "GERGEDAN",
    "yasakli_kelimeler": [
      "BOYNUZ",
      "KALIN DERİ",
      "AFRİKA",
      "BÜYÜK",
      "SAVAN"
    ]
  },
  {
    "id": 455,
    "kelime": "MASA TENİSİ",
    "yasakli_kelimeler": [
      "RAKET",
      "TOP",
      "FİLELER",
      "VURUŞ",
      "KÜÇÜK"
    ]
  },
  {
    "kelime": "TSUNAMİ",
    "yasakli_kelimeler": [
      "DALGA",
      "DENİZ",
      "DEPREM",
      "AFET",
      "OKYANUS"
    ],
    "id": 456
  },
  {
    "id": 457,
    "kelime": "SU AYGIRI",
    "yasakli_kelimeler": [
      "NEHİR",
      "BÜYÜK",
      "AĞIZ",
      "BATAKLIK",
      "AFRİKA"
    ]
  },
  {
    "id": 458,
    "kelime": "OKÇULUK",
    "yasakli_kelimeler": [
      "YAY",
      "HEDEF",
      "NİŞAN",
      "ATMAK",
      "KİRİŞ"
    ]
  },
  {
    "kelime": "KASIRGA",
    "yasakli_kelimeler": [
      "RÜZGAR",
      "FIRTINA",
      "HORTUM",
      "HAVA",
      "AFET"
    ],
    "id": 459
  },
  {
    "id": 460,
    "kelime": "ÇAKAL",
    "yasakli_kelimeler": [
      "ULUMA",
      "GECE",
      "VAHŞİ",
      "SÜRÜ",
      "ORMAN"
    ]
  },
  {
    "id": 461,
    "kelime": "ESKRİM",
    "yasakli_kelimeler": [
      "KILIÇ",
      "MASKE",
      "DÜELLO",
      "VURUŞ",
      "SPORCU"
    ]
  },
  {
    "kelime": "KLONLAMA",
    "yasakli_kelimeler": [
      "KOPYA",
      "DNA",
      "GENETİK",
      "KOYUN",
      "BİLİM"
    ],
    "id": 462
  },
  {
    "id": 463,
    "kelime": "TİLKİ",
    "yasakli_kelimeler": [
      "KURNAZ",
      "TURUNCU",
      "KUYRUK",
      "ORMAN",
      "TAVUK"
    ]
  },
  {
    "id": 464,
    "kelime": "HASHTAG",
    "yasakli_kelimeler": [
      "KARE",
      "İŞARET",
      "TWİTTER",
      "ETİKET",
      "PAYLAŞIM"
    ]
  },
  {
    "kelime": "BAKTERİ",
    "yasakli_kelimeler": [
      "MİKROP",
      "HASTALIK",
      "HÜCRE",
      "ANTİBİYOTİK",
      "MİKROSKOP"
    ],
    "id": 465
  },
  {
    "id": 466,
    "kelime": "KUNDUZ",
    "yasakli_kelimeler": [
      "BARAJ",
      "AĞAÇ",
      "KESMEK",
      "NEHİR",
      "KUYRUK"
    ]
  },
  {
    "id": 467,
    "kelime": "DM ATMAK",
    "yasakli_kelimeler": [
      "MESAJ",
      "ÖZEL",
      "SOSYAL MEDYA",
      "YAZMAK",
      "KONUŞMA"
    ]
  },
  {
    "kelime": "AŞI",
    "yasakli_kelimeler": [
      "İĞNE",
      "HASTALIK",
      "KORUMA",
      "DOKTOR",
      "BAĞIŞIKLIK"
    ],
    "id": 468
  },
  {
    "id": 469,
    "kelime": "GEYİK",
    "yasakli_kelimeler": [
      "BOYNUZ",
      "ORMAN",
      "KOŞMAK",
      "AVLANMAK",
      "YAPRAK"
    ]
  },
  {
    "id": 470,
    "kelime": "ANLIK PAYLAŞIM",
    "yasakli_kelimeler": [
      "INSTAGRAM",
      "FOTOĞRAF",
      "KAYBOLAN",
      "SOSYAL MEDYA",
      "GÜN"
    ]
  },
  {
    "kelime": "RÖNTGEN",
    "yasakli_kelimeler": [
      "KEMİK",
      "IŞIN",
      "HASTANE",
      "ÇEKMEK",
      "FİLM"
    ],
    "id": 471
  },
  {
    "id": 472,
    "kelime": "SESLİ MESAJ",
    "yasakli_kelimeler": [
      "KAYIT",
      "TELEFON",
      "DİNLEMEK",
      "KONUŞMA",
      "GÖNDERME"
    ]
  },
  {
    "id": 473,
    "kelime": "HESABI ENGELLEMEK",
    "yasakli_kelimeler": [
      "SOSYAL MEDYA",
      "GÖRMEMEK",
      "KAPATMAK",
      "KULLANICI",
      "İLETİŞİM"
    ]
  },
  {
    "kelime": "AMELİYAT",
    "yasakli_kelimeler": [
      "DOKTOR",
      "HASTANE",
      "NEŞTER",
      "NARKOZ",
      "KESMEK"
    ],
    "id": 474
  },
  {
    "id": 475,
    "kelime": "EKRAN PAYLAŞIMI",
    "yasakli_kelimeler": [
      "TOPLANTI",
      "GÖRÜNTÜ",
      "BİLGİSAYAR",
      "GÖSTERMEK",
      "UYGULAMA"
    ]
  },
  {
    "id": 476,
    "kelime": "TAKİPTEN ÇIKMAK",
    "yasakli_kelimeler": [
      "SOSYAL MEDYA",
      "HESAP",
      "BIRAKMAK",
      "PROFİL",
      "GÖRMEK"
    ]
  },
  {
    "kelime": "SERUM",
    "yasakli_kelimeler": [
      "DAMAR",
      "İĞNE",
      "HASTANE",
      "SIVI",
      "KOL"
    ],
    "id": 477
  },
  {
    "id": 478,
    "kelime": "VİDEO KONFERANS",
    "yasakli_kelimeler": [
      "TOPLANTI",
      "KAMERA",
      "EKRAN",
      "UZAKTAN",
      "KATILIMCI"
    ]
  },
  {
    "id": 479,
    "kelime": "SAHTE HESAP",
    "yasakli_kelimeler": [
      "PROFİL",
      "GERÇEK OLMAYAN",
      "KİMLİK",
      "SOSYAL MEDYA",
      "KOPYA"
    ]
  },
  {
    "kelime": "MATBAA",
    "yasakli_kelimeler": [
      "KİTAP",
      "BASMAK",
      "KAĞIT",
      "HARF",
      "İCAT"
    ],
    "id": 480
  },
  {
    "id": 481,
    "kelime": "İNTERNET BAĞIMLILIĞI",
    "yasakli_kelimeler": [
      "TELEFON",
      "SÜREKLİ",
      "KONTROL EDEMEME",
      "EKRAN",
      "ZAMAN"
    ]
  },
  {
    "id": 482,
    "kelime": "YORUM YAPMAK",
    "yasakli_kelimeler": [
      "PAYLAŞIM",
      "SOSYAL MEDYA",
      "YAZMAK",
      "ALTINA",
      "TEPKİ"
    ]
  },
  {
    "kelime": "TELGRAF",
    "yasakli_kelimeler": [
      "MORSE",
      "İLETİŞİM",
      "KABLO",
      "ESKİ",
      "MESAJ"
    ],
    "id": 483
  },
  {
    "id": 484,
    "kelime": "KAPAK FOTOĞRAFI",
    "yasakli_kelimeler": [
      "SOSYAL MEDYA",
      "HESAP",
      "PROFİL",
      "DEĞİŞTİRMEK",
      "GÖRSEL"
    ]
  },
  {
    "id": 485,
    "kelime": "PAYLAŞIM YAPMAK",
    "yasakli_kelimeler": [
      "SOSYAL MEDYA",
      "FOTOĞRAF",
      "HESAP",
      "GÖNDERMEK",
      "HERKES"
    ]
  },
  {
    "kelime": "GRAMOFON",
    "yasakli_kelimeler": [
      "PLAK",
      "MÜZİK",
      "ESKİ",
      "SES",
      "İĞNE"
    ],
    "id": 486
  },
  {
    "id": 487,
    "kelime": "GİZLİLİK AYARLARI",
    "yasakli_kelimeler": [
      "HESAP",
      "PROFİL",
      "KISITLAMA",
      "UYGULAMA",
      "GÖRÜNÜRLÜK"
    ]
  },
  {
    "id": 488,
    "kelime": "ONLINE OLMAK",
    "yasakli_kelimeler": [
      "İNTERNET",
      "BAĞLI",
      "HESAP",
      "AKTİF",
      "MESAJ"
    ]
  },
  {
    "kelime": "DAKTİLO",
    "yasakli_kelimeler": [
      "YAZMAK",
      "TUŞ",
      "KAĞIT",
      "ESKİ",
      "KLAVYE"
    ],
    "id": 489
  },
  {
    "id": 490,
    "kelime": "BİLDİRİM KAPATMAK",
    "yasakli_kelimeler": [
      "TELEFON",
      "SESSİZ",
      "UYARI",
      "UYGULAMA",
      "EKRAN"
    ]
  },
  {
    "id": 491,
    "kelime": "GÖRÜNMEZ MOD",
    "yasakli_kelimeler": [
      "UYGULAMA",
      "GİZLİ",
      "AKTİF",
      "MESAJ",
      "DURUM"
    ]
  },
  {
    "kelime": "GÖZLÜK",
    "yasakli_kelimeler": [
      "CAM",
      "ÇERÇEVE",
      "GÖRMEK",
      "TAKMAK",
      "GÖZ"
    ],
    "id": 492
  },
  {
    "id": 493,
    "kelime": "ETKİLEŞİM ALMAK",
    "yasakli_kelimeler": [
      "BEĞENİ",
      "YORUM",
      "PAYLAŞIM",
      "SOSYAL MEDYA",
      "POPÜLER"
    ]
  },
  {
    "id": 494,
    "kelime": "KEŞFET SAYFASI",
    "yasakli_kelimeler": [
      "INSTAGRAM",
      "ALGORİTMA",
      "POPÜLER",
      "İÇERİK",
      "UYGULAMA"
    ]
  },
  {
    "kelime": "BATTANİYE",
    "yasakli_kelimeler": [
      "YATAK",
      "SOĞUK",
      "ÜŞÜMEK",
      "ÖRTMEK",
      "YORGAN"
    ],
    "id": 495
  },
  {
    "id": 496,
    "kelime": "HESAP AÇMAK",
    "yasakli_kelimeler": [
      "KAYIT",
      "PROFİL",
      "ŞİFRE",
      "KULLANICI ADI",
      "UYGULAMA"
    ]
  },
  {
    "id": 497,
    "kelime": "PROFİL FOTOĞRAFI",
    "yasakli_kelimeler": [
      "SOSYAL MEDYA",
      "YÜZ",
      "HESAP",
      "RESİM",
      "DEĞİŞTİRMEK"
    ]
  },
  {
    "kelime": "ŞEMSİYE",
    "yasakli_kelimeler": [
      "YAĞMUR",
      "ISLANMAK",
      "AÇMAK",
      "HAVA",
      "KORUNMAK"
    ],
    "id": 498
  },
  {
    "id": 499,
    "kelime": "KULLANICI ADI",
    "yasakli_kelimeler": [
      "HESAP",
      "PROFİL",
      "SEÇMEK",
      "SOSYAL MEDYA",
      "İSİM"
    ]
  },
  {
    "id": 500,
    "kelime": "GRUP SOHBETİ",
    "yasakli_kelimeler": [
      "MESAJ",
      "BİRDEN FAZLA",
      "TELEFON",
      "YAZIŞMA",
      "KATILIMCI"
    ]
  },
  {
    "kelime": "TELEFON",
    "yasakli_kelimeler": [
      "AKILLI",
      "EKRAN",
      "ARAMA",
      "İLETİŞİM",
      "CEP"
    ],
    "id": 501
  },
  {
    "kelime": "KÜTÜPHANE",
    "yasakli_kelimeler": [
      "KİTAP",
      "SESSİZ",
      "RAF",
      "OKUMAK",
      "ÇALIŞMAK"
    ],
    "id": 502
  },
  {
    "kelime": "PASAPORT",
    "yasakli_kelimeler": [
      "YURT DIŞI",
      "VİZE",
      "ÜLKE",
      "HAVALİMANI",
      "SEYAHAT"
    ],
    "id": 503
  },
  {
    "kelime": "PARADOKS",
    "yasakli_kelimeler": [
      "ÇELİŞKİ",
      "MANTIK",
      "TEORİ",
      "ÇIKMAZ",
      "DÖNGÜ"
    ],
    "id": 504
  },
  {
    "kelime": "KİTAP",
    "yasakli_kelimeler": [
      "SAYFA",
      "OKUMAK",
      "YAZAR",
      "KÜTÜPHANE",
      "ROMAN"
    ],
    "id": 505
  },
  {
    "kelime": "TİYATRO",
    "yasakli_kelimeler": [
      "SAHNE",
      "OYUNCU",
      "PERDE",
      "OYUN",
      "SİNEMA"
    ],
    "id": 506
  },
  {
    "kelime": "TELEVİZYON",
    "yasakli_kelimeler": [
      "EKRAN",
      "KUMANDA",
      "DİZİ",
      "KANAL",
      "İZLEMEK"
    ],
    "id": 507
  },
  {
    "kelime": "TRAFİK",
    "yasakli_kelimeler": [
      "ARABA",
      "YOĞUN",
      "YOL",
      "SIKIŞMAK",
      "LAMBA"
    ],
    "id": 508
  },
  {
    "kelime": "FUTBOL",
    "yasakli_kelimeler": [
      "TOP",
      "MAÇ",
      "KALE",
      "GOL",
      "OYUNCU"
    ],
    "id": 509
  },
  {
    "kelime": "BÜROKRASİ",
    "yasakli_kelimeler": [
      "DEVLET",
      "EVRAK",
      "RESMİ",
      "İMZA",
      "İŞLEM"
    ],
    "id": 510
  },
  {
    "kelime": "ARABA",
    "yasakli_kelimeler": [
      "TEKERLEK",
      "DİREKSİYON",
      "MOTOR",
      "SÜRMEK",
      "ARAÇ"
    ],
    "id": 511
  },
  {
    "kelime": "PİKNİK",
    "yasakli_kelimeler": [
      "MANGAL",
      "PARK",
      "ÖRTÜ",
      "SEPET",
      "AĞAÇLIK"
    ],
    "id": 512
  },
  {
    "kelime": "İRONİ",
    "yasakli_kelimeler": [
      "ALAY",
      "TERS",
      "SÖZ",
      "KİNAYE",
      "ŞAKA"
    ],
    "id": 513
  },
  {
    "kelime": "GÜNEŞ",
    "yasakli_kelimeler": [
      "AY",
      "YILDIZ",
      "GÖKYÜZÜ",
      "SARI",
      "SICAK"
    ],
    "id": 514
  },
  {
    "kelime": "BURS",
    "yasakli_kelimeler": [
      "PARA",
      "ÖĞRENCİ",
      "EĞİTİM",
      "KARŞILIKSIZ",
      "VAKIF"
    ],
    "id": 515
  },
  {
    "kelime": "EGEMENLİK",
    "yasakli_kelimeler": [
      "BAĞIMSIZLIK",
      "DEVLET",
      "MİLLET",
      "GÜÇ",
      "YÖNETİM"
    ],
    "id": 516
  },
  {
    "kelime": "KEDİ",
    "yasakli_kelimeler": [
      "KÖPEK",
      "MİYAV",
      "HAYVAN",
      "TÜY",
      "PATİLER"
    ],
    "id": 517
  },
  {
    "kelime": "KAMUFLAJ",
    "yasakli_kelimeler": [
      "GİZLENMEK",
      "ASKER",
      "RENK",
      "SAKLANMAK",
      "DOĞA"
    ],
    "id": 518
  },
  {
    "kelime": "OKUL",
    "yasakli_kelimeler": [
      "ÖĞRENCİ",
      "ÖĞRETMEN",
      "SINIF",
      "DERS",
      "SIRA"
    ],
    "id": 519
  },
  {
    "kelime": "KAMERA",
    "yasakli_kelimeler": [
      "VİDEO",
      "FOTOĞRAF",
      "ÇEKİM",
      "KAYIT",
      "LENS"
    ],
    "id": 520
  },
  {
    "kelime": "ASİMİLASYON",
    "yasakli_kelimeler": [
      "KÜLTÜR",
      "UYUM",
      "BENZEMEK",
      "YOK OLMAK",
      "ERİTMEK"
    ],
    "id": 521
  },
  {
    "kelime": "EKMEK",
    "yasakli_kelimeler": [
      "FIRIN",
      "UN",
      "SU",
      "YEMEK",
      "BUĞDAY"
    ],
    "id": 522
  },
  {
    "kelime": "RÜYA",
    "yasakli_kelimeler": [
      "UYKU",
      "GECE",
      "GÖRMEK",
      "KABUS",
      "BİLİNÇALTI"
    ],
    "id": 523
  },
  {
    "kelime": "KLİŞE",
    "yasakli_kelimeler": [
      "SIRADAN",
      "BASMAKALIP",
      "SÜREKLİ",
      "TEKRAR",
      "SÖZ"
    ],
    "id": 524
  },
  {
    "kelime": "BUZDOLABI",
    "yasakli_kelimeler": [
      "MUTFAK",
      "SOĞUK",
      "YEMEK",
      "BEYAZ EŞYA",
      "BUZ"
    ],
    "id": 525
  },
  {
    "kelime": "GERİ DÖNÜŞÜM",
    "yasakli_kelimeler": [
      "ÇÖP",
      "PLASTİK",
      "KAĞIT",
      "ÇEVRE",
      "KUTU"
    ],
    "id": 526
  },
  {
    "kelime": "İLLÜZYON",
    "yasakli_kelimeler": [
      "SİHİRBAZ",
      "GÖZ YANILMASI",
      "NUMARA",
      "ŞOV",
      "GERÇEK"
    ],
    "id": 527
  },
  {
    "kelime": "SPONSOR",
    "yasakli_kelimeler": [
      "DESTEK",
      "PARA",
      "REKLAM",
      "MARKA",
      "FİNANSE"
    ],
    "id": 528
  },
  {
    "kelime": "YATAK",
    "yasakli_kelimeler": [
      "UYKU",
      "GECE",
      "YORGAN",
      "YASTIK",
      "ODA"
    ],
    "id": 529
  },
  {
    "kelime": "MİRAS",
    "yasakli_kelimeler": [
      "ÖLÜM",
      "VASİYET",
      "PARA",
      "TARLA",
      "AİLE"
    ],
    "id": 530
  },
  {
    "kelime": "GİRİŞİMCİ",
    "yasakli_kelimeler": [
      "İŞ",
      "ŞİRKET",
      "YENİ",
      "PROJE",
      "YATIRIM"
    ],
    "id": 531
  },
  {
    "kelime": "ÇAY",
    "yasakli_kelimeler": [
      "ŞEKER",
      "BARDAK",
      "KAHVALTI",
      "DEMLİK",
      "İÇECEK"
    ],
    "id": 532
  },
  {
    "kelime": "MUTASYON",
    "yasakli_kelimeler": [
      "GEN",
      "DNA",
      "DEĞİŞİM",
      "VİRÜS",
      "BİYOLOJİ"
    ],
    "id": 533
  },
  {
    "kelime": "DENİZ",
    "yasakli_kelimeler": [
      "SU",
      "DALGA",
      "KUM",
      "SAHİL",
      "YÜZMEK"
    ],
    "id": 534
  },
  {
    "kelime": "ANKET",
    "yasakli_kelimeler": [
      "SORU",
      "CEVAP",
      "İSTATİSTİK",
      "KATILIMCI",
      "ARAŞTIRMA"
    ],
    "id": 535
  },
  {
    "kelime": "STRATEJİ",
    "yasakli_kelimeler": [
      "PLAN",
      "HAMLE",
      "TAKTİK",
      "OYUN",
      "SAVAŞ"
    ],
    "id": 536
  },
  {
    "kelime": "AYAKKABI",
    "yasakli_kelimeler": [
      "AYAK",
      "ÇORAP",
      "GİYMEK",
      "BAĞCIK",
      "TABAN"
    ],
    "id": 537
  },
  {
    "kelime": "GÖLGE",
    "yasakli_kelimeler": [
      "KARANLIK",
      "IŞIK",
      "SİYAH",
      "GÜNEŞ",
      "TAKİP"
    ],
    "id": 538
  },
  {
    "kelime": "KRONİK",
    "yasakli_kelimeler": [
      "HASTALIK",
      "SÜREKLİ",
      "KALICI",
      "UZUN",
      "GEÇMEYEN"
    ],
    "id": 539
  },
  {
    "kelime": "EV",
    "yasakli_kelimeler": [
      "ODA",
      "ÇATI",
      "AİLE",
      "YAŞAMAK",
      "BİNA"
    ],
    "id": 540
  },
  {
    "kelime": "EHLİYET",
    "yasakli_kelimeler": [
      "SÜRÜCÜ",
      "ARABA",
      "SINAV",
      "KURS",
      "KİMLİK"
    ],
    "id": 541
  },
  {
    "kelime": "METABOLİZMA",
    "yasakli_kelimeler": [
      "VÜCUT",
      "ENERJİ",
      "KİLO",
      "SİNDİRİM",
      "HIZLI"
    ],
    "id": 542
  },
  {
    "kelime": "KÖPEK",
    "yasakli_kelimeler": [
      "HAVLAMAK",
      "HAYVAN",
      "TASMA",
      "KEDİ",
      "SADIK"
    ],
    "id": 543
  },
  {
    "kelime": "FATURA",
    "yasakli_kelimeler": [
      "ELEKTRİK",
      "SU",
      "ÖDEMEK",
      "AY SONU",
      "BEDEL"
    ],
    "id": 544
  },
  {
    "kelime": "JEOLOJİ",
    "yasakli_kelimeler": [
      "YER",
      "BİLİM",
      "TAŞ",
      "KAYAÇ",
      "DEPREM"
    ],
    "id": 545
  },
  {
    "kelime": "YAĞMUR",
    "yasakli_kelimeler": [
      "BULUT",
      "SU",
      "ŞEMSİYE",
      "ISLANMAK",
      "HAVA"
    ],
    "id": 546
  },
  {
    "kelime": "SİNERJİ",
    "yasakli_kelimeler": [
      "ORTAK",
      "UYUM",
      "ENERJİ",
      "TAKIM",
      "BİRLİKTE"
    ],
    "id": 547
  },
  {
    "kelime": "SAAT",
    "yasakli_kelimeler": [
      "ZAMAN",
      "DAKİKA",
      "KOL",
      "AKREP",
      "YELKOVAN"
    ],
    "id": 548
  },
  {
    "kelime": "ASANSÖR",
    "yasakli_kelimeler": [
      "KAT",
      "BİNA",
      "YUKARI",
      "AŞAĞI",
      "DÜĞME"
    ],
    "id": 549
  },
  {
    "kelime": "MANİPÜLASYON",
    "yasakli_kelimeler": [
      "ETKİLEMEK",
      "YÖNLENDİRMEK",
      "AKIL",
      "KANDIRMAK",
      "ÇIKAR"
    ],
    "id": 550
  },
  {
    "kelime": "BİLGİSAYAR",
    "yasakli_kelimeler": [
      "LAPTOP",
      "İNTERNET",
      "KLAVYE",
      "EKRAN",
      "FARE"
    ],
    "id": 551
  },
  {
    "kelime": "BİLET",
    "yasakli_kelimeler": [
      "SİNEMA",
      "KONSER",
      "OTOBÜS",
      "GİRİŞ",
      "SEYAHAT"
    ],
    "id": 552
  },
  {
    "kelime": "PROVOKASYON",
    "yasakli_kelimeler": [
      "KIŞKIRTMA",
      "EYLEM",
      "OLAY",
      "TEPKİ",
      "KIZDIRMAK"
    ],
    "id": 553
  },
  {
    "kelime": "KAHVE",
    "yasakli_kelimeler": [
      "FİNCAN",
      "TELVE",
      "SABAH",
      "KAFEİN",
      "ÇAY"
    ],
    "id": 554
  },
  {
    "kelime": "DİYET",
    "yasakli_kelimeler": [
      "KİLO",
      "ZAYIFLAMAK",
      "YEMEK",
      "KALORİ",
      "SALATA"
    ],
    "id": 555
  },
  {
    "kelime": "REFLEKS",
    "yasakli_kelimeler": [
      "ANİ",
      "TEPKİ",
      "İSTEMSİZ",
      "BEYİN",
      "HAREKET"
    ],
    "id": 556
  },
  {
    "kelime": "MUTFAK",
    "yasakli_kelimeler": [
      "YEMEK",
      "TEZGAH",
      "BUZDOLABI",
      "TENCERE",
      "TAVA"
    ],
    "id": 557
  },
  {
    "kelime": "MEZUNİYET",
    "yasakli_kelimeler": [
      "KEP",
      "CÜBBE",
      "TÖREN",
      "ÜNİVERSİTE",
      "DİPLOMA"
    ],
    "id": 558
  },
  {
    "kelime": "BİYOGRAFİ",
    "yasakli_kelimeler": [
      "HAYAT",
      "YAŞAM",
      "KİTAP",
      "ÖYKÜ",
      "YAZAR"
    ],
    "id": 559
  },
  {
    "kelime": "HİYERARŞİ",
    "yasakli_kelimeler": [
      "RÜTBE",
      "MAKAM",
      "ALT",
      "ÜST",
      "SINIF"
    ],
    "id": 560
  },
  {
    "kelime": "DİŞ FIRÇASI",
    "yasakli_kelimeler": [
      "AĞIZ",
      "MACUN",
      "TEMİZLEMEK",
      "SABAH",
      "BEYAZ"
    ],
    "id": 561
  },
  {
    "kelime": "PİYANGO",
    "yasakli_kelimeler": [
      "BİLET",
      "YILBAŞI",
      "BÜYÜK İKRAMİYE",
      "ŞANS",
      "PARA"
    ],
    "id": 562
  },
  {
    "kelime": "ANEKDOT",
    "yasakli_kelimeler": [
      "HİKAYE",
      "KISA",
      "ANI",
      "ANLATI",
      "GÜLDÜRÜ"
    ],
    "id": 563
  },
  {
    "kelime": "AYNA",
    "yasakli_kelimeler": [
      "BAKMAK",
      "CAM",
      "YÜZ",
      "YANSIMA",
      "SIR"
    ],
    "id": 564
  },
  {
    "kelime": "REÇETE",
    "yasakli_kelimeler": [
      "İLAÇ",
      "DOKTOR",
      "ECZANE",
      "YAZMAK",
      "SAĞLIK"
    ],
    "id": 565
  },
  {
    "kelime": "KARTOGRAFİ",
    "yasakli_kelimeler": [
      "HARİTA",
      "ÇİZİM",
      "COĞRAFYA",
      "DÜNYA",
      "ÖLÇEK"
    ],
    "id": 566
  },
  {
    "kelime": "SANDALYE",
    "yasakli_kelimeler": [
      "MASA",
      "OTURMAK",
      "DÖRT AYAK",
      "MOBİLYA",
      "ARKALIK"
    ],
    "id": 567
  },
  {
    "kelime": "RÖPORTAJ",
    "yasakli_kelimeler": [
      "SORU",
      "GAZETECİ",
      "MİKROFON",
      "CEVAP",
      "SÖYLEŞİ"
    ],
    "id": 568
  },
  {
    "kelime": "ARKEOLOJİ",
    "yasakli_kelimeler": [
      "KAZI",
      "TARİH",
      "ESKİ",
      "ESER",
      "TOPRAK"
    ],
    "id": 569
  },
  {
    "kelime": "PARA",
    "yasakli_kelimeler": [
      "NAKİT",
      "CÜZDAN",
      "BANKA",
      "SATIN ALMAK",
      "BOZUK"
    ],
    "id": 570
  },
  {
    "kelime": "SÖZLÜK",
    "yasakli_kelimeler": [
      "KELİME",
      "ANLAM",
      "TANIM",
      "DİL",
      "ALFABETİK"
    ],
    "id": 571
  },
  {
    "kelime": "DEFORMASYON",
    "yasakli_kelimeler": [
      "ŞEKİL",
      "BOZULMA",
      "AŞINMA",
      "ESKİ",
      "YAPI"
    ],
    "id": 572
  },
  {
    "kelime": "ELMA",
    "yasakli_kelimeler": [
      "MEYVE",
      "KIRMIZI",
      "YEŞİL",
      "AĞAÇ",
      "AMASYA"
    ],
    "id": 573
  },
  {
    "kelime": "STAJ",
    "yasakli_kelimeler": [
      "ÖĞRENCİ",
      "İŞ",
      "ŞİRKET",
      "DENEYİM",
      "ÜNİVERSİTE"
    ],
    "id": 574
  },
  {
    "kelime": "İSTİSNA",
    "yasakli_kelimeler": [
      "KAİDE",
      "KURAL",
      "BOZMAK",
      "HARİÇ",
      "DURUM"
    ],
    "id": 575
  },
  {
    "kelime": "BANKA",
    "yasakli_kelimeler": [
      "PARA",
      "KREDİ",
      "GİŞE",
      "ATM",
      "HESAP"
    ],
    "id": 576
  },
  {
    "kelime": "ENFLASYON",
    "yasakli_kelimeler": [
      "PARA",
      "FİYAT",
      "ZAM",
      "EKONOMİ",
      "PAHALILIK"
    ],
    "id": 577
  },
  {
    "kelime": "UÇAK",
    "yasakli_kelimeler": [
      "PİLOT",
      "UÇMAK",
      "KANAT",
      "HAVAALANI",
      "GÖKYÜZÜ"
    ],
    "id": 578
  },
  {
    "kelime": "VİZE",
    "yasakli_kelimeler": [
      "PASAPORT",
      "KONSOLOSLUK",
      "YURT DIŞI",
      "SINAV",
      "ÜLKE"
    ],
    "id": 579
  },
  {
    "kelime": "SÖZLEŞME",
    "yasakli_kelimeler": [
      "IMZA",
      "KAĞIT",
      "MADDELER",
      "ANLAŞMA",
      "HUKUK"
    ],
    "id": 580
  },
  {
    "kelime": "YANARDAĞ",
    "yasakli_kelimeler": [
      "LAV",
      "MAGMA",
      "PATLAMA",
      "DAĞ",
      "KRATER"
    ],
    "id": 581
  },
  {
    "kelime": "KRİTER",
    "yasakli_kelimeler": [
      "ŞART",
      "KOŞUL",
      "ÖLÇÜT",
      "SEÇİM",
      "ÖZELLİK"
    ],
    "id": 582
  },
  {
    "kelime": "ÇİLEK",
    "yasakli_kelimeler": [
      "MEYVE",
      "KIRMIZI",
      "REÇEL",
      "YAZ",
      "TATLI"
    ],
    "id": 583
  },
  {
    "kelime": "KARANTİNA",
    "yasakli_kelimeler": [
      "HASTALIK",
      "SALGIN",
      "VİRÜS",
      "IZOLE",
      "EV"
    ],
    "id": 584
  },
  {
    "kelime": "ALTERNATİF",
    "yasakli_kelimeler": [
      "SEÇENEK",
      "BAŞKA",
      "YOL",
      "ÇÖZÜM",
      "IKİNCİ"
    ],
    "id": 585
  }
];