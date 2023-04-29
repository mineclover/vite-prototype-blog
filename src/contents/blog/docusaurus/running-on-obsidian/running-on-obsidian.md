---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
sidebar_position: 2
date: 2023-04-27
modified: 2023-04-30
---

## 작성 요령

도큐사우르스에서 지원하는 문법이 옵시디언에 적용될 수 있도록 한다

일단 도큐사우르스는 엄격한 줄바꿈을 적용하고 있다

그래서 줄바꿈을 하려면 두번 띄어쓰기해야 실제 뷰어에서 한번 띄어쓰기 된다

그래서 이부분은 신경써줘야한다

## 코드 블럭 기능

### 하이라이팅

`// highlight-next-line`
을 써서 보이는 코드 상에서 하이라이트를 줄 수 있다

`// highlight-start ~ // highlight-End`
를 써서 영역에 하이라이트를 줄 수 있다

### 예약된 이름

```yaml
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
```

` ``` ` 쓰고 확장자 쓰는 것 다음에 `title="경로"` 를 적는 것으로 코드블럭에 경로를 표시하게 할 수 있다

## 콜아웃 스타일 플러그인 구현 계획

- [ ] 콜아웃 호환

공식 콜아웃 스타일이다
나는 이 기능을
[GitHub - javalent/admonitions: Adds admonition block-styled content to Obsidian.md](https://github.com/javalent/admonitions) 처럼 구현하고자 한다

:::tip My tip
Use this awesome feature option
:::

:::danger Take care
This action is dangerous
:::

:::tip My tip
Use this awesome feature option
:::

:::danger Take care
This action is dangerous
:::

## 전체

일단 `sidebar_position` 은 수동이다
