---
date: 2023-04-06
modified: 2023-04-29
---

## Week 1-2

### 상태 (state) 관리가 리액트 rendering 에 미치는 영향

#### useState, useMemo, useCallback, Redux, Recoil

- useState vs useReducer
- useMemo vs useCallback
- React 18 에서 새롭게 소개된 hook 들
- 전역 상태관리 툴 소개 (Context API, Redux, Recoil)
- [아하!모먼트] 사수 없는 환경에서 성장하기 위한 노력

## 함수형 프로그래밍

함수를 더 많이 쪼갤 수 있다
새로운 tsx 를 만드는 식으로 가장 많이 하고 있는데

함수를 선언하면서 안에 useState 같은 것을 넣어서

## 18 에 추가된 기능

1. useId
   1. uuid 같은 것
2. useTransition
3. useDeferredValue
4. useSyncExternalStore
5. useInsertionEffect

## useEffect 와 hooks

useLayoutEffect 가 더 먼저 실행된다
useEffect

## useState 사용시 주의사항

18 버전부터 배치 때문에 실행이 많이 간소화 됨

## useMemo 는 복잡도 > 5000 부터

[dev-blog/should-you-really-use-usememo.md at master · yeonjuan/dev-blog · GitHub](https://github.com/yeonjuan/dev-blog/blob/master/JavaScript/should-you-really-use-usememo.md?utm_source=substack&utm_medium=email)

## useRef

렌더링에 사이드이펙트가 발생하면 안되는 값 저장하기 위해 쓴다
한 번 감싸인 참조형에 저장하기 때문에 재렌더링될 때도 값에 영향이 가지 않음

캔버스나 녹음파일 ( int 16 Array buffer ? ) 같은 것에 사용했다고 함
한번 부여되면 잘 변하지 않아야하는 객체

## useSWR 와 ReactQuery

SWR 은 stale while revalidating 의 약자

[전역 상태관리 라이브러리들](전역%20상태관리%20라이브러리들)

## 사수 없는 환경에서 성장하는 방법

### 커뮤니티 활용

글또
[Notion – The all-in-one workspace for your notes, tasks, wikis, and databases.](https://www.notion.so/zzsza/ac5b18a482fb4df497d4e8257ad4d516)
케리어리

### CICD

AWS 해준다
Docker 도 해준다

### 좋은 코드를 봐라

sendbird 같은 곳에서 샌드버드가 코드패턴 같은 것을 보여주는데 그런 걸 자주 봐주면서 익혀봐라
근데 나는 일단 리액트 기본서부터 잘 파해쳤으면 좋겠다

[폴더 구조 레퍼런스](../../../site/develop/폴더%20구조%20레퍼런스)

### 디자이너는 디자인 시스템 잘만들면 대우 받음

디자인 시스템 만들기와 사용법
이야기해보자

## 기술 TMI

### fiber 찍는 방법

변경되는 fiber ?
리액트에서 fiber 는 가상돔과 변경된 돔을 비교하는 로직이다
[React Fiber 얕게 알아보기](https://velog.io/@jangws/React-Fiber)
react.dom.develop 같은거에서
performUni ~ 에 콘솔로그 찍기 .. ?? 너무 빨리 지나간다 ;

### 좋은 사람

협업 되는 사람 서로 윈윈하는 사람

### npm trends

다운로드 확인하기

### 다음 주 월요일 !

렌더링 시간 비교 벤치마킹 방법 알려준데

### persist 사용 지양

로컬 스토리지에 민감한게 저장되면 위험하다
차라리 쿠키로 다시 받자

### 3500

3600 받을꺼면 3500 받아라

### CICD 팁

s3 , ec2
s3 는 편하지만 ec2 는 포트 설정 때문에 힘들다
[AWS에서 React.js배포 - Byeongjin Jason Kang](https://jasonkang14.github.io/aws/aws-amplify-with-react)
근데 ec2 를 하는 이유가 있으니 해봐라

### 블로그 참고?

내가 한게 더 좋을듯?
[All Posts tagged as "css-module" - Blog by Yeri](https://yeri-kim.github.io/tag/css-module)
