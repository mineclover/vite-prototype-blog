---
date: 2023-04-03
modified: 2023-04-27
---

스웨거에서 인터페이스를 제공해줬는데
명세서가 부실하다고 생각했던 경우였다

근데 그냥 내가 사용법을 잘 몰었던 것임
아 물론 안내도 좀 아쉽긴 했다
![](file/무제%20파일.png)

```
body {
MultipartFile : formData
}
```

인데 formData 에는 여러 값이 들어가기도 한다
`formData.append("file01",files[1]);`
형식으로 요청하는 상태라면 그냥 `axios.post('url',formData)` 라고 할 수도 없는 것 아닐까
.. 그래서 나는 file01 을 multipartFile 로 해야하는지 뭔지 잘 모르겠는 상황에 오게 된다

위 코드 블럭처럼 키 값을 써줘야하는지 햇갈리게 되었다

## 추론

일단 CORS 가 해결되야 뭘 볼 수 있다

`formData.append("file",files[0]);`
도 되는 것 같다

file 의 경우 브라우저에서 FilesList 객체에 File 이 담겨 저장되며
File 은 blob 의 한 종류이다

그리고 해당객체를 직접적으로 다루기도 하지만
보통 MultiPart/form-data 라 함은 form-data 로 감싸진 데이터를 뜻하는 것 아닌가..

구체적으로 어떤 구조인지 알 수 없었다
formData 내부 key 가 또 있다보니 더욱 햇갈렸다

[🌐 FormData 사용법 & 응용 총정리 (+ fetch 전송)](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-FormData-%EC%A0%95%EB%A6%AC-fetch-api)

## 결론

`axios.post(url[,data[,config]])` 에서 data 는
무조건 body 인 것이 아니다

그리고 formData 를 보낼 때 formData 자체를 보내며
아래 형식처럼 data 위치에 formData 를 그대로 넣으면 된다

body 가 아니라 formData 가 통째로 전송되는 것
그래서 formData 를 선언하는 거 자체는 아무 이름이 나와도 상관 없다

그리고 아래 encType 옵션은 form 태그에 넣는 태그여서
`encType: "multipart/form-data"` 을 하지 않아도 된다

header 에 `Content-Type : "multipart/form-data" ` 만 있으면 된다

![](file/CORS%20에러였던%20API%20연결%20문제.png)
