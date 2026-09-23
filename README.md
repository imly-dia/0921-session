# 회원가입 페이지 구현

2026-2 [멋쟁이사자처럼] 세션 과제 — Figma 디자인 시스템을 Tailwind CSS로 옮겨 회원가입 페이지를 구현했습니다.

## 기술 스택

- React (Vite)
- Tailwind CSS v4
- Figma

## 실행 방법

npm install
npm run dev

## 폴더 구조

src
├─ components
│  ├─ Button.jsx      # 공통 버튼 (세션에서 만든 컴포넌트 재사용)
│  └─ Input.jsx       # 재사용 가능한 입력창 컴포넌트
├─ pages
│  └─ SignupPage.jsx  # 회원가입 페이지
├─ App.jsx
└─ index.css          # 디자인 시스템 (색상, 폰트, 타이포그래피)

## 구현 내용

### 1. 디자인 시스템

- **Color**: Figma에서 만든 Primary(100~900), Neutral 색상을 `@theme`에 등록
- **Typography**: Pretendard 폰트, Figma 텍스트 스타일을 `@layer components`에 클래스로 등록

### 2. Input 컴포넌트

Figma Auto Layout 값(W 320, 패딩 24·12, 간격 10)을 Tailwind 클래스로 옮겼습니다.

### 3. 회원가입 페이지

- 이름 / 이메일 / 비밀번호 / 비밀번호 확인 입력창
- 모든 칸을 입력해야 회원가입 버튼 활성화
- 비밀번호와 비밀번호 확인이 다르면 알림 표시

## 스크린샷
<img width="955" height="539" alt="스크린샷 2026-09-23 204136" src="https://github.com/user-attachments/assets/9576da02-918b-48b9-96f3-55e7338069e9" />
<img width="959" height="539" alt="스크린샷 2026-09-23 204345" src="https://github.com/user-attachments/assets/188866f5-ed78-4b7f-9155-facb6b865158" />
<img width="959" height="539" alt="스크린샷 2026-09-23 204408" src="https://github.com/user-attachments/assets/a22c12f5-7bcf-4895-be33-4e2e82df9a69" />
<img width="1167" height="881" alt="스크린샷 2026-09-23 오후 12 52 50" src="https://github.com/user-attachments/assets/66e8d3cc-ff1d-4199-9e13-0440a24b3a65" />
<img width="1408" height="881" alt="스크린샷 2026-09-23 오후 8 24 56" src="https://github.com/user-attachments/assets/6227b261-13fe-4d07-9df8-123316773472" />

