---
sidebar_position: 10
date: 2023-04-29
modified: 2023-04-30
---

[Dataview in Obsidian: A Beginner's Guide - Obsidian Rocks](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/)

## 기본 문법 설명

[Structure of a Query - Dataview](https://blacksmithgu.github.io/obsidian-dataview/queries/structure/)

TABLE , LIST , 등을 볼 수 있다

## FROM 경로 설명

[Sources - Dataview](https://blacksmithgu.github.io/obsidian-dataview/reference/sources/)
작성 방법을 볼 수 있는데
내가 원하는 파일 경로 작성 법도 나온다

```dataview
TABLE  file.frontmatter.sidebar_position AS "순서", file.frontmatter.aliases AS "부제목", file.frontmatter.tags AS "태그", file.frontmatter.title AS "대체 제목", file.frontmatter.slug AS 경로
FROM "work/obsidian"
```

## 파일 데이터 확인용

이건 옵시디언에 내장된 콜백 스타일 안에 데이터뷰를 넣는 구조다

이걸 도큐사우르스에 맞는 형태로 수정할 것임 ( 숨겨질 수 있도록 하기 위함 )

> 그냥 안보이게 하는게 가장 이상적이지만 파일 자체를 전부 읽는게 더 어려운 것 같다

이 컴포넌트 구조는 코드블럭 렌더링을 지원해야 원하느 표시가 나오기 때문에 숨기는 것으로
[준수 사항 | Docusaurus](https://docusaurus.io/ko/docs/markdown-features/admonitions)

::: note

옵시디언 데이터 시각화용 코드

````dataviewjs
function callout(text, type) {
    const allText = `> [!${type}]\n` + text;
    const lines = allText.split('\n');
    return lines.join('\n> ') + '\n'
}

const path = dv.current().file.folder;

const query = `
TABLE  file.frontmatter.sidebar_position AS "순서", file.frontmatter.aliases AS "부제목", file.frontmatter.tags AS "태그", file.frontmatter.title AS "대체 제목", file.frontmatter.slug AS 경로
FROM "${path}"
`;

dv.paragraph(callout('```dataview\n' + query + '\n```', 'todo'));
````

:::
