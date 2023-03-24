---
date: 2023-03-03
modified: 2023-03-03
Project: P:\Dev\react-playground
---

## 전체 TO-DO

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

포커스 해야할 폴더 > [contents](../../../contents.md)
