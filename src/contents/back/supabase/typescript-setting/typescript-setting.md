---
date: 2023-05-02
modified: 2023-05-14
---

ts 로 작업할 때 데이터베이스의 스키마 타입을 미리 선언해서 가져갈 수 있다

이건 graphQL 을 위한 기능에 더 가까워보인다  
[Generating Types | Supabase Docs](https://supabase.com/docs/guides/api/rest/generating-types)  
클라이언트에 이식하는 supabase client 에 타입을 부여한다

```shell
npx supabase login
```

이렇게 가져온 타입은 아래처럼 사용한다  
진짜 이렇게 쓴다

```tsx
import { Database } from './types/supabase';

const [countries, setCountries] = useState<
  Database['public']['Tables']['method']['Row'][]
>([]);
const [permission, setPermission] = useState<
  Database['public']['Tables']['profiles']['Row'][]
>([]);
```

## Session

```ts
import { AuthSession } from '@supabase/supabase-js';
const [session, setSession] = useState<AuthSession>();
```

## id 호환 시키기

id 타입을 int8 로 했다면  
upsert 할 때 오류가 난다

id 가 string 에여서 오류를 발생시킨다  
이 원인은 ssssion 은 id : string 인데 본인은 int8 이라 number 다 라는 것이다  
그럼 맞다 나는 공식 예제와 다르게 작업해서 profiles 에 uuid 를 넣지 않았다

이걸 통해서 uuid 는 string 으로 관리된다는 것을 알 수 있었다  
잘못 작업할 뻔한 부분이다  
프로젝트에서 확인할 수 있다 `tutorial\Account.tsx`
