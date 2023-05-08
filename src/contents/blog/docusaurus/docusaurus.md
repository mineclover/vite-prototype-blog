---
date: 2023-03-24
modified: 2023-05-03
---

블로그 개발 작업은 vite-prototype-blog 에서
배포는 vite-prototype-blog/docusaurus 에서
편집은 vite-prototype-blog/docusaurus/macro 에서
메모와 포스팅 작성은 obsidian 에서 하고 있다

하나의 폴더에서 관리하지만 깃은 분리되어있기 때문에 만약 다른 환경에서 배포하고자 하면
순서대로 설치해주어야함
`npm run marco` 를 실행하고 `npm run upload` 를 해야 깃허브가 업로드가 되고
`npm run deploy` 를 해야 github.io 로 업로드가 된다

## 설치 방법

vite-prototype-blog 를 설치한다
순서대로 설치할 수 있도록 npm run setup 으로 자동설치하도록 하였음
이후 npm run sync 까지 해주면 된다 ( npm i 를 sync 에만 넣어놨음 )

## 사용 방법

### obsidian 에서

배포 전에 lint all 를 하는 것이 좋다
단축키를 ctrl + shift + s 로 해두었음
너무 자주 modified 값이 변동되는 문제가 있다
all lint 를 할 때 modified 가 수정된다

> Linter : Lint all files in the vault

중괄호 연속 사용을 조심해야한다 중괄호로 감싸도 코드블럭으로 감싸도 안되서 난감한 문제인데
그냥 무시하고 배포해도 되긴 한다
배포할 떄 굳이 bocs 가 없어도 된다고 판단해서 폴더를 없애기로 했다

### vscode 에서

일반 리액트 처럼 사용하면 된다

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
path includes ${dv.current().file.name}
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
