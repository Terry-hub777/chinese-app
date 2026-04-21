# 🇨🇳 중국어 학습 앱

초급 중국어 회화 PWA 앱 — 단어 500개, 시나리오 30개, AI 선생님

## 파일 구조
```
├── index.html      ← 메인 앱
├── words.js        ← 단어 500개 데이터
├── scenarios.js    ← 시나리오 30개 대화
├── sw.js           ← 서비스 워커 (오프라인 지원)
├── manifest.json   ← PWA 설정
└── README.md
```

## 기능
- 🃏 **단어 카드** — 500개 단어, 성조 색상 표시, 발음 듣기
- 💬 **회화 시나리오** — 30개 상황 대화 (공항, 호텔, 식당, 쇼핑 등)
- 🎤 **따라 말하기** — 음성 인식으로 발음 체크
- 🤖 **AI 선생님** — Claude API 연동 자유 회화
- 📊 **학습 기록** — 진도, 스트릭, 정확도 저장
- 📱 **PWA** — 홈 화면 설치, 오프라인 지원

## 배포 방법 (GitHub Pages — 무료)

### 1단계: GitHub 계정 만들기
https://github.com 에서 무료 계정 생성

### 2단계: 새 저장소 만들기
- "New repository" 클릭
- 이름: `chinese-app` (또는 원하는 이름)
- Public 선택
- "Create repository" 클릭

### 3단계: 파일 업로드
- "uploading an existing file" 클릭
- 이 폴더의 모든 파일을 드래그 & 드롭
- "Commit changes" 클릭

### 4단계: GitHub Pages 활성화
- Settings → Pages
- Source: "Deploy from a branch"
- Branch: main / (root)
- Save

### 5단계: 앱 주소 확인
약 1~2분 후 `https://[내 아이디].github.io/chinese-app` 으로 접속!

## 스마트폰에 설치 (PWA)

### iPhone (Safari)
1. Safari로 앱 주소 접속
2. 하단 공유 버튼(□↑) 탭
3. "홈 화면에 추가" 탭
4. "추가" 탭

### Android (Chrome)
1. Chrome으로 앱 주소 접속
2. 상단 메뉴(⋮) 탭
3. "홈 화면에 추가" 탭

## Claude API 키 발급
1. https://console.anthropic.com 접속
2. "API Keys" → "Create Key"
3. 앱 AI 탭에서 키 입력 → 저장
4. AI 선생님과 자유 회화 시작!

## 카테고리 목록 (단어)
인사, 숫자, 시간, 장소, 교통, 공항, 호텔, 식당, 쇼핑, 관광,
병원, 날씨, 통신, 감정, 동사, 가족, 음식, 색상, 신체, 의류,
은행, 긴급, 일상, 날짜, 학습, 음료, 취미, 직업, 방향, 형용사,
문법, 비즈니스, 문화, 생활, 여행, 앱

## 시나리오 목록 (30개)
공항: 체크인, 입국심사, 수하물
교통: 택시, 지하철, 버스, 길찾기
호텔: 체크인, 룸서비스, 체크아웃
식당: 주문, 계산, 특이사항, 테이크아웃
쇼핑: 옷, 시장흥정, 약국
관광: 박물관, 사진부탁, 투어예약
카페, 배달
일상: 환전, SIM카드, 병원, 숙소문제
긴급: 분실, 응급상황
소셜: 자기소개, 날씨대화, 식사초대
