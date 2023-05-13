---
date: 2023-05-04
modified: 2023-05-14
---

[Auth UI | Supabase Docs](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui)  
문서대로 따라가면 된다

```shell
npm install @supabase/supabase-js @supabase/auth-ui-react @supabase/auth-ui-shared
```

```jsx
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
  '<INSERT PROJECT URL>',
  '<INSERT PROJECT ANON API KEY>'
);

const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google', 'facebook', 'twitter']}
  />
);
```

로그인 버튼을 눌렀고 데이터가 왔음을 상태전달하기 위해서는 아래방식으로 이벤트를 구독시켜야한다  
[Use Supabase Auth with React | Supabase Docs](https://supabase.com/docs/guides/auth/quickstarts/react)

```js
const [session, setSession] = useState(null);
useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
  });

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return () => subscription.unsubscribe();
}, []);

useEffect(() => {
  getCountries();
}, []);
```

그리고 로그인 하고 나면

```
supabase.auth.getUser()
```

위 코드로 데이터를 호출하는 것도 가능하긴 하나 이 방식으로 가져오는 것은 고유 아이디 등의 다양한 정보를 가져옴으로 다른 테이블로 만들어서 관리하는게 좋아보임

애초에 로그인을 하면 티는 안나지만 엑세스토큰과 기타 데이터가 들어간다  
getUser 를 안해도 들어간다

이 코드는 타입 문제가 있다  
일단 `supabase.auth.getSession()` 를 해서 받아지는 코드의 타입을 알 수 없다  
그냥 콘솔로 받아서 찍어보고 하드코딩으로 타입을 지정할 수 있긴 하다  
그래도 어딘가에는 이것도 타입이 지정되어있지 않을까 하여 뒀다

```tsx
supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
```

## 특정 유저에게 권한 주기 질문

Supabase 에서는 특정 테이블에 대한 권한을 설정할 수 있습니다. 특정 유저에게 읽기 권한을 주기 위해서는 해당 유저의 `auth.uid` 를 사용하여 권한을 설정해야 합니다.

예를 들어, `posts` 테이블에 대해 `authenticated` 유저에게 읽기 권한을 주고 싶다면 다음과 같이 권한을 설정할 수 있습니다:

```sql
-- posts 테이블에 대해 authenticated 유저에게 읽기 권한을 주는 쿼리
GRANT SELECT ON TABLE posts TO authenticated;
```

위 쿼리에서 `authenticated` 는 Supabase 에서 제공하는 특별한 `role` 중 하나입니다. 이 `role` 은 인증된 모든 유저를 포함하며, 로그인한 모든 유저에게 적용됩니다.

만약 특정 유저에게만 권한을 주고 싶다면, 해당 유저의 `auth.uid` 를 사용하여 새로운 `role` 을 만들고 권한을 부여할 수 있습니다. 예를 들어, `posts` 테이블에 대해 `user123` 유저에게 읽기 권한을 주고 싶다면 다음과 같이 권한을 설정할 수 있습니다:

```sql
-- user123에게만 posts 테이블에 대한 읽기 권한을 주는 쿼리
CREATE ROLE user123;
GRANT SELECT ON TABLE posts TO user123;
GRANT user123 TO auth.uid;
```

위 쿼리에서 `CREATE ROLE` 을 사용하여 새로운 `role` 을 만들고, `GRANT SELECT ON TABLE` 을 사용하여 `posts` 테이블에 대한 읽기 권한을 부여합니다. 마지막으로, `GRANT` 를 사용하여 새로운 `role` 을 `auth.uid` 에게 부여합니다. 이제 `user123` 유저는 `posts` 테이블에 대해 읽기 권한을 가지게 됩니다.
