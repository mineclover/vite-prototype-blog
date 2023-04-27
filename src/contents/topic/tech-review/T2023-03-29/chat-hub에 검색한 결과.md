---
date: 2023-03-29
modified: 2023-04-27
---

## 질문

리액트에서 3 개 이상의 조건문에 따라 원하는 컴포넌트를 반환할 수 있는 재사용 가능 함수를 작성해줘

## 답변

### chatGPT

리액트에서 조건문을 사용하여 원하는 컴포넌트를 반환하는 함수를 작성하는 방법은 매우 간단합니다. 아래는 3 개 이상의 조건문에 따라 원하는 컴포넌트를 반환할 수 있는 재사용 가능 함수의 예시입니다.

```jsx
function MyComponent(props) {
  if (props.condition1) {
    return <Component1 />;
  } else if (props.condition2) {
    return <Component2 />;
  } else if (props.condition3) {
    return <Component3 />;
  } else {
    return <DefaultComponent />;
  }
}
```

위의 코드에서 `props` 는 함수에 전달되는 프로퍼티 값입니다. `condition1`, `condition2`, `condition3` 는 각각 첫번째, 두번째, 세번째 조건문으로, `props` 객체에 포함된 값 중 하나가 해당 조건을 만족하면 해당 컴포넌트를 반환합니다. 만약 위의 조건 중 어떤 것도 만족하지 않는다면, `DefaultComponent` 를 반환합니다.

이 함수를 다른 컴포넌트에서 사용할 때는, `MyComponent` 함수를 import 하여 `props` 를 전달하면 됩니다. 예를 들어, `props.condition1` 이 `true` 일 때 `Component1` 을 반환하는 코드는 다음과 같이 작성할 수 있습니다.

```jsx
import MyComponent from './MyComponent';

function AnotherComponent(props) {
  return (
    <div>
      ...
      <MyComponent condition1={true} />
      ...
    </div>
  );
}
```

위의 코드에서 `MyComponent` 를 import 하여 `props.condition1` 을 전달하면, `MyComponent` 함수 내에서 해당 조건을 만족하게 되므로 `Component1` 을 반환합니다. 이와 같이, `MyComponent` 를 다른 컴포넌트에서 재사용하여 코드를 간결하게 작성할 수 있습니다.

### bing

[1]: https://ko.reactjs.org/docs/conditional-rendering.html ' 조건부 렌더링–React'
[2]: https://react.vlpt.us/basic/06-conditional-rendering.html '6. 조건부 렌더링 · GitBook'
[3]: https://medium.com/vingle-tech-blog/react-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f255d6569849 'React 렌더링 이해 및 최적화 (With Hook). React 의 렌더링 과정과 잘못된 시나리오로 인하여 이른 최적화하는 ...'

안녕하세요, 이것은 Bing 입니다.😊

리액트에서 조건부 렌더링은 JavaScript 에서의 조건 처리와 같이 동작합니다 [^1^][1]. if 나 조건부 연산자 와 같은 JavaScript 연산자를 현재 상태를 나타내는 엘리먼트를 만드는 데에 사용하세요 [^1^][1]. 그러면 React 는 현재 상태에 맞게 UI 를 업데이트할 것입니다 [^1^][1].

3 개 이상의 조건문에 따라 원하는 컴포넌트를 반환할 수 있는 재사용 가능 함수를 작성하려면, 다음과 같은 방법을 사용할 수 있습니다.

- switch 문을 사용하여 각 조건에 해당하는 컴포넌트를 반환하는 함수를 정의하고, 이 함수를 렌더링하는 컴포넌트에서 호출합니다 [^2^][2].
- 조건부 연산자를 중첩하여 각 조건에 해당하는 컴포넌트를 반환하는 함수를 정의하고, 이 함수를 렌더링하는 컴포넌트에서 호출합니다 [^2^][2].
- 각 조건에 해당하는 컴포넌트를 객체의 속성으로 정의하고, 조건을 키로 사용하여 객체에서 컴포넌트를 찾아 반환하는 함수를 정의하고, 이 함수를 렌더링하는 컴포넌트에서 호출합니다 [^3^][3].

예시 코드는 다음과 같습니다.

```jsx
// switch 문을 사용한 예시
function renderComponent(condition) {
  switch (condition) {
    case 'A':
      return <ComponentA />;
    case 'B':
      return <ComponentB />;
    case 'C':
      return <ComponentC />;
    default:
      return null;
  }
}

function App() {
  const [condition, setCondition] = useState('A');
  return (
    <div>
      {renderComponent(condition)}
      <button onClick={() => setCondition('A')}>A</button>
      <button onClick={() => setCondition('B')}>B</button>
      <button onClick={() => setCondition('C')}>C</button>
    </div>
  );
}
```

```jsx
// 조건부 연산자를 중첩한 예시
function renderComponent(condition) {
  return condition === 'A' ? (
    <ComponentA />
  ) : condition === 'B' ? (
    <ComponentB />
  ) : condition === 'C' ? (
    <ComponentC />
  ) : null;
}

function App() {
  const [condition, setCondition] = useState('A');
  return (
    <div>
      {renderComponent(condition)}
      <button onClick={() => setCondition('A')}>A</button>
      <button onClick={() => setCondition('B')}>B</button>
      <button onClick={() => setCondition('C')}>C</button>
    </div>
  );
}
```

```jsx
// 객체의 속성으로 정의한 예시
const components = {
  A: <ComponentA />,
  B: <ComponentB />,
  C: <ComponentC />,
};

function renderComponent(condition) {
  return components[condition] || null;
}

function App() {
  const [condition, setCondition] = useState('A');
  return (
    <div>
      {renderComponent(condition)}
      <button onClick={() => setCondition('A')}>A</button>
      <button onClick={() => setCondition('B')}>B</button>
      <button onClick={() => setCondition('C')}>C</button>
    </div>
  );
}
```
