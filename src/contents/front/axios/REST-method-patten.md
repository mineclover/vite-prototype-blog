---
date: 2023-04-04
modified: 2023-04-24
---

[요청 Config | Axios Docs](https://axios-http.com/kr/docs/req_config)

## GET

get 방식으로 할 때는 URL URLSearchParams 쿼리를 쓴다

이걸 axios 에서는 config 에서 params 에 담아 렌더링 한다



> [!NOTE] axios 번역체
> `params` 은 요청과 함께 전송되는 URL 파라미터입니다.
> 반드시 일반 객체나 URLSearchParams 객체여야 합니다.
> 참고: null 이나 undefined 는 URL 에 렌더링되지 않습니다.

```
export const getKeyword = async (page, keyword) => {
  const sending = {
    pageno: page,
    keyword: keyword,
  };
  return instance.get(`tourlist/keyword`, { params: { ...sending } });
};
```

## POST

post 방식은 body 에 넣어서 값을 보내곤 한다

### type="file"

jpg , png , pdf 같은 걸 보낼 때는 form-data 를 쓴다
post 중에서도 header 에 `Content-Type : "multipart/form-data"` 가 들어갈 경우
보내는 data 는 body 가 아니라 formData 를 그대로 쓴다
formData 변수의 이름은 abc 여도 동작한다

```js
const formData = new FormData();
    instance.post('upload', formData, config);
```

[CORS 에러였던 API 연결 문제](../../work/PM-project-manager/etc-트러블슈팅/CORS%20에러였던%20API%20연결%20문제.md)
