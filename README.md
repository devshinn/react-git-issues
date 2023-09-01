## Github Api를 활용한 Repository Issue 확인.

### [배포링크](https://react-git-issues.vercel.app/issues)

실행방헙

```
git clone https://github.com/devshinn/react-git-issues.git
npm install
npm start
```

### 주요기능

- Github API를 활용하여, 이슈 목록을 가져옵니다.
- 이슈 목록을 정렬합니다.
- 화면을 아래로 스크롤 할 시 이슈 목록을 추가합니다.(인피니티 스크롤)

### 사용된 기술스택

```
react
typescript
reactstyled-components
lodash
axios
react-markdown
```

### 폴더구조

```json
...
├── src/
│   ├── 📂api/
│   │   ├── index
│   │   └── issue
│   ├── 📂components/
│   │   ├── 📂isse/
│   │   │   ├── IssueItem
│   │   │   └── IsseItemDetail
│   │   ├── AdCard ==>광고카드
│   │   ├── Layout
│   │   └── Loading
│   ├── 📂hooks/
│   │   └── useScroll ==>무한스크롤에 사용
│   ├── 📂lib/
│   │   └── utils  ==> DateFormat 변환lib
│   ├── 📂pages/
│   │   ├── ErrorPage
│   │   ├── IssueDetailPage
│   │   └── IssueListPage
│   ├── 📂store/
│   │   ├── 📂slices/
│   │   │   ├── issueDetails
│   │   │   └── issueList
│   │   ├── hooks
│   │   └── store
│   ├── 📂types/
│   │   └── index
│   ├── app
│   └── ...
└── ...
```

### Commit Message 컨벤션

| 태그 이름        | 설명                                                                      |
| ---------------- | ------------------------------------------------------------------------- |
| Initial          | 시스템 초기 설정                                                          |
| Feat             | 새로운 기능을 추가할 경우                                                 |
| Fix              | 버그를 고친 경우                                                          |
| Design           | CSS 등 사용자 UI 디자인 변경                                              |
| Style            | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우                     |
| Refactor         | 프로덕션 코드 리팩토링                                                    |
| Comment          | 필요한 주석 추가 및 변경                                                  |
| Docs             | 문서를 수정한 경우                                                        |
| Chore            | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| Rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                        |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                                        |
| Merge            | 파일 또는 브랜치 병합할 경우                                              |
| Dir              | 폴더 및 문서 구조 변경할 경우                                             |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                    |
