# Clothing Ecommerce Website 👑


<div align="center">
  <h3>
    <a href="#english">English</a> |
    <a href="#korean">한국어</a> 
  </h3>
</div>

---

<h2 id="english">English</h2>

A modern, full-featured e-commerce platform built with React and Firebase, showcasing best practices in front-end development and state management.

## 🌟 Features

- **User Authentication**
  - Email/Password sign-up and login
  - Google OAuth integration
  - Persistent user sessions
  - Secure authentication flow using Firebase Auth

- **Shopping Experience**
  - Browse products by categories
  - Dynamic product filtering
  - Shopping cart functionality
  - Seamless checkout process
  - Real-time cart updates

- **State Management**
  - Redux Toolkit implementation
  - Optimized performance with Redux selectors
  - Persistent cart state
  - Centralized store management

- **Styling & UI**
  - Styled-components for component-level styling
  - Responsive design
  - Custom button components
  - Dynamic navigation
  - Cart dropdown preview

## 🛠️ Technical Stack

- **Frontend Framework**: React.js
- **Routing**: React Router v6
- **State Management**: Redux Toolkit
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Styling**: Styled Components
- **Type Checking**: JavaScript
- **Build Tool**: Create React App

## 🏗️ Architecture

The project follows a modern React application architecture with:

- Component-based structure
- Container/Presentational pattern
- Redux slice pattern for state management
- Firebase integration for backend services
- Reusable styled components
- React Hooks for state and lifecycle management

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
├── routes/            # Route components and layouts
├── store/             # Redux store configuration and slices
├── utils/             # Helper functions and Firebase config
├── assets/            # Static assets and images
└── styles/            # Global styles and theme
```

## 🚀 Key Components

- **Navigation**: Responsive header with cart preview
- **Directory**: Dynamic category navigation
- **Shop**: Product listing with category filtering
- **Cart**: Real-time cart management with dropdown
- **Checkout**: Order summary and payment flow
- **Authentication**: User sign-in and registration forms

## 💡 State Management Highlights

- **Redux Toolkit Integration**
  - Simplified Redux setup with createSlice
  - Efficient state updates with ImmerJS
  - Type-safe action creators
  - Memoized selectors for performance

- **Firebase Integration**
  - Real-time database listeners
  - Batch write operations
  - Secure user authentication
  - Document/Collection management

## 🔧 Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/crown-clothing.git
```

2. Install dependencies
```bash
cd crown-clothing
npm install
```

3. Set up Firebase
   - Create a Firebase project
   - Enable Authentication (Email/Password and Google)
   - Set up Firestore database
   - Add Firebase config to environment variables

4. Start the development server
```bash
npm start
```

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Create React App documentation
- Redux Toolkit documentation
- Firebase documentation
- Styled Components documentation
- React Router documentation


---

<h2 id="korean">한국어</h2>

리액트와 파이어베이스로 구축된 현대적인 전자상거래 플랫폼입니다.

## 🌟 주요 기능

- **사용자 인증**
  - 이메일/비밀번호 회원가입 및 로그인
  - 구글 소셜 로그인 통합
  - 세션 유지 기능
  - 파이어베이스 인증을 통한 보안 강화

- **쇼핑 경험**
  - 카테고리별 상품 브라우징
  - 동적 상품 필터링
  - 장바구니 기능
  - 원활한 결제 프로세스
  - 실시간 장바구니 업데이트

- **상태 관리**
  - Redux Toolkit 구현
  - Redux 셀렉터를 통한 성능 최적화
  - 장바구니 상태 유지
  - 중앙 집중식 스토어 관리

- **스타일링 및 UI**
  - Styled-components를 활용한 컴포넌트 레벨 스타일링
  - 반응형 디자인
  - 커스텀 버튼 컴포넌트
  - 동적 네비게이션
  - 장바구니 드롭다운 프리뷰

## 🛠️ 기술 스택

- **프론트엔드 프레임워크**: React.js
- **라우팅**: React Router v6
- **상태 관리**: Redux Toolkit
- **인증**: Firebase Auth
- **데이터베이스**: Firebase Firestore
- **스타일링**: Styled Components
- **타입 체크**: JavaScript
- **빌드 도구**: Create React App

## 🏗️ 아키텍처

현대적인 React 애플리케이션 아키텍처를 따릅니다:

- 컴포넌트 기반 구조
- 컨테이너/프레젠테이션 패턴
- Redux 슬라이스 패턴을 통한 상태 관리
- 파이어베이스 백엔드 서비스 통합
- 재사용 가능한 스타일 컴포넌트
- React Hooks를 통한 상태 및 생명주기 관리

## 📂 프로젝트 구조

```
src/
├── components/         # 재사용 가능한 UI 컴포넌트
├── routes/            # 라우트 컴포넌트 및 레이아웃
├── store/             # Redux 스토어 설정 및 슬라이스
├── utils/             # 헬퍼 함수 및 Firebase 설정
├── assets/            # 정적 에셋 및 이미지
└── styles/            # 전역 스타일 및 테마
```

## 🚀 핵심 컴포넌트

- **네비게이션**: 장바구니 프리뷰가 포함된 반응형 헤더
- **디렉토리**: 동적 카테고리 네비게이션
- **샵**: 카테고리 필터링이 있는 상품 목록
- **장바구니**: 드롭다운이 있는 실시간 장바구니 관리
- **결제**: 주문 요약 및 결제 흐름
- **인증**: 사용자 로그인 및 회원가입 폼

## 💡 상태 관리 특징

- **Redux Toolkit 통합**
  - createSlice를 통한 간소화된 Redux 설정
  - ImmerJS를 통한 효율적인 상태 업데이트
  - 타입 세이프 액션 생성자
  - 성능을 위한 메모이제이션된 셀렉터

- **Firebase 통합**
  - 실시간 데이터베이스 리스너
  - 일괄 쓰기 작업
  - 안전한 사용자 인증
  - 문서/컬렉션 관리

## 🔧 설치 및 설정

1. 저장소 클론
```bash
git clone https://github.com/your-username/crown-clothing.git
```

2. 의존성 설치
```bash
cd crown-clothing
npm install
```

3. Firebase 설정
   - Firebase 프로젝트 생성
   - 인증 활성화 (이메일/비밀번호 및 구글)
   - Firestore 데이터베이스 설정
   - 환경 변수에 Firebase 설정 추가

4. 개발 서버 시작
```bash
npm start
```

## 🌐 환경 변수

루트 디렉토리에 `.env` 파일 생성:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 🤝 기여하기

1. 저장소 포크하기
2. 기능 브랜치 생성 (`git checkout -b feature/멋진기능`)
3. 변경사항 커밋 (`git commit -m '멋진 기능 추가'`)
4. 브랜치에 푸시 (`git push origin feature/멋진기능`)
5. Pull Request 열기

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다 - 자세한 내용은 [LICENSE.md](LICENSE.md) 파일을 참조하세요.

## 🙏 감사의 말

- Create React App 문서
- Redux Toolkit 문서
- Firebase 문서
- Styled Components 문서
- React Router 문서

---
