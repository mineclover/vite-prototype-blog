---
date: 2023-05-07
modified: 2023-05-14
---

## 속성 정리

```tsx
// 검색 엔진
const miniSearch = new MiniSearch({
  fields: ['id'], // fields to index for full-text search
  storeFields: ['id', 'index'], // fields to return with search results
  searchOptions: {
    prefix: true,
  }, // fields to return with search results
});

// 검색할 데이터 색인
miniSearch.addAll(test);

// 검색 방법과 검색 결과
const results = miniSearch.search('가');
console.log('🚀 ~ file: InputSection.tsx:17 ~ results:', results);
```

fields : 검색할 대상 , 검색할 full text = 검색용 데이터  
storeFields : 검색 결과에 들어갈 속성 = 결과에 무조건 나오는 것

storeFields 에 작성되지 않은 건 검색 과정에서 안나옴  
무조건 안나옴  
id 라는 이름의 값은 예외인 것으로 보임

## 검색 옵션

boost : 검색 sort 우선 순위 같은 것

filter : 조건 미충족 시 결과에서 제외  
result 는 검색 된 데이터 자체를 의미  
fuzzy: 0.2 허용 범위

- 한글의 경우 받침 차이 정도 만 기대 가능  
  filter: (result) => result.category === 'fiction'

## 데이터 색인

miniSearch.addAll(test);

test 의 형태는 json 형태의 객체 배열이다  
배열 안에 객체 있고 객체에는 검색 대상이 되는 데이터들이 키 벨류 쌍으로 들어있어야한다  
sql 에서 받는 데이터 형태와 같다

[front-json-backdoor](front-json-backdoor)

미리 받아서 json 으로 저장해도 잘 된다

## 그 외

자동 추천 기능이 있는 miniSearch.autoSuggest('zen ar')

한글일 경우 받침 정도에 효용이 있는 fuzzy  
방법이 있다

## ㄱ ㄴ ㄷ 등의 초성을 포함하는 방법

가 - 깋 까지면 ㄱ으로 하기로 하면 되지... 그냥 초기에 값 받을 때 그렇게 세팅하기로 하면 된다  
그리고 검색할 때 ㄱ이 포함될 때 추천에 나오게끔

> 초성 검색은 조금 생각해보자  
> 초성 포함하면 기획이랑 비슷해지긴 하네

속성 자체에 인접 값을 넣는 것도 검색 엔진 결과가 풍부하게 해주고 fuzzy 도 검색 결과가 풍부하게 해준다

가 > ㄱ 저장 일단  
과 > ㄱ  
곽 > ㄱ 일단 여기까지만  
일단 초성만 하고

**boost 를 id 로 정해줘서 초성으로 인해서 이상한 검색은 되지 않도록 해주자**

SSR 이면 서버에서 해도 되고  
로컬스토리지에 저장해서 써도 되고 걍 새로고침할 때 써도 된다
