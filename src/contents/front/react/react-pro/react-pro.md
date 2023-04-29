---
sidebar_position: 1
date: 2023-03-10
modified: 2023-04-29
---

## 소개

curry 패턴
원래 onClick 에 이벤트 넣을 때 ()=>{} 또는 함수 데이터 전달 방식으로 하는데
return 에 콜백함수 있는 함수 호출해서 뭔가 더 단축하는 방식이였

[10 React Antipatterns to Avoid - Code This, Not That! - YouTube](https://youtu.be/b0IZo2Aho9Y?t=433)

## useMemo 를 사용해야할 때

시간 복잡도 5000 이상일 떄
[dev-blog/should-you-really-use-usememo.md at master · yeonjuan/dev-blog · GitHub](https://github.com/yeonjuan/dev-blog/blob/master/JavaScript/should-you-really-use-usememo)
