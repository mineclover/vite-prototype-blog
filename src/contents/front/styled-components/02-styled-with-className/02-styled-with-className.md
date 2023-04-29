---
date: 2023-04-07
modified: 2023-04-29
---

## 소개

이벤트 발생 시 컴포넌트에 클래스를 부여하고 동시에 스타일로 부여하는 코드를 짰다
그런데 스타일을 부여하는 방식은 state 를 써가지고 상태값을 컴포넌트에 부여하는 방식이었는데
이 방식이 컴포넌트 자체를 변화시키기 때문에 이벤트 가 발생한 컴포넌트의 클래스를 넣는 방식은 적응이 되지 않았다

### 문제의 코드

```js
isDraggingSetter(true);
e.currentTarget.classList.add('dragging');
```

위에는 setter 고 아래는 클래스 인데 setter 가 들어가면서 컴포넌트가 바뀌고
커서 타겟은 바뀌기 전에 컴포넌트에게 클래스를 넣는다

그래서 클래스 add 가 씹힌다

맞는 방법은 className 에 붙이는거다
많아지면...
함수로 상태들 유무에 따라서 배열에 넣고 join 공백으로 한줄로 만들어서 넣기

```
className={drag ? 'dragging' : ''}
```

## 애니메이션 부여

이런 방식으로 특정 애니메이션을 넣고자할 때
background 를 양쪽 컴포넌트에 넣지 않으면 갑자기 사라지는 것 같이 되버리니 주의

애니메이션은 클래스 전환이 일어나도 트랜지션이 먹음

```scss
const PDFInputLoadBox = styled.div<DragBoxProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 25px;
  width: 100%;

  background: #ffffff;
  border: 2px dashed ${(props) => (props.drag ? COLORS.Main : COLORS.Line_200)};
  border-radius: 20px;

  ::after {
    content: '';
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: ${COLORS.MainBG};
    transition: opacity 0.25s ease-in-out;
  }
  &.dragging::after {
    content: '업로드할 파일을 여기에 끌어다 놓으세요.';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.05em;
    color: ${COLORS.Main};
    width: 100%;
    height: 100%;
    background: ${COLORS.MainBG};
    border-radius: 20px;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }
`;
```
