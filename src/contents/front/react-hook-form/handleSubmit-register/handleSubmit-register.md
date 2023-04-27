---
sidebar_position: 1
date: 2023-03-03
modified: 2023-04-27
---

## handleSubmit, register 특징

html 에 내장된 동작을 작동하지 않도록 하기 위한 [Event.preventDefault()](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault) 를 내장하고 있다
작업에 필요한 반복되는 로직은 숨겨뒀고
자주 수정하는 부분만 아규먼트로 입력하게 해서 사용하게 함

### register

register 의 경우 onChange, onBlur 등을 키 값으로 하고 콜백을 value 로 한 object 나 html 속성들을 리턴해서 input 에 적용한다

기본적인 코드는 아래와 같다

- 설명할 때에는 RHF(React-Hook-Form) 으로 축약해서 사용함
  [Get Started | React Hook Form - Simple React forms validation](https://react-hook-form.com/get-started/#Quickstart)

```jsx
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // useForm 혹스를 실행함으로써 훅스 state를 받는다 setter와 getter 가 같이 들어온다
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));
  // 들어온 값을 확인 할 수 있다 input이 변할 때마다 register 가 useForm mode에 따라 반응한다

  return (
    /* handleSubmit에 실행시킬 이벤트를 전달하는 게 중요하다 , RHF(React-Hook-Form) 에서 유효성 검사를 통과해야 onSubmit을 실행한다 */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register()로 input에 사용되는 각종 콜백들을 선언시킨다 함수라는 것에 유의 (string , {...options} )=>object[] 다 */}
      <input defaultValue="test" {...register('example')} />

      <input {...register('exampleRequired', { required: true })} />
      {/* error들은 errors에  register에서 사용한 string을 이름으로 저장된다 , 오류가 없으면 빈 객체가 된다 */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
```

## form 감싸는 방법

제어해야 할 input 이나 전송 상황을 트리거 해주는 submit 타입의 버튼을 감싸기만 하면 된다

## 사용된 개념

setter, getter , Closure, destructuring , javascript 에서의 object
