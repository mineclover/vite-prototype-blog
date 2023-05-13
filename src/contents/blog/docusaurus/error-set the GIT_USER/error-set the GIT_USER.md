---
sidebar_position: 3.2
date: 2023-04-27
modified: 2023-05-14
---

배포 할 때  
`cmd /C 'set "GIT_USER=USER" && yarn deploy'` 를 쓰라고 한다

cmd /C 'set "GIT_USER=mineclover" && yarn deploy'  
이걸 축약하기위해서 `set "GIT_USER=USER" && yarn deploy` 이라고 쓰면  
Please set the GIT_USER environment variable, or explicitly specify USE_SSH instead!

에러가 난다  
이 문제는 [Error: Please set the GIT_USER environment variable! · Issue #3389 · facebook/docusaurus · GitHub](https://github.com/facebook/docusaurus/issues/3389) 에서 언급된 문제로  
cmd /c 를 사용하는 이유 자체도 파워쉘에 의한 것임을 알 수 있다

그래서 script-shell 에 속성을 부여한다  
[config | npm Docs](https://docs.npmjs.com/cli/v9/using-npm/config#script-shell)  
부여하는 방법은 두가지인데  
npm config set script-shell={경로} 를 하거나  
.npmrc 폴더에  
script-shell=`C:\Program Files\Git\bin\sh.exe` 같은 것을 하면 된다

## 하위 경로에서 prefix 실행에 대한 문제

상위 경로에서 하위 경로로 npm run --prefix 으로 실행하는 것에서 cmd 를 실행하지 않아 배치 프로그램으로 이 기능을 수행하고자 했다

### 배치프로그램에 대한 이해

그냥 .bat 파일이면 된다  
cmd 가 실행되며 독립적으로 실행되기 때문에 git 인증을 다시해줘야했다

### SSH

vscode 가 아니기 떄문에 git ssh 를 연결해줘야했다

ssh 는 단방향 암호화로 공개키 개인키 형식의 암호화를 해주는 방식이였다

ssh-add 또는 `git config --global core.sshCommand` 이였는데 둘다 잘 안됬다  
그래서 ssh 만 등록하려했는데

```
ssh-add -d ~/C:\Users\junu\.ssh\id_rsa
```

경로를 넣어줘도 오류가 나왔다  
![](file/error-set%20the%20GIT_USER.png)  
`p:\.ssh` 위치에 둬도 같은 문제가 있어서 안됬다

정말 아주 가까이 해도 안됬다  
![](file/error-set%20the%20GIT_USER-1.png)

## 해결

그래서 위 시도를 토대로 안된다고 생각해서 배포에 대해서는  
`echo cmd /C 'set \"GIT_USER=mineclover\" && yarn deploy'" ` 로 안내하려했다 그래서 복사해서 사용하려는 것이였음  
복제를 하려면 따옴표를 표시해줘야해서 \를 앞에 붙여줌

그런데 && 은 `\&` 하는것으로는 안됬다 ㅋㅋ  
이걸 작업해보니 오 이걸도 되겠는데 싶어졌다

여기서 이 "GIT_USER=mineclover" 를 표현하기 위한  
`\"GIT_USER=mineclover\"` 에서 힌트를 봤다

그래서 하위 레포에

"dd": "set \"GIT_USER=mineclover\" && yarn deploy", 를 붙였고  
이걸 하니까 아래 코드가 정상 작동하였음  
`"deploy": " npm run macro --prefix ./docusaurus  && npm run dd --prefix ./docusaurus",`
