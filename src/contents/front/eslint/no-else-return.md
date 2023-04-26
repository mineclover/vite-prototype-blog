---
date: 2023-04-01
modified: 2023-04-24
---
`if { } else if { } else { }` 패턴을 쓰지 못하게 하는 규칙

[no-else-return - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/rules/no-else-return)

그리고 이런 방식을 권장하게 한다

```
if (typeof value === 'number') {
      if (Number.isNaN(value)) {
        return false;
      }
      if (!Number.isFinite(value)) {
        return false;
      }
      return true;
    }
```
