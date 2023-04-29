---
date: 2023-03-31
modified: 2023-04-29
---

## Issuses Convention

작성 시 Assignees 본인으로 설정
라벨 Priority , Status , Tpye , Category 붙이기
작업 현황 체크 ( 작업 내역이라 하면 몰아서 쓰게 되니 " 작업 현황 " 으로 )

## Pull request Convention

> 풀리퀘스트에서 `feature/~` -> `main` 업로드 후 이슈 템플릿에 맞춰서 작성
> 작성 시 Assignees 본인으로 설정
> 라벨 Priority , Status , Tpye , Category 붙이기

## commit prefix

> 커밋 시 prefix
> PR 은 해당 사항 없음!

- Feat : 새로운 기능 추가
- Fix : 버그 수정
- Env : 개발 환경 관련 설정
- Style : 코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만)
- Refactor : 코드 리팩토링 (더 효율적인 코드로 변경 등)
- Design : CSS 등 디자인 추가/수정
- Comment : 주석 추가/수정
- Docs : 내부 문서 추가/수정
- Test : 테스트 추가/수정
- Chore : 빌드 관련 코드 수정
- Rename : 파일 및 폴더명 수정
- Remove : 파일 삭제

### github flow

등록된 이슈 단위로 feature/~ 생성 띄어쓰기는 `-` 로 처리
기능 개발 단위로 commit prefix 작성

### push 전

`git pull origin main`

> 충돌 발생 시 병합 > Commit log 에서 Merge:~ 앞에 conflict 표시
> 글자 수 제한 발생 시 cmd vim 또는 , 머지된 main commit 의 중요 메세지 ( 이슈번호, 커밋 메세지 ) 는 살려서 작성할 것

`git push origin feature/~`

### 풀리퀘스트 병합 후

#### 저장소에 remote repo 의 병합 된 main 브런치 상태 반영

`git pull origin main`
`git fetch --prune`

#### 로컬 브런치 삭제

`git branch -D feature/~`

#### 새로운 브런치 생성

`git branch feature/~`

#### 새로운 브런치로 이동

`git switch feature/~`

### 유용한 커멘드

```
"sync": "git pull origin main && npm i && git fetch --prune"
```
