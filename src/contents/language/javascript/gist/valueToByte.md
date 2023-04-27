---
date: 2023-04-04
modified: 2023-04-27
---

byte 표기를 위해서 사용
파일 사이즈로 나오는 숫자를 최소 숫자가 사용되는 용량 단위로 사용함

```js
const valueToByte = (value: number) => {
  if (value < 1024) return `${value}B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(2)}KB`;
  if (value < 1024 * 1024 * 1024)
    return `${(value / 1024 / 1024).toFixed(2)}MB`;
  return `${(value / 1024 / 1024 / 1024).toFixed(2)}GB`;
};
```

선택하는 방식으로 수정
값이 잘못 들어왔을 때 기본 값은 MB 로 하고 경고 출력

```js
type ValueToByte = (value: number, type: 'B' | 'KB' | 'MB' | 'GB') => string;
const valueToByte: ValueToByte = (value, type) => {
  if (type === 'B') return `${value}B`;
  if (type === 'KB') return `${(value / 1024).toFixed(2)}KB`;
  if (type === 'MB') return `${(value / 1024 / 1024).toFixed(2)}MB`;
  if (type === 'GB') return `${(value / 1024 / 1024 / 1024).toFixed(2)}GB`;
  console.error('valueToByte type 설정이 잘못되었음');
  return `${(value / 1024 / 1024).toFixed(2)}MB`;
};
```
