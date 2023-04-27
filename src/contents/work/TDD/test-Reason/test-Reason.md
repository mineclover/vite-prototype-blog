---
sidebar_position: 1
date: 2023-03-29
modified: 2023-04-27
---

## 소개

### 테스트를 먼저 하는 이유

요구사항 모순점이나 거지같은 기획도, 어차피 테스트 코드 짜다보면 다 튀어나온다

사실 이걸 잘하려면 기획도 잘 나와야한다

그래서 기획이 잘 짜여지게 되는 걸 선호하게 된다

## 이론의 test

### 개념

소프트웨어 테스트는 개발된 응용 어플리케이션의 시스템이
사용자가 요구하는 기능과 성능, 사용성, 안정성 등을 만족하는지 확인하고
노출되지 않은 소프트웨어의 결함을 찾아내는 활동

### 필요성

오류 발견 관점, 오류 예방 관점 ,품질 향상 관점

### 기본 원리

결함 존재 증명, 완벽 테스팅 불가능, 초기 집중, 결함 집중, 살충제 패러독스. 정황 의존성. 오류 부재의 궤변
(설명은 길어서 생략)

### 소프트웨어 테스트 프로세스

테스트 계획 -> 디자인 및 분석 -> 테스트 케이스 및 시나리오 작성 -> 테스트 수행 -> 테스트 결과 -> 평가 및 리포팅

## 백앤드의 TDD

우선 시나리오에 대한 적용을 위해 골격을 TDD 하게 작성한다?
@test 라는 주석이 달린 코드를 써서 테스트 코드와 작동 코드를 분리한다

아무튼 테스트 코드와 실제 코드를 같이 pr 한다

nestJS 로 개발한다면 이걸 통해서 테스트 케이스를 접할 수 있다?
[GitHub - samchon/fake-toss-payments-server: Fake Toss Payments Server with Real SDK Library](https://github.com/samchon/fake-toss-payments-server)

[CHAP 02. TDD 시작 - Incheol's TECH BLOG](https://incheol-jung.gitbook.io/docs/study/undefined-3/chap-02.-tdd)

nestia 는 단위테스트 통합테스트를 해준다고 한다는데 본인 피셜이기 때문에 사용성 측면의 검토가 필요할 것으로 보인다

> nestia 쓰면 e2e 로 테스트만 직접하면 된다 함 > 몰루..?

## 프론트의 TDD

아직 잘 모르겠다
스토리북에 있긴 하다
그냥 UI 적 요소를 제외하고 기능 구현해야할 게 있을 경우
필요할 수 있을 것 같았다

단위 테스트 > 통합 테스트 > e2e 순서로 진행된다

단위와 통합은 개발환경에서 진행되는 경우가 많고
e2e 는 브라우저를 거치는 테스트를 말하는 것 같다
[E2E 테스트는 그만. 테스트 개선기](https://velog.io/@hoonki/E2E-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%8A%94-%EA%B7%B8%EB%A7%8C.-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B0%9C%EC%84%A0%EA%B8%B0)
[멈춰! 버그 멈춰! E2E 테스트로 버그 멈추기 Feat. Playwright | Hyperconnect Tech Blog](https://hyperconnect.github.io/2022/01/28/e2e-test-with-playwright.html)
