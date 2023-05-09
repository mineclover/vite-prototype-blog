---
date: 2023-05-09
modified: 2023-05-09
---

프론트에서 데이터를 전송할 수 있는 데이터 전송 구조에 대해 정의하고자 한다
[(번역) gRPC vs. REST: 실제 API 스타일 비교](https://velog.io/@superlipbalm/grpc-vs-rest-comparing-api-styles-in-practice?utm_source=substack&utm_medium=email)
[무하프로젝트 :: 웹에서 실시간 데이터 처리하기(WebSocket, Comet)](https://mohwaproject.tistory.com/entry/%E3%85%81%E3%85%81%E3%85%81)

## REST API

가장 익숙한 정송 프로토콜 일 것이다
HTTP 로 통신하고
GET , POST , PUT , DELETE 로 제어하는 통신 규격
content-type 에 따라서 전송되는 데이터 형태가 조금 변경되기도 하는 특이점이 있다

- 예시는 formdata
- header 를 제외하면 전송되는 데이터는 매번 변경된다고 보면 좋을 것 같다

### 데이터를 실시간으로 업데이트 받을 때의 접근법

아래 Polling, Long Polling , Streaming 은 서버로 부터 실시간 데이터를 받기 위한 방식이다

####  Polling

보통 Ajax 를 교환하기 위해 사용하기 때문에
Ajax Polling 이라고도 부른다고 한다
일정 주기로 서버와 통신하는 것
데이터가 변경되었든 변경되지 않았든 서버의 데이터를 주기적으로 확인하여 데이터를 받아오는 방식이다
매번 HTTP 요청을 보내서 네트웍 부하가 심해진다

#### 롱폴링 (Long Polling)

HTTP 요청 시 서버는 해당 요청을 일정 시간 동안 대기 시킵니다. 만약, 대기 시간 안에 데이터가 업데이트되었다면,
그 즉시 클라이언트에게 응답을 보내고 전달받은 데이터를 처리 후 서버로 재요청을 시작합니다.

데이터 업데이트가 빈번한 경우엔 폴링에 비해 성능상 이점이 크지 않습니다.

##### 데이터가 변경되었을 때만 전송된다

이 경우에도 HTTP 헤더는 매번 전송된다
서버 데이터 자체가 자주 변경될 경우 큰 이점은 없다

#### 스트리밍 (Streaming)

서버는 지속적인 업데이트를 위해 무한정 (또는 일정 시간 동안) 요청을 대기시키며, "chunked" 기반 메시지를 이용하여 응답 시 연결을 유지 시킵니다.
이것도 http 통신을 기반으로 하기 때문에 문제가 발생한다고 한다

### WebSocket

전 HTTP 통신과는 달리 클라이언트와 서버 간 양방향 통신이 가능하며, 이때 네트웍상의 메시지는 0X00 바이트로 시작해서 0xFF 바이트로 끝나고 그 사이에는 UTF-8 데이터가 채워지게 됩니다.
WebSocket 방식은 HTTP 방식과 달리 불필요한 요청/응답 헤더 데이터가 존재하지 않습니다.

### SSE Server-Sent Events

[[웹개발] SSE ( Server-Sent Events) 란 무엇인가](https://hamait.tistory.com/792)
웹소켓의 역할을 하면서 더 가볍습니다.
주로 서버에서 받는 (푸쉬) 위주의 작업에 유용하게 사용 될 수 있습니다. 웹소켓과 같은 양방향은 아니기 때문에 보낼때는 Ajax 를 활용한다
