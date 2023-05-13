---
date: 2023-05-06
modified: 2023-05-14
---

css 만 선언하고 재사용하는 방식이다

## styled 스타일 모듈화하기

reset 적용하는 방식을 보니 저런게 아주 어려운 기능은 아닐거같았음  
실제로 그냥 템플릿 리터럴 객체 ( `\n` 처리를 자동으로 해줘서 씀 )  
에 넣어서해도 되고 아래 예시처럼 쓴다음

```ts
export const mainLargeButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
```

아래 예시 처럼 적용하면 적용되더라 꽤 유용했다  
css`` 를 사용하는 이유는 그렇게 쓰면 색이 들어가서 보기 더 좋아서다 ㅎ..

```ts
const NextButton = styled.button`
  ${mainLargeButton}
`;
```

그럼 `const = css~` 에 css 파일에 있는 걸 넣는 건 가능하려나 궁금해진다

이 방식이 좋은 이유는 story book 같은 것에서 버튼들의 모든 간격을 조절할 때 값을 전체 공유할 수 있다
