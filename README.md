## 공지사항

#### 1. fork 뜬 후 제일 먼저 해야할 일

터미널에서 npm install 명령어 입력하기

#### 2. 추가한 라이브러리 목록

```
$ npm install react-icons // 아이콘
$ npm install classnames // 클래스 add/remove 편리한거
$ npm install sass // scss 문법 사용
$ npm install reactstrap bootstrap
$ npm install @mui/material @emotion/react @emotion/styled
$ npm install @mui/icons-material
$ npm install react-router-dom
$ npm install axios // 비동기 통신 라이브러리 (fetch보다 더 많은 기능을 제공)

// board.js 파일에서 필요한 라이브러리
$ npm i @fortawesome/fontawesome-svg-core
$ npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
$ npm i @fortawesome/react-fontawesome
```

#### 3. commit 규칙

```
1) 제목
- 커밋 메시지에 제목과 본문(내용)을 포함할 것
- 제목과 본문은 한 줄에, 콜론(:)으로 분리
  ex. Feat: "로그인 컴포넌트 구현" -> 제목
- 제목 첫 글자는 대문자로 작성
- 제목 끝에 .은 쓰지말 것
```

| 제목명  | 설명                                               |
| ------- | -------------------------------------------------- |
| Feat    | 새로운 기능을 추가할 경우                          |
| Design  | CSS 등 사용자 UI 디자인 변경                       |
| Modify  | 파일 안 코드 수정                                  |
| Rename  | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
| Remove  | 파일을 삭제하는 작업만 수행한 경우                 |
| Setting | 설정 변경 및 플러그인 설치한 경우                  |

```
2) 본문(내용)

- ex. 새로고침 시 로그인 유지 기능 개발 (localStorage 사용) -> 본문
- 본문내용 작성은 선택사항, 모든 커밋에 작성 불필요
- 설명이 필요할 경우 100자를 넘기지 않게 작성
- 무엇을, 어떻게, 왜 변경했는지 작성할 것
```

#### 4. pull request 규칙

```
1) pr 템플릿

기존 Github저장소에 보관된 코드 베이스에서
나의 작업으로 생긴 변경사항을 '[대주제] 설명' 형식으로 적을 것

ex.
[로그인 기능]
Login.js - useState()로 id와 pw 변경사항 인지 설정 및 input 컴포넌트 분리

2) 테스트 꼭 진행해보기

3) 코드를 보는 것만으로 이해하기 어렵다면,
   코멘트를 통해 부가설명을 추가할 것

```
