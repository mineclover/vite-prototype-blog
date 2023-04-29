---
date: 2023-03-23
modified: 2023-04-29
---

## 소개

styled 컴포넌트는 확장이 가능하다
이건 일반 컴포넌트들을 재사용하는 것도 가능하다

스타일이 부여된 컴포넌트를 만들기

```ts
const Text = styled.p`
  font-size: 10px;
  margin: 5px;
  line-height: 10px;
  color: #194384;
`;
```

기존 컴포넌트에 추가 스타일을 부여하기
(styled 컴포넌트 외에 이미 생성된 리액트 컴포넌트에도 넣을 수 있다 )

```tsx
const ButtonText = styled(Text)`
  color: red;
`;
```

컴포넌트에 부여된 html 태그를 바꾸기

```tsx
const Anchor = Button.withComponent('a');
```

바꾸면서 확장하기

```tsx
const Anchor = styled(Button.withComponent('a'))`
  text-decoration: none;
`;
```

## 확장 기능 사용시 있었던 헤프닝

[a-tag-Attributes](../../../language/HTML/a-tag-Attributes/a-tag-Attributes)
