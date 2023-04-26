---
date: 2023-03-22
modified: 2023-04-24
---

## 소개

블로그 작업 중 발생한 문제

indexing 경로의 작업일기다

나는 매핑된 객체를 상태로 관리하기 위해
리덕스에서 가져온 사이트맵 매핑 오브젝트를 state 에 넣고 있다

state 에 넣어야하기 때문에 push 를 매번 쓰기는 어렵고
객체를 하나 만든 다음 마지막에 넣으려하는데

컴포넌트 사이트맵과 마크다운 사이트맵을 만드는 것에 두번에 데이터 입력이 들어가기 때문에
기존 데이터에 추가로 데이터를 넣을 수 있어야했다

로직으로 자동화 되어 처리되는 것을 선호했기 때문에
state 와 사이트맵을 함수에 args 로 보내고
제어하도록 했는데

업데이트가 안되는 문제가 있었다

```ts
setIndex((state) => indexComponentGen(state, components));
```

그것은 setState 로 나오는 state 에 바로 원하는 작업을 한 후 return 동작을 수행헀는데
state 와 return state 가 같아서 변경이 일어나지 않는 문제였다

그래서 lodash 의 cloneDeep 을 사용하여 객체를 한번 복사하고 사용했더니 잘 되었음

```ts
const resultObject: IndexObject = _.cloneDeep(state);
```

## 배열의 경우

URL 생성기를 만들고 있는데
일반적인 url 과 hash 는 다른 구조로 돌아가고 있었다
일단
