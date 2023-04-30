빌드할 때 핫 리로드가 너무 많이 발생해서 제한을 시키기로 했다
[Build Options | Vite](https://vitejs.dev/config/build-options.html#build-watch)

```js
  build: {
    watch: {
      buildDelay: 10000
    },
  },
```
