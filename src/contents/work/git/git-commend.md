---
date: 2023-03-14
modified: 2023-04-27
---

## 최근 커밋 수정

기존 커밋에 새로운 변경 사항을 넣을 수 있고
커밋 메세지를 변경할 수 있음

```
git commit --amend
git push -f
```

## 파일 원상 복구

```
git restore .
git checkout .
```

## reset 옵션

### 이전 커밋 히스토리 삭제

```
git reset HEAD^
git reset HEAD~1
```

### --soft

커밋 히스토리만 삭제함
변경 사항이 staged 에 add 된 상태

```
git reset --soft HEAD^
```

### --hard

커밋 히스토리와 파일을 삭제

```
git reset --soft HEAD^
```

### --mixed

unstaged 로 변경사항들이 들어간다

```
git reset --mixed HEAD^
```
