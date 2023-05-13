---
date: 2023-03-29
modified: 2023-05-14
---

## 소개

기술 관련되서 내가 본 것  
생각한 것에 대한 기록

유튜브 운영 중  
dev_softer 에 실시간 스트리밍 마이크 끄고  
수익창출은 안건들이고 , 아무 음악틀어서 함  
그래도 수익 창출 되는게 좋으니까 저작권 없는 브금 위주로 틀고자 함  
마이크 소리 녹음은 끄고 글 쓰는 건 음성 키보드 써서 붙이기

## 템플릿

### 알게된 것

그냥 알게 된 건 다 적으면 된다

### geek News

긱뉴스에서 재밌는게 나오면 메모하기 위함  
제로초 슬랙에서 올려주는 걸 간간이 몰아본다  
[GeekNews - 개발/기술/스타트업 뉴스 서비스](https://news.hada.io/)

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
SORT  file.frontmatter.sidebar_position, file.name
`;

dv.paragraph(callout('```dataview\n' + query + '\n```', 'INDEX ORDER'));
````

:::
