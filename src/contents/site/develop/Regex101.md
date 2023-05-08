---
date: 2023-05-06
modified: 2023-05-06
---

정규식 검사 사이트
[regex101: build, test, and debug regex](https://regex101.com/)

중요 포인트

언어 선택이 가능하고 언어별로 지원되는 문법이 다르다
대표적으로 아래 코드는 기본 설정에서만 되고 자바에서 안된다

```
[\p{Hangul}]{3}
```

## 쓰면 안되는 것

```
[ㄱ-힣] = [\u3131-\uD79D]
```

['ㄱ-힣'을 쓰면 안 된다! :: 티바이트](https://tibyte.kr/204)
[정규식에서 한글만 골라야 할 때 주의사항](https://stuffdrawers.tistory.com/16)
[정규식으로 (한글) 문자만 골라내기 | ha-ah](http://haah.kr/2017/08/23/alphabetic-letter-validation/)
HEX 면 아래와 같고 55,197-12,593 의 값이 찾아진다 너무 많다

ㄱ : %u3131
힣 : %uD7A3
㉡ : %u3261

### 쓴다면 아래 처럼 하라고 한다

```
 [ㄱ-ㅎㅏ-ㅣ가-힣]
```

ㄱ - ㅎ matches a single character in the range between ㄱ (index 12593) and ㅎ (index 12622) (case sensitive)
ㅏ - ㅣ matches a single character in the range between ㅏ (index 12623) and ㅣ (index 12643) (case sensitive)
가 - 힣 matches a single character in the range between 가 (index 44032) and 힣 (index 55203) (case sensitive)
