---
aliases:
  - 바이트 아니고 비트
tags:
  - index-folder-note
  - vite
date: 2023-01-25
modified: 2023-05-14
---

## 투두 리스트

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

## 목차

%% Begin Waypoint %%

- [무제 파일](./무제%20파일)
- [E-scss module 에 대쉬 못쓴다](./E-scss%20module%20에%20대쉬%20못쓴다)
- [env-vite React 세팅 방법 정리](./env-vite%20React%20세팅%20방법%20정리)
- [F-그 외 다양한 기능들이 있음](./F-그%20외%20다양한%20기능들이%20있음)
- [F-post css 를 지원함](./F-post%20css%20를%20지원함)
- [F-vite env를 기본 지원](./F-vite%20env를%20기본%20지원)
- [F-vite.config에서 절대경로 축약어 설정](./F-vite.config에서%20절대경로%20축약어%20설정)
- [vite와 하위호환성의 상관관계](./vite와%20하위호환성의%20상관관계)

%% End Waypoint %%
