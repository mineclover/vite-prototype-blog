---
date: 2023-03-09
modified: 2023-04-29
---

## 상황

프리티어를 기본 값으로 세팅하고 rules 를 세팅하지 않은 상황

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {}
}
```

[VSCode에서 발생하는 Delete \`␍\` eslint (prettier/prettier) 해결방법](https://noogoonaa.tistory.com/62)

아래 코드로 해결 된다

```json
"rules": {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
```
