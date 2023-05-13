---
date: 2023-04-30
modified: 2023-05-14
---

백엔드 날먹해준다는 오픈소스  
정말 날먹이 맞는건지는 모르겠다 [review](review/review)

공식 사이트 : [The Open Source Firebase Alternative | Supabase](https://supabase.com/)  
프로젝트 대시보드 : [supabase](https://app.supabase.com/projects)

수파베이스의 기본 기능들에 대해서 깊게 들어가는 내용은 [Supabase CLI | Supabase Docs](https://supabase.com/docs/guides/cli) 로 좀 더 자세하게 알 수 있다  
인터페이스에 뿌려져있어서 몰랐던 것들도 볼 수 있다

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
