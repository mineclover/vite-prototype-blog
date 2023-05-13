---
date: 2023-05-03
modified: 2023-05-14
---

서버는 사용자를 어떻게 구분하는가

접속자의 jwt 에는 대표적으로 이메일이 있고

## auth.jwt()

[Multi-Factor Authentication | Supabase Docs](https://supabase.com/docs/guides/auth/auth-mfa)

```js
auth.jwt()
auth.jwt() ->> 'email'
auth.jwt()->>'aal' = 'aal2'
// ( aal 과 aal2 비교)
//
{
  "aud": "authenticated",
  "exp": 1616429064,
  "sub": "5a4365e7-7c7d-4eaf-a8ee-9ec9432917ca",
  "email": "ant@supabase.io",
  "app_metadata": {
    "provider": "email"
  },
  "user_metadata": {},
  "role": "authenticated"
}
```

## auth.uid()

[Part Three: Policies | Supabase Docs](https://supabase.com/docs/learn/auth-deep-dive/auth-policies)

```js
auth.uid()
// 로그인 된 user의 id 반환
auth.uid() = search.user_id
```

## 적용하기

따옴표에 따라 기능이 안될 수 있음  
작은 따옴표는 문자열을 큰 따옴표는 식별자를 표현한다고 함

```sql
// 간소화된 것에 쓰는
auth.jwt() ->> 'email') = 'mineclover@naver.com'
// review에서 나오는
TO anon, authenticated
USING ((auth.jwt() ->> 'email') = 'mineclover@naver.com')
```
