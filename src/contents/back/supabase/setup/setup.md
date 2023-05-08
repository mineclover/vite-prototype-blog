---
sidebar_position: 2
date: 2023-05-02
modified: 2023-05-02
---

## front settings

일단 사전 조사로 필요한 보안조치는 취할 수 있는 것을 확인함

딱히 사용법은 어렵지 않음
[https://app.supabase.com/project/dblntvvagfqxjblwlfxt/api?resource=keyword](https://app.supabase.com/project/dblntvvagfqxjblwlfxt/api?resource=keyword)

권한 설정이 아직 좀 이해가 안된다
로그인 안한 사용자는 읽기 권한만 준다고 치고 땡 해야하나

## CLI 세팅

type 업데이트 자동화를 위한 CLI 설치가 여기 나온다
클라이언트 호출을 위해 사용하는 `@supabase/supabase-js` 과 다른 것임

```bash
npm i supabase@">=1.8.1" --save-dev
```

설치 생략하고 로그인 커멘드 쳐도 됨

```bash
npx supabase login
```

### 경로 체크

샘플 경로에서 src 붙여줘야 찾는다

```
"update-types": "npx supabase gen types typescript --project-id \"dblntvvagfqxjblwlfxt\" > src/types/supabase.ts"
```

[Generating Types | Supabase Docs](https://supabase.com/docs/guides/api/rest/generating-types)

## 로그인 과정

회원가입 과정을 튜토리얼을 보고 만들었다

### 쉬운 방법

라이브러리 사용
[Use Supabase Auth with React | Supabase Docs](https://supabase.com/docs/guides/auth/quickstarts/react)
