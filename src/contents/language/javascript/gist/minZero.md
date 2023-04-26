---
date: 2023-04-03
modified: 2023-04-24
---


NaN 과 Infinity 에 대해 0 으로 처리하고자 하는 기능이였음
프로그래시브 바에 value 로 a/b 를 넣어야하는데 a 와 b 가 0 이나 Infinity, undefined 일 때가 있었어서 해당 문제를 해결하기 위함

```js
const minZero = (value: number) => {
    // NaN과 Infinity는 0으로, 숫자는 는 그대로
    if (value === null) {
      return 0;
      // Number에서 undefined 는 NaN으로 처리 됨
    }

    const dist = Number(value);

    if (Number.isNaN(dist)) {
      return 0;
    }
    if (!Number.isFinite(dist)) {
      return 0;
    }
    return value;
  };
```
