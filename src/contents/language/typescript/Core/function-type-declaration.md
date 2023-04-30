---
title: 함수 타입 선언
date: 2023-04-10
modified: 2023-04-30
---

```ts
type Test = {
  target: Test2;
};
type Test2 = {
  value: string;
};

type InputProps = {
  (value: Test): void;
};

// 1번
const inputChange: InputProps = ({ target: { value } }) => {
  setInputValue(value);
};
// 2번
const inputChange = ({ target: { value } }: Test) => {
  setInputValue(value);
};
```