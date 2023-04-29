---
sidebar_position: 5
date: 2023-03-31
modified: 2023-04-29
---

## 제이쿼리 get 구현 필요성

제이쿼리의 get 은 fetch get 으로 데이터를 가져오는 기능을 축약한 메서드고 콜백으로 데이터를 전달해서 사용할 수 있게 한다

제이쿼리를 쓰지 않는다고 가정하고
get 처럼 동작하는 모듈이 있어야겠다 싶었다
하는 김에 axios 도 붙이기로 했다

복사해서 사용하기 좋은 원형을 개발하고자 한다
영감을 얻은 원형

```js
$.get(ROOT_PATH + '/data/asset/data/nutrients.json', function (originData) {
  data = normalizeData(originData).slice(0, 1000);
```

만들 땐 솔직히 막연하게 생각했으나
생각보다 거창하게 생각했지만 거창하지 않았고 함수에 cb 을 넣을 수 있는 이유에 대해 알 수 있었다

그냥 너무 쉽게 됬다 , 너무 쉬었다
// 실행 구간

```tsx
const [value, setValue] = useState('');
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  urlGet('https://jsonplaceholder.typicode.com/todos/2', (data) => {});
};
```

// 모듈 구간

```tsx
type Cb = (data: any) => void;

const urlGet = async (url: string, cb: Cb) => {
  const result = await fetch(url).then((response) => {
    return response.json();
  });
  cb(result);
};

export default urlGet;
```

그리고 새로운 사실을 다시금 확실하게 인지하게 되었다

1. fetch 는 json 이든 .text() 든 .blob() 이든 응답 온 객체의 파싱이 1 회 필요하다 ( json 을 하면 오브젝트 객체가 산다 )
2. 다른 서버에 저장된 파일은 get 으로 가져올 수 없다 ( ex: [https://echarts.apache.org/examples/data/asset/data/nutrients.json](https://echarts.apache.org/examples/data/asset/data/nutrients.json))
3. fetch 기본 값은 get 메서드
