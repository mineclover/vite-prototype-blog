---
date: 2023-05-07
modified: 2023-05-07
---

서버 없이 파일을 저장해야한다

파일을 저장해서 바로 접목할 수 있겟끔하는 목적

이걸로 하고자 하는 것은 객체 값의 실시간 수정을 위한 전략이다
object 를 json.stringify 하면 json 파일이지 않는가

이걸 다운로드해서 파일에 넣으면 그게 웹 사이트로 하는 오프라인 작업일 것이다

[서버 없이 자바스크립트로 파일 생성해서 셀프 다운로드 하기](https://blogpack.tistory.com/1116)

```ts
//Download HTML Template Source
export default function downloadTemplate(filename: string, text: object) {
  const element = document.createElement('a');

  const json = JSON.stringify(text);

  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(json)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
```

```TS
objectDown('search.json', data);
```

받아보니 한번에 1000 개만 보내져서 supabase limit 을 수정해야 했다

## supabase limit option

supabase Client 에서 limit 조절하는 방법

> 예를 들어, 다음 코드는 `users` 테이블에서 10 개의 행만 반환합니다.

```js
const { data, error } = await supabase.from('users').select('*').limit(10);
```

`LIMIT` 절은 `OFFSET` 절과 함께 사용하여 결과 집합의 일부를 반환할 수도 있습니다. 예를 들어, 다음 코드는 `users` 테이블에서 10 번째 행부터 5 개의 행을 반환합니다.
[Supabase Javascript Client](https://supabase.com/docs/reference/javascript/limit)
리미트는 있지만 offset 은 없다

```tsx
.limit(1000)
.range(2000, 4000);  // 작렬히 실패했다
.range(1000, 2000);  // 은 성공 했다
```

이 range 는 지금 요청하는 유저가 가져올 수 있는 테이블에서의 range 이다

- [ ] `data.length === 0` 이 될 때 까지 가져오고 병합시키는 것도 필요할 듯

테스트 코드

```tsx
useEffect(() => {
  async function getData() {
    const { data, error } = await supabase
      .from('search')
      .select('id, index')
      .range(0, 1000);

    if (error) {
      alert('에러가 발생했습니다');
      return;
    }
    // setData(data);
    // objectDown('search.json', data);
  }
  // getData();
}, []);
```
