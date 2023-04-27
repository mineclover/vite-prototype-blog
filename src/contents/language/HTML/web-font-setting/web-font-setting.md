---
sidebar_position: 2
date: 2023-04-04
modified: 2023-04-27
---

## 소개

[2016년 구글 웹폰트 소개, 빠른 로딩 방법](http://web-atelier.tistory.com/43)
[2017 웹폰트 사용하기 (웹폰트의 모든 것) | WIT블로그](https://wit.nts-corp.com/2017/02/13/4258)
[2019년 Web Club :: Web Font - @font-face 적용 방법, 최적화 방법](https://webclub.tistory.com/261)

폰트는 웹 컨텐츠의 대부분을 차지하는 텍스트를 꾸미는 직접적인 요소
이걸 최적화하는 일은 정말 중요할 것이다

내가 생각하는 가장 좋은 최적화는
초기에 다운로드 > 로컬스토리지나 쿠키로 저장해서 사용이다
초기 접속 저장 과정에서 폰트 다운로드 중임을 표시하는 로딩을 보여주는 기능을 넣고 싶다

## 개념

기본적으로 css 는 디바이스가 가지고 있는 폰트패밀리를 가져와서 쓸 수 있다
하지만 대부분은 기본 내장 폰트가 아닌 나머지 폰트들을 굳이 설치해서 쓰지 않는 경우가 많다

그래서 접속한 대상이 웹을 이용할 동안 쓸 폰트를 다운로드 시킨다

폰트는 선언된 폰트 패밀리에 작성된 순서대로 서치된다
웹 폰트가 만약 이러한 로직 뒤에 설치된다면 우선순위에 의해서 FOUT / FOIT / FOFT 현상이 발생할 수 있다

```css
body {
  font-family: 'NanumGothic', 'NanumGothicOTF', 'Nanum Gothic',
    'Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif';
}
```

### ### FOUT / FOIT / FOFT

#### FOUT(Flash of Unstyled Text)

FOUT 란? 웹 폰트 파일이 로드되기 전 까지 기본서체가 노출되다가 웹 폰트 로드가 완료되면 웹폰트로 바뀌면서 깜빡이는 현상 입니다. FOUC(Flash of Unstyled Content) 라고 불리기도 합니다. IE 브라우저에서 발생합니다.

#### FOIT(Flash of Invisible Text)

FOIT 란? 웹 폰트 파일이 로드되기 전 까지 웹 페이지를 로드하지 않고 웹폰트 로드가 완료되면 웹 페이지를 로드하기 때문에 로드가 완료되기 전 까지 텍스트가 안보이는 현상 입니다. IE 브라우저를 제외한 나머지 브라우저 (Chrome, Safari 등) 에서 발생합니다.

#### FOFT(Flash of Faux Text)

FOFT 란? 웹 폰트 파일에 font-weight, font-style 과 관련된 서체가 있을 시 로드 전 브라우저에서 임의로 서체의 굵기와 스타일을 생성하여 노출하고 웹폰트 로드가 완료되면 웹 폰트로 바뀌는 현상입니다. 이는 스크립트로 만들어진 현상으로 시스템글꼴 → 웹 폰트 Regular → 웹 폰트 Bold 순으로 바뀝니다.

---

## Google Webfont Loader

장점은 html 에 로딩 상태가 클래스로 부여된다고 한다

> 2017 년 자료에 나온다

wf-loading: 1 개 이상 폰트가 로딩 중
wf-active: 1 개 이상 폰트 사용 가능
wf-inactive: 모든 폰트 사용 불가능
등등

### Google Webfont Loader 가 자주 언급된다

> [!NOTE] 빠르게 로드하는 방법
> 구글 임포트 코드를 `HEAD` 태그의 가장 첫번째 - CSS 파일보다 더 앞 -
> 에 위치시킨다. 이렇게 하면 CSS 보다 먼저 폰트를 로드한다.

구글 webfont Loader 를 통한 동기식 로딩이 괜찮다는 생각이 들엇다

그냥 아래 방식처럼 바로 가져오는 것도 된다

## CSS 에서 `@import` 를 사용하는 것은 아주 추천하지 않음

일단 CSS 가 로딩되고 나서 또 import 를 실행하기 때문에 굉장히 로딩 속도가 느려지게 된다

그냥 html head 최상단에서 임포트하는 방식도 좋다고 한다
그러나 이것도 필요 없을때도 매번 접속하기도 하니까
조금

## link preload 사용

매우 직관적인 방법이다

### preload

페이지가 로드 되기전에 먼저 실행되는 것으로
설정된 네트워크 우선순위로 정해지는 순서보다 먼저 불러올 수 있도록 하는 기능이라고 한다

rel 의 종류에 따라 로딩 우선순위가 결정된다
스크립트도 포함된다

`Chrome Resource Priorities and Scheduling` 이란 키워드를 가지고 있다
그래서 preload 가 될 경우 as 가 필수가 된다
as 속성을 넣어주는 값으로 우선순위가 달라진다

[Chrome Resource Priorities and Scheduling - Google Docs](https://docs.google.com/document/d/1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc/edit#heading=h.7ghit56c64ge)
보면 preload 가 오히려 낮은 것을 볼 수있는데
로딩 순서로 볼 때 preload 들이 최우선 로딩되는 것은 맞는 것 같고
그 preload 되는 요소들 간에 우선순위 인것이 아닐까 하는 예상을 해본다만.. preload 는 font 밖에 없긴 하다

딱 봤을 떄 font 의 우선순위는 굉장히 높다
하지만 link 를 보면 font 를 바로 가져오는 경우가 거의 없고 style 내에서 임포트 구문이 실행된다
그래서 rel 도 style 로 되어있다

### 일반적인 적용 코드

```
<link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
```

[Google Fonts API 시작하기  |  Google Developers](https://developers.google.com/fonts/docs/getting_started?hl=ko)

그래서 이 link 태그를 쓸 때 추천되는 방식은 아래 방식이다
아래 방식이 가장 빠르다고 볼 수 있다

### preload font

```
<link rel="preload" href="/path/to/sourceserif-regular.woff2" as="font" type="font/woff2" crossorigin>
```

위 방식대로 하는 것인데 `type="font/woff2"` 은 생략 가능한 것인지 사용하지 않는 예제도 있었다

## 참고

[웹 글꼴을 미리 로드하여 로딩 속도 개선](https://web.dev/codelab-preload-web-fonts/)
[NAVER D2 폰트](https://d2.naver.com/helloworld/4969726)
[지연 시간 없이 웹폰트 서빙하기 - Feat. Safari & Edge functions | 뱅크샐러드](https://blog.banksalad.com/tech/font-preload-on-safari/)
