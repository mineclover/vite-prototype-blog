---
date: 2023-03-03
modified: 2023-04-27
---

## 소개

웹 사이트의 접근성을 올려주는 요즘 기술 중에 하나

개발을 할 때 트위치, 페이스북, 인스타그램에 대해서 이 og 세팅을 신경쓰라는 말이 있다
링크를 복사할 때 배너 형식으로 나오는 미리보기 화면이 이 open-graph 에 영향을 받는 요소다

### 참고

[open-graph-scraper 사용하기](https://peachsoong.tistory.com/62)

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:title" content="Content Title" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />
<!-- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

## 찾아보니 node 를 거쳐서 og 를 가져와야한다 react 내장은 없나?

흠

없는 것 같다
서버를 경유하는 게 기본 옵션이다
만든다면 노드에 링크를 보내서 받아오게 하는 영역을 만들어야한다

### openGraphScraper

[GitHub - jshemas/openGraphScraper: Node.js scraper service for Open Graph Info and More!](https://github.com/jshemas/openGraphScraper#readme)

흠..
생각보다 로컬 api 를 일찍..
아니 근데 그냥 그 때 그 때 가져오지말고 매핑하면 되는 것 아닌가
