---
date: 2023-03-03
modified: 2023-04-24
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

아직 안한 것

- [ ] [문서 포멧 기반 자동 처리](https://github.com/mineclover/MDN-to-Markdown-for-obsidian)
- [ ] 리액트 문서 기반 공부
- [ ] 블로그 제작

---

[vscode 열기](vscode://file/P:/Dev/react-playground/)
이전 폴더에서 origin 만 바꿔서 쓰는 중
[GitHub - mineclover/vite-prototype-blog](https://github.com/mineclover/vite-prototype-blog)
