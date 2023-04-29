---
sidebar_position: 3
date: 2023-04-04
modified: 2023-04-29
---

## 소개

preconnect 를 소개하고 싶어서 만들었다
[rel=preconnect - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preconnect)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
  rel="stylesheet"
/>
```

preconnect 는 연결될 도메인을 미리 브라우저한테 인식시켜가지고 연결될 때의 과정을 조금 줄이는 효과를 가지고 있다

> [!NOTE] MDN
> 사전 연결은 핸드셰이크의 일부 또는 전체를 선제적으로 수행하여 지정된 오리진에서 향후 로드 속도를 높입니다 (HTTP 의 경우 DNS+TCP, HTTPS 오리진의 경우 DNS+TCP+TLS)

[웹폰트 link display=swap, rel="preconnect"옵션이 맘에 듭니다. - 자유게시판 - 라이믹스 꿀팁](https://rxtip.kr/free/6359)
