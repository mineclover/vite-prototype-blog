# 사용 전 체크

.obsidian을 가져와서 쓰는 것을 권장함
피그마 체크 할 것 : [피그마](https://www.figma.com/file/JTgfhaiAm9mWAqbmChCEYo/react-playground?node-id=0%3A1&t=oczIrWhWazX5AhPN-1)

[배포 프리뷰](https://zippy-lamington-f8a667.netlify.app/)


# 폴더 네이밍

최대한 영어로 한다
한글은 검색 예외로 넣을 것을 고려하고 있음
한글로해도 문제는 없었으나 링크가 인코딩되어 나오기 때문

## 폴더들에 있는 md 파일들에 대한 코멘트

md파일들은 도큐사우르스 도입을 고려하고 있음

## 폴더의 이름은 소문자로 통일

- 폴더간의 혼선과 import 에러를 방지하기 위함이였으나 되긴 된다 성능이 좋네
- 링크로 사용할 예정이고 폴더 구조를 그대로 가져오는 vite 기능을 사용할 계획임
  소문자 형태임을 감안하고 작업할 것으로 통일하기 위함

## 컴포넌트는 하나의 파일에서 관리하고, 폴더의 메인 컴포넌트는 index로 지정한다

:post 에 해당하게 될 컨텐츠들의 폴더는 번호 넘버링을 사용함
하나의 post 주제에서 사용되는 여러 페이지들은 01.01 처럼 하위 넘버링을 통해 구분함
이는 페이지의 순서를 보장해서 정렬을 간소화, 자동화하기 하기 위함

## 예시

### layout

- header
  - index.tsx
  - Buttons.tsx
- footer

### pages

- main
- dashboard
- test
- learn

### contents

- front
  - index.tsx
  - 사용 컴포넌트.tsx
  - react
    - 01-포스팅 이름
      - index.tsx
      - Button.tsx
      - Test.tsx
    - 01.01-예시 페이지
      - index.tsx
      - components
  - axios
    - 01-포스팅 이름
      - index.tsx
      - Button.tsx
      - Test.tsx
    - 01.01-예시 페이지
      - index-tsx
      - components
  - react-hooks
- back
  - node
    - 01-포스팅 이름
      - index.tsx
      - Button.tsx
      - Test.tsx
    - 01.01-예시 페이지
      - index.tsx
      - components
      -
  - next
  - python
