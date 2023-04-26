---
date: 2023-04-04
modified: 2023-04-24
---
＃특화

## 소개

컨텐스트를 정말 잘 활용한 코드 패턴을 보게되어 리뷰하게 됨

[Render more than string | React-Toastify](https://fkhadra.github.io/react-toastify/render-what-you-want)


Context 는 리액트 컴포넌트 외부에서도 선언할 수 있고

useState 가 사용된 함수는 조건부 렌더링이 되는 함수가 된다
useState 값이 들어있는 Context.Provider 도 필요할 떄 렌더링 될 것임
해당 변수에 {...props} 는 필수로 들어가야하는 모양임 Children 들을 아래로 전달해줘야하기 때문이지..

```jsx
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const CountContext = React.createContext(null);

function useCount() {
  const context = React.useContext(CountContext);
  return context;
}

function CountProvider(props) {
  const [count, setCount] = React.useState(0);

  return <CountContext.Provider value={[count, setCount]} {...props} />;
}

function Counter() {
  const [count, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);

  return <Button onClick={increment}>Increment {count}</Button>;
}

function CountDisplay() {
  const [count] = useCount();
  return <div>The current counter count is {count}</div>;
}

export const ContextExample = () => {
  const displayToast = () => {
    toast(<CountDisplay />);
  };

  return (
    <CountProvider>
      <Container>
        <Counter />
        <Button onClick={displayToast}>
          Display toast
        </Button>
      </Container>
      <ToastContainer autoClose={false} draggable={false} />
    </CountProvider>
  );
};
```
