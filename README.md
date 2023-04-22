# Wecode-2nd-project-Wevre

![header](https://capsule-render.vercel.app/api?type=rounded&color=auto&height=300&section=header&text=Team%20Wevre&fontSize=90)

### 프로젝트 주제 : Kream 쇼핑몰을 모델링으로 한 예술품 경매 사이트

-> Kream 쇼핑몰의 [한정판 판매, 경매] 라는 두 가지 특성을 차용하여 예술품을 거래하는 사이트로 재탄생

### 팀원 소개 :

-> Front-end : 김진평, 유정인

-> Back-end : 이창섭(Product Manager), 김수현(Project Manager)

### Frontend-Repository

-> https://github.com/wecode-bootcamp-korea/43-2nd-Wevre-frontend

### Backend-Repository

-> https://github.com/wecode-bootcamp-korea/43-2nd-Wevre-backend

---

### 사용 기술
**Front-end**

- main skills

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![WebSocket](https://img.shields.io/badge/Websocket-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

- extension

![prettier](https://img.shields.io/badge/-prettier-%23E5E5E5?style=for-the-badge&logo=prettier&logoColor=#F7B93E)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

**Back-end**

- main skills

- extension

**common**

- version manager

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


- project manage tool

![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)

- communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)


---

### About our project

> 예술품 하면 무엇이 떠오르나요??

어떤 예술품을 마주했을 때, 우리는 해당 예술품을 통해 그 당시 작품의 시대적 배경, 문화, 추구하는 가치 등 많은 것들을 떠올릴 수 있습니다.

하지만 동시에 고가의 물품이다 혹은 일반인은 소유하기 힘들다 라는 현실적인 생각도 함께 떠올리게 됩니다.

실제로 이름난 작가나 알려진 작품이 아니라면 예술활동을 통해 제작된 상품이 거래되는 일은 흔치 않을 것입니다.

저희는 어떻게 하면 구매자와 판매자간의 간극을 줄이고 예술품 거래를 활성화시킬 수 있을까??를 고민하다가 
Kream이라는 사이트를 참고하여 [한정판, 경매] 두 가지 방식을 차용해 예술품이라는 한정판을 거래하는 사이트로 재탄생켜보자 라는 생각을 하게 되었습니다.

저희 사이트가 활성화된다면 예술작가/화가는 자유롭게 예술품을 판매할 수 있고,
구매자에게는 합리적인 가격을 바탕으로 예술품에 대한 접근성을 높여 궁극적으로 예술품을 거래하는 시장에 활기를 불어넣어줄 수 있습니다.

이런 긍정적인 효과를 기대하며 저희의 기술력을 녹여냈습니다.


### 기능 구현 사항
1. 간편한 카카오 소셜 로그인
2. 작가명, 작품명 원하는 작품 검색
3. [회화, 조각, 사진, 공예] 크게 네 카테고리로 예술품을 구분지어 상품 리스팅 (무한 스크롤)
4. 실시간 입찰을 통해 상품에 대한 경매 진행상황 파악 (차트를 도입하여 금액 상승률 및 입찰가 히스토리 파악 가능)
5. 위시리스트에 원하는 상품 보관
6. 마이페이지에서 낙찰된 상품 구매
7. 입찰 후 구매하지 않는 케이스를 보강하기 위해 구매 동의서 구현
8. 한국미술협회(라고 가정)에 등록된 작가/화가만이 작품을 판매할 수 있도록 판매자 등록 시스템 구현
9. 검증된 작가의 판매상품 등록

---

### 기능 구현 결과

🖥️ Front-end

| 역할 | 구현 내용 | 담당자 |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| 메인 페이지 구현    | 1. Navigation 구현 - 동적 라우팅을 통한 페이지 이동 구현<br/>2. 소개 동영상 삽입 - 무한 재생, 자동 재생, 영상 컨트롤 불가<br/>3. [공예, 조각, 회화, 사진] 카테고리로 이동할 수 있는 배너 구현  | 김진평  | 
| 로그인 기능 구현   | 1. Kakao Social Login 구현<br/>2. 로그인 이후 원래 있던 페이지로 이동하도록 구현  | 김진평  | 
| 상품 리스팅 페이지 구현 | 1. 카테고리별 상품 리스팅 - 무한스크롤 구현<br/> 2. 가격, 작가순 필터 구현<br/>3. 위시리스트 리모컨 구현  | 김진평  | 
| 검색 페이지 구현 | 1. 작가명, 작품명 필터로 상품 검색 구현  | 김진평  | 
| 상품 상세 페이지 구현 | 1. 위시리스트 등록, 삭제 구현<br/>2. 웹 소켓을 통한 실시간 입찰 구현<br/>3. 입찰된 금액에 따른 [금액 상승률, 입찰된 금액] 차트   | 김진평  | 






---

### 구현 영상

| 컴포넌트                 | 기능영상                                                                                                                         | 담당 개발자                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 메인             | <img src="https://user-images.githubusercontent.com/114940636/230558607-1e49b14b-b246-483f-8150-f3385bc32801.gif" width="520" height="320" /> | - 프론트엔드 : 김진평 <br> - 백엔드 :        |
| 로그인                 | <img src="https://user-images.githubusercontent.com/114940636/230558616-9953a6fb-2bd6-494d-ab3b-ab097702666d.gif" width="520" height="320"/> | - 프론트엔드 : 김진평 <br> - 백엔드 :        |
| 스토어                 | <img src="https://user-images.githubusercontent.com/114940636/230558603-fc613385-fb63-4f49-9127-b918b4bf6408.gif" width="520" height="320"/> | - 프론트엔드 : 김진평 <br> - 백엔드 :        |
| 검색                  | <img src="https://user-images.githubusercontent.com/114940636/230558629-6b47362d-a77b-424a-9bc0-806dbd06a653.gif" width="520" height="320"/> | - 프론트엔드 : 김진평 <br> - 백엔드 :        |
|정렬                | <img src="https://user-images.githubusercontent.com/114940636/230558572-a6b4db64-84d9-4a13-acc1-3d5f6f567a5b.gif" width="520" height="320"/> | - 프론트엔드 : 김진평 <br> - 백엔드 :       |
|위시리스트                | <img src="https://user-images.githubusercontent.com/114940636/230558594-dc4321d7-6b63-4094-94c4-1f32035d06c5.gif" width="520" height="320"/> | - 프론트엔드 : 김진평 <br> - 백엔드 :        |
| 디테일 입찰         | <img src="https://user-images.githubusercontent.com/114940636/230558621-ddb3520c-1af8-4a76-b2e2-6cec83011551.gif" width="520" height="320"/> | - 프론트엔드 : 김진평 <br> - 백엔드 :         |
| 마이페이지      | <img src="https://user-images.githubusercontent.com/124610396/232273266-fb7dd3f5-0c5c-489c-b135-a8a71f1638df.gif" width="520" height="320"/>| - 프론트엔드 : 유정인 <br> - 백엔드 :         |
| 자격등록     | <img src="https://user-images.githubusercontent.com/124610396/232273310-f035a477-09b2-4e28-83ff-f3bea107622e.gif" width="520" height="320"/> | - 프론트엔드 : 유정인 <br> - 백엔드 :         |
| 작품등록             | <img src = "https://user-images.githubusercontent.com/124610396/232273322-c2fbd57e-da68-4b84-ae2a-c0f06e6ee4f9.gif" width="520px" height="320"> | -프론트엔드 : 유정인 <br> -백엔드 :       |
| 작품등     | <img src="https://user-images.githubusercontent.com/124610396/232273424-ae2215c8-f639-463c-a99e-37b781f2662d.gif" width="520" height="320"/> | - 프론트엔드 : 유정인 <br> - 백엔드 :         |
| 주문-카카오주소API     | <img src="https://user-images.githubusercontent.com/124610396/232273473-3ad2b44e-85a0-488f-adf8-24791a40f5f6.gif" width="520" height="320"/> | - 프론트엔드 : 유정인 <br> - 백엔드 :         |
| 결제-카카오페이결제API     | <img src="https://user-images.githubusercontent.com/124610396/232273486-dc8718c1-6d8e-4ae5-b087-61791b9f1f61.gif" width="520" height="320"/> | - 프론트엔드 : 유정인 <br> - 백엔드 :         |
|입찰내역     | <img src="https://user-images.githubusercontent.com/124610396/233789550-448f7b06-f659-457a-825d-58dc57f2b4d2.gif" width="520" height="320"/> | - 프론트엔드 : 유정인 <br> - 백엔드 :         |
| 결제내역     | <img src="https://user-images.githubusercontent.com/124610396/226344520-7456e9d9-6447-49fe-a540-c3558bd3cd8c.gif" width="520" height="320"/> | - 프론트엔드 : 유정인 <br> - 백엔드 :         |
| 판매내역     | <img src="https://user-images.githubusercontent.com/124610396/226344520-7456e9d9-6447-49fe-a540-c3558bd3cd8c.gif" width="520" height="320"/> | - 프론트엔드 : 유정인 <br> - 백엔드 :         |


