---
date: 2023-03-15
modified: 2023-04-24
---

## 소개

파일을 전송하기 위해 자료를 찾아봤다
키워드 : `http 로 파일 전송하기`
로 찾아보니 multipart/form-data 형식으로 보내는 방식이 가장 많이 사용된다고 한다
가지고 있는 노드책에서도 그렇게 이야기하더라

busboy, multiparty, formidable,multer 가 있다고 한다

나는 multipart/form-data 를 사용하기로 했다

- 작업 중 multer 를 알게 되어 쓰게 됬다
	아 진짜 백앤드 어렵다는 걸 알 수 있었다...

사실 네이버 OCR 을 받기 위한 기능을 구현하고 있었는데
백엔드에서 pdf 받는 부분은 로직을 너무 늦게 보여줘가지고 그냥 내가 만들어서 쓰고 있음

이제 pdf 를 네이버에다가 보내주고 싶으면
그 페이지를 쪼개는 로직을 통해서 페이지를 나눈 다음에 그 페이지를 네이버에 전송하거나 아니면
일단은 네이버에 전송해보고 거기서 요청하는 거대로 동작을 해주면 될 것 같아

### 일단 찾아둔 pdf 수정 라이브러리 설명한 링크

nodejs get pdf page count
[How to Extract Pages from a PDF and Render Them with JavaScript](https://www.freecodecamp.org/news/extract-pdf-pages-render-with-javascript/)
[Copy, Add, Delete, Rearrange PDF pages: Node.js Library | Apryse](https://docs.apryse.com/documentation/nodejs/guides/features/basics/pages/)

## node 세팅하기

잘 모르겠어서 일단 프론트 부터 세팅하기로 했다

### 노드 세팅

더 복잡한 코드도
일단 간단한 아래코드를 썻는데

```js
app.post('/pdf', (req, res) => {
  console.log(req);
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: err.message }).end();
    } else {
      console.log('files', files);
      console.log('fields', fields);
      res.status(200).send({ message: 'ok' }).end();
    }
  });
});
```

좀 더 자세한 기능들이 있다
[node.js에서 multipary와 multer를 이용한 파일 업로드 하기](https://bcho.tistory.com/1078)

아직 파일로 변환해서 저장하는 단계를 진행하지 못하였음

## 프론트 세팅하기

일단 인풋 폼부터 시작했다
[HTTP multipart/form-data 란?](https://velog.io/@shin6403/HTTP-multipartform-data-%EB%9E%80)

form 관리를 위해서 react-hook-form 을 열어봤다
별 다른 제어 방식은 없었고... 그냥 쌩 react-hook-form 을 사용함

찾는데 자료가 잘 안나왔어서 좀 해맸다

## 결과적으로 알게 된 것

header 에 적는 Accept 는 클라이언트가 인식할 수 있는 값을 표시하는 것이다
그리고 'Content-Type' 은 전송하는 컨텐츠의 형식을 적는 것으로 필수 데이터다

그리고 multipart/form-data 는 `enctype: 'multipart/form-data',` 을 추가로 요구한다

이러한 에러 구문은 프론트와 백에 같이 전달 되는데

```
res.status(500).send({ error: err.message }).end()
```

프론트에서는 response 메세지에 포함되어 들어온다

## axios 전송 방식을 주의깊게 살펴볼 것

get 과 post 가 다르다

```
axios.get(url[, config])
```

여기서 config 에 data 를 넣어도 되지만
data 에는 axios config 를 넣을 수 없다

```
axios.post(url[, data[, config]])
```

axios 의 인터셉터를 통해서
progressEvent 를 넣으려하다가 알게 됬다

```ts
onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (progressEvent?.total === undefined) return;
        const percentage = (progressEvent.loaded * 100) / progressEvent.total;
        console.log('🚀 ~ file: PdfSend.tsx:36 ~ onSubmit ~ progressEvent:', progressEvent);
        console.log('percentage', percentage);
      },
```

아무튼 여기에 네트워크 지연까지 걸어서 로딩을 확인할 수 있었다

## 계속 안되던 문제... 결론은

이리저리 질문도 하고 찾아보던 중 알게 되었따
`multipart/form-data` 이 FormData 에 들어간다는 것을...
form submit 에서 바로 post 될 때 값이 form-data 고

> feat. 안재원 강사님

```ts
let formData = new FormData();
const config = {
  header: { 'content-type': 'multipart/form-data' },
};
formData.append('file', files[0]);

axios.post('/api/users/uploadimage', formData, config);
```

폼 데이터에 넣어서 보내야하는 것이였다
그러니까 난 react-hook-form 을 쓰기 때문에 form submit 동작에서 얻어지는 데이터가
따로 관리된 state 의 일반 객체임으로
데이터 폼과는 다른 것이였다

그런데 FormData 에는 blob 또는 string 만 들어가지는 것으로 보아
string 이 아닌 것은 다 blob 으로 만들어야할 것 같음

json 으로 처리되는 것들은 data 에 다른 값으로 넣어서 보낼 수 있지 않을가 싶다
여기서 test 는 formData 에 들어가는 키 값이다

```ts
const formData = new FormData();
formData.append('test', data.test[0] as Blob);
```

## 최종 코드 - React

```tsx
export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'multipart/form-data',
    enctype: 'multipart/form-data',
  },
});
...
const onSubmit = async (data: any) => {
    const formData = new FormData();
    controllerRef.current = new AbortController();

    formData.append('frm', data.test[0] as Blob, encodeURIComponent(data.test[0].name));

    const result = await instance
      .post('upload', formData, {
        signal: controllerRef.current.signal,
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (progressEvent?.total === undefined) return;
          const percentage = (progressEvent.loaded * 100) / progressEvent.total;
          setLoad(percentage);
        },
      })
      .catch((err) => {
        return err;
      });
    console.log('result', result);
    return result;
  };
```

`.catch` 부분이 굉장히 중요한데
없으면 전송 실패를 감지하지 못하고 result 에 값이 들어가지 않는다

## 그 외

만약 업로드한 사진을 다뤄야한다면 이 방식을 사용하자
[react-hook-form 파일 다루기](https://velog.io/@alsghk9701/react-hook-form-%ED%8C%8C%EC%9D%BC-%EB%8B%A4%EB%A3%A8%EA%B8%B0)

이전 프로젝트에서 위 같은 기능을 구현하기 위해서
이미지를 base64 로 만든 다음 화면에 깔아버리는 짓을 했었는데
그렇게 하는 것 보단 blob ? url 로 만들어서 올리는 것이 훨씬 깔끔해보인다

## 한글로 보내기

파일을 서버에서 받아보는데.. 파일이 아스키코드 인코딩되있어서 보기 안좋았다

" 브라우저 자바스크립트에서 한글인 파일을 HTTP 을 서버에 전송할 때 utf 로 설정하는 방법 " 을 찾아봤다

### 브라우저

formData 에 넣을 때 파일 이름을 인코딩하고

```tsx
formData.append('file', file, encodeURIComponent(file.name));
```

### 서버

서버에선 파일 이름을 디코딩하는 방향으로 했더니 됬다

```js
basename = decodeURIComponent(basename);
```

[05-useForm-State](../../react-hook-form/05-useForm-State/05-useForm-State.md)
isSubmitting 가 옳게 나오게 하려면
작업이 끝났음을 표시해야했더라
그래서 아래코드를 추가해줬다

```js
const data = {
  message: 'success',
  filename: request.file.filename,
};
response.status(200).json(data);
```

json 은 end 를 포함해서 안써도 된다
통신을 이 끝났음을 전송하는 작업도 필요했는데
노드 쪽에서 콘솔로그만 찍으니 결과 값이 돌아오지 않아 로딩이 안끝나는 문제를 발견하여 알게 되었음

#### 서버 에러 코드

200 은 처리했는데 에러는 처리가 안됬었다 그래서
검색해서 가져왔다

```JS
app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.status(400).send('에러: 파일 업로드 중 오류가 발생했습니다.')
  } else if (err) {
    res.status(500).send('서버 오류: ' + err)
  } else {
    next()
  }
})
```
