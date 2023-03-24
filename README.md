# 사용 전 체크

.obsidian을 가져와서 쓰는 것을 권장한다

# 폴더 네이밍

## 폴더의 이름은 소문자로 통일한다

- 폴더간의 혼선과 import 에러를 방지하기 위함
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
