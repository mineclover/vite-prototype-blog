---
date: 2023-03-03
modified: 2023-04-29
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

포커스 해야할 폴더 > [contents](../../../contents)

아직 안한 것

- [ ] [문서 포멧 기반 자동 처리](https://github.com/mineclover/MDN-to-Markdown-for-obsidian)
- [ ] 리액트 문서 기반 공부
- [ ] 블로그 제작

---

[vscode 열기](vscode://file/P:/Dev/react-playground/)
이전 폴더에서 origin 만 바꿔서 쓰는 중
[GitHub - mineclover/vite-prototype-blog](https://github.com/mineclover/vite-prototype-blog)

%% Begin Waypoint %%

- [01-Template](./01-Template.md)
- [2023-03-03](./2023-03-03.md)
- [2023-03-04](./2023-03-04.md)
- [2023-03-06](./2023-03-06.md)
- [2023-03-12](./2023-03-12.md)
- [2023-03-13](./2023-03-13.md)
- [2023-03-14](./2023-03-14.md)
- [2023-03-15](./2023-03-15.md)
- [2023-03-23](./2023-03-23.md)
- [2023-03-26](./2023-03-26.md)
- [2023-03-29](./2023-03-29.md)
- [2023-03-30](./2023-03-30.md)
- [2023-03-31](./2023-03-31.md)
- [2023-04-02](./2023-04-02.md)
- [2023-04-03](./2023-04-03.md)
- [2023-04-04](./2023-04-04.md)
- [2023-04-05](./2023-04-05.md)
- [2023-04-06](./2023-04-06.md)
- [2023-04-07](./2023-04-07.md)
- [2023-04-08](./2023-04-08.md)
- [2023-04-09](./2023-04-09.md)
- [2023-04-10](./2023-04-10.md)
- [2023-04-13](./2023-04-13.md)
- [2023-04-14](./2023-04-14.md)
- [2023-04-15](./2023-04-15.md)
- [2023-04-25](./2023-04-25.md)
- [2023-04-28](./2023-04-28.md)
- [2023-04-29](./2023-04-29.md)

%% End Waypoint %%
