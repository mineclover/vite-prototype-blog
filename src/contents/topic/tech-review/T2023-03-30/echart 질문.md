---
date: 2023-03-30
modified: 2023-04-24
---
`echarts-for-react` 에서 regression 스타일을 적용하는 방법은 `option` 객체 내에서 `series` 속성을 설정하면 됩니다. 아래는 예시 코드입니다.

```javascript
import ReactEcharts from 'echarts-for-react';

const data = [
  [0, 0],
  [1, 2],
  [2, 3],
  [3, 6],
  [4, 8],
  [5, 9]
];

const option = {
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'scatter',
      data: data
    },
    {
      type: 'line',
      symbol: 'none',
      data: getRegression(data),
      lineStyle: {
        color: '#f00',
        width: 2,
        type: 'dashed'
      }
    }
  ]
};

function getRegression(data) {
  // Your regression function here
  // This function should return an array of points that represents the regression line
}

function MyEchartsComponent() {
  return <ReactEcharts option={option} />;
}
```

위 코드에서 `data` 는 산점도 데이터를 나타내며, `getRegression` 함수는 적합한 회귀식을 계산하여 그 결과를 반환해야 합니다. `option` 객체의 `series` 속성에서 `type` 이 `scatter` 인 시리즈는 산점도를 나타내며, `type` 이 `line` 인 시리즈는 회귀선을 나타냅니다. `lineStyle` 속성을 사용하여 회귀선의 스타일을 지정할 수 있습니다.
