---
date: 2023-05-05
modified: 2023-05-14
---

짝 지어 제거하기 2017 팁스다운  
react 카톡방에서 보게 되서 들어가서 풀어봤다

baa baa 를 테스트 코드로 작성한 것  
공백을 감안해야해서 `s.replace(" ","")` 를 붙였었음

## 1 차 시도

```js
function solution(s) {
  let result = s.replace(' ', '');
  let i = 0;
  while (i < result.length) {
    const len = result.length;
    const rex = new RegExp(result[i] + result[i], 'gi');
    result = result.replace(rex, '');
    if (len > result.length) {
      i = 0;
      continue;
    }
    i++;
  }
  return result.length ? 0 : 1;
}
```

테스트 케이스에 맞춰서 불필요한 것 떄어냄 그래도 시간 초과 ㅠㅠ

```js
function solution(s) {
  let i = 0;
  while (i < s.length) {
    const len = s.length;
    const rex = new RegExp(s[i] + s[i], 'g');
    s = s.replace(rex, '');
    if (len > s.length) {
      i = 0;
      continue;
    }
    i++;
  }
  return s.length ? 0 : 1;
}
```

갯수를 세볼까 어짜피 갯수 세서 홀수면 탈락이잖아  
그럼 전체 순회 1 회 , 순회한 객체가 홀수가 있으면 제거  
아 그러면 객체를 넣었다 뻇다하면 짝수홀수 구분 되니까  
지금 stack 처럼 하는게 맞긴 하네

근데 저 스택은 반복을 좀 더 해야되잖아 순서대로 돌아가니까

## 2 차 시도

그래서 set 을 써서 해보기로 했는데  
짝이 맞는~ 에서 실패하여 실패했다

이건 그냥 갯수를 통해 전부 짝지어졌을 때의 결과를 검증할 뿐이였다

```js
function solution(s) {
  var mySet = new Set();
  for (let a of s) {
    if (mySet.has(a) === true) mySet.delete(a);
    else mySet.add(a);
  }

  return mySet.size > 0 ? 0 : 1;
}
```

즉 그래서 스택을 써야한다  
두개가 연속되야하기 때문에 연속됨을 감지해야하기 때문  
감지해야지 짝지어 사라지고 그 이전 것과 맞물릴 수 있게 되기 때문에 stack push pop 으로 제어하는 것이다  
가장 끝자리만 파악하면 되기 때문에 마지막 자리 요소만 참조하는 것이고

## 정답

통과하는 코드는 아래 같은 코드라고 한다  
[프로그래머스 - 짝지어 제거하기 (JavaScript) : 효율성 테스트 만점받기 위한 과정..](https://velog.io/@reasonz/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A7%9D%EC%A7%80%EC%96%B4-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0-JavaScript-%ED%9A%A8%EC%9C%A8%EC%84%B1-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EC%A0%90%EB%B0%9B%EA%B8%B0-%EC%9C%84%ED%95%9C-%EA%B3%BC%EC%A0%95)

```js
function solution(s) {
  let result = 0;

  if (s.length < 2) return 0;
  const stack = [];
  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length > 0 ? 0 : 1;
}
```

set 에서 조건을 찔끔 추가했다

```js
function solution(s) {
  let result = 0;

  if (s.length < 2 || s % 2 === 1) return 0;

  const stack = [];
  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length > 0 ? 0 : 1;
}
```

## 성능 올리기 실패한 시도

뒤로도 빼면 어떨까 했다  
실패했다  
구체적인 이유로는 맨 뒤와 맨 앞이 페어로 마무리되는 경우가 거의 없다는 것  
그리고 정해지 방법 외의 접근으로 사라지게 해서 꼬일 확률이 높은 접근 방법이였다

```js
function solution(s) {
  if (s.length < 2 || s % 2 === 1) return 0;

  const stack = [];
  let x = 0;
  let y = 1;
  stack.push(s[0]);

  for (let i = 1; i < s.length - y; i++) {
    if (stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    if (stack[x] === s[s.length - y]) {
      y++;
      x++;
    }
  }

  const result = stack.slice(x);

  return result.length > 0 ? 0 : 1;
}
```
