---
date: 2023-05-05
modified: 2023-05-05
---

책에서 특히 유용한 부분에 대해 적어두고 찾기 쉽게 하는 목적

목차는 인터넷 서점 책 정보에서 스크래핑하고 내용 간추리는 방식

:::note

옵시디언 데이터 시각화용 코드

````dataviewjs
function callout(text, type) {
    const allText = `> [!${type}]\n` + text;
    const lines = allText.split('\n');
    return lines.join('\n> ') + '\n'
}

const query = `
not done
path includes ${dv.current().file.name}/
`;

dv.paragraph(callout('```tasks\n' + query + '\n```', 'todo'));
````

---

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
SORT file.frontmatter.sidebar_position
`;

dv.paragraph(callout('```dataview\n' + query + '\n```', 'INDEX ORDER'));
````

:::
