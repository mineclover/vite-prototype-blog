---
sidebar_position: 3
date: 2023-05-03
modified: 2023-05-03
---

## 질문

Originally I didn't use db, but I'm using supabase for the first time. studied for a week

### 1

If you look at the usage, if you do not create a schema, the default value is set, so select 'public' as the schema.

There are other schemas, and it seems that you can put an arbitrary schema into the database with a command, but I don't think this is a recommended usage. Is it right?

### 2

I want to change the role given to a user.

try to give more ratings The interface doesn't seem to be provided what to do Which roles are already designed for use? 2-1. I tested it manually When an anonymous connection matches anon, it is processed as anon. When I logged in, it seemed to treat it as authenticated if the address was the same as the preset address. I figured it out manually. Is there a document that organizes this?

### 3

I want to speed up the logout cycle

Do you have logout logic? If not, should I just clear local storage and cookies?

## 답변

1. you can create custom schemas and either allow the API access or not. You have to deal with grants on them if you want them to be accessible to any other user than Postgres.
2. Supabase has 3 roles. anon, authenticated and service_role. Supabase provides no support for additional roles.

   You have to handle it on your own. Two ways to deal with other roles are https://github.com/supabase-community/supabase-custom-claims and https://github.com/orgs/supabase/discussions/11948 .

   This has a bit more info on roles https://supabase.com/docs/learn/auth-deep-dive/auth-policies

3. signOut().

## 분석

### 1 번

그냥 권한처리해서 접속하려하면 할 수 있다 라고 해석할 수 있다
애초에 내가 질문 한 것도 schemas.table 인 경우에 다른 스키마도 만들어 쓰려면 쓸 수 있어보이네? 라는 질문이였기 때문
이제 그것과 관련한 권한 부여는 직접 따로 해줘야한다라는 의미로 보인다

### 2 번

좀 길다

링크에서 토론이 있었다 [CLS RBAC - Assigning PG_roles to logged users · supabase · Discussion #11948 · GitHub](https://github.com/orgs/supabase/discussions/11948) 에 의해서 문제가 인식됬고
그 결과물이 [GitHub - supabase-community/supabase-custom-claims: How to implement custom claims with Supabase](https://github.com/supabase-community/supabase-custom-claims) 인 것으로 보인다

복잡한 기능 넣지 말까..??
권한 부여하고 관리하고... 할 거 생각하면 벌써 머리가 아프다 역시 백앤드는 많이 어렵다

일단 기존에 본인의 게시글에 권한을 가지는 방법은 불러올 객체가 가지고 있는 소유자 속성에 본인의 고유식별자가 있으면 권한을 가진다 이다
요청 구분은 `auth.jwt() === { email }` 이런 식으로 한다
그래서 예제에서 그냥 아예 전체 조회한다를 예시로 설명하고 있다

근데 질문이랑 답변이 좀 다른 것 같다

읽다보니까
[Row Level Security | Supabase Docs](https://supabase.com/docs/guides/auth/row-level-security#policies-with-joins)

조인이 되기 때문에 외부 쿼리에서 권한 설정용으로 만들어둔 특정 테이블에서 값을 가져와서 비교 시킬 수 있을 것 같다
여기서 보면 조건에 teams 에 대해서 update 권한을 using 에 맞으면 허락한다
전송 받은 아이디가 in 다음 조건절에 포함되어 있으면~ 이라는 SQL 이다!
검색어 : select 문 하위질의어 in

```sql
create policy "Team members can update team details if they belong to the team."
  on teams
  for update using (
    auth.uid() in (
      select user_id from members
      where team_id = id
    )
  );
```

여기서 id 는 어디서 튀어나왔나 싶은데
팀들의 id 중에서 맞는 아이디 찾고 있는 것이다
찾는 팀이 있는 상황임
아 여기서 id 가 어디서 넘어왔는지를 못찾겠다
일단 나는 특정 팀에 대한 권한을 주고 있는게 아니기 때문에 생략해도 된다

원래 전체 조회와 삭제에 대한 권한은 유저에게 부여되지만
특정 조건을 충족할 경우 전체 조회와 전체 삭제가 가능한 권한을 주는 식으로 접근 할 수 있어보인다

#### 두번째 방법

계속 읽고 있으니 점점 보이는데 그냥 처음 쓸 때 바로 테이블을 지정할 수 있다 `auth.uid() = posts.creator_id`
그래서 알 수 있는 것은 내부가 조건 충족만 되면 된다

그 외로 다양한 기능들이 구현될 수 있다 SQL 자체가 그냥 테이블로 할 수 있는 건 다 되는 것으로 보인다

```sql
using (
  auth.uid() = posts.creator_id
);

using (
    auth.uid() in (
      select user_id from members
    )
  );

```

### 3 번

테스트 중에 별도의 로그아웃이 없었더니 로그인 되어있다라는 것을 뒤늦게 알게됬다
정책 테스트하다가 혹시나 해서 쿠키랑 로컬 스토리지를 열었더니 데이터가 있었고
로그아웃 상태는 anon 로 처리되는 것을 확인함

즉 권한은 크게 두개다 익명과 인증
그리고 인증은 JWT 에 계정 정보 담아서 한다
이것에 대한 자세한 정보는 RLS 에 있다
[Row Level Security | Supabase Docs](https://supabase.com/docs/guides/auth/row-level-security)

그래서 아무튼 그래서 별도의 로그아웃이 필요한 것을 알게 됨
근데 그러면 로그아웃 안하면 평생 로그인되있어야하나?

요청 전송자의 uuid 나 jwt 를 알 수 있는 건 좋다
근데 그걸 권한에 연결 시킬 수 있느냐는거임
