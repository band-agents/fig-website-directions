(function(){
  "use strict";
  var TH = window.FIG_THEME || {};

  /* ══════════ i18n ══════════ */
  var T = { ar:{
    util:"شحن مجاني للطلبات فوق <b>3,000 جنيه</b> · ادفع كاش عند الاستلام",
    findStore:"اعرف أقرب فرع", help:"مساعدة",
    women:"حريمي", men:"رجالي", kids:"أطفال", bags:"شنط", brands:"الماركات",
    sale:"التخفيضات", stores:"الفروع", searchPh:"ابحث", account:"حسابي",
    saved:"المفضلة", bag:"الشنطة", lingerie:"لانجيري", shoes:"أحذية", newIn:"وصل حديثاً",
    heroKick:"شتاء 2026", heroH:'20 ماركة.<br>في <span class="red">مكان واحد</span>.',
    shopNew:"تسوق الجديد", shopSale:"خصم لحد 70%",
    tr1:"شحن مجاني فوق <b>3,000 جنيه</b>", tr2:"ادفع <b>كاش</b> عند الاستلام",
    tr3:"<b>14 يوم</b> للاستبدال", tr4:"أصلي <b>100%</b>",
    editKick:"وصل حديثاً", editH:"المختارات", seeAll:"شوف الكل",
    lookKick:"تسوق اللوك", lookH:"البسيهم مع بعض",
    lookP:"تلات قطع متنسقين كأوتفيت واحد. ضيفهم كلهم ووفر.", lookCta:"ضيف اللوك كله",
    saleKick:"أحسن الأسعار", saleH:"التخفيضات دلوقتي", fAll:"الكل",
    occKick:"أفراح ومناسبات", occH:"جاهزة لليلة النهارده", occCta:"تسوق الفساتين",
    bunKick:"اشتري مع بعض", bunH:"خد 3 ووفر 12%",
    bunItems:"عدد القطع", bunFull:"السعر العادي", bunSave:"وفرت", bunTotal:"الإجمالي", bunAdd:"ضيف الكل للشنطة",
    alsoKick:"مختار لك", alsoH:"ممكن يعجبك كمان",
    recKick:"ارجع لها", recH:"شوفتها قبل كده",
    storeKick:"34 فرع في مصر", storeH:"فين تلاقينا", allStores:"كل الفروع",
    cyHelio:"القاهرة · مصر الجديدة", cyNewCairo:"القاهرة · التجمع",
    cyOctober:"الجيزة · 6 أكتوبر", cyAlex:"الإسكندرية",
    hr1:"السبت–الخميس 10ص–12م", getDir:"الاتجاهات ←",
    nlKick:"اشترك", nlH:"خصم 15% على أول طلب",
    nlP:"وصل حديثاً كل خميس. وتعرف بالتخفيضات قبل الناس.",
    nlBtn:"اشترك", nlSmall:"إيميلين في الشهر. تقدر تلغي في أي وقت.",
    payH:"طرق الدفع", payCod:"كاش عند الاستلام", payInst:"تقسيط بنكي",
    ftAbout:"20 ماركة عالمية و34 فرع، بنخدم مصر من 2005.",
    ftAddr:"سيتي ستارز، مصر الجديدة، القاهرة", ftHot:"الخط الساخن",
    ftShop:"تسوق", ftHelp:"مساعدة", ftCo:"عن الشركة",
    ftTrack:"تتبع طلبي", ftDelivery:"الشحن", ftReturns:"الاسترجاع", ftSize:"دليل المقاسات",
    ftInst:"التقسيط", ftContact:"اتصل بنا", ftAboutUs:"عن FIG", ftCareers:"وظائف",
    ftTerms:"الشروط", ftPrivacy:"الخصوصية", ftVat:"الأسعار بالجنيه شاملة الضريبة",
    yourBag:"شنطتك", kbMove:"↑↓ للتنقل", kbOpen:"↵ للفتح",
    priceKick:"تسوق حسب الميزانية", priceH:"اختار سعرك",
    quickKick:"أسرع طريقة", quickH:"تسوق في ثانية",
    addBag:"أضف للشنطة", notify:"عرفني لما يتوفر", soldOut:"خلص من المخزن",
    onlyLeft:"باقي {n} بس", inStock:"متوفر · استلم في ساعتين", newTag:"جديد",
    pickSize:"اختار المقاس الأول", added:"اتضاف للشنطة",
    savedMsg:"اتحفظ في المفضلة", unsaved:"اتشال من المفضلة",
    completeLook:"كمل اللوك", searchPlaceholder:"دور على ماركة أو قطعة…",
    recent:"آخر ما بحثت عنه", trending:"الأكثر بحثاً", jumpBrand:"روح لماركة",
    grpBrands:"الماركات", grpCats:"الأقسام", grpItems:"المنتجات",
    noRes:"مفيش نتائج لـ", noResSub:"جرب اسم ماركة أو قسم.", results:"نتيجة",
    freeShipDone:"الشحن علينا — <b>مجاني</b> لكل مصر.",
    freeShipMore:"ضيف <b>{n} جنيه</b> كمان وخد شحن مجاني.",
    subtotal:"المجموع", youSave:"وفرت", delivery:"الشحن", free:"مجاني",
    total:"الإجمالي", checkout:"إتمام الطلب", giftWrap:"غلاف هدية وكارت — مجاناً",
    goesWith:"يروح معاها · ضيفها بضغطة", emptyBag:"شنطتك فاضية.",
    tierMore:"اشتري بـ <b>{n} جنيه</b> كمان وتوصل لـ <b>Circle</b> — شحن مجاني من غير حد أدنى.",
    tierIn:"الطلب ده بيوصلك لـ <b>Circle</b>.",
    payLine:"كاش عند الاستلام · ڤاليو · سيمبل · فوري · تقسيط",
    subd:"تم الاشتراك — كود الـ15% في طريقه لك",
    shopNow:"تسوق دلوقتي", size:"مقاس", remove:"شيل", items:"منتج", under:"أقل من",
    fDeal:"خصم 50% أو أكتر", feedKick:"كل المتوفر", feedH:"كل المنتجات",
    bbHome:"الرئيسية", bbSearch:"بحث", bbShop:"تسوق",
    bigSrch:"دور على فساتين، إيدن بارك، شنط…"
  }};
  if (TH.ar) Object.keys(TH.ar).forEach(function(k){ T.ar[k] = TH.ar[k]; });
  var LANG = "en";
  function t(k, fb){ if (LANG === "en") return fb; var v = T.ar[k]; return v === undefined ? fb : v; }

  /* ══════════ BRANDS ══════════ */
  var HOUSES = [
    {id:"desigual",n:"Desigual",an:"ديزيجوال",c:"Barcelona",ac:"برشلونة",k:"Women",ak:"حريمي",cut:40,from:3420,cls:"bl-desigual",mark:'<span class="m">Desigual</span>'},
    {id:"gerry",n:"Gerry Weber",an:"جيري ويبر",c:"Germany",ac:"ألمانيا",k:"Women",ak:"حريمي",cut:50,from:6875,cls:"bl-gerry",mark:'<span class="m">Gerry Weber</span>'},
    {id:"edenpark",n:"Eden Park",an:"إيدن بارك",c:"Paris",ac:"باريس",k:"Men",ak:"رجالي",cut:40,from:3570,cls:"bl-edenpark",mark:'<span class="bow"></span><span class="m">Eden Park</span>'},
    {id:"lipsy",n:"Lipsy London",an:"ليبسي لندن",c:"London",ac:"لندن",k:"Party",ak:"سهرة",cut:40,from:1860,cls:"bl-lipsy",mark:'<span class="m">Lipsy</span><span class="t">London</span>'},
    {id:"womensecret",n:"Women'secret",an:"وومن سيكريت",c:"Madrid",ac:"مدريد",k:"Lingerie",ak:"لانجيري",cut:0,from:2500,cls:"bl-womensecret",mark:'<span class="m">women’secret</span>'},
    {id:"bebe",n:"bebe",an:"بيبي",c:"Los Angeles",ac:"لوس أنجلوس",k:"Women",ak:"حريمي",cut:0,from:4800,cls:"bl-bebe",mark:'<span class="m">bebe</span>'},
    {id:"benetton",n:"Benetton",an:"بينيتون",c:"Italy",ac:"إيطاليا",k:"Family",ak:"عائلي",cut:70,from:1005,cls:"bl-benetton",mark:'<span class="t">United Colors of</span><span class="m">Benetton</span>'},
    {id:"bcbg",n:"BCBGMAXAZRIA",an:"بي سي بي جي",c:"Los Angeles",ac:"لوس أنجلوس",k:"Party",ak:"سهرة",cut:50,from:13000,cls:"bl-bcbg",mark:'<span class="m">BCBGMAXAZRIA</span>'},
    {id:"carpisa",n:"Carpisa",an:"كاربيزا",c:"Naples",ac:"نابولي",k:"Bags",ak:"شنط",cut:30,from:1400,cls:"bl-carpisa",mark:'<span class="dot"></span><span class="m">Carpisa</span>'},
    {id:"bsb",n:"BSB",an:"بي إس بي",c:"Athens",ac:"أثينا",k:"Women",ak:"حريمي",cut:30,from:3430,cls:"bl-bsb",mark:'<span class="m">BSB</span>'},
    {id:"marina",n:"Marina Rinaldi",an:"مارينا رينالدي",c:"Italy",ac:"إيطاليا",k:"Curve",ak:"مقاسات كبيرة",cut:50,from:14400,cls:"bl-marina",mark:'<span class="m">Marina</span><span class="t">Rinaldi</span>'},
    {id:"promod",n:"Promod",an:"برومود",c:"France",ac:"فرنسا",k:"Women",ak:"حريمي",cut:60,from:495,cls:"bl-promod",mark:'<span class="m">promod</span>'},
    {id:"forever",n:"Forever 21",an:"فوريفر 21",c:"Los Angeles",ac:"لوس أنجلوس",k:"Young",ak:"شبابي",cut:50,from:670,cls:"bl-forever",mark:'<span class="m">Forever 21</span>'},
    {id:"lavie",n:"La Vie en Rose",an:"لا في أون روز",c:"Canada",ac:"كندا",k:"Lingerie",ak:"لانجيري",cut:60,from:980,cls:"bl-lavie",mark:'<span class="m">la vie en rose</span>'},
    {id:"hunke",n:"Hunkemöller",an:"هانكمولر",c:"Netherlands",ac:"هولندا",k:"Swim",ak:"مايوهات",cut:50,from:1050,cls:"bl-hunke",mark:'<span class="m">Hunkemöller</span>'},
    {id:"karen",n:"Karen Millen",an:"كارين ميلين",c:"London",ac:"لندن",k:"Party",ak:"سهرة",cut:0,from:11200,cls:"bl-karen",mark:'<span class="m">Karen Millen</span>'},
    {id:"pronovias",n:"Pronovias",an:"برونوفياس",c:"Barcelona",ac:"برشلونة",k:"Bridal",ak:"فساتين فرح",cut:0,from:68000,cls:"bl-pronovias",mark:'<span class="m">Pronovias</span>'},
    {id:"mango",n:"Mango",an:"مانجو",c:"Barcelona",ac:"برشلونة",k:"Women",ak:"حريمي",cut:20,from:1990,cls:"bl-mango",mark:'<span class="m">Mango</span>'}
  ];
  var HB = {}; HOUSES.forEach(function(h){ HB[h.id] = h; });
  function logo(id){ var h = HB[id]; return h ? '<span class="bl ' + h.cls + '" aria-label="' + h.n + '">' + h.mark + '</span>' : ""; }
  function hName(h){ return LANG === "ar" ? h.an : h.n; }

  /* ══════════ PRODUCTS (real store data) ══════════ */
  var P = [
    {id:"lipsy1",b:"lipsy",img:"lipsy1",d:"women",n:"Mauve Embellished V-Neck Maxi Dress",an:"فستان ماكسي موڤ بتطريز",was:14200,now:8520,s:["36","38","40","42"],out:["42"],st:12},
    {id:"lipsy2",b:"lipsy",img:"lipsy2",d:"women",n:"White Lace Short Sleeve Shirt",an:"قميص دانتيل أبيض نص كم",was:4900,now:2940,s:["36","38","40"],out:[],st:24},
    {id:"lipsy3",b:"lipsy",img:"lipsy3",d:"women",n:"White High Waist Wide Leg Trousers",an:"بنطلون أبيض واسع بخصر عالي",was:3700,now:2220,s:["36","38","40","42"],out:["36"],st:18},
    {id:"bcbg1",b:"bcbg",img:"bcbg1",d:"women",n:"Maria Printed White Blazer",an:"بليزر ماريا أبيض مطبوع",was:35100,now:17550,s:["S","M","L"],out:[],st:5},
    {id:"bcbg2",b:"bcbg",img:"bcbg2",d:"women",n:"Savannah Strapless Denim Jumpsuit",an:"أوفرول دنيم سافانا",was:26000,now:13000,s:["S","M","L"],out:["S"],st:7},
    {id:"desi1",b:"desigual",img:"desi1",d:"women",n:"Body-hugging Bandeau Midi Dress",an:"فستان ميدي بانده ضيق",was:8200,now:4920,s:["S","M","L","XL"],out:[],st:21},
    {id:"desi2",b:"desigual",img:"desi2",d:"women",n:"Arty Print Sleeveless Midi Dress",an:"فستان ميدي بدون أكمام مطبوع",was:8200,now:4920,s:["S","M","L"],out:[],st:16},
    {id:"gerry1",b:"gerry",img:"gerry1",d:"women",n:"Tropical Print Jacket",an:"جاكيت بطبعة استوائية",was:19600,now:9800,s:["38","40","42","44"],out:["38"],st:6},
    {id:"gerry2",b:"gerry",img:"gerry2",d:"women",n:"Long-sleeved Floral Midi Dress",an:"فستان ميدي بأكمام طويلة ورد",was:13750,now:6875,s:["38","40","42"],out:[],st:9},
    {id:"marina1",b:"marina",img:"marina1",d:"women",n:"Pure Linen Shirt",an:"قميص كتان",was:30600,now:15300,s:["46","48","50","52"],out:[],st:4},
    {id:"marina2",b:"marina",img:"marina2",d:"women",n:"Faded Linen Maxi Skirt",an:"جيبة ماكسي كتان",was:28800,now:14400,s:["46","48","50"],out:[],st:3},
    {id:"bsb1",b:"bsb",img:"bsb1",d:"women",n:"Tie-front Blouse with Rhinestones",an:"بلوزة بعقدة وأحجار",was:7700,now:5390,s:["S","M","L"],out:[],st:14},
    {id:"bsb2",b:"bsb",img:"bsb2",d:"women",n:"Wrap Floral Crop Top",an:"توب قصير لف بالورد",was:6700,now:4690,s:["S","M","L"],out:["L"],st:8},
    {id:"bebe1",b:"bebe",img:"bebe1",d:"women",n:"Tailored Cropped Pinstripe Blazer",an:"بليزر قصير مخطط",was:16800,now:16800,s:["XS","S","M","L"],out:[],st:11},
    {id:"bebe2",b:"bebe",img:"bebe2",d:"women",n:"Halter Neck Rib Tank",an:"توب حمالة رقبة مضلع",was:4800,now:4800,s:["XS","S","M"],out:[],st:26},
    {id:"promod1",b:"promod",img:"promod1",d:"women",n:"Lace Detail Top",an:"توب بتفاصيل دانتيل",was:1495,now:600,s:["XS","S","M","L"],out:[],st:41},
    {id:"promod2",b:"promod",img:"promod2",d:"women",n:"Long-sleeved T-shirt",an:"تي شيرت بأكمام طويلة",was:1235,now:495,s:["S","M","L"],out:[],st:52},
    {id:"ws1",b:"womensecret",img:"ws1",d:"lingerie",n:"Gorgeous Microfiber Push-Up Bra",an:"سوتيان بوش أب ميكروفايبر",was:2600,now:2600,s:["70B","75B","75C","80B"],out:[],st:33},
    {id:"ws2",b:"womensecret",img:"ws2",d:"lingerie",n:"Elegant Strapless Microfiber Bra",an:"سوتيان بدون حمالات",was:2900,now:2900,s:["70B","75B","80B"],out:[],st:19},
    {id:"hunke1",b:"hunke",img:"hunke1",d:"lingerie",n:"Luxe Shaping Swimsuit",an:"مايوه لوكس بتحديد الجسم",was:3950,now:1975,s:["S","M","L"],out:[],st:15},
    {id:"hunke2",b:"hunke",img:"hunke2",d:"lingerie",n:"Madrid Bandeau Bikini Top",an:"توب بيكيني مدريد",was:2750,now:1375,s:["S","M","L"],out:["S"],st:6},
    {id:"lavie1",b:"lavie",img:"lavie1",d:"lingerie",n:"Red Rose Print Satin Pants",an:"بنطلون ساتان بطبعة ورد",was:3100,now:1550,s:["S","M","L","XL"],out:[],st:28},
    {id:"lavie2",b:"lavie",img:"lavie2",d:"lingerie",n:"Satin Pyjama Shorts",an:"شورت بيجامة ساتان",was:2450,now:980,s:["S","M","L"],out:[],st:44},
    {id:"eden1",b:"edenpark",img:"eden1",d:"men",n:"Short-sleeved T-shirt Regular Fit",an:"تي شيرت نص كم",was:7550,now:4530,s:["S","M","L","XL"],out:[],st:22},
    {id:"eden2",b:"edenpark",img:"eden2",d:"men",n:"Screen-printed Short-sleeved T-shirt",an:"تي شيرت نص كم مطبوع",was:5950,now:3570,s:["S","M","L","XL"],out:["S"],st:17},
    {id:"eden3",b:"edenpark",img:"eden3",d:"men",n:"Cotton Piqué Short-sleeved T-shirt",an:"تي شيرت قطن بيكيه",was:7150,now:4290,s:["M","L","XL"],out:[],st:13},
    {id:"benet1",b:"benetton",img:"benet1",d:"women",n:"Flowing Printed Long Sleeve Shirt",an:"قميص واسع مطبوع",was:4960,now:1490,s:["S","M","L"],out:[],st:31},
    {id:"benet2",b:"benetton",img:"benet2",d:"kids",n:"Tartan Shirt With Hood",an:"قميص كاروهات بكابوشون",was:3340,now:1005,s:["4","6","8","10"],out:["4","6","8","10"],st:0},
    {id:"benet3",b:"benetton",img:"benet3",d:"kids",n:"Flowing Heart Print Shirt",an:"قميص أطفال بطبعة قلوب",was:4960,now:1490,s:["4","6","8","10","12"],out:["4"],st:29},
    {id:"carp1",b:"carpisa",img:"carp1",d:"bags",n:"Cloud Go Rigid Trolley — Medium",an:"شنطة سفر كلاود جو — وسط",was:8300,now:8300,s:["M"],out:[],st:9},
    {id:"carp2",b:"carpisa",img:"carp2",d:"bags",n:"Lightness Go Duffel Bag",an:"شنطة دافل لايتنس جو",was:5600,now:5600,s:["One"],out:[],st:23},
    {id:"ed2",b:"lipsy",img:"ed2",d:"women",n:"White Frill Sleeve Floral Midi Dress",an:"فستان ميدي أبيض بورد",was:12500,now:7500,s:["36","38","40","42"],out:[],st:14},
    {id:"ed3",b:"lipsy",img:"ed3",d:"women",n:"Pink Frill Halter Neck Mini Dress",an:"فستان ميني بينك حمالة رقبة",was:8600,now:5160,s:["36","38","40"],out:["36"],st:7},
    {id:"ed1",b:"lipsy",img:"ed1",d:"women",n:"Neutral Tipped Wide Leg Trousers",an:"بنطلون واسع بيچ",was:3700,now:2220,s:["36","38","40","42"],out:[],st:26},
    {id:"ed4",b:"lipsy",img:"ed4",d:"women",n:"Neutral Crinkle Short Sleeve Shirt",an:"قميص بيچ نص كم",was:3700,now:2220,s:["36","38","40"],out:[],st:19},
    {id:"ed5",b:"lipsy",img:"ed5",d:"women",n:"Lemon Yellow Textured Frill T-Shirt",an:"تي شيرت أصفر بكشكشة",was:3100,now:1860,s:["36","38","40","42"],out:[],st:33},
    {id:"ed6",b:"desigual",img:"ed6",d:"women",n:"Ethnic Print Belted Shirt Dress",an:"فستان قميص بحزام",was:12200,now:7320,s:["S","M","L"],out:[],st:11},
    {id:"ed7",b:"desigual",img:"ed7",d:"women",n:"Openwork Halter Neck Midi Dress",an:"فستان ميدي حمالة رقبة مفرغ",was:13800,now:8280,s:["S","M","L","XL"],out:["XL"],st:8},
    {id:"ed8",b:"desigual",img:"ed8",d:"women",n:"Postcard Print Belted Maxi Dress",an:"فستان ماكسي بحزام",was:12200,now:7320,s:["S","M","L"],out:[],st:12},
    {id:"ed9",b:"desigual",img:"ed9",d:"women",n:"Two-material Sleeveless Mini Dress",an:"فستان ميني بخامتين",was:7400,now:4440,s:["S","M","L"],out:[],st:17},
    {id:"ed12",b:"desigual",img:"ed12",d:"women",n:"Tie Neck Short Dress",an:"فستان قصير بربطة رقبة",was:5700,now:3420,s:["S","M","L","XL"],out:[],st:23},
    {id:"ed10",b:"gerry",img:"ed10",d:"women",n:"Flowing Fabric Long Cardigan",an:"كارديجان طويل",was:13750,now:13750,s:["38","40","42","44"],out:[],st:9},
    {id:"ed11",b:"gerry",img:"ed11",d:"women",n:"Abstract Print Midi Dress",an:"فستان ميدي بطبعة تجريدية",was:10850,now:10850,s:["38","40","42"],out:[],st:6}
  ];
  P.forEach(function(p){ p.cut = p.was > p.now ? Math.round((1 - p.now / p.was) * 100) : 0; p.bn = HB[p.b].n; });
  var PB = {}; P.forEach(function(p){ PB[p.id] = p; });
  function pName(p){ return LANG === "ar" ? p.an : p.n; }

  var CATS = [
    {n:"Dresses",an:"فساتين",d:"Women",ad:"حريمي",ct:184},{n:"Blazers",an:"بليزر",d:"Women",ad:"حريمي",ct:62},
    {n:"Tops & Blouses",an:"بلوزات وتوب",d:"Women",ad:"حريمي",ct:147},{n:"Trousers",an:"بنطلونات",d:"Women",ad:"حريمي",ct:96},
    {n:"Skirts",an:"جيبات",d:"Women",ad:"حريمي",ct:44},{n:"Jackets & Coats",an:"جواكت",d:"Women",ad:"حريمي",ct:78},
    {n:"Bras",an:"سوتيانات",d:"Lingerie",ad:"لانجيري",ct:112},{n:"Pyjamas",an:"بيجامات",d:"Lingerie",ad:"لانجيري",ct:55},
    {n:"Swimwear",an:"مايوهات",d:"Lingerie",ad:"لانجيري",ct:29},{n:"T-shirts",an:"تي شيرتات",d:"Men",ad:"رجالي",ct:67},
    {n:"Polos",an:"بولو",d:"Men",ad:"رجالي",ct:41},{n:"Shirts",an:"قمصان",d:"Men",ad:"رجالي",ct:34},
    {n:"Handbags",an:"شنط يد",d:"Bags",ad:"شنط",ct:88},{n:"Backpacks",an:"شنط ظهر",d:"Bags",ad:"شنط",ct:34},
    {n:"Travel Bags",an:"شنط سفر",d:"Bags",ad:"شنط",ct:27},{n:"Girls 2–14",an:"بنات 2–14",d:"Kids",ad:"أطفال",ct:105},
    {n:"Boys 2–14",an:"أولاد 2–14",d:"Kids",ad:"أطفال",ct:89},{n:"Party Dresses",an:"فساتين سهرة",d:"Women",ad:"حريمي",ct:64}
  ];
  function cName(c){ return LANG === "ar" ? c.an : c.n; }
  function cDept(c){ return LANG === "ar" ? c.ad : c.d; }

  var MENUS = {
    women:{ cols:[
        {h:"Clothing",ah:"ملابس",li:[["Dresses","فساتين",184],["Blazers","بليزر",62],["Tops & Blouses","بلوزات",147],["Trousers","بنطلونات",96],["Skirts","جيبات",44],["Jackets","جواكت",78]]},
        {h:"Lingerie",ah:"لانجيري",li:[["Bras","سوتيانات",112],["Pyjamas","بيجامات",55],["Swimwear","مايوهات",29],["Robes","روب",21]]}],
      tiles:[["colW","Party dresses","فساتين سهرة"],["tallD","Winter coats","جواكت شتوية"]],
      up:["ed3","bcbg1"], brands:["lipsy","bcbg","desigual","gerry","bsb","marina","bebe","promod"] },
    men:{ cols:[
        {h:"Clothing",ah:"ملابس",li:[["T-shirts","تي شيرتات",67],["Polos","بولو",41],["Shirts","قمصان",34],["Knitwear","كنزات",28],["Jackets","جواكت",22]]},
        {h:"Trousers",ah:"بنطلونات",li:[["Straight","مستقيم",24],["Slim","ضيق",18],["Cargo","كارجو",15],["Shorts","شورتات",21]]}],
      tiles:[["colM","Eden Park −40%","إيدن بارك −40%"],["wideD","New in men","جديد الرجالي"]],
      up:["eden1","eden2"], brands:["edenpark","benetton","carpisa","mango"] },
    kids:{ cols:[
        {h:"Girls 2–14",ah:"بنات 2–14",li:[["Dresses","فساتين",28],["Shirts","قمصان",42],["Trousers","بنطلونات",16],["Skirts","جيبات",19]]},
        {h:"Boys 2–14",ah:"أولاد 2–14",li:[["Shirts","قمصان",38],["T-shirts","تي شيرتات",31],["Cargo Pants","بنطلونات",24],["Shorts","شورتات",27]]}],
      tiles:[["colK","Benetton −70%","بينيتون −70%"],["wideE","Back to school","العودة للمدارس"]],
      up:["benet3","benet1"], brands:["benetton","carpisa","forever"] },
    bags:{ cols:[
        {h:"Bags",ah:"شنط",li:[["Handbags","شنط يد",88],["Backpacks","شنط ظهر",34],["Cross-body","شنط كتف",46],["Wallets","محافظ",38]]},
        {h:"Travel",ah:"سفر",li:[["Trolleys","شنط عجل",16],["Duffels","شنط دافل",11],["Laptop Bags","شنط لابتوب",14]]}],
      tiles:[["colW","Carpisa travel","كاربيزا للسفر"],["wideD","New bags","شنط جديدة"]],
      up:["carp1","carp2"], brands:["carpisa"] }
  };

  /* ══════════ HELPERS ══════════ */
  var egp = function(n){ return n.toLocaleString("en-US"); };
  function money(n){ return egp(n) + (LANG === "ar" ? " ج.م" : " EGP"); }
  function ls(k, v){
    try { if (v === undefined) { var r = localStorage.getItem(k); return r ? JSON.parse(r) : null; }
      localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; }
  }
  function $(id){ return document.getElementById(id); }
  function img(k){ return (window.IMG && window.IMG[k]) || ""; }
  var toast = $("toast"), tt;
  function say(m){ toast.innerHTML = m; toast.classList.add("on"); clearTimeout(tt);
    tt = setTimeout(function(){ toast.classList.remove("on"); }, 2500); }

  /* ══════════ CARD ══════════ */
  function card(p){
    var vis = p.s.slice(0, 4), extra = p.s.length - vis.length;
    var szs = vis.map(function(s){
      return '<button type="button" aria-pressed="false"' + (p.out.indexOf(s) > -1 ? " disabled" : "") + '>' + s + '</button>';
    }).join("") + (extra > 0 ? '<button class="more" type="button" disabled>+' + extra + '</button>' : "");
    var low = p.st > 0 && p.st <= 8, none = p.st === 0;
    var avail = none ? t("soldOut","Sold out")
              : low ? t("onlyLeft","Only {n} left").replace("{n}", p.st)
              : t("inStock","In stock · collect in 2 hours");
    var tag = p.cut ? '<span class="tag">−' + p.cut + '%</span>' : '<span class="tag soft">' + t("newTag","New") + '</span>';
    return '<article class="card" data-id="' + p.id + '">' +
      '<div class="ph"><img src="' + img(p.img) + '" alt="' + p.n + '" loading="lazy">' + tag +
      '<button class="fav" type="button" aria-pressed="false" aria-label="Save">♡</button>' +
      '<button class="quick" type="button">' + t("completeLook","Complete the look") + '</button></div>' +
      '<div class="in"><div class="bh">' + logo(p.b) + '</div>' +
      '<p class="nm">' + pName(p) + '</p>' +
      '<div class="pr"><span class="now">' + money(p.now) + '</span>' + (p.cut ? '<s>' + egp(p.was) + '</s>' : "") + '</div>' +
      '<div class="szs">' + szs + '</div>' +
      '<div class="avail"><span class="d ' + (none ? "no" : low ? "low" : "") + '"></span><em>' + avail + '</em></div>' +
      '<div class="add"><button type="button" class="' + (none ? "off" : "") + '">' +
      (none ? t("notify","Notify me") : t("addBag","Add to bag")) + '</button></div></div></article>';
  }

  /* ══════════ GRID ══════════ */
  var filt = "all";
  function matches(p){
    if (filt === "all") return true;
    if (filt.indexOf("p:") === 0) {                    // price band, e.g. "p:0-1000"
      var b = filt.slice(2).split("-");
      var lo = +b[0], hi = b[1] === "" ? Infinity : +b[1];
      return p.now >= lo && p.now <= hi;
    }
    if (filt === "deal") return p.cut >= 50;
    return p.d === filt;
  }
  function applyGrid(){
    var g = $("grid"); if (!g) return;
    var l = P.filter(matches);
    l.sort(function(a,b){ return b.cut - a.cut || a.now - b.now; });
    g.innerHTML = l.length ? l.map(card).join("")
      : '<p class="nores">' + t("noRes","No results for") + ' —</p>';
    var s = $("shownN"); if (s) s.textContent = l.length + " " + t("items","items");
  }
  function setFilter(v){
    filt = v;
    document.querySelectorAll("[data-f]").forEach(function(x){
      x.setAttribute("aria-pressed", x.dataset.f === v ? "true" : "false");
    });
    applyGrid();
  }

  /* ══════════ CAROUSELS ══════════ */
  var CAR = {
    feat:{ el:"featTrack", prog:"featProg", ids:TH.feat || [] },
    also:{ el:"alsoTrack", prog:"alsoProg", ids:TH.also || [] },
    recent:{ el:"recentTrack", prog:null, ids:[] }
  };
  function fillCar(k){
    var c = CAR[k], el = $(c.el); if (!el) return;
    el.innerHTML = c.ids.map(function(id){ return PB[id] ? card(PB[id]) : ""; }).join(""); updProg(k);
  }
  function updProg(k){
    var c = CAR[k]; if (!c || !c.prog) return;
    var el = $(c.el), p = $(c.prog); if (!el || !p) return;
    var max = el.scrollWidth - el.clientWidth, vis = el.clientWidth / el.scrollWidth;
    var w = Math.max(14, vis * 100);
    p.style.width = w + "%";
    p.style.marginInlineStart = ((max > 0 ? Math.abs(el.scrollLeft) / max : 0) * (100 - w)) + "%";
  }

  /* ══════════ RECENTLY VIEWED ══════════ */
  var RKEY = "fig_" + (document.title.replace(/\W/g,"") || "x") + "_recent";
  function pushRecent(id){
    var r = ls(RKEY) || [];
    r = r.filter(function(x){ return x !== id; }); r.unshift(id); r = r.slice(0, 8);
    ls(RKEY, r); renderRecent();
  }
  function renderRecent(){
    var sec = $("recent"); if (!sec) return;
    var r = (ls(RKEY) || []).filter(function(id){ return PB[id]; });
    if (!r.length) { sec.hidden = true; return; }
    sec.hidden = false; CAR.recent.ids = r; fillCar("recent");
  }

  /* ══════════ LOOK STACK (upsell) ══════════ */
  function renderLook(){
    var el = $("lookStack"); if (!el) return;
    el.innerHTML = (TH.look || []).map(function(id){
      var p = PB[id]; if (!p) return "";
      return '<div class="it"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
        '<span class="d"><span class="b">' + hName(HB[p.b]) + '</span><b>' + pName(p) + '</b>' +
        '<span>' + money(p.now) + (p.cut ? '<s>' + egp(p.was) + '</s>' : "") + '</span></span>' +
        '<button type="button" data-up="' + p.id + '">+</button></div>';
    }).join("");
  }

  /* ══════════ BUNDLE ══════════ */
  var BUNDLE = TH.bundle || [], bsel = {};
  BUNDLE.forEach(function(id){ bsel[id] = true; });
  function renderBundle(){
    var el = $("bset"); if (!el) return;
    el.innerHTML = BUNDLE.map(function(id, i){
      var p = PB[id]; if (!p) return "";
      return (i ? '<span class="bplus">+</span>' : "") +
        '<div class="bitem"><div class="ph' + (bsel[id] ? "" : " off") + '"><img src="' + img(p.img) + '" alt="" loading="lazy"></div>' +
        '<label><input type="checkbox" data-b="' + id + '"' + (bsel[id] ? " checked" : "") + '> ' + hName(HB[p.b]) + '</label>' +
        '<span class="n">' + pName(p) + '</span><span class="p">' + money(p.now) + '</span></div>';
    }).join("");
    var ch = BUNDLE.filter(function(id){ return bsel[id]; });
    var full = ch.reduce(function(a, id){ return a + PB[id].now; }, 0);
    var rate = ch.length >= 3 ? .12 : ch.length === 2 ? .07 : 0;
    var save = Math.round(full * rate);
    if ($("bCount")) $("bCount").textContent = ch.length;
    if ($("bFull")) $("bFull").textContent = money(full);
    if ($("bSave")) $("bSave").textContent = save ? "−" + money(save) : "—";
    if ($("bTotal")) $("bTotal").textContent = money(full - save);
  }

  /* ══════════ CART ══════════ */
  var FREE = 3000, TIER = 30000;
  var cart = [{ id:"eden1", sz:"L", q:1 }, { id:"carp2", sz:"One", q:1 }];
  var gift = false;
  function totals(){
    var sub = 0, full = 0, n = 0;
    cart.forEach(function(c){ var p = PB[c.id]; sub += p.now * c.q; full += p.was * c.q; n += c.q; });
    return { sub:sub, full:full, n:n, save:full - sub, ship:(sub >= FREE || sub === 0) ? 0 : 70 };
  }
  function addToCart(p, sz, quiet){
    var ex = cart.find(function(c){ return c.id === p.id && c.sz === sz; });
    if (ex) ex.q++; else cart.push({ id:p.id, sz:sz || "One", q:1 });
    pushRecent(p.id);
    if (!quiet) { renderCart(); openCart(); }
  }
  function renderCart(){
    var T2 = totals();
    if ($("bagN")) $("bagN").textContent = T2.n;
    if ($("bagV")) $("bagV").textContent = egp(T2.sub);
    if ($("cartCount")) $("cartCount").textContent = T2.n + " " + t("items","items");
    if ($("shipBar")) $("shipBar").style.width = Math.min(100, (T2.sub / FREE) * 100) + "%";
    if ($("shipMsg")) $("shipMsg").innerHTML = T2.sub >= FREE
      ? t("freeShipDone","Delivery is on us — <b>free</b> anywhere in Egypt.")
      : t("freeShipMore","Add <b>{n} EGP</b> more for free delivery.").replace("{n}", egp(FREE - T2.sub));

    if ($("cartBody")) $("cartBody").innerHTML = cart.length ? cart.map(function(c, i){
      var p = PB[c.id];
      return '<div class="citem"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
        '<span class="d"><span class="b">' + hName(HB[p.b]) + '</span><p class="n">' + pName(p) + '</p>' +
        '<span class="sz">' + t("size","Size") + ' ' + c.sz + '</span>' +
        '<span class="qty"><button type="button" data-q="-1" data-i="' + i + '" aria-label="-">−</button>' +
        '<span>' + c.q + '</span><button type="button" data-q="1" data-i="' + i + '" aria-label="+">+</button></span></span>' +
        '<span class="rt"><span class="p">' + money(p.now * c.q) + '</span>' +
        '<button class="rm" type="button" data-rm="' + i + '">' + t("remove","Remove") + '</button></span></div>';
    }).join("") : '<div class="cart-empty">' + t("emptyBag","Your bag is empty.") + '</div>';

    var inBag = cart.map(function(c){ return c.id; });
    var recs = P.filter(function(p){ return inBag.indexOf(p.id) < 0 && p.st > 0; })
                .sort(function(a,b){ return a.now - b.now; }).slice(0, 3);
    if ($("cartUp")) $("cartUp").innerHTML = '<h6>' + t("goesWith","Goes with this · add in one tap") + '</h6>' +
      recs.map(function(p){
        return '<div class="upsell"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
          '<span class="d"><b>' + pName(p) + '</b><span>' + money(p.now) + '</span></span>' +
          '<button type="button" data-up="' + p.id + '">+</button></div>';
      }).join("") +
      '<label class="giftrow"><input type="checkbox" id="giftBox"' + (gift ? " checked" : "") + '> ' +
      t("giftWrap","Add gift wrapping and a handwritten card — free") + '</label>';

    var toTier = Math.max(0, TIER - T2.sub);
    if ($("cartFt")) $("cartFt").innerHTML =
      '<div class="ln"><span>' + t("subtotal","Subtotal") + '</span><span class="num">' + money(T2.sub) + '</span></div>' +
      (T2.save ? '<div class="ln save"><span>' + t("youSave","You save") + '</span><span class="num">−' + money(T2.save) + '</span></div>' : "") +
      '<div class="ln"><span>' + t("delivery","Delivery") + '</span><span class="num">' + (T2.ship ? money(T2.ship) : t("free","Free")) + '</span></div>' +
      '<div class="ln tot"><span>' + t("total","Total") + '</span><span class="num">' + money(T2.sub + T2.ship) + '</span></div>' +
      (toTier > 0 && T2.sub > 0
        ? '<div class="tier">' + t("tierMore","Spend <b>{n} EGP</b> more to reach <b>Circle</b> — free delivery, no minimum.").replace("{n}", egp(toTier)) + '</div>'
        : T2.sub > 0 ? '<div class="tier">' + t("tierIn","This order puts you in <b>Circle</b>.") + '</div>' : "") +
      '<button class="btn red" type="button" style="width:100%" id="checkout">' + t("checkout","Checkout") + ' · ' + money(T2.sub + T2.ship) + '</button>' +
      '<p style="margin:10px 0 0;font-size:12px;color:var(--muted);text-align:center">' + t("payLine","Cash on delivery · valU · Sympl · Fawry · instalments") + '</p>';
  }

  /* ══════════ MEGA ══════════ */
  function buildMega(k){
    var mega = $("mega"), m = MENUS[k]; if (!mega || !m) return;
    var cols = '<div class="mega-cols">' + m.cols.map(function(c){
      return '<div><h5>' + (LANG === "ar" ? c.ah : c.h) + '</h5><ul>' + c.li.map(function(x){
        return '<li><a href="#sale">' + (LANG === "ar" ? x[1] : x[0]) + '<em>' + x[2] + '</em></a></li>';
      }).join("") + '</ul></div>';
    }).join("") + '<div style="grid-column:1/-1"><h5>' + t("brands","Brands") + '</h5><div class="mega-brands">' +
      m.brands.map(function(id){ return '<a href="#sale" data-brand="' + id + '">' + logo(id) + '</a>'; }).join("") + '</div></div></div>';
    var tiles = '<div class="mcol">' + m.tiles.map(function(tl){
      return '<a href="#sale"><img src="' + img(tl[0]) + '" alt=""><span>' + (LANG === "ar" ? tl[2] : tl[1]) + '</span></a>';
    }).join("") + '</div>';
    var up = '<div class="mup"><h5>' + t("alsoH","You may also like") + '</h5>' + m.up.map(function(id){
      var p = PB[id]; if (!p) return "";
      return '<div class="mup-it"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
        '<span class="d"><b>' + pName(p) + '</b><span>' + money(p.now) + (p.cut ? '<s>' + egp(p.was) + '</s>' : "") + '</span></span>' +
        '<button type="button" data-up="' + p.id + '">+</button></div>';
    }).join("") + '</div>';
    var terms = LANG === "ar" ? ["إيدن بارك","فساتين","بينيتون","بيكيني","شنطة"] : ["Eden Park","Dresses","Benetton","Bikini","Bags"];
    var search = '<div class="mega-srch"><button class="fake" type="button" data-opensearch>' +
      '<span aria-hidden="true">⌕</span><span>' + t("searchPlaceholder","Search a brand or an item…") + '</span></button>' +
      '<div class="chips">' + terms.map(function(x){ return '<button type="button" data-q="' + x + '">' + x + '</button>'; }).join("") + '</div></div>';
    mega.innerHTML = '<div class="mega-in">' + cols + tiles + up + search + '</div>';
  }
  function closeMega(){ var n = $("nav"); if (n) n.querySelectorAll("li").forEach(function(x){ x.classList.remove("open"); }); }

  /* ══════════ OVERLAYS ══════════ */
  var scrim = $("scrim"), cartEl = $("cart"), drawEl = $("draw"), srchEl = $("srch");
  function lock(on){ document.body.classList.toggle("locked", on); if (scrim) scrim.classList.toggle("on", on); }
  function closeAll(){ [cartEl, drawEl, srchEl].forEach(function(e){ if (e) e.classList.remove("on"); }); lock(false); }
  function openCart(){ closeAll(); if (cartEl) { cartEl.classList.add("on"); lock(true); } }
  function openDraw(){ closeAll(); if (drawEl) { drawEl.classList.add("on"); lock(true); } }
  function openSrch(){
    closeAll(); if (!srchEl) return;
    srchEl.classList.add("on"); lock(true); renderSearch("");
    setTimeout(function(){ var i = $("srchInput"); if (i) i.focus(); }, 60);
  }

  /* ══════════ DRAWER ══════════ */
  function buildDrawer(){
    var panes = $("drawPanes"); if (!panes) return;
    panes.innerHTML = '<div class="pane root">' +
      Object.keys(MENUS).map(function(k){
        var label = { women:t("women","Women"), men:t("men","Men"), kids:t("kids","Kids"), bags:t("bags","Bags") }[k];
        return '<button class="go" type="button" data-open="' + k + '">' + label + '<span class="ar">›</span></button>';
      }).join("") +
      '<a href="#sale" style="color:var(--red)">' + t("sale","Sale") + '</a>' +
      '<a href="#stores">' + t("stores","Stores") + '</a>' +
      '<h6>' + t("brands","Brands") + '</h6><div class="draw-brands">' +
      HOUSES.slice(0, 10).map(function(h){ return '<a href="#sale" data-brand="' + h.id + '">' + logo(h.id) + '</a>'; }).join("") +
      '</div></div>' +
      Object.keys(MENUS).map(function(k){
        return '<div class="pane sub" data-p="' + k + '"><button class="back" type="button" data-back>‹ ' +
          (LANG === "ar" ? "كل الأقسام" : "All departments") + '</button>' +
          MENUS[k].cols.map(function(c){
            return '<h6>' + (LANG === "ar" ? c.ah : c.h) + '</h6>' + c.li.map(function(x){
              return '<a href="#sale">' + (LANG === "ar" ? x[1] : x[0]) + '</a>';
            }).join("");
          }).join("") + '</div>';
      }).join("");
    panes.onclick = function(e){
      var o = e.target.closest("[data-open]"), b = e.target.closest("[data-back]"), a = e.target.closest("a");
      if (o) panes.querySelector('.pane[data-p="' + o.dataset.open + '"]').classList.add("in");
      else if (b) panes.querySelectorAll(".pane.sub").forEach(function(p){ p.classList.remove("in"); });
      else if (a) closeAll();
    };
  }

  /* ══════════ SEARCH ══════════ */
  var selIdx = -1, rows = [];
  var SKEY = RKEY.replace("_recent","_searches");
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function hl(x, q){
    if (!q) return esc(x);
    var i = x.toLowerCase().indexOf(q.toLowerCase());
    return i < 0 ? esc(x) : esc(x.slice(0,i)) + "<mark>" + esc(x.slice(i,i+q.length)) + "</mark>" + esc(x.slice(i+q.length));
  }
  function score(h, q){
    h = String(h).toLowerCase(); q = q.toLowerCase();
    if (h === q) return 100;
    if (h.indexOf(q) === 0) return 80;
    if (h.indexOf(q) > -1) return 60;
    var tk = q.split(/\s+/).filter(Boolean);
    return tk.length && tk.every(function(x){ return h.indexOf(x) > -1; }) ? 40 : 0;
  }
  function renderSearch(q){
    var body = $("srchBody"), cnt = $("srchCount"); if (!body) return;
    q = (q || "").trim(); rows = []; selIdx = -1;
    var html = "";
    if (!q) {
      var rec = ls(SKEY) || [];
      if (rec.length) html += '<div class="srch-grp"><h6>' + t("recent","Recent") + '</h6></div><div class="srch-chips">' +
        rec.slice(0,6).map(function(x){ return '<button type="button" data-q="' + esc(x) + '">' + esc(x) + '</button>'; }).join("") + '</div>';
      var trend = LANG === "ar" ? ["إيدن بارك","فساتين","بينيتون","بيكيني","شنطة ظهر"] : ["Eden Park","Dresses","Benetton","Bikini","Backpack"];
      html += '<div class="srch-grp"><h6>' + t("trending","Trending") + '</h6></div><div class="srch-chips">' +
        trend.map(function(x){ return '<button type="button" data-q="' + esc(x) + '">' + esc(x) + '</button>'; }).join("") + '</div>' +
        '<div class="srch-grp"><h6>' + t("jumpBrand","Jump to a brand") + '</h6></div><div class="srch-chips">' +
        HOUSES.slice(0,8).map(function(h){ return '<button type="button" data-q="' + esc(hName(h)) + '">' + esc(hName(h)) + '</button>'; }).join("") + '</div>';
      body.innerHTML = html; if (cnt) cnt.textContent = ""; return;
    }
    var bs = HOUSES.map(function(h){ return {h:h, s:Math.max(score(h.n + " " + h.c + " " + h.k, q), score(h.an, q))}; })
                   .filter(function(x){ return x.s > 0; }).sort(function(a,b){ return b.s - a.s; }).slice(0,4);
    var cs = CATS.map(function(c){ return {c:c, s:Math.max(score(c.n + " " + c.d, q), score(c.an, q))}; })
                 .filter(function(x){ return x.s > 0; }).sort(function(a,b){ return b.s - a.s; }).slice(0,5);
    var ps = P.map(function(p){ return {p:p, s:Math.max(score(p.n + " " + p.bn + " " + p.d, q), score(p.an, q))}; })
              .filter(function(x){ return x.s > 0; }).sort(function(a,b){ return b.s - a.s || a.p.now - b.p.now; }).slice(0,7);
    var total = bs.length + cs.length + ps.length;
    if (!total) {
      body.innerHTML = '<div class="srch-empty">' + t("noRes","No results for") + ' “' + esc(q) + '”.<br>' +
        '<span style="color:var(--muted);font-size:13.5px">' + t("noResSub","Try a brand name or a category.") + '</span></div>';
      if (cnt) cnt.textContent = "0"; return;
    }
    if (bs.length) {
      html += '<div class="srch-grp"><h6>' + t("grpBrands","Brands") + '</h6></div>';
      bs.forEach(function(x){
        rows.push({ t:"brand", v:x.h.id, label:hName(x.h) });
        html += '<div class="srch-row" data-r="' + (rows.length-1) + '"><span class="bx">' + logo(x.h.id) + '</span>' +
          '<span class="nm"><b>' + hl(hName(x.h), q) + '</b><span>' + (LANG==="ar"?x.h.ac+" · "+x.h.ak:x.h.c+" · "+x.h.k) + '</span></span>' +
          '<span class="pr">' + (x.h.cut ? "−" + x.h.cut + "%" : egp(x.h.from)) + '</span></div>';
      });
    }
    if (cs.length) {
      html += '<div class="srch-grp"><h6>' + t("grpCats","Categories") + '</h6></div>';
      cs.forEach(function(x){
        rows.push({ t:"cat", v:x.c.n, label:cName(x.c) });
        html += '<div class="srch-row" data-r="' + (rows.length-1) + '"><span class="bx" style="font-size:14px;color:var(--muted)">▦</span>' +
          '<span class="nm"><b>' + hl(cName(x.c), q) + '</b><span>' + cDept(x.c) + '</span></span>' +
          '<span class="pr">' + x.c.ct + '</span></div>';
      });
    }
    if (ps.length) {
      html += '<div class="srch-grp"><h6>' + t("grpItems","Items") + '</h6></div>';
      ps.forEach(function(x){
        var p = x.p; rows.push({ t:"prod", v:p.id, label:pName(p) });
        html += '<div class="srch-row" data-r="' + (rows.length-1) + '"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
          '<span class="nm"><b>' + hl(pName(p), q) + '</b><span>' + hName(HB[p.b]) + '</span></span>' +
          '<span class="pr">' + egp(p.now) + (p.cut ? '<s>' + egp(p.was) + '</s>' : "") + '</span></div>';
      });
    }
    body.innerHTML = html;
    if (cnt) cnt.textContent = total + " " + t("results","results");
  }
  function moveSel(d){
    var els = $("srchBody").querySelectorAll(".srch-row"); if (!els.length) return;
    selIdx = (selIdx + d + els.length) % els.length;
    els.forEach(function(e, i){ e.classList.toggle("sel", i === selIdx); });
    els[selIdx].scrollIntoView({ block:"nearest" });
  }
  function commit(i){
    var r = rows[i]; if (!r) return;
    var q = $("srchInput").value.trim();
    if (q) { var h = ls(SKEY) || []; ls(SKEY, [q].concat(h.filter(function(x){ return x !== q; })).slice(0, 6)); }
    closeAll();
    if (r.t === "prod") pushRecent(r.v);
    var s = $("sale"); if (s) s.scrollIntoView();
    say(r.label);
  }

  /* ══════════ THEME PAINTERS ══════════ */
  function paintHero(){
    var h = $("heroImg"); if (h) h.src = img(TH.heroImg);
    var s = $("splitImg"); if (s) s.src = img(TH.splitImg);
    var w = $("wideImg"); if (w) w.src = img(TH.wideImg);
    var tag = $("heroTag"), p = PB[TH.heroTagId];
    if (tag && p) tag.innerHTML = '<div class="b">' + hName(HB[p.b]) + '</div><p class="n">' + pName(p) +
      '</p><div class="p">' + money(p.now) + (p.cut ? '<s>' + egp(p.was) + '</s>' : "") + '</div>';
  }
  var BLOCKTXT = { women:["Women","حريمي"], men:["Men","رجالي"], kids:["Kids","أطفال"] };
  function paintBlocks(){
    var el = $("blocks"); if (!el) return;
    el.innerHTML = (TH.blocks || []).map(function(b){
      var lab = BLOCKTXT[b[0]] || [b[0], b[0]];
      return '<a class="block" href="#sale" data-catfilter="' + b[0] + '">' +
        '<img src="' + img(b[1]) + '" alt="' + lab[0] + '" loading="lazy">' +
        '<span class="c"><h3>' + (LANG === "ar" ? lab[1] : lab[0]) + '</h3>' +
        '<span class="go">' + t("shopNow","Shop now") + '</span></span></a>';
    }).join("");
  }
  function paintMarq(){
    var el = $("marq"); if (!el) return;
    var one = HOUSES.map(function(h){ return '<a href="#sale" data-brand="' + h.id + '" title="' + h.n + '">' + logo(h.id) + '</a>'; }).join("");
    el.innerHTML = "<span>" + one + "</span><span aria-hidden='true'>" + one + "</span>";
  }
  function paintFooterBrands(){
    var el = $("ftBrands"); if (!el) return;
    el.innerHTML = HOUSES.slice(0, 7).map(function(h){
      return '<li><a href="#sale" data-brand="' + h.id + '">' + hName(h) + '</a></li>';
    }).join("");
  }

  /* ══════════ EVENTS ══════════ */
  var nav = $("nav"), mega = $("mega"), mt;
  if (nav && mega) {
    nav.addEventListener("mouseover", function(e){
      var li = e.target.closest("li[data-menu]"); clearTimeout(mt);
      if (!li) { mt = setTimeout(closeMega, 180); return; }
      closeMega(); li.classList.add("open"); buildMega(li.dataset.menu);
    });
    nav.addEventListener("mouseleave", function(){ mt = setTimeout(closeMega, 200); });
    mega.addEventListener("mouseenter", function(){ clearTimeout(mt); });
    mega.addEventListener("mouseleave", function(){ mt = setTimeout(closeMega, 200); });
    nav.addEventListener("focusin", function(e){
      var li = e.target.closest("li[data-menu]");
      if (li) { closeMega(); li.classList.add("open"); buildMega(li.dataset.menu); }
    });
  }
  if (scrim) scrim.addEventListener("click", closeAll);
  if ($("cartTrig")) $("cartTrig").addEventListener("click", openCart);
  if ($("cartClose")) $("cartClose").addEventListener("click", closeAll);
  if ($("burger")) $("burger").addEventListener("click", openDraw);
  if ($("drawClose")) $("drawClose").addEventListener("click", closeAll);
  if ($("searchTrig")) $("searchTrig").addEventListener("click", openSrch);
  if ($("srchClose")) $("srchClose").addEventListener("click", closeAll);
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") closeAll();
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSrch(); }
  });
  var si = $("srchInput");
  if (si) {
    si.addEventListener("input", function(){ renderSearch(this.value); });
    si.addEventListener("keydown", function(e){
      if (e.key === "ArrowDown") { e.preventDefault(); moveSel(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveSel(-1); }
      else if (e.key === "Enter") { e.preventDefault(); commit(selIdx < 0 ? 0 : selIdx); }
    });
  }
  if ($("srchBody")) $("srchBody").addEventListener("click", function(e){
    var chip = e.target.closest("[data-q]");
    if (chip) { si.value = chip.dataset.q; renderSearch(chip.dataset.q); si.focus(); return; }
    var row = e.target.closest(".srch-row"); if (row) commit(+row.dataset.r);
  });
  if ($("cartBody")) $("cartBody").addEventListener("click", function(e){
    var q = e.target.closest("[data-q]"), rm = e.target.closest("[data-rm]");
    if (q) { var i = +q.dataset.i; cart[i].q += +q.dataset.q; if (cart[i].q < 1) cart.splice(i, 1); renderCart(); }
    if (rm) { cart.splice(+rm.dataset.rm, 1); renderCart(); }
  });
  if ($("cartUp")) $("cartUp").addEventListener("change", function(e){
    if (e.target.id === "giftBox") { gift = e.target.checked; renderCart(); }
  });
  if ($("cartFt")) $("cartFt").addEventListener("click", function(e){
    if (e.target.id === "checkout") say(t("checkout","Checkout"));
  });
  if ($("bset")) $("bset").addEventListener("change", function(e){
    var i = e.target.closest("input[data-b]"); if (!i) return;
    bsel[i.dataset.b] = i.checked; renderBundle();
  });
  if ($("bAdd")) $("bAdd").addEventListener("click", function(){
    var ch = BUNDLE.filter(function(id){ return bsel[id]; });
    if (!ch.length) { say(t("pickSize","Pick at least one item")); return; }
    ch.forEach(function(id){ var p = PB[id]; addToCart(p, p.s.find(function(s){ return p.out.indexOf(s) < 0; }), true); });
    renderCart(); openCart(); say(t("added","Added to bag"));
  });
  if ($("filt")) $("filt").addEventListener("click", function(e){
    var b = e.target.closest("[data-f]"); if (!b) return;
    this.querySelectorAll("[data-f]").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
    b.setAttribute("aria-pressed","true"); filt = b.dataset.f; applyGrid();
  });
  if ($("nlForm")) $("nlForm").addEventListener("submit", function(e){
    e.preventDefault(); say(t("subd","Subscribed — your 15% code is on the way")); this.reset();
  });
  ["feat","also"].forEach(function(k){
    var el = $(CAR[k].el);
    if (el) el.addEventListener("scroll", function(){ updProg(k); }, { passive:true });
  });
  window.addEventListener("resize", function(){ updProg("feat"); updProg("also"); });

  document.addEventListener("click", function(e){
    var tg = e.target;
    var carb = tg.closest("[data-car]");
    if (carb) {
      var el = $(CAR[carb.dataset.car].el); if (!el) return;
      var dir = parseInt(carb.dataset.dir, 10) * (LANG === "ar" ? -1 : 1);
      el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior:"smooth" }); return;
    }
    if (tg.closest("[data-opensearch]")) { e.preventDefault(); openSrch(); return; }
    var qc = tg.closest(".mega-srch [data-q]");
    if (qc) { openSrch(); si.value = qc.dataset.q; renderSearch(qc.dataset.q); return; }
    var up = tg.closest("[data-up]");
    if (up) {
      e.preventDefault(); var pu = PB[up.dataset.up]; if (!pu) return;
      addToCart(pu, pu.s.find(function(s){ return pu.out.indexOf(s) < 0; }), true);
      renderCart(); say(t("added","Added to bag")); return;
    }
    var bf = tg.closest("[data-brand]");
    if (bf) { e.preventDefault(); closeAll(); filt = "all"; applyGrid();
      var s1 = $("sale"); if (s1) s1.scrollIntoView(); say(hName(HB[bf.dataset.brand])); return; }
    var cf = tg.closest("[data-catfilter]");
    if (cf) {
      e.preventDefault();
      var btn = document.querySelector('[data-f="' + cf.dataset.catfilter + '"]');
      if (btn) btn.click();
      var s2 = $("sale"); if (s2) s2.scrollIntoView(); return;
    }
    if (tg.closest(".szs") && tg.tagName === "BUTTON" && !tg.disabled) {
      tg.closest(".szs").querySelectorAll("button").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
      tg.setAttribute("aria-pressed","true"); return;
    }
    if (tg.classList.contains("fav")) {
      var on = tg.getAttribute("aria-pressed") === "true";
      tg.setAttribute("aria-pressed", on ? "false" : "true");
      tg.textContent = on ? "♡" : "♥";
      var w = $("wlN");
      if (w) w.textContent = Math.max(0, parseInt(w.textContent, 10) + (on ? -1 : 1));
      say(on ? t("unsaved","Removed from saved") : t("savedMsg","Saved")); return;
    }
    if (tg.classList.contains("quick")) {
      var pc = tg.closest(".card"); pushRecent(pc.dataset.id);
      var a = $("also"); if (a) a.scrollIntoView({ behavior:"smooth" }); return;
    }
    if (tg.closest(".card .add") && tg.tagName === "BUTTON") {
      var c = tg.closest(".card"), p = PB[c.dataset.id];
      if (tg.classList.contains("off")) { say(t("notify","Notify me")); return; }
      var free = c.querySelectorAll('.szs button:not([disabled]):not(.more)');
      var ch2 = c.querySelector('.szs button[aria-pressed="true"]');
      if (free.length > 1 && !ch2 && window.innerWidth > 560) { say(t("pickSize","Choose a size first")); free[0].focus(); return; }
      addToCart(p, ch2 ? ch2.textContent : (free[0] ? free[0].textContent : "One"));
      renderCart(); return;
    }
  });

  /* ══════════ LANGUAGE ══════════ */
  function applyLang(){
    var html = document.documentElement;
    html.lang = LANG === "ar" ? "ar" : "en";
    html.dir = LANG === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-t]").forEach(function(el){
      if (!el.dataset.en) el.dataset.en = el.innerHTML;
      el.innerHTML = LANG === "ar" ? (T.ar[el.dataset.t] !== undefined ? T.ar[el.dataset.t] : el.dataset.en) : el.dataset.en;
    });
    if (si) si.placeholder = t("searchPlaceholder", "Search a brand, a category, an item…");
    if ($("nlIn")) $("nlIn").placeholder = LANG === "ar" ? "بريدك الإلكتروني" : "your@email.com";
    document.querySelectorAll("[data-lang]").forEach(function(b){
      b.setAttribute("aria-pressed", b.dataset.lang === LANG ? "true" : "false");
    });
    paintHero(); paintBlocks(); paintMarq(); paintFooterBrands();
    applyGrid(); fillCar("feat"); fillCar("also"); renderRecent();
    renderLook(); renderBundle(); renderCart(); buildDrawer(); closeMega();
    if (typeof window.figThemeHook === "function") window.figThemeHook({ LANG:LANG, t:t, money:money, egp:egp, P:P, PB:PB, HOUSES:HOUSES, HB:HB, img:img, card:card, hName:hName, pName:pName });
    ls("fig_lang", LANG);
  }
  document.addEventListener("click", function(e){
    var b = e.target.closest("[data-lang]"); if (!b) return;
    LANG = b.dataset.lang; applyLang();
  });

  window.FIG = { addToCart:addToCart, renderCart:renderCart, openCart:openCart, say:say,
                 PB:PB, P:P, card:card, setFilter:setFilter, money:money, egp:egp, t:t, img:img };

  if (ls("fig_lang") === "ar") LANG = "ar";
  applyLang();
})();
