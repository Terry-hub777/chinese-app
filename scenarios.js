const SCENARIOS = [
  // ===== 공항 =====
  {
    id:1, cat:'공항', icon:'✈️', title:'공항 체크인', lvl:1,
    tip:'중국 공항에서는 여권과 항공권을 함께 제시해요.',
    dialogs:[
      {s:'cn', t:'您好，请出示您的护照和机票。', p:'Nín hǎo, qǐng chūshì nín de hùzhào hé jīpiào.', k:'안녕하세요, 여권과 항공권을 보여주세요.'},
      {s:'me', t:'好的，给您。', p:'Hǎo de, gěi nín.', k:'네, 여기 있어요.'},
      {s:'cn', t:'您有几件托运行李？', p:'Nín yǒu jǐ jiàn tuōyùn xínglǐ?', k:'위탁 수하물이 몇 개예요?'},
      {s:'me', t:'一件，这个箱子。', p:'Yī jiàn, zhège xiāngzi.', k:'한 개요, 이 캐리어요.'},
      {s:'cn', t:'好的，您的座位是23A，靠窗。', p:'Hǎo de, nín de zuòwèi shì èrshísān A, kào chuāng.', k:'네, 좌석은 23A, 창가 좌석이에요.'},
      {s:'me', t:'谢谢！登机口在哪里？', p:'Xièxiè! Dēngjī kǒu zài nǎlǐ?', k:'감사해요! 탑승구가 어디예요?'},
      {s:'cn', t:'B区，38号登机口，请走左边。', p:'B qū, sānshíbā hào dēngjī kǒu, qǐng zǒu zuǒbiān.', k:'B구역, 38번 탑승구예요, 왼쪽으로 가세요.'},
    ]
  },
  {
    id:2, cat:'공항', icon:'🛃', title:'입국 심사', lvl:1,
    tip:'입국 목적을 간단히 답할 수 있으면 충분해요.',
    dialogs:[
      {s:'cn', t:'您好，来中国的目的是什么？', p:'Nín hǎo, lái Zhōngguó de mùdì shì shénme?', k:'안녕하세요, 중국 방문 목적이 뭐예요?'},
      {s:'me', t:'旅游。', p:'Lǚyóu.', k:'여행이요.'},
      {s:'cn', t:'打算住多久？', p:'Dǎsuàn zhù duō jiǔ?', k:'얼마나 머물 예정이에요?'},
      {s:'me', t:'一个星期。', p:'Yī gè xīngqī.', k:'일주일이요.'},
      {s:'cn', t:'住在哪里？', p:'Zhù zài nǎlǐ?', k:'어디에 머물 예정이에요?'},
      {s:'me', t:'北京希尔顿酒店。', p:'Běijīng Xīěrdùn Jiǔdiàn.', k:'베이징 힐튼 호텔이요.'},
      {s:'cn', t:'好的，祝您旅途愉快！', p:'Hǎo de, zhù nín lǚtú yúkuài!', k:'네, 즐거운 여행 되세요!'},
    ]
  },
  {
    id:3, cat:'공항', icon:'🧳', title:'수하물 찾기', lvl:1,
    tip:'중국어로 "제 짐을 못 찾겠어요"를 알아두면 유용해요.',
    dialogs:[
      {s:'me', t:'请问，行李在哪里领取？', p:'Qǐngwèn, xínglǐ zài nǎlǐ lǐngqǔ?', k:'실례지만, 수하물은 어디서 찾아요?'},
      {s:'cn', t:'请看一下您的行李牌，然后去对应的转盘。', p:'Qǐng kàn yīxià nín de xínglǐ pái, rán hòu qù duìyìng de zhuǎnpán.', k:'수하물 태그를 확인하시고 해당 컨베이어 벨트로 가세요.'},
      {s:'me', t:'我找不到我的行李，怎么办？', p:'Wǒ zhǎo bù dào wǒ de xínglǐ, zěnme bàn?', k:'짐을 못 찾겠어요, 어떻게 하죠?'},
      {s:'cn', t:'请去行李服务台，出示您的行李牌。', p:'Qǐng qù xínglǐ fúwù tái, chūshì nín de xínglǐ pái.', k:'수하물 서비스 데스크로 가서 수하물 태그를 보여주세요.'},
    ]
  },

  // ===== 교통 =====
  {
    id:4, cat:'교통', icon:'🚕', title:'택시 타기', lvl:1,
    tip:'목적지를 중국어로 보여주거나 말하면 편해요. 미터기가 있는지 확인하세요.',
    dialogs:[
      {s:'me', t:'师傅，去天安门广场，多少钱？', p:'Shīfu, qù Tiān\'ānmén Guǎngchǎng, duōshao qián?', k:'기사님, 천안문 광장까지 얼마예요?'},
      {s:'cn', t:'打表的话大概五十块左右。', p:'Dǎ biǎo de huà dàgài wǔshí kuài zuǒyòu.', k:'미터기 기준으로 약 50위안 정도요.'},
      {s:'me', t:'好的，走吧。请快一点，我赶时间。', p:'Hǎo de, zǒu ba. Qǐng kuài yīdiǎn, wǒ gǎn shíjiān.', k:'좋아요, 출발해요. 좀 빠르게 가주세요, 시간이 촉박해요.'},
      {s:'cn', t:'好，我尽量快。现在堵车有点严重。', p:'Hǎo, wǒ jǐnliàng kuài. Xiànzài dǔchē yǒudiǎn yánzhòng.', k:'네, 최대한 빠르게 갈게요. 지금 교통체증이 좀 있어요.'},
      {s:'me', t:'没关系。可以走高速吗？', p:'Méi guānxi. Kěyǐ zǒu gāosù ma?', k:'괜찮아요. 고속도로로 가도 돼요?'},
      {s:'cn', t:'可以，但是要加过路费。', p:'Kěyǐ, dànshì yào jiā guòlùfèi.', k:'네, 하지만 통행료가 추가돼요.'},
    ]
  },
  {
    id:5, cat:'교통', icon:'🚇', title:'지하철 이용', lvl:1,
    tip:'중국 지하철은 보안 검사가 있어요. 짐을 X레이에 통과시켜야 해요.',
    dialogs:[
      {s:'me', t:'请问，去故宫怎么坐地铁？', p:'Qǐngwèn, qù Gùgōng zěnme zuò dìtiě?', k:'실례지만, 자금성에 지하철로 어떻게 가요?'},
      {s:'cn', t:'您坐1号线，在天安门东站下车。', p:'Nín zuò yī hào xiàn, zài Tiān\'ānmén Dōng zhàn xià chē.', k:'1호선을 타고 천안문동역에서 내리세요.'},
      {s:'me', t:'需要换乘吗？', p:'Xūyào huànchéng ma?', k:'환승이 필요해요?'},
      {s:'cn', t:'不需要，直达。票价两块钱。', p:'Bù xūyào, zhídá. Piàojià liǎng kuài qián.', k:'필요없어요, 직통이에요. 요금은 2위안이에요.'},
      {s:'me', t:'在哪里买票？', p:'Zài nǎlǐ mǎi piào?', k:'어디서 표를 사요?'},
      {s:'cn', t:'可以用微信或者支付宝扫码进站。', p:'Kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo sǎo mǎ jìn zhàn.', k:'위챗이나 알리페이로 QR 스캔해서 탑승할 수 있어요.'},
    ]
  },
  {
    id:6, cat:'교통', icon:'🚌', title:'버스 타기', lvl:2,
    tip:'버스 번호와 방향을 확인하는 게 중요해요.',
    dialogs:[
      {s:'me', t:'请问，这路公共汽车去王府井吗？', p:'Qǐngwèn, zhè lù gōnggòng qìchē qù Wángfǔjǐng ma?', k:'실례지만, 이 버스가 왕푸징에 가나요?'},
      {s:'cn', t:'对，但你要在前门换乘。', p:'Duì, dàn nǐ yào zài Qiánmén huànchéng.', k:'네, 하지만 치엔먼에서 환승해야 해요.'},
      {s:'me', t:'几站以后到前门？', p:'Jǐ zhàn yǐhòu dào Qiánmén?', k:'몇 정거장 후에 치엔먼에 도착해요?'},
      {s:'cn', t:'三站，大概十分钟。', p:'Sān zhàn, dàgài shí fēnzhōng.', k:'3정거장, 약 10분이요.'},
    ]
  },
  {
    id:7, cat:'교통', icon:'🗺️', title:'길 물어보기', lvl:1,
    tip:'중국인들은 대부분 친절하게 길을 알려줘요.',
    dialogs:[
      {s:'me', t:'不好意思，我迷路了。王府井在哪里？', p:'Bù hǎo yìsi, wǒ mí lù le. Wángfǔjǐng zài nǎlǐ?', k:'실례해요, 길을 잃었어요. 왕푸징이 어디예요?'},
      {s:'cn', t:'王府井？往前走大概五分钟，然后右转就到了。', p:'Wángfǔjǐng? Wǎng qián zǒu dàgài wǔ fēnzhōng, rán hòu yòu zhuǎn jiù dào le.', k:'왕푸징이요? 앞으로 약 5분 걷고 오른쪽으로 돌면 돼요.'},
      {s:'me', t:'谢谢！走路多久？', p:'Xièxiè! Zǒulù duō jiǔ?', k:'감사해요! 걸어서 얼마나 걸려요?'},
      {s:'cn', t:'大概十分钟左右。你可以看到一个很大的购物中心。', p:'Dàgài shí fēnzhōng zuǒyòu. Nǐ kěyǐ kàn dào yī gè hěn dà de gòuwù zhōngxīn.', k:'약 10분 정도요. 큰 쇼핑몰이 보일 거예요.'},
    ]
  },

  // ===== 호텔 =====
  {
    id:8, cat:'호텔', icon:'🏨', title:'호텔 체크인', lvl:1,
    tip:'중국 호텔에서는 여권이 필수예요. 외국인은 여권으로만 체크인 가능해요.',
    dialogs:[
      {s:'me', t:'你好，我有预订，我叫金民俊。', p:'Nǐ hǎo, wǒ yǒu yùdìng, wǒ jiào Jīn Mínjùn.', k:'안녕하세요, 예약했어요, 김민준이에요.'},
      {s:'cn', t:'您好，金先生。请出示您的护照。', p:'Nín hǎo, Jīn xiānsheng. Qǐng chūshì nín de hùzhào.', k:'안녕하세요, 김 선생님. 여권을 보여주세요.'},
      {s:'me', t:'好的，这是我的护照。', p:'Hǎo de, zhè shì wǒ de hùzhào.', k:'네, 여기 제 여권이에요.'},
      {s:'cn', t:'您预订的是标准双人间，住三晚。一共一千二百元。', p:'Nín yùdìng de shì biāozhǔn shuāngrén jiān, zhù sān wǎn. Yīgòng yīqiān èrbǎi yuán.', k:'스탠다드 더블룸으로 3박 예약하셨어요. 총 1200위안이에요.'},
      {s:'me', t:'好的。早餐包含吗？', p:'Hǎo de. Zǎocān bāohán ma?', k:'네. 조식 포함인가요?'},
      {s:'cn', t:'是的，早餐包含在内，早上七点到十点。', p:'Shì de, zǎocān bāohán zài nèi, zǎoshang qī diǎn dào shí diǎn.', k:'네, 조식 포함이에요, 오전 7시부터 10시까지예요.'},
      {s:'me', t:'好的，房间有无线网络吗？', p:'Hǎo de, fángjiān yǒu wúxiàn wǎngluò ma?', k:'네, 방에 와이파이 있나요?'},
      {s:'cn', t:'有，密码在房卡背面。', p:'Yǒu, mìmǎ zài fáng kǎ bèimiàn.', k:'있어요, 비밀번호는 카드키 뒷면에 있어요.'},
    ]
  },
  {
    id:9, cat:'호텔', icon:'🛎️', title:'룸서비스 요청', lvl:1,
    tip:'중국 호텔에서는 프런트에 전화하면 대부분 도움받을 수 있어요.',
    dialogs:[
      {s:'me', t:'你好，我房间的空调坏了。', p:'Nǐ hǎo, wǒ fángjiān de kōngtiáo huài le.', k:'안녕하세요, 제 방 에어컨이 고장났어요.'},
      {s:'cn', t:'很抱歉，请问是几号房间？', p:'Hěn bàoqiàn, qǐngwèn shì jǐ hào fángjiān?', k:'죄송합니다, 몇 호 방이세요?'},
      {s:'me', t:'308号。', p:'Sān líng bā hào.', k:'308호예요.'},
      {s:'cn', t:'好的，我们马上派人去检修。大概等十分钟可以吗？', p:'Hǎo de, wǒmen mǎshàng pài rén qù jiǎnxiū. Dàgài děng shí fēnzhōng kěyǐ ma?', k:'네, 바로 직원을 보낼게요. 약 10분 기다려주실 수 있어요?'},
      {s:'me', t:'好的，谢谢。另外，能给我多拿几条毛巾吗？', p:'Hǎo de, xièxiè. Lìngwài, néng gěi wǒ duō ná jǐ tiáo máojīn ma?', k:'네, 감사해요. 그리고 수건 몇 장 더 가져다줄 수 있어요?'},
      {s:'cn', t:'当然，没问题！', p:'Dāngrán, méi wèntí!', k:'물론이죠, 문제없어요!'},
    ]
  },
  {
    id:10, cat:'호텔', icon:'🏁', title:'호텔 체크아웃', lvl:1,
    tip:'체크아웃 시 미니바 사용 여부를 확인해요.',
    dialogs:[
      {s:'me', t:'你好，我要退房，308号。', p:'Nǐ hǎo, wǒ yào tuìfáng, sān líng bā hào.', k:'안녕하세요, 체크아웃하려고요, 308호예요.'},
      {s:'cn', t:'好的，请稍等，我查一下账单。', p:'Hǎo de, qǐng shāo děng, wǒ chá yīxià zhàngdān.', k:'네, 잠시만요, 계산서 확인할게요.'},
      {s:'me', t:'有没有额外消费？', p:'Yǒu méiyǒu éwài xiāofèi?', k:'추가 요금이 있나요?'},
      {s:'cn', t:'没有，一共是一千二百元。请问怎么支付？', p:'Méiyǒu, yīgòng shì yīqiān èrbǎi yuán. Qǐngwèn zěnme zhīfù?', k:'없어요, 총 1200위안이에요. 어떻게 결제하시겠어요?'},
      {s:'me', t:'刷信用卡。能给我一张收据吗？', p:'Shuā xìnyòngkǎ. Néng gěi wǒ yī zhāng shōujù ma?', k:'카드로 결제할게요. 영수증 주실 수 있어요?'},
      {s:'cn', t:'当然，谢谢您的入住，欢迎下次再来！', p:'Dāngrán, xièxiè nín de rùzhù, huānyíng xià cì zài lái!', k:'물론이죠, 이용해 주셔서 감사해요, 다음에 또 오세요!'},
    ]
  },

  // ===== 식당 =====
  {
    id:11, cat:'식당', icon:'🍜', title:'식당 입장 & 주문', lvl:1,
    tip:'중국 식당에서는 "服务员！(fúwùyuán)"이라고 부르면 돼요.',
    dialogs:[
      {s:'me', t:'你好，两位，有位置吗？', p:'Nǐ hǎo, liǎng wèi, yǒu wèizhì ma?', k:'안녕하세요, 두 명인데 자리 있나요?'},
      {s:'cn', t:'有，请跟我来。这是菜单。', p:'Yǒu, qǐng gēn wǒ lái. Zhè shì càidān.', k:'있어요, 따라오세요. 메뉴판이에요.'},
      {s:'me', t:'谢谢。请问这个是什么？（指着菜单）', p:'Xièxiè. Qǐngwèn zhège shì shénme? (zhǐzhe càidān)', k:'감사해요. 이게 뭐예요? (메뉴판을 가리키며)'},
      {s:'cn', t:'那是我们的招牌菜，北京烤鸭，很好吃的。', p:'Nà shì wǒmen de zhāopái cài, Běijīng kǎoyā, hěn hǎochī de.', k:'저건 저희 시그니처 메뉴예요, 베이징 덕이에요, 맛있어요.'},
      {s:'me', t:'好，我们要一只烤鸭，还有两碗米饭。', p:'Hǎo, wǒmen yào yī zhī kǎoyā, hái yǒu liǎng wǎn mǐfàn.', k:'좋아요, 베이징 덕 한 마리랑 밥 두 공기 주세요.'},
      {s:'cn', t:'好的，要喝什么？', p:'Hǎo de, yào hē shénme?', k:'네, 음료는요?'},
      {s:'me', t:'两瓶矿泉水，谢谢。不辣的，可以吗？', p:'Liǎng píng kuàngquán shuǐ, xièxiè. Bù là de, kěyǐ ma?', k:'생수 두 병 주세요. 맵지 않게 해주실 수 있어요?'},
      {s:'cn', t:'没问题！', p:'Méi wèntí!', k:'물론이죠!'},
    ]
  },
  {
    id:12, cat:'식당', icon:'💳', title:'계산하기', lvl:1,
    tip:'중국에서는 위챗페이나 알리페이로 결제하는 경우가 많아요.',
    dialogs:[
      {s:'me', t:'服务员，买单！', p:'Fúwùyuán, mǎidān!', k:'종업원, 계산해주세요!'},
      {s:'cn', t:'好的，一共是二百八十元。', p:'Hǎo de, yīgòng shì èrbǎi bāshí yuán.', k:'네, 총 280위안이에요.'},
      {s:'me', t:'可以分开结账吗？', p:'Kěyǐ fēnkāi jiézhàng ma?', k:'따로 계산할 수 있나요?'},
      {s:'cn', t:'可以，你们各付多少？', p:'Kěyǐ, nǐmen gè fù duōshǎo?', k:'네, 각자 얼마씩 내실 건가요?'},
      {s:'me', t:'各付一半，可以扫码支付吗？', p:'Gè fù yī bàn, kěyǐ sǎo mǎ zhīfù ma?', k:'반반씩 내는 거로요, QR코드로 결제 가능해요?'},
      {s:'cn', t:'可以，微信和支付宝都可以。', p:'Kěyǐ, Wēixìn hé Zhīfùbǎo dōu kěyǐ.', k:'네, 위챗이랑 알리페이 둘 다 돼요.'},
    ]
  },
  {
    id:13, cat:'식당', icon:'🥢', title:'음식 주문 특이사항', lvl:2,
    tip:'알레르기나 식이제한을 미리 알리는 게 중요해요.',
    dialogs:[
      {s:'me', t:'不好意思，我对花生过敏，这道菜有花生吗？', p:'Bù hǎo yìsi, wǒ duì huāshēng guòmǐn, zhè dào cài yǒu huāshēng ma?', k:'실례지만, 저 땅콩 알레르기가 있어요, 이 요리에 땅콩 있어요?'},
      {s:'cn', t:'有一点，我们可以不放。', p:'Yǒu yīdiǎn, wǒmen kěyǐ bù fàng.', k:'조금 있어요, 빼드릴 수 있어요.'},
      {s:'me', t:'太好了，谢谢！另外，我吃素，有素食菜单吗？', p:'Tài hǎo le, xièxiè! Lìngwài, wǒ chī sù, yǒu sùshí càidān ma?', k:'다행이에요, 감사해요! 그리고 저 채식주의자인데, 채식 메뉴 있어요?'},
      {s:'cn', t:'有的，我给您拿素食菜单。', p:'Yǒu de, wǒ gěi nín ná sùshí càidān.', k:'있어요, 채식 메뉴판 가져다드릴게요.'},
    ]
  },

  // ===== 쇼핑 =====
  {
    id:14, cat:'쇼핑', icon:'🛍️', title:'옷 쇼핑', lvl:1,
    tip:'중국 사이즈는 한국보다 한 사이즈 크게 사는 게 좋아요.',
    dialogs:[
      {s:'me', t:'你好，这件衣服有大一点的吗？', p:'Nǐ hǎo, zhè jiàn yīfú yǒu dà yīdiǎn de ma?', k:'안녕하세요, 이 옷 더 큰 사이즈 있어요?'},
      {s:'cn', t:'有，你穿多大码？', p:'Yǒu, nǐ chuān duō dà mǎ?', k:'있어요, 몇 사이즈 입으세요?'},
      {s:'me', t:'我平时穿M码。', p:'Wǒ píngshí chuān M mǎ.', k:'보통 M 사이즈 입어요.'},
      {s:'cn', t:'这里有M码和L码，你可以试一下。', p:'Zhèlǐ yǒu M mǎ hé L mǎ, nǐ kěyǐ shì yīxià.', k:'M이랑 L 있어요, 입어보셔도 돼요.'},
      {s:'me', t:'试衣间在哪里？', p:'Shìyī jiān zài nǎlǐ?', k:'탈의실이 어디예요?'},
      {s:'cn', t:'在里面右边。', p:'Zài lǐmiàn yòubiān.', k:'안쪽 오른편이에요.'},
      {s:'me', t:'这件衣服多少钱？', p:'Zhè jiàn yīfú duōshao qián?', k:'이 옷 얼마예요?'},
      {s:'cn', t:'三百元，现在打八折，二百四十元。', p:'Sānbǎi yuán, xiànzài dǎ bā zhé, èrbǎi sìshí yuán.', k:'300위안인데, 지금 20% 할인해서 240위안이에요.'},
    ]
  },
  {
    id:15, cat:'쇼핑', icon:'🏪', title:'시장에서 흥정', lvl:2,
    tip:'관광지 시장에서는 가격 흥정이 가능해요. 처음 제시 가격의 절반부터 시작해보세요.',
    dialogs:[
      {s:'me', t:'这个钱包多少钱？', p:'Zhège qiánbāo duōshao qián?', k:'이 지갑 얼마예요?'},
      {s:'cn', t:'三百块，很便宜的！', p:'Sānbǎi kuài, hěn piányí de!', k:'300위안이요, 매우 싸요!'},
      {s:'me', t:'太贵了！能便宜一点吗？', p:'Tài guì le! Néng piányí yīdiǎn ma?', k:'너무 비싸요! 좀 깎아줄 수 있어요?'},
      {s:'cn', t:'好吧，二百五十块，最低价了！', p:'Hǎo ba, èrbǎi wǔshí kuài, zuì dī jià le!', k:'그럼 250위안이요, 최저가예요!'},
      {s:'me', t:'一百五十块怎么样？', p:'Yībǎi wǔshí kuài zěnme yàng?', k:'150위안 어때요?'},
      {s:'cn', t:'不行不行，亏本了！二百块，行不行？', p:'Bù xíng bù xíng, kuī běn le! Èrbǎi kuài, xíng bu xíng?', k:'안 돼요 안 돼요, 손해예요! 200위안 어때요?'},
      {s:'me', t:'好，就二百块吧。', p:'Hǎo, jiù èrbǎi kuài ba.', k:'좋아요, 200위안으로 해요.'},
    ]
  },
  {
    id:16, cat:'쇼핑', icon:'💊', title:'약국에서', lvl:1,
    tip:'중국 약국에서는 처방전 없이 살 수 있는 약이 많아요.',
    dialogs:[
      {s:'me', t:'你好，我头疼，有什么药吗？', p:'Nǐ hǎo, wǒ tóuténg, yǒu shénme yào ma?', k:'안녕하세요, 두통이 있는데 약이 있나요?'},
      {s:'cn', t:'有，这是止痛药，一天三次，一次两片。', p:'Yǒu, zhè shì zhǐtòng yào, yī tiān sān cì, yī cì liǎng piàn.', k:'있어요, 이게 진통제예요, 하루 세 번, 한 번에 두 알이에요.'},
      {s:'me', t:'好，另外有没有肠胃药？我肚子有点不舒服。', p:'Hǎo, lìngwài yǒu méiyǒu chángwèi yào? Wǒ dùzi yǒudiǎn bù shūfu.', k:'네, 그리고 위장약도 있나요? 배가 조금 불편해요.'},
      {s:'cn', t:'有，这个对肠胃很好。一共五十八元。', p:'Yǒu, zhège duì chángwèi hěn hǎo. Yīgòng wǔshíbā yuán.', k:'있어요, 이게 위장에 좋아요. 총 58위안이에요.'},
    ]
  },

  // ===== 관광 =====
  {
    id:17, cat:'관광', icon:'🏛️', title:'박물관 입장', lvl:1,
    tip:'중국 유명 관광지는 미리 온라인으로 예약하는 게 좋아요.',
    dialogs:[
      {s:'me', t:'你好，买两张成人票，多少钱？', p:'Nǐ hǎo, mǎi liǎng zhāng chéngrén piào, duōshao qián?', k:'안녕하세요, 성인 두 장 살게요, 얼마예요?'},
      {s:'cn', t:'每张六十元，共一百二十元。', p:'Měi zhāng liùshí yuán, gòng yībǎi èrshí yuán.', k:'장당 60위안, 합계 120위안이에요.'},
      {s:'me', t:'学生票有优惠吗？', p:'Xuéshēng piào yǒu yōuhuì ma?', k:'학생 할인이 있나요?'},
      {s:'cn', t:'有，学生票半价，需要学生证。', p:'Yǒu, xuéshēng piào bàn jià, xūyào xuéshēng zhèng.', k:'있어요, 학생증이 필요하고 반값이에요.'},
      {s:'me', t:'里面可以拍照吗？', p:'Lǐmiàn kěyǐ pāizhào ma?', k:'안에서 사진 찍어도 돼요?'},
      {s:'cn', t:'可以，但是部分展品不能拍照，请看提示牌。', p:'Kěyǐ, dànshì bùfen zhǎnpǐn bù néng pāizhào, qǐng kàn tíshì pái.', k:'돼요, 하지만 일부 전시품은 촬영 금지예요, 안내판을 확인해주세요.'},
    ]
  },
  {
    id:18, cat:'관광', icon:'📸', title:'사진 부탁하기', lvl:1,
    tip:'중국인들은 대부분 사진 부탁에 흔쾌히 응해줘요.',
    dialogs:[
      {s:'me', t:'不好意思，能帮我们拍张照片吗？', p:'Bù hǎo yìsi, néng bāng wǒmen pāi zhāng zhàopiàn ma?', k:'실례지만, 사진 한 장 찍어주실 수 있어요?'},
      {s:'cn', t:'当然可以，站到哪里？', p:'Dāngrán kěyǐ, zhàn dào nǎlǐ?', k:'물론이죠, 어디에 서면 될까요?'},
      {s:'me', t:'就在这里，那个塔为背景。', p:'Jiù zài zhèlǐ, nàge tǎ wéi bèijǐng.', k:'여기요, 저 탑을 배경으로요.'},
      {s:'cn', t:'好，准备好了吗？一、二、三，茄子！', p:'Hǎo, zhǔnbèi hǎo le ma? Yī, èr, sān, qiézi!', k:'좋아요, 준비됐어요? 하나, 둘, 셋, 김치!'},
      {s:'me', t:'谢谢！可以再拍一张吗？', p:'Xièxiè! Kěyǐ zài pāi yī zhāng ma?', k:'감사해요! 한 장 더 찍어줄 수 있어요?'},
    ]
  },
  {
    id:19, cat:'관광', icon:'🚣', title:'투어 예약', lvl:2,
    tip:'현지 투어는 호텔 프런트나 여행사에서 예약 가능해요.',
    dialogs:[
      {s:'me', t:'你好，我想报名参加明天的长城一日游。', p:'Nǐ hǎo, wǒ xiǎng bàomíng cānjiā míngtiān de Chángchéng yī rì yóu.', k:'안녕하세요, 내일 만리장성 당일치기 투어에 참여하고 싶어요.'},
      {s:'cn', t:'好的，几个人？', p:'Hǎo de, jǐ gè rén?', k:'네, 몇 명이에요?'},
      {s:'me', t:'两个人。包含什么？', p:'Liǎng gè rén. Bāohán shénme?', k:'두 명이요. 뭐가 포함돼요?'},
      {s:'cn', t:'包含接送、门票和午餐。每人三百五十元。', p:'Bāohán jiēsòng, ménpiào hé wǔcān. Měi rén sānbǎi wǔshí yuán.', k:'픽업, 입장권, 점심 포함이에요. 1인당 350위안이에요.'},
      {s:'me', t:'好，我们报名。几点出发？', p:'Hǎo, wǒmen bàomíng. Jǐ diǎn chūfā?', k:'좋아요, 신청할게요. 몇 시에 출발해요?'},
      {s:'cn', t:'早上八点，从酒店大堂出发。', p:'Zǎoshang bā diǎn, cóng jiǔdiàn dàtáng chūfā.', k:'오전 8시, 호텔 로비에서 출발해요.'},
    ]
  },

  // ===== 식사/카페 =====
  {
    id:20, cat:'카페', icon:'☕', title:'카페에서', lvl:1,
    tip:'중국의 밀크티(奶茶) 문화가 매우 발달해 있어요.',
    dialogs:[
      {s:'me', t:'你好，我要一杯奶茶，少糖，少冰。', p:'Nǐ hǎo, wǒ yào yī bēi nǎichá, shǎo táng, shǎo bīng.', k:'안녕하세요, 밀크티 한 잔이요, 설탕 적게, 얼음 적게요.'},
      {s:'cn', t:'好的，大杯还是中杯？', p:'Hǎo de, dà bēi háishi zhōng bēi?', k:'네, 큰 사이즈 아니면 중간 사이즈요?'},
      {s:'me', t:'大杯，要带走。', p:'Dà bēi, yào dài zǒu.', k:'큰 거로요, 포장이요.'},
      {s:'cn', t:'好，一共二十八元，可以扫码吗？', p:'Hǎo, yīgòng èrshíbā yuán, kěyǐ sǎo mǎ ma?', k:'네, 총 28위안이에요, QR 결제 가능해요?'},
      {s:'me', t:'可以。WiFi密码是什么？', p:'Kěyǐ. WiFi mìmǎ shì shénme?', k:'네. 와이파이 비밀번호가 뭐예요?'},
      {s:'cn', t:'贴在墙上，cafe2024。', p:'Tiē zài qiáng shàng, cafe2024.', k:'벽에 붙어있어요, cafe2024예요.'},
    ]
  },
  {
    id:21, cat:'식당', icon:'🍱', title:'배달 & 테이크아웃', lvl:2,
    tip:'중국에서는 美团(메이퇀)이나 饿了么(어러머) 앱으로 배달 주문을 많이 해요.',
    dialogs:[
      {s:'me', t:'你好，我想打包，能外卖吗？', p:'Nǐ hǎo, wǒ xiǎng dǎbāo, néng wàimài ma?', k:'안녕하세요, 포장 가능해요?'},
      {s:'cn', t:'可以，你要点什么？', p:'Kěyǐ, nǐ yào diǎn shénme?', k:'네, 뭘 주문하실 건가요?'},
      {s:'me', t:'一份宫保鸡丁，一份炒饭。', p:'Yī fèn gōngbǎo jīdīng, yī fèn chǎofàn.', k:'궁보계정 하나, 볶음밥 하나요.'},
      {s:'cn', t:'好，大概十五分钟，一共六十元。', p:'Hǎo, dàgài shíwǔ fēnzhōng, yīgòng liùshí yuán.', k:'네, 약 15분, 총 60위안이에요.'},
    ]
  },

  // ===== 생활/일상 =====
  {
    id:22, cat:'일상', icon:'💰', title:'은행 & 환전', lvl:1,
    tip:'중국에서는 위챗페이나 알리페이가 필수예요. 미리 세팅하고 가세요.',
    dialogs:[
      {s:'me', t:'你好，我想换钱，韩元换人民币。', p:'Nǐ hǎo, wǒ xiǎng huàn qián, hán yuán huàn rénmínbì.', k:'안녕하세요, 환전하고 싶어요, 원화를 위안화로요.'},
      {s:'cn', t:'好的，今天的汇率是一千韩元换五块八。', p:'Hǎo de, jīntiān de huìlǜ shì yīqiān hán yuán huàn wǔ kuài bā.', k:'네, 오늘 환율은 1000원에 5.8위안이에요.'},
      {s:'me', t:'我要换一百万韩元。', p:'Wǒ yào huàn yī bǎi wàn hán yuán.', k:'100만 원 환전하고 싶어요.'},
      {s:'cn', t:'好的，一共五千八百元，请出示您的护照。', p:'Hǎo de, yīgòng wǔqiān bābǎi yuán, qǐng chūshì nín de hùzhào.', k:'네, 총 5800위안이에요, 여권을 보여주세요.'},
      {s:'me', t:'手续费多少？', p:'Shǒuxùfèi duōshao?', k:'수수료가 얼마예요?'},
      {s:'cn', t:'手续费是百分之一。', p:'Shǒuxùfèi shì bǎifēnzhī yī.', k:'수수료는 1%예요.'},
    ]
  },
  {
    id:23, cat:'일상', icon:'📱', title:'SIM 카드 구매', lvl:1,
    tip:'공항이나 편의점에서 여행자용 SIM 카드를 살 수 있어요.',
    dialogs:[
      {s:'me', t:'你好，我想买一张旅游SIM卡。', p:'Nǐ hǎo, wǒ xiǎng mǎi yī zhāng lǚyóu SIM kǎ.', k:'안녕하세요, 여행자용 SIM 카드 사고 싶어요.'},
      {s:'cn', t:'好的，你要用多少天？', p:'Hǎo de, nǐ yào yòng duōshao tiān?', k:'네, 며칠 동안 사용하실 거예요?'},
      {s:'me', t:'一个星期，需要流量。', p:'Yī gè xīngqī, xūyào liúliàng.', k:'일주일이요, 데이터가 필요해요.'},
      {s:'cn', t:'这款七天十G，九十九元，含接听电话。', p:'Zhè kuǎn qī tiān shí G, jiǔshíjiǔ yuán, hán jiētīng diànhuà.', k:'이건 7일 10GB, 99위안이에요, 수신 통화 포함이에요.'},
      {s:'me', t:'好，怎么设置？', p:'Hǎo, zěnme shèzhì?', k:'좋아요, 어떻게 설정해요?'},
      {s:'cn', t:'我帮你设置好，请给我手机。', p:'Wǒ bāng nǐ shèzhì hǎo, qǐng gěi wǒ shǒujī.', k:'제가 설정해드릴게요, 핸드폰을 주세요.'},
    ]
  },
  {
    id:24, cat:'일상', icon:'🏥', title:'병원 방문', lvl:2,
    tip:'중국 병원은 등록 절차가 복잡해요. 호텔에서 도움을 요청하거나 국제병원을 이용하세요.',
    dialogs:[
      {s:'me', t:'你好，我身体不舒服，想看医生。', p:'Nǐ hǎo, wǒ shēntǐ bù shūfu, xiǎng kàn yīshēng.', k:'안녕하세요, 몸이 불편해서 의사를 보고 싶어요.'},
      {s:'cn', t:'请先挂号，在一号窗口。', p:'Qǐng xiān guàhào, zài yī hào chuāngkǒu.', k:'먼저 접수하세요, 1번 창구예요.'},
      {s:'me', t:'我发烧，还有肚子疼。', p:'Wǒ fāshāo, hái yǒu dùzi téng.', k:'열이 나고 배도 아파요.'},
      {s:'cn', t:'体温多少？', p:'Tǐwēn duōshao?', k:'체온이 얼마예요?'},
      {s:'me', t:'38.5度。我有旅游保险。', p:'Sānshíbā diǎn wǔ dù. Wǒ yǒu lǚyóu bǎoxiǎn.', k:'38.5도예요. 여행보험이 있어요.'},
      {s:'cn', t:'好的，请稍等，医生一会儿来。', p:'Hǎo de, qǐng shāo děng, yīshēng yīhuìr lái.', k:'네, 잠시 기다려주세요, 의사가 곧 올 거예요.'},
    ]
  },
  {
    id:25, cat:'일상', icon:'🔑', title:'숙소 문제 해결', lvl:2,
    tip:'중국 숙소에서 문제가 생기면 직접 말하는 것보다 번역 앱을 활용하는 것도 좋아요.',
    dialogs:[
      {s:'me', t:'你好，我的房间里没有热水。', p:'Nǐ hǎo, wǒ de fángjiān lǐ méiyǒu rè shuǐ.', k:'안녕하세요, 제 방에 온수가 없어요.'},
      {s:'cn', t:'非常抱歉，我们马上派人去检查。', p:'Fēicháng bàoqiàn, wǒmen mǎshàng pài rén qù jiǎnchá.', k:'매우 죄송해요, 바로 직원을 보내서 확인할게요.'},
      {s:'me', t:'另外，隔壁房间太吵了，能换一间吗？', p:'Lìngwài, gébì fángjiān tài chǎo le, néng huàn yī jiān ma?', k:'그리고 옆방이 너무 시끄러워요, 방을 바꿀 수 있나요?'},
      {s:'cn', t:'让我查一下，现在有606号房间，安静一些，可以吗？', p:'Ràng wǒ chá yīxià, xiànzài yǒu liùlínliù hào fángjiān, ānjìng yīxiē, kěyǐ ma?', k:'확인해볼게요, 지금 606호 있어요, 더 조용해요, 괜찮아요?'},
    ]
  },

  // ===== 긴급상황 =====
  {
    id:26, cat:'긴급', icon:'🆘', title:'물건 분실', lvl:1,
    tip:'중국에서 분실 신고는 경찰서(派出所)에 해야 해요.',
    dialogs:[
      {s:'me', t:'不好意思，我丢了我的钱包，怎么办？', p:'Bù hǎo yìsi, wǒ diū le wǒ de qiánbāo, zěnme bàn?', k:'실례해요, 지갑을 잃어버렸어요, 어떻게 하죠?'},
      {s:'cn', t:'在哪里丢的？', p:'Zài nǎlǐ diū de?', k:'어디서 잃어버렸어요?'},
      {s:'me', t:'在地铁上，里面有护照和信用卡。', p:'Zài dìtiě shàng, lǐmiàn yǒu hùzhào hé xìnyòngkǎ.', k:'지하철에서요, 안에 여권이랑 신용카드가 있어요.'},
      {s:'cn', t:'您需要去最近的派出所报警，然后联系您的大使馆。', p:'Nín xūyào qù zuìjìn de pàichūsuǒ bàojǐng, rán hòu liánxì nín de dàshǐguǎn.', k:'가장 가까운 파출소에 신고하시고, 대사관에 연락하세요.'},
      {s:'me', t:'韩国大使馆的电话是什么？', p:'Hánguó dàshǐguǎn de diànhuà shì shénme?', k:'한국 대사관 전화번호가 뭐예요?'},
      {s:'cn', t:'请搜一下"驻华韩国大使馆"，我帮你打电话。', p:'Qǐng sōu yīxià "zhùhuá Hánguó dàshǐguǎn", wǒ bāng nǐ dǎ diànhuà.', k:'"주중한국대사관"을 검색해보세요, 제가 전화 도와드릴게요.'},
    ]
  },
  {
    id:27, cat:'긴급', icon:'🚨', title:'응급상황', lvl:1,
    tip:'중국 응급 신고 번호: 경찰 110, 소방/구급 119예요.',
    dialogs:[
      {s:'me', t:'救命！这个人晕倒了！', p:'Jiùmìng! Zhège rén yūn dǎo le!', k:'살려주세요! 이 사람이 쓰러졌어요!'},
      {s:'cn', t:'我来帮忙！有人打120了吗？', p:'Wǒ lái bāngmáng! Yǒu rén dǎ yāo èr líng le ma?', k:'제가 도울게요! 119에 전화한 사람 있어요?'},
      {s:'me', t:'没有，请你打！我不会说中文。', p:'Méiyǒu, qǐng nǐ dǎ! Wǒ bù huì shuō Zhōngwén.', k:'없어요, 전화해주세요! 저는 중국어를 못 해요.'},
      {s:'cn', t:'好，我来打！你们让开，给他空间！', p:'Hǎo, wǒ lái dǎ! Nǐmen ràng kāi, gěi tā kōngjiān!', k:'네, 제가 할게요! 비켜주세요, 공간을 주세요!'},
    ]
  },

  // ===== 소셜/일상대화 =====
  {
    id:28, cat:'일상', icon:'👋', title:'자기소개', lvl:1,
    tip:'중국 친구를 사귀면 위챗 ID를 교환하는 게 일반적이에요.',
    dialogs:[
      {s:'cn', t:'你好！你是哪国人？', p:'Nǐ hǎo! Nǐ shì nǎ guó rén?', k:'안녕하세요! 어느 나라 사람이에요?'},
      {s:'me', t:'我是韩国人，你好！我叫金民俊，你呢？', p:'Wǒ shì Hánguó rén, nǐ hǎo! Wǒ jiào Jīn Mínjùn, nǐ ne?', k:'한국 사람이에요, 안녕하세요! 저는 김민준이에요, 당신은요?'},
      {s:'cn', t:'我叫王芳，很高兴认识你！你来中国旅游吗？', p:'Wǒ jiào Wáng Fāng, hěn gāoxìng rènshí nǐ! Nǐ lái Zhōngguó lǚyóu ma?', k:'저는 왕팡이에요, 만나서 반가워요! 여행으로 온 거예요?'},
      {s:'me', t:'是的，我来北京旅游，明天去长城。你会说韩语吗？', p:'Shì de, wǒ lái Běijīng lǚyóu, míngtiān qù Chángchéng. Nǐ huì shuō Hányǔ ma?', k:'네, 베이징 여행 왔어요, 내일 만리장성 가요. 한국어 할 줄 알아요?'},
      {s:'cn', t:'我会说一点，안녕하세요！我在学习韩语。', p:'Wǒ huì shuō yīdiǎn, 안녕하세요！Wǒ zài xuéxí Hányǔ.', k:'조금 할 줄 알아요, 안녕하세요! 한국어 배우고 있어요.'},
      {s:'me', t:'哇，你韩语说得很好！能加一下微信吗？', p:'Wā, nǐ Hányǔ shuō de hěn hǎo! Néng jiā yīxià Wēixìn ma?', k:'와, 한국어 잘하네요! 위챗 추가해도 돼요?'},
    ]
  },
  {
    id:29, cat:'일상', icon:'🎉', title:'날씨 & 일상대화', lvl:1,
    tip:'날씨 대화는 어느 나라에서나 쉽게 시작할 수 있는 주제예요.',
    dialogs:[
      {s:'cn', t:'今天天气真好！', p:'Jīntiān tiānqì zhēn hǎo!', k:'오늘 날씨 정말 좋네요!'},
      {s:'me', t:'是啊，阳光明媚。韩国冬天很冷，这里比较暖和。', p:'Shì a, yángguāng míngmèi. Hánguó dōngtiān hěn lěng, zhèlǐ bǐjiào nuǎnhuo.', k:'그러네요, 화창해요. 한국 겨울은 매우 춥거든요, 여기는 비교적 따뜻해요.'},
      {s:'cn', t:'北京冬天也很冷，你来的时候正好是秋天，最舒服的季节。', p:'Běijīng dōngtiān yě hěn lěng, nǐ lái de shíhòu zhènghǎo shì qiūtiān, zuì shūfu de jìjié.', k:'베이징도 겨울엔 추워요, 가을에 오셨으니 딱 좋은 계절이에요.'},
      {s:'me', t:'对，秋天最漂亮了。听说北京的秋天很美。', p:'Duì, qiūtiān zuì piàoliang le. Tīng shuō Běijīng de qiūtiān hěn měi.', k:'맞아요, 가을이 제일 예쁘죠. 베이징 가을이 아름답다고 들었어요.'},
    ]
  },
  {
    id:30, cat:'일상', icon:'🍽️', title:'식사 초대', lvl:2,
    tip:'중국에서는 식사 초대를 받으면 거절하지 않는 게 예의예요.',
    dialogs:[
      {s:'cn', t:'你好，你吃饭了吗？一起去吃吧！', p:'Nǐ hǎo, nǐ chīfàn le ma? Yīqǐ qù chī ba!', k:'안녕하세요, 밥 먹었어요? 같이 먹으러 가요!'},
      {s:'me', t:'还没有，好啊！你推荐哪家餐厅？', p:'Hái méiyǒu, hǎo a! Nǐ tuījiàn nǎ jiā cāntīng?', k:'아직요, 좋아요! 어느 식당 추천해요?'},
      {s:'cn', t:'附近有一家四川菜馆，特别好吃，你能吃辣吗？', p:'Fùjìn yǒu yī jiā Sìchuān càiguǎn, tèbié hǎochī, nǐ néng chī là ma?', k:'근처에 사천요리집이 있어요, 정말 맛있어요, 매운 거 먹을 수 있어요?'},
      {s:'me', t:'能吃一点，但不能太辣。韩国人也喜欢吃辣！', p:'Néng chī yīdiǎn, dàn bù néng tài là. Hánguó rén yě xǐhuan chī là!', k:'조금은 먹을 수 있어요, 하지만 너무 맵지 않게요. 한국 사람도 매운 거 좋아해요!'},
      {s:'cn', t:'哈哈，是的！我们走吧，今天我请客！', p:'Hāhā, shì de! Wǒmen zǒu ba, jīntiān wǒ qǐngkè!', k:'하하, 맞아요! 가요, 오늘은 제가 살게요!'},
      {s:'me', t:'太客气了，谢谢你！下次我请你！', p:'Tài kèqì le, xièxiè nǐ! Xià cì wǒ qǐng nǐ!', k:'너무 감사해요! 다음에는 제가 살게요!'},
    ]
  },
];
