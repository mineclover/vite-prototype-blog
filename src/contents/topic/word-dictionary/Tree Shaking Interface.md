---
date: 2023-03-30
modified: 2023-04-29
---

Tree shaking 은 애플리케이션에서 사용하지 않는 코드를 제거하여 번들 크기를 최소화하는 프로세스입니다.

## echart 적용 예시

echart 단일 사용 시 적용 방법 : [Migration from v4 to v5 - What's New - Basics - Handbook - Apache ECharts](https://echarts.apache.org/handbook/en/basics/release-note/v5-upgrade-guide/)
react for react 에서 적용 방법 : [GitHub - hustcc/echarts-for-react: ⛳️ Apache ECharts components for React wrapper. 一个简单的 Apache echarts 的 React 封装。](https://github.com/hustcc/echarts-for-react#usage)

v5 에서 번들 축소를 위한 코드 작성법에 대한 설명이 나온다

## 타입스크립트 적용 예시

TypeScript 에서는 인터페이스를 사용하여 이러한 최적화를 수행할 수 있습니다.

아래 예시 코드에서는 `Greeting` 인터페이스를 정의하고, `hello` 함수에서 이 인터페이스를 사용합니다. 그러나 `goodbye` 함수에서는 `Greeting` 인터페이스를 사용하지 않습니다.

```typescript
interface Greeting {
  name: string;
  greeting: string;
}

export function hello(greeting: Greeting) {
  console.log(`${greeting.greeting}, ${greeting.name}!`);
}

export function goodbye(name: string) {
  console.log(`Goodbye, ${name}!`);
}
```

이제 이 코드를 번들링하고 tree shaking 을 사용하여 사용하지 않는 코드를 제거할 수 있습니다. 예를 들어, Webpack 을 사용하여 번들링할 때 다음과 같이 설정할 수 있습니다.

```javascript
// webpack.config.js

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
```

위 설정에서 `optimization.minimize` 속성을 `true` 로 설정하여 코드 압축을 활성화하고, `minimizer` 속성을 사용하여 Terser 플러그인을 사용하여 코드를 최적화합니다. 이렇게 하면 `goodbye` 함수가 사용되지 않으므로 번들링된 파일에는 해당 함수의 코드가 포함되지 않습니다.
