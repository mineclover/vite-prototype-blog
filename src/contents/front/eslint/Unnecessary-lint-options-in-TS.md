---
title: 타입스크립트에서 필요없는 린트
date: 2023-03-12
modified: 2023-05-14
---

에어비엔비 lint 를 세팅하면서 생기는 린트 에러를 수집하고 있다  
일단

```
    "no-unused-expressions": "warn" // 타입스크립트에서는 필요 없다
    "no-shadow": "warn", // 타입스크립트에서는 필요 없다
    "no-underscore-dangle": "off", // 밑줄을 사용해도 된다
    "no-undef": "off", // 타입스크립트에서는 필요 없다
    "no-useless-constructor": "off", // 타입스크립트에서는 필요 없다
```

## no-undef

전역변수 설정된 것을 명시해야 쓸 수 있게 하는 속성  
타입스크립트랑 많은 부분이 안맞는다고 한다

린트 `no-undef` 규칙은 존재하는 전역 변수를 결정하기 위해 TypeScript 를 사용하지 않습니다. 대신 ESLint 의 구성에 의존합니다.  
TypeScript 에 의해 이미 제공됩니다. TypeScript 는 이 작업을 훨씬 더 잘 수행함

[javascript - Why eslint consider JSX or some react @types undefined, since upgrade typescript-eslint/parser to version 4.0.0 - Stack Overflow](https://stackoverflow.com/questions/64170868/why-eslint-consider-jsx-or-some-react-types-undefined-since-upgrade-typescript)

## no-shadow

상위 함수가 하위 함수에 의해 가려지는 것을 제한하는 역할을 함

```js
var a = 3;
function b() {
  var a = 10;
}
```

## no-underscore-dangle

언더바를 통한 식별자의 접근 제어 형식 구분

그러나 이는 실제 동작한다기보다 다른 프로그램에 의한 관례에서 발생한 것이라고 한다  
파이썬에서 그렇게 한다

```python
public -> 아무런 표시가 없다
private -> 두개의 밑줄(언더바)을 적용할 수 있다.
protected -> 한개의 밑줄(언더바)을 적용할 수 있다.
```

실행되지 않는 관례에 대해 제거하는 eslint  
[no-underscore-dangle - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/rules/no-underscore-dangle)

## no-useless-constructor

리액트에서 불편해지나..?  
단순히 부모 클래스에 위임하는 생성자를 제공할 필요가 없다라는 것  
[no-useless-constructor - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/rules/no-useless-constructor)

## no-unused-expressions

사용되지 않는 표현식 선언금지

즉 선언 했으면 쓰라는 것  
나중에 안쓰는 코드들을 지우는 목적으로 키면 좋을 것 같다  
[no-unused-expressions - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/rules/no-unused-expressions)
