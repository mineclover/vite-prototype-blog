---
date: 2023-03-12
modified: 2023-04-27
---

리덕스에서 아래 구문 중 state 가 `no-param-reassign` 를 위반한다
파라매터 재할당을 하지 마라 란 것

```tsx

export const authSlice = createSlice({
  name: 'auth',
  initialState,
reducers: {
    loginAction: (state, action: PayloadAction<AuthState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.birth = action.payload.birth;
      state.joinType = action.payload.joinType;
      state.accessToken = action.payload.accessToken;
    },
```

그래서 내가 생각한 가장 최소한의 허용 방법은 리덕스 슬라이스 컨벤션을 Slice 붙이기로 하고
아래 처럼 예외처리를 시켜주는 것인데 다른 방법이 있는지 모르겠다

## 적용하지 마라 라는 입장

에어비엔비가 너무 오래되고 깐깐한 규칙이라고 하는 글이 있다

[Do we want to recommend the \`no-param-reassign\` eslint rule in the docs? · Issue #521 · reduxjs/redux-toolkit · GitHub](https://github.com/reduxjs/redux-toolkit/issues/521)

적용한 속

```
"no-param-reassign": ["error", { "props": false }],
```

## 적용 잘 안된 것

```tsx
"no-param-reassign": [
      "error",
      { "props": true, "ignorePropertyModificationsForRegex": ["*Slice$"] }

    ]
```

이거 린트 돌리는데 에러 나와서 뺐따

예외를 허용하는 이유를 코파일럿이 제안한 것으로

> 리덕스에서 immer 를 사용할 때, immer 가 불변성을 지키면서 state 를 변경하기 때문에 state 를 직접 변경하는 것을 허용한다

라고 했는데 이게 맞는 말인지 모르겠다
리덕스는 리듀서 state 쓸 때 불변성이 지켜지는건가?
