---
sidebar_position: 3
date: 2023-04-04
modified: 2023-04-29
---

## 소개

createSlice 에서 reducers 를 선언할 때
state 와 action 이 있다

state 는 slice 에 저장되어 있는 기존 값을 사용한다
action 은 dispatch 로 전달되는 값을 사용한다

dispatch 에서는 일단 사용할 슬라이스 리듀서를 함수 호출형으로 실행하는데
이때 넣는 args 가 slice 선언 당시 쓰인 action.payload 에 들어간다
만약 객체가 `dispatch(lAction(object));` 로 들어갔다면
오브젝트 내에 있는 객체들을
`action.payload.birth;` 같은 형태로 꺼내서 사용한다

`dispatch(loginAction(response.data));`

여기서 action 은 사실 지정한 이름으로 있는 것이여서
아예 생략하고자 아래처럼 구조분해 할당하기도 한다

```tsx
updateUser: (state, { payload }: PayloadAction<AuthState>) => {
```
