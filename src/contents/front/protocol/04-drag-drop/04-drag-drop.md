---
date: 2023-03-17
modified: 2023-04-24
---

## 소개

드래그 드롭을 좀 더 모듈화 하고자 한다
서버는 Test-server 확인하기

### 참고

[자바스크립트: 파일을 특정 영역으로 드래그 앤 드롭하기 (라이브러리 없이) - BGSMM](http://yoonbumtae.com/?p=3225)
[Javascript Drag&Drop(파일 끌어다 놓기) 방식으로 파일 업로드 구현하기](https://devlifetestcase.tistory.com/57)
[파일 Drag and Drop 기능을 구현하자!](https://velog.io/@chchaeun/%ED%8C%8C%EC%9D%BC-%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%B2%A8%EB%B6%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)

## 적용

### 드래그 드롭 관련만 우선

1. 호버 했을 때 적용된 이미지 미리보기
2. 드롭했을 때 이미지 미리보기 만들기
	 1. 컴포넌트로 만들어서 복제 쉽게 하기
3. 단일 파일 선택되게 하기

### 기타 등등

1. 용량 계산 모듈
2. 파일 구분하기
3. 파일 전송 프로그래시브 바
4. 각각의 전송 상태 제어 가능하게하기
5. 다중 파일 전송 프로그래시브 바

## input 의 메서드 보기

인풋 type 파일은 value 를 기반으로 작동하지만
file 들은 files 로 작동한다 그런데 , 특이하게도 files 에 값이 있지만 조작하려하면 조작은 안됬다
그런데 값을 초기화하는 건 또 `inputRef.current.value = '';` 이런식으로 value 에 간섭한다

그래서 실질적으로 파일관리할 때 , react-hook-form 처럼 별도의 객체에서 값을 관리하거나
onChange 발생 시 input 으로 받아온 걸 가져와서 저장하는 방식을 권장하고 싶다

그러니까.... input files 를 그대로 사용할 수는 있지만
제어하는 것은 좀 어렵다
그래서 formData 로 파일들을 관리하는 것 같기도하다

Files 에 들어가는 File 은 Blob 형식으로 작성된 객체로 볼 수 있다

inputRef.current 로 보면 html 태그만 보여줘버리기 때문에

inputRef 를 콘솔 찍어서 보여줬다
뭐 inputRef.current 에서 파일 가져와서
config.dir 과 config.assert 를 해봤는데 효과없었다

inputRef.current.files 하면 내가 원한 파일리스트가 나온다

### FileList 이해하기

일단 유사 Array 즉 ArrayLike 다
이런 객체는
`Array.from(e.dataTransfer.files)` 써서 일반 어레이처럼 만들 수 있고
Array 로 만들어서 filter 등의 메서드를 쓸 수 있게 한다

### input 객체를 숨기는 이유

보면 몃몃 예제는 input 객체를 아예 안쓰거나 숨긴다
일단 이벤트를 통해 파일을 가져올 수 있고
파일을 수정이 용이한 생성된 객체를 통해 관리하며
일반적인 files 에서의 FileList 의 사용성은 거의 유사 읽기전용이기 때문에
File[] 객체를 따로 만들어서 저장해 사용한다

input.flies 의 조작이 용이하지 않기 때문에 그냥 지워놓고 , 파일 가져오기 동작만 수행시키고
files 에서 가져온 파일만 복사해서 생성한 File[] 에 넣는다

input 의 버튼 + 텍스트의 형태가 다른 것들과 호환이 안되서 오해를 불러오는 이유로 그렇게 쓰는 것 같다

#### label 사용하기

라벨쓰려니까 Lint 오류가 떳다
[eslint-plugin-jsx-a11y/label-has-associated-control.md at main · jsx-eslint/eslint-plugin-jsx-a11y · GitHub](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md)

라벨로 지칭할 것을 완전히 감싸버리라는 것이였다
참고로 for 를 붙이게 되면 작성한 for 에 id 를 찾게되고 감싸는 것도 소용 없다
for 는 아이디를 찾는다

```
<label>
  Surname
  <input type="text" />
</label>
```

## 드래그 드롭에 적용하기

[File - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/File)
mdn 에서 보면 공식적으로 드래그 드롭 시에
DataTransfer 에서 드롭한 파일의 값을 얻을 수 있다 있다

아무튼 Files 는 File 의 리스트고 File 은 blob 로 된 것이며
formData 형식은 blob 를 사용한다

파일은 특이한 구조를 가지고 있는데
구조 내에 읽을 수 있는 영역이 있긴 하지만 읽을 수 없는 부분이 더 많고
읽을 수 없는 부분에 파일 데이터가 저장되어있다

[Blob - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
그리고 그런 blob 은 http 통신 방식으로 데이터를 래핑한다
여기서 string 이 new blob() 으로 들어가는 이유다

```js
const obj = { hello: 'world' };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: 'application/json',
});
```

### 번외 stringify args

[JSON.stringify() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
JSON.stringify(obj, null, 2)

### dataTransfer 이해하기

dataTransfer 에도 files 가 있고 이 객체는 fileList 다
이 객체에는 0~n 의 number index 와 length 가 있는데

드래그 한 상태에서의 값을 가져오는 객체기 때문에 드래그가 끝나면 데이터가 전부 사라져서
콘솔로그를 찍어서 객체를 열게 되면 빈 files 밖에 볼 수 없으나
콘솔로그로 상수 값을 찍어보면 분명히 드래그할 때에는 데이터가 있었음을 알 수 있다

`e.dataTransfer.files.length`

## dragEvent 분리하기

drag 관련 이벤트들에 이벤트 트리거를 분리하였다
react 호환이고 , react-hook-form , `{...register('test')}` 쓰는 것처럼 만들어봤다

### 구성

이벤트
"dragenter" : 마우스가 영역에 진입한 시점
"dragleave" : 마우스가 영역에서 나간 시점
"dragover" : 마우스가 영역 위에 있을 때
"drop" : 마우스에서 선택된 무언가가 이동해 떨어졌을 때

그리고 파일 드래그 드롭처럼 뭔가가 선택된 상태에서 이벤트가 발생할 수 있는 것들에서는
파일 정보가 `e.dataTransfer.files` 를 통해 fileList 가 전달된다

#### 참고해서 만든 코드

```tsx
import { SetStateAction } from 'react';

const dragEvent = (
  isDraggingSetter: (arg0: boolean) => void,
  cb: (list: SetStateAction<File>) => void
) => {
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    isDraggingSetter(true);
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    isDraggingSetter(false);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      isDraggingSetter(true);
    }
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // 파일 타입 체크
    const files = Array.from(e.dataTransfer.files).filter((file) => {
      // image/jpeg, image/png, image/gif, application/pdf
      if (file.type !== 'application/pdf') {
        alert('pdf 파일만 업로드 가능합니다');
        return false;
      }
      return true;
    });
    // 파일 하나만 업로드하도록 제한
    if (files.length > 1) {
      alert(`한 개 이상의 파일이 선택되어
"${files[0].name}"
파일만 업로드 되었습니다`);
    } else {
      alert(`pdf 파일이 선택되지 않았습니다`);
    }

    cb(e.dataTransfer.files[0]);
    isDraggingSetter(false);
  };
  return { onDragEnter, onDragLeave, onDragOver, onDrop };
};

export default dragEvent;
```

사실 이코드는 조금 불안정한 상태다 > 직관적이지 못하다
cb 은 외부에 선언되어있어서 무슨 함수인지 직관적이지 않다 ( 여기선 stateSetter 를 내장하고 있고 files 를 args 로 받는 함수였다 )

### 특정 파일을 특정 조건으로 구분했다

Array 로 만든 다음 filter 를 통해서 원하는 파일만 남겼고
파일이라는 객체에서 읽을 수 있는 부분에 있는 type 이라는 값을 통해 구분하고

length 를 통해 들어온 값을 분석했다

### 문제점

현재 코드는 여러 파일들이 들어왔을 때마다 alert 를 생성한다
그래서 실제로 만들게 된다면
삭제된 파일의 목록을 구성한 후 한번에 표시하고, 유아이를 좀 더 다듬는 것이 좋을 것 같다

예를 들어서
선택할 PDF 를 업로드해주세요

- ! .pdf 를 업로드 해주세요 , 업로드한 파일 : 이름.zip
	이런 느낌으로

전송할 PDF : 이름.PDF

제목 : 전송에 성공했습니다
내용 : 전송된 PDF

이런 느낌으로
하나의 UI 에 필요한 메세지를 부여해서 관리하는 느낌으로
뭐.. 파일단위로 쪼갠다음 관리하면서 메세지 넣어도 괜찮을 것 같고

나도 내가 봤던 서비스들이 있으니까...
그런 레퍼런스와 새로운 레퍼런스로 만들면 좋을 듯 하다
