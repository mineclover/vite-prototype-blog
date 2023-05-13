# 사용 전 체크

deploy 먼저하고 pull 하는 것이 필수
구체적으로는 macro 를 실행해서 Router.json을 받아야하는 것이 종속성이다
mdx 와 md 를 같이 쓰는 이슈로 첫 문장이 코드인 것처럼 보이는 md파일에 에러가 발생
md를 수정해야해서 찜찜해진다

## 구조

폴더 라우팅 + react-router 를 섞어서 쓰고 있다
파일명에 공백은 +로 대체 된다
렌더링 결과에서 + 빼는 것은 작업 중

## 세팅

`npm run setup` : 필요한 하위 모듈 설치
`npm run sync` : 전체 레포 npm i로 종속성 설치
`npm run deploy` : 상위 contents 에서 필요한 것만 docusurus 로 macro를 통해 복사 후 배포

최상위 레포는 push 하면 연결된 네트리파이를 통해 배포
파일이름에 공백이 있을 경우 github blog로 가는 링크가 작동하지 않으니 주의

### 편집 방법

.obsidian을 가져와서 쓰는 것을 권장함
기본적으로 해당 파일을 무시하고 있음
옵시디언으로 관리되는 리소스인
contents 폴더를 vault로 선택하거나 사용중인 세팅파일을 넣고 선택

### 종속성

일단 블로그 두개를 쓰고 있고 react playground와 github blog가 있다

프리뷰 블로그를 배포하는 최상위 폴더가 있고
같은 폴더 구조를 가지는 정적 블로그인 docusaurus 블로그를 배포 시키는 docusaurus 가 있고
파일을 도큐사우르스로 옮겨주고 markdown 매핑해주는 macro가 있다

실질적으로 편집하는 폴더는 contents이 하나기 때문에 분리해서 배포하는 작업을 넣었다

피그마 체크 할 것 : [피그마](https://www.figma.com/file/JTgfhaiAm9mWAqbmChCEYo/react-playground?node-id=0%3A1&t=oczIrWhWazX5AhPN-1)

[배포 프리뷰](https://dev-softer.netlify.app/)

# 폴더 네이밍

최대한 영어로 한다
한글은 검색 예외로 넣을 것을 고려하고 있음
한글로해도 문제는 없었으나 링크가 인코딩되어 나오기 때문

## 폴더들에 있는 md 파일들에 대한 코멘트

md파일들은 도큐사우르스 도입을 고려하고 있음

## 폴더의 이름은 소문자로 통일

- 폴더간의 혼선과 import 에러를 방지하기 위함이였으나 한글도 되긴 된다 성능이 생각보다 좋았음
- 링크로 사용할 예정이고 폴더 구조를 그대로 가져오는 vite 기능을 사용하고 있음
  소문자 형태임을 감안하고 작업할 것으로 통일하기 위함
  그래서 링큰는 도메인을 제외하고 동일하게 되어있을 것임

## 컴포넌트는 하나의 파일에서 관리하고, 폴더의 메인 컴포넌트는 index로 지정한다
