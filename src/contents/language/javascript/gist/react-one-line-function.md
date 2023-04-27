---
date: 2023-04-03
modified: 2023-04-27
---

ternary operator
삼항 연산자 같은 걸로 한 줄에 원하는 값을 표현하고 싶을 때가 종종 있다

복잡한 코드가 생성되서 적어봤다
코파일럿 같은 거 없었으면 코드 안짜졌을지도 모른다

```jsx
<div>
  progressLoad / ProgressTotal:{' '}
  {isNumber(progressLoad / ProgressTotal)
    ? `${((progressLoad / ProgressTotal) * 100).toFixed(2)}%`
    : '파일을 넣어주세요'}
</div>
```

이코드는 파일 전송 과정에서 로딩된 데이터 전송량과 전송되야할 전체 용량을 가지고
퍼센트 그래프를 채워야하는 상황에서 발생했다
우선 progressLoad / ProgressTotal 를 통해 , 퍼센트를 알 수 있고
표기를 위해 x100 과 % 를 붙이는 동작을 구현했다
