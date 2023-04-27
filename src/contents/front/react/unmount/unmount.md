---
sidebar_position: 5
date: 2023-03-22
modified: 2023-04-27
---

케이스 를 통해서 지금 컴포넌트가 나타났다 사라졌다를 하고 있는데ㅁ
이 작업을 할 때에도 언마운트 동작이 동작을 한다

해당 작업에서 PDF 샌드의 유지 팩트로 원마운트를 체크하는 콘솔 로그를 찍었는데 원마운트 동작이 발생하였다
state 도 초기화 된다

```tsx
/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import PDFComp from '@/components/pdf-send/PDFComp';
import PdfSend from './PdfSend';

type Props = {};

const PdfStep = (props: Props) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const StepComp = () => {
    switch (step) {
      case 0:
        return <div>step 0</div>;
      case 1:
        return <PDFComp />;
      case 2:
        return <PdfSend />;
      default:
        return <div>잘못된 접근</div>;
    }
  };
  return (
    <div>
      <button type="button" onClick={prevStep}>
        이전
      </button>
      <button type="button" onClick={nextStep}>
        다음
      </button>
      {StepComp()}
    </div>
  );
};

export default PdfStep;
```
