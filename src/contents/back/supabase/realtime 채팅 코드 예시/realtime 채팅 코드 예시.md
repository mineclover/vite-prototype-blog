---
date: 2023-05-11
modified: 2023-05-14
---

리얼타임 채팅 예시

```js
const listener = supabase
  .channel('public:messages')
  .on('postgres_changes', option, (payload) => handleNewMessage(payload.new))
  .subscribe();
```
