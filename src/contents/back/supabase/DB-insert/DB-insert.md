---
sidebar_position: 3
date: 2023-05-06
modified: 2023-05-06
---

03 에서 작업했다
작업할 때 타입 업데이트를 미리 받으면 편하다

테스트를 했고 잘 들어갔다

## 에러코드 모음

### 기본 키 아이디 중복

```json
{
  "code": "23505",
  "details": null,
  "hint": null,
  "message": "duplicate key value violates unique constraint \"search_id_key\""
}
```

### uuid 오류

```json
{
  "code": "22P02",
  "details": null,
  "hint": null,
  "message": "invalid input syntax for type uuid: \"ㅁㅇㄴㄹ\""
}
```
