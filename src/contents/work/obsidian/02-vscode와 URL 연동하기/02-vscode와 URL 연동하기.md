---
date: 2023-03-05
modified: 2023-04-24
---

## 소개

터미널을 쓸 수 있으면 code 를 쓰라 하지만 그럴 수는 없으므로
이런식으로 경로를 저장할 수 있다
`vscode://file/{절대 경로}`

### 파일 열기

경로에 파일명까지 적으면 단일 파일을 연다

터미널 명령어 몃번 써보면 알겠지만 뭔가 폴더를 만들거나 객체를 만드는 것에 대해서 명령어가 비슷하다
특피 객체를 선택하는 것을 할 때 파일 선택과 폴더 선택의 명령어가 같다

생성할 때의 구분은 /로 하게 된다
선택할 때는 생략되어 선택해도 폴더를 정상적으로 선택한다
파일은 보통 확장자가 있다
( 실제로 , 폴더를 abc 로 만들고 파일을 abc 로 만들면 이미 있다고 한다 )

```
vscode://file/P:\Dev\react-playground\src\contents\front\css\01-border-line\index.tsx
```

이걸 실행할 수 있게 하려면 [파일 링크 테스트](vscode://file/P:\Dev\react-playground\src\contents\front\css\01-border-line\index.tsx)
URL 넣듯 링크에 넣는다
아래 설정을 하더라도 폴더가 자동으로 열리진 않고 단일 파일로 열린다

1. 단일 파일로 열리는데 vscode 가 꺼져있는 상태에선 파일만 연다
	 ![](file/02-vscode와%20URL%20연동하기.png)
2. 기존에 다른 프로젝트 폴더를 열어놨을 경우 해당 파일만 현재 프로젝트에서 열린다
3. 이미 열린 프로젝트의 하위 항목을 단일 파일로 열 경우 해당 vscode 탐색기에서 그 파일을 연다

## 프로젝트를 열 때

즉 바로가기로 프로젝트를 열고자 한다면 아래처럼 작성한다
이렇게 열 경우 실제 vscode 에서 폴더열기로 여는것과 같은 효과가 있다

[폴더 링크 테스트](vscode://file/P:\Dev\react-playground)

```
[폴더 링크 테스트](vscode://file/P:\Dev\react-playground)(vscode://file/P:\Dev\react-playground\src\contents\front\css\01-border-line\무제 파일.md)
```

하지만 이렇게 열면 , 원하는 파일까지 갈 수 가 없다 프로젝트를 여는 것과 같기 때문임

두번 실행해서 원하는 파일을 가져오길 바랬지만 그건 어려울 것 같고
링크를 두번 붙이는게 가장 괜찮을 것으로 보인다

프로젝트 버튼과, 컴포넌트 버튼을 넣어야할 것 같고
경로만으로 열 수 있도록하는 ... 플러그인을 활용하는 것이 좋을 것 같다

[설명한 문서](obsidian://open?vault=source&file=0-%EC%A7%80%EC%8B%9D%EA%B4%80%EB%A6%AC%2FObsidian-%EC%98%B5%EC%8B%9C%EB%94%94%EC%96%B8%2F102%20%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8%20%EC%A0%95%EB%B3%B4%2FAccount%20Link)

데일리노트에만 사용하는게 좋을 듯한 주제다 [00-time-line](../../../blog/dev-softer/00-time-line/00-time-line.md)

## 공식 사이트

[The Visual Studio Code command-line interface](https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls)
