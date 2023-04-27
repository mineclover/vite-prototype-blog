---
sidebar_position: 5
date: 2023-03-17
modified: 2023-04-27
---

## 소개

react-hook-form 에 장점은 폼 관리 모듈들도 있다라는 것일 것일까?

[useForm - FormState | React Hook Form - Simple React forms validation](https://react-hook-form.com/api/useform/formstate/)
여기서 메소드 명세서를 볼 수 있다

중복 방지를 위해
isSubmitting 은 제출중일 때 전송이 중복되지 않도록 하는 기능인데
어떻게 제출중임을 인지하는 것인지 의문이 들었다

예상하기로 "react-hook-form issubmitting 가 활성화되고 유지되는 기준 " 이 있을 것으로 예상하였고

[React Hook Form - Submitting (Loading) Spinner Example | Jason Watmore's Blog](https://jasonwatmore.com/post/2021/09/12/react-hook-form-submitting-loading-spinner-example)

확인 결과 내부 콜백에서 promise 를 반환해야하는 것을 확인할 수 있었다
